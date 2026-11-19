import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  CameraPreset,
  EngineCallbacks,
  GeofenceStatus,
  LightingMode,
  NfcState,
  ScenarioId,
} from '../types/simulation';
import {
  createBuildingWindowTexture,
  createBusDestinationTexture,
  createBusSideGraphicTexture,
  createCharacterBadgeTexture,
  createNfcPadTexture,
  createStopSignTexture,
} from './textures';

export const STOP_POSITIONS = {
  stop1: { x: -13.5, busX: -15.75, label: 'Parada 1 · Escuela / Residencial', geofence: 'SEGURA' as GeofenceStatus },
  stop2: { x: 0, busX: -2.25, label: 'Parada 2 · Parque Industrial / Destino', geofence: 'SEGURA' as GeofenceStatus },
  stop3: { x: 13.5, busX: 11.25, label: 'Parada 3 · Zona Aislada (No Autorizada)', geofence: 'RIESGO' as GeofenceStatus },
};

interface ShockwaveRing {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  active: boolean;
  age: number;
  maxAge: number;
  maxScale: number;
  subtle: boolean;
}

interface GeofenceRig {
  group: THREE.Group;
  ringMesh: THREE.Mesh;
  ringMat: THREE.MeshBasicMaterial;
  discMesh: THREE.Mesh;
  discMat: THREE.MeshBasicMaterial;
  outerRing: THREE.Mesh;
  outerMat: THREE.MeshBasicMaterial;
  beamMesh: THREE.Mesh;
  beamMat: THREE.MeshBasicMaterial;
  baseColor: THREE.Color;
  activeColor: THREE.Color;
  pulseBoost: number;
  flashingRed: boolean;
}

interface StreetLightRig {
  bulbMat: THREE.MeshStandardMaterial;
  pointLight: THREE.PointLight;
  coneMat: THREE.MeshBasicMaterial;
}

interface PassengerRig {
  group: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  nfcCard: THREE.Mesh;
  nfcCardMat: THREE.MeshStandardMaterial;
  badge: THREE.Sprite;
  walkPhase: number;
  isWalking: boolean;
  armRaise: number; // 0..1
  targetArmRaise: number;
}

export class DigitalTwinEngine {
  private container: HTMLElement;
  private callbacks: EngineCallbacks;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private resizeObserver: ResizeObserver;
  private clock = new THREE.Clock();
  private rafId = 0;
  private disposed = false;

  // Lighting & Atmosphere
  private lightingMode: LightingMode = 'night';
  private nightFactor = 1; // 0 = day, 1 = night
  private targetNightFactor = 1;
  private hemiLight!: THREE.HemisphereLight;
  private sunLight!: THREE.DirectionalLight;
  private fillLight!: THREE.DirectionalLight;
  private skyDayColor = new THREE.Color('#6FA8DC');
  private skyNightColor = new THREE.Color('#040711');
  private fogDayColor = new THREE.Color('#8CC0EC');
  private fogNightColor = new THREE.Color('#060A15');
  private streetLights: StreetLightRig[] = [];
  private buildingWindowMats: THREE.MeshStandardMaterial[] = [];
  private shelterLightMats: THREE.MeshStandardMaterial[] = [];
  private starsPoints!: THREE.Points;

  // Geofences
  private geofences!: {
    stop1: GeofenceRig;
    stop2: GeofenceRig;
    stop3: GeofenceRig;
  };

  // Bus
  private busGroup!: THREE.Group;
  private busX = STOP_POSITIONS.stop1.busX;
  private lastBusX = STOP_POSITIONS.stop1.busX;
  private wheels: THREE.Group[] = [];
  private doorLeft!: THREE.Group;
  private doorRight!: THREE.Group;
  private doorOpenProgress = 0;
  private targetDoorOpen = 0;
  private headlightCones: THREE.MeshBasicMaterial[] = [];
  private headlightSpots: THREE.SpotLight[] = [];
  private headlightBulbMats: THREE.MeshStandardMaterial[] = [];
  private brakeLightMats: THREE.MeshStandardMaterial[] = [];
  private cabinLight!: THREE.PointLight;
  private isBraking = true;

  // 3D NFC Reader
  private nfcHaloMat!: THREE.MeshStandardMaterial;
  private nfcHaloLight!: THREE.PointLight;
  private nfcReaderWorldAnchor = new THREE.Object3D();
  private nfcState: NfcState = 'idle';
  private shockwaves: ShockwaveRing[] = [];

  // Characters
  private sofia!: PassengerRig;
  private tutor!: PassengerRig;
  private mateo!: PassengerRig;
  private ana!: PassengerRig;

  // Camera System
  private cameraPreset: CameraPreset = 'panoramic';
  private cameraTransitioning = false;
  private desiredCamPos = new THREE.Vector3(0, 21.5, 40.5);
  private desiredCamTarget = new THREE.Vector3(0, 1.2, 1.4);
  private followOffset = new THREE.Vector3(-8.5, 8.0, 14.0);

  // Scenario Cancellation Token
  private runToken = 0;
  private elapsedTotal = 0;

  constructor(container: HTMLElement, callbacks: EngineCallbacks, initialMode: LightingMode = 'night') {
    this.container = container;
    this.callbacks = callbacks;
    this.lightingMode = initialMode;
    this.nightFactor = initialMode === 'night' ? 1 : 0;
    this.targetNightFactor = this.nightFactor;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = this.nightFactor > 0.5 ? this.skyNightColor.clone() : this.skyDayColor.clone();
    this.scene.fog = new THREE.FogExp2(
      this.nightFactor > 0.5 ? this.fogNightColor.getHex() : this.fogDayColor.getHex(),
      0.0125
    );

    // Camera
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    this.camera = new THREE.PerspectiveCamera(46, width / height, 0.2, 200);
    this.camera.position.set(0, 21.5, 40.5);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    container.innerHTML = '';
    container.appendChild(this.renderer.domElement);

    // OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.065;
    this.controls.maxPolarAngle = Math.PI * 0.475;
    this.controls.minPolarAngle = 0.15;
    this.controls.minDistance = 4.2;
    this.controls.maxDistance = 52;
    this.controls.target.set(0, 1.5, 1.5);
    this.controls.addEventListener('start', () => {
      // User manually grabbed camera: release preset lerp smoothly
      this.cameraTransitioning = false;
      if (this.cameraPreset === 'follow') {
        // Keep following target relative offset updated after user drags
      }
    });

    // Build Procedural World
    this.buildLightsAndSky();
    this.buildUrbanEnvironment();
    this.buildStopsAndGeofences();
    this.buildBusAndNfcReader();
    this.buildCharacters();
    this.applyLightingBlend(this.nightFactor);
    this.positionInitialEntities();

    // Responsive ResizeObserver
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(container);

    // Start animation loop
    this.animate();
  }

  private handleResize() {
    if (this.disposed) return;
    const width = Math.max(this.container.clientWidth, 1);
    const height = Math.max(this.container.clientHeight, 1);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  // =========================================================================
  // LIGHTING & ATMOSPHERE
  // =========================================================================
  private buildLightsAndSky() {
    this.hemiLight = new THREE.HemisphereLight('#94B8E8', '#141B29', 0.85);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight('#FFFFFF', 1.55);
    this.sunLight.position.set(22, 32, 20);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 5;
    this.sunLight.shadow.camera.far = 90;
    const d = 34;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);

    this.fillLight = new THREE.DirectionalLight('#60A5FA', 0.35);
    this.fillLight.position.set(-25, 16, -18);
    this.scene.add(this.fillLight);

    // Subtle procedural stars visible in Night Shift mode
    const starCount = 320;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 55 + Math.random() * 45;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = 18 + Math.random() * 42;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMat = new THREE.PointsMaterial({
      color: '#CBD5E1',
      size: 0.32,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });
    this.starsPoints = new THREE.Points(starsGeo, starsMat);
    this.scene.add(this.starsPoints);
  }

  // =========================================================================
  // URBAN ENVIRONMENT (100% PROCEDURAL)
  // =========================================================================
  private buildUrbanEnvironment() {
    // Base urban ground plane
    const groundGeo = new THREE.PlaneGeometry(180, 140);
    const groundMat = new THREE.MeshStandardMaterial({
      color: '#1E293B',
      roughness: 0.92,
      metalness: 0.04,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Subtle architectural grid lines far out for digital twin feel
    const grid = new THREE.GridHelper(140, 56, '#334155', '#1E293B');
    grid.position.y = -0.01;
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.22;
    this.scene.add(grid);

    // Main Avenue Asphalt (z = -4.2 to +2.8 -> width 7.0, center z = -0.7)
    const roadGeo = new THREE.BoxGeometry(92, 0.06, 7.0);
    const roadMat = new THREE.MeshStandardMaterial({
      color: '#2B3444',
      roughness: 0.84,
      metalness: 0.06,
    });
    const road = new THREE.Mesh(roadGeo, roadMat);
    road.position.set(0, -0.02, -0.7);
    road.receiveShadow = true;
    this.scene.add(road);

    // Road edge solid white lines
    const edgeLineMat = new THREE.MeshBasicMaterial({ color: '#CBD5E1', transparent: true, opacity: 0.65 });
    [-3.95, 2.55].forEach((zPos) => {
      const line = new THREE.Mesh(new THREE.PlaneGeometry(90, 0.1), edgeLineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.016, zPos);
      this.scene.add(line);
    });

    // Center dashed lane divider (amber/yellow)
    const dashMat = new THREE.MeshBasicMaterial({ color: '#F59E0B', transparent: true, opacity: 0.88 });
    for (let x = -42; x <= 42; x += 3.6) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.13), dashMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(x, 0.016, -0.7);
      this.scene.add(dash);
    }

    // Crosswalks (Pasos peatonales) cleanly between Parada 1-2 and Parada 2-3
    const zebraMat = new THREE.MeshBasicMaterial({ color: '#F1F5F9', transparent: true, opacity: 0.9 });
    [-7.4, 6.6].forEach((crossX) => {
      for (let z = -3.4; z <= 2.0; z += 0.72) {
        const bar = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.36), zebraMat);
        bar.rotation.x = -Math.PI / 2;
        bar.position.set(crossX, 0.018, z);
        this.scene.add(bar);
      }
    });

    // Foreground Sidewalk (Banqueta principal donde están las paradas: z = +2.8 to +8.4)
    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: '#475569',
      roughness: 0.82,
      metalness: 0.05,
    });
    const fgSidewalk = new THREE.Mesh(new THREE.BoxGeometry(92, 0.22, 5.6), sidewalkMat);
    fgSidewalk.position.set(0, 0.11, 5.6);
    fgSidewalk.receiveShadow = true;
    this.scene.add(fgSidewalk);

    // Dark isolated rough patch over Parada 3 sidewalk (visual contrast!)
    const isolatedPatchMat = new THREE.MeshStandardMaterial({
      color: '#1E242F',
      roughness: 0.96,
      metalness: 0.02,
    });
    const isolatedPatch = new THREE.Mesh(new THREE.BoxGeometry(24, 0.226, 5.65), isolatedPatchMat);
    isolatedPatch.position.set(18, 0.11, 5.6);
    isolatedPatch.receiveShadow = true;
    this.scene.add(isolatedPatch);

    // Curb accent edge
    const curbMat = new THREE.MeshStandardMaterial({ color: '#64748B', roughness: 0.72 });
    const fgCurb = new THREE.Mesh(new THREE.BoxGeometry(92, 0.23, 0.2), curbMat);
    fgCurb.position.set(0, 0.115, 2.86);
    fgCurb.receiveShadow = true;
    this.scene.add(fgCurb);

    // Background Sidewalk (z = -4.2 to -7.6)
    const bgSidewalk = new THREE.Mesh(new THREE.BoxGeometry(92, 0.22, 3.4), sidewalkMat);
    bgSidewalk.position.set(0, 0.11, -5.9);
    bgSidewalk.receiveShadow = true;
    this.scene.add(bgSidewalk);

    // Stylized Urban Backdrop Buildings (School near Stop 1, Industrial Park near Stop 2, Dark Vacant Lot near Stop 3)
    this.buildUrbanBackdrop();

    // Streetlights positioned cleanly across the avenue (z = -5.0) illuminating Stops 1 & 2
    // Zero foreground poles blocking camera/NFC zoom sightlines! Stop 3 stays dark & isolated!
    const litPositions: Array<[number, number, number]> = [
      [-18.5, -5.0, 1],
      [-11.5, -5.0, 1],
      [-4.2, -5.0, 1],
      [3.5, -5.0, 1],
      [-17.8, 7.6, -1],
      [-6.8, 7.6, -1],
    ];
    litPositions.forEach(([x, z, armDirZ]) => this.createStreetLight(x, z, armDirZ));

    // Broken dark unlit pole at Parada 3 (Zona Aislada) to visually emphasize lack of lighting
    this.createBrokenDarkPole(16.8, -5.0);

    // Stylized minimalist urban trees along authorized corridor (Stops 1 & 2)
    [-21, -8.5, 5.5].forEach((tx) => this.createStylizedTree(tx, -6.5));
    [-19.5, -7.8].forEach((tx) => this.createStylizedTree(tx, 7.6));
  }

  private buildUrbanBackdrop() {
    // --- Zone 1 (-24 to -8): School / Residential Campus ---
    const schoolMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.68 });
    const warmWindowTex = createBuildingWindowTexture(5, 4, true);
    const warmWinMat = new THREE.MeshStandardMaterial({
      color: '#3B4C66',
      map: warmWindowTex,
      emissive: new THREE.Color('#F59E0B'),
      emissiveMap: warmWindowTex,
      emissiveIntensity: 0.7,
      roughness: 0.5,
    });
    this.buildingWindowMats.push(warmWinMat);

    // School Main Wing
    const schoolMain = new THREE.Mesh(new THREE.BoxGeometry(10.5, 6.0, 5.2), [
      schoolMat,
      schoolMat,
      schoolMat,
      schoolMat,
      warmWinMat,
      schoolMat,
    ]);
    schoolMain.position.set(-14.5, 3.0, -11.4);
    schoolMain.castShadow = true;
    schoolMain.receiveShadow = true;
    this.scene.add(schoolMain);

    // School Emerald Roof Accent
    const schoolAccent = new THREE.Mesh(
      new THREE.BoxGeometry(10.7, 0.28, 5.4),
      new THREE.MeshStandardMaterial({
        color: '#10B981',
        emissive: '#059669',
        emissiveIntensity: 0.45,
      })
    );
    schoolAccent.position.set(-14.5, 6.12, -11.4);
    this.scene.add(schoolAccent);

    // Residential Tower beside school
    const resTower = new THREE.Mesh(new THREE.BoxGeometry(5.8, 9.8, 5.2), [
      schoolMat,
      schoolMat,
      schoolMat,
      schoolMat,
      warmWinMat,
      schoolMat,
    ]);
    resTower.position.set(-23.5, 4.9, -12.6);
    resTower.castShadow = true;
    this.scene.add(resTower);

    // --- Zone 2 (-6 to +6): Industrial Park / Modern Workplace ---
    const coolWindowTex = createBuildingWindowTexture(6, 7, false);
    const coolWinMat = new THREE.MeshStandardMaterial({
      color: '#32445E',
      map: coolWindowTex,
      emissive: new THREE.Color('#38BDF8'),
      emissiveMap: coolWindowTex,
      emissiveIntensity: 0.65,
      roughness: 0.45,
    });
    this.buildingWindowMats.push(coolWinMat);

    const corpMat = new THREE.MeshStandardMaterial({ color: '#2B3B54', roughness: 0.6 });
    const tower1 = new THREE.Mesh(new THREE.BoxGeometry(7.2, 10.6, 5.6), [
      corpMat,
      corpMat,
      corpMat,
      corpMat,
      coolWinMat,
      corpMat,
    ]);
    tower1.position.set(-2.2, 5.3, -12.2);
    tower1.castShadow = true;
    this.scene.add(tower1);

    const tower1Accent = new THREE.Mesh(
      new THREE.BoxGeometry(7.4, 0.25, 5.8),
      new THREE.MeshStandardMaterial({
        color: '#38BDF8',
        emissive: '#0284C7',
        emissiveIntensity: 0.55,
      })
    );
    tower1Accent.position.set(-2.2, 10.7, -12.2);
    this.scene.add(tower1Accent);

    const factoryHall = new THREE.Mesh(new THREE.BoxGeometry(6.8, 5.6, 5.8), [
      corpMat,
      corpMat,
      corpMat,
      corpMat,
      coolWinMat,
      corpMat,
    ]);
    factoryHall.position.set(5.4, 2.8, -12.4);
    factoryHall.castShadow = true;
    this.scene.add(factoryHall);

    // --- Zone 3 (+10 to +28): Dark Isolated Vacant Area (NO illuminated buildings!) ---
    const fencePostMat = new THREE.MeshStandardMaterial({ color: '#28303D', roughness: 0.9 });
    const fenceMeshMat = new THREE.MeshBasicMaterial({
      color: '#475569',
      wireframe: true,
      transparent: true,
      opacity: 0.42,
    });
    for (let x = 9.5; x <= 26.5; x += 3.4) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 2.4, 6), fencePostMat);
      post.position.set(x, 1.2, -7.8);
      this.scene.add(post);
    }
    const fencePanel = new THREE.Mesh(new THREE.PlaneGeometry(17, 2.1, 14, 3), fenceMeshMat);
    fencePanel.position.set(18, 1.15, -7.8);
    this.scene.add(fencePanel);

    // Dark abandoned warehouse silhouette far back (completely unlit)
    const darkLotMat = new THREE.MeshStandardMaterial({ color: '#141923', roughness: 0.95 });
    const darkSilhouette = new THREE.Mesh(new THREE.BoxGeometry(10, 3.8, 5), darkLotMat);
    darkSilhouette.position.set(17, 1.9, -15.5);
    this.scene.add(darkSilhouette);
  }

  private createStreetLight(x: number, z: number, armDirZ: number) {
    const group = new THREE.Group();
    group.position.set(x, 0.22, z);

    const poleMat = new THREE.MeshStandardMaterial({
      color: '#334155',
      roughness: 0.5,
      metalness: 0.7,
    });

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 5.6, 8), poleMat);
    pole.position.y = 2.8;
    pole.castShadow = true;
    group.add(pole);

    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 1.7), poleMat);
    arm.position.set(0, 5.55, armDirZ * 0.8);
    group.add(arm);

    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.14, 0.75), poleMat);
    housing.position.set(0, 5.5, armDirZ * 1.45);
    group.add(housing);

    const bulbMat = new THREE.MeshStandardMaterial({
      color: '#FFFBEB',
      emissive: new THREE.Color('#FDE68A'),
      emissiveIntensity: 2.0,
    });
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.06, 0.62), bulbMat);
    bulb.position.set(0, 5.42, armDirZ * 1.45);
    group.add(bulb);

    const pointLight = new THREE.PointLight('#FDE68A', 7.5, 14, 1.6);
    pointLight.position.set(0, 5.1, armDirZ * 1.45);
    group.add(pointLight);

    // Volumetric light cone for dramatic Night Shift atmosphere
    const coneMat = new THREE.MeshBasicMaterial({
      color: '#FEF3C7',
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const cone = new THREE.Mesh(new THREE.ConeGeometry(2.8, 5.3, 18, 1, true), coneMat);
    cone.position.set(0, 2.72, armDirZ * 1.45);
    group.add(cone);

    this.streetLights.push({ bulbMat, pointLight, coneMat });
    this.scene.add(group);
  }

  private createBrokenDarkPole(x: number, z: number) {
    const group = new THREE.Group();
    group.position.set(x, 0.22, z);
    group.rotation.z = 0.12; // Slightly bent/neglected

    const rustyMat = new THREE.MeshStandardMaterial({
      color: '#1F242D',
      roughness: 0.92,
      metalness: 0.35,
    });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 5.2, 8), rustyMat);
    pole.position.y = 2.6;
    group.add(pole);

    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.09, 1.3), rustyMat);
    arm.position.set(0, 5.1, -0.6);
    arm.rotation.x = 0.25;
    group.add(arm);

    const deadHead = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.14, 0.6), rustyMat);
    deadHead.position.set(0, 4.9, -1.1);
    group.add(deadHead);

    this.scene.add(group);
  }

  private createStylizedTree(x: number, z: number) {
    const group = new THREE.Group();
    group.position.set(x, 0.22, z);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.16, 1.3, 6),
      new THREE.MeshStandardMaterial({ color: '#3F2E21', roughness: 0.9 })
    );
    trunk.position.y = 0.65;
    group.add(trunk);

    const foliageMat = new THREE.MeshStandardMaterial({ color: '#14532D', roughness: 0.8 });
    const crown1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.85, 0), foliageMat);
    crown1.position.y = 1.95;
    crown1.castShadow = true;
    group.add(crown1);

    const crown2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.58, 0), foliageMat);
    crown2.position.set(0.35, 2.55, 0.15);
    group.add(crown2);

    this.scene.add(group);
  }

  // =========================================================================
  // 3 STOPS, 3D SIGNS & LUMINOUS GEOFENCES
  // =========================================================================
  private buildStopsAndGeofences() {
    // Stop 1 (Green): Escuela / Residencial
    const g1 = this.createGeofence(STOP_POSITIONS.stop1.x, 3.85, 2.05, '#10B981');
    this.createModernShelter(STOP_POSITIONS.stop1.x - 3.05, 5.55, '#10B981');
    this.createStopSign(STOP_POSITIONS.stop1.x + 2.45, 5.1, {
      code: 'PARADA 1 · AUTORIZADA',
      title: 'Escuela / Residencial',
      subtitle: 'GEOCERCA VERDE · ABORDAJE NFC',
      accent: '#10B981',
    });

    // Stop 2 (Blue): Parque Industrial / Destino
    const g2 = this.createGeofence(STOP_POSITIONS.stop2.x, 3.85, 2.05, '#38BDF8');
    this.createModernShelter(STOP_POSITIONS.stop2.x - 3.05, 5.55, '#38BDF8');
    this.createStopSign(STOP_POSITIONS.stop2.x + 2.45, 5.1, {
      code: 'PARADA 2 · AUTORIZADA',
      title: 'Parque Industrial / Destino',
      subtitle: 'GEOCERCA AZUL · DESCENSO + TUTOR',
      accent: '#38BDF8',
    });

    // Stop 3 (Red): Zona Aislada (NO shelter, dark isolated hazard zone!)
    const g3 = this.createGeofence(STOP_POSITIONS.stop3.x, 3.85, 2.05, '#EF4444');
    this.createStopSign(STOP_POSITIONS.stop3.x + 2.35, 5.1, {
      code: 'PARADA 3 · NO AUTORIZADA',
      title: 'Zona Aislada',
      subtitle: 'ZONA DE RIESGO · SIN ALUMBRADO',
      accent: '#EF4444',
      isDanger: true,
    });

    // Low concrete hazard barrier at Parada 3
    const barrierMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.88 });
    const barrier = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.72, 0.45), barrierMat);
    barrier.position.set(STOP_POSITIONS.stop3.x - 2.95, 0.58, 5.6);
    this.scene.add(barrier);

    this.geofences = { stop1: g1, stop2: g2, stop3: g3 };
  }

  private createGeofence(x: number, z: number, radius: number, hexColor: string): GeofenceRig {
    const group = new THREE.Group();
    group.position.set(x, 0.245, z);

    const baseColor = new THREE.Color(hexColor);
    const activeColor = baseColor.clone();

    // Inner translucent glowing disc
    const discMat = new THREE.MeshBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const discMesh = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.94, 48), discMat);
    discMesh.rotation.x = -Math.PI / 2;
    group.add(discMesh);

    // Main bright luminous ring
    const ringMat = new THREE.MeshBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(new THREE.RingGeometry(radius * 0.88, radius, 48), ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.005;
    group.add(ringMesh);

    // Outer subtle orbiting segmented ring
    const outerMat = new THREE.MeshBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const outerRing = new THREE.Mesh(
      new THREE.RingGeometry(radius * 1.07, radius * 1.13, 32, 1, 0, Math.PI * 1.45),
      outerMat
    );
    outerRing.rotation.x = -Math.PI / 2;
    outerRing.position.y = 0.008;
    group.add(outerRing);

    // Subtle vertical luminous perimeter curtain
    const beamMat = new THREE.MeshBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: 0.09,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const beamMesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 0.85, 40, 1, true), beamMat);
    beamMesh.position.y = 0.425;
    group.add(beamMesh);

    this.scene.add(group);

    return {
      group,
      ringMesh,
      ringMat,
      discMesh,
      discMat,
      outerRing,
      outerMat,
      beamMesh,
      beamMat,
      baseColor,
      activeColor,
      pulseBoost: 0,
      flashingRed: false,
    };
  }

  private createModernShelter(x: number, z: number, accentHex: string) {
    const group = new THREE.Group();
    group.position.set(x, 0.22, z);

    const frameMat = new THREE.MeshStandardMaterial({
      color: '#1E293B',
      roughness: 0.4,
      metalness: 0.75,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: '#93C5FD',
      transparent: true,
      opacity: 0.18,
      roughness: 0.1,
      metalness: 0.1,
    });

    // Two sleek vertical rear pillars
    [-1.4, 1.4].forEach((px) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.6, 0.12), frameMat);
      pillar.position.set(px, 1.3, 0.65);
      pillar.castShadow = true;
      group.add(pillar);
    });

    // Back glass panel
    const backGlass = new THREE.Mesh(new THREE.BoxGeometry(2.7, 2.2, 0.05), glassMat);
    backGlass.position.set(0, 1.25, 0.65);
    group.add(backGlass);

    // Cantilevered roof canopy
    const roof = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.12, 1.55), frameMat);
    roof.position.set(0, 2.6, 0.08);
    roof.castShadow = true;
    group.add(roof);

    // Glowing roof LED trim
    const trimMat = new THREE.MeshStandardMaterial({
      color: accentHex,
      emissive: new THREE.Color(accentHex),
      emissiveIntensity: 1.4,
    });
    this.shelterLightMats.push(trimMat);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(3.22, 0.07, 0.08), trimMat);
    trim.position.set(0, 2.6, -0.68);
    group.add(trim);

    // Bench
    const bench = new THREE.Mesh(
      new THREE.BoxGeometry(2.1, 0.1, 0.48),
      new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.65 })
    );
    bench.position.set(0, 0.56, 0.25);
    group.add(bench);

    [-0.85, 0.85].forEach((bx) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 0.4), frameMat);
      leg.position.set(bx, 0.28, 0.25);
      group.add(leg);
    });

    this.scene.add(group);
  }

  private createStopSign(
    x: number,
    z: number,
    opts: { code: string; title: string; subtitle: string; accent: string; isDanger?: boolean }
  ) {
    const group = new THREE.Group();
    group.position.set(x, 0.22, z);
    group.rotation.y = -0.18; // Angled slightly toward camera

    const poleMat = new THREE.MeshStandardMaterial({
      color: '#334155',
      roughness: 0.45,
      metalness: 0.75,
    });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 3.6, 8), poleMat);
    pole.position.y = 1.8;
    pole.castShadow = true;
    group.add(pole);

    const signTex = createStopSignTexture(opts);
    const signBoxMat = new THREE.MeshStandardMaterial({ color: '#0F172A', roughness: 0.5 });
    const signFaceMat = new THREE.MeshStandardMaterial({
      map: signTex,
      emissive: new THREE.Color('#FFFFFF'),
      emissiveMap: signTex,
      emissiveIntensity: 0.58,
      roughness: 0.35,
    });

    const board = new THREE.Mesh(new THREE.BoxGeometry(2.95, 1.38, 0.12), [
      signBoxMat,
      signBoxMat,
      signBoxMat,
      signBoxMat,
      signFaceMat,
      signFaceMat,
    ]);
    board.position.set(0, 3.75, 0);
    board.castShadow = true;
    group.add(board);

    this.scene.add(group);
  }

  // =========================================================================
  // 3D ANIMATED BUS & VISIBLE 3D NFC READER
  // =========================================================================
  private buildBusAndNfcReader() {
    this.busGroup = new THREE.Group();
    this.busGroup.position.set(this.busX, 0, 1.05);

    const chassisMat = new THREE.MeshStandardMaterial({
      color: '#151F32',
      roughness: 0.45,
      metalness: 0.5,
    });
    const bodyUpperMat = new THREE.MeshStandardMaterial({
      color: '#E2E8F0',
      roughness: 0.3,
      metalness: 0.25,
    });
    const sideDecalTex = createBusSideGraphicTexture();
    const sideDecalMat = new THREE.MeshStandardMaterial({
      map: sideDecalTex,
      roughness: 0.38,
      metalness: 0.22,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: '#0B1628',
      transparent: true,
      opacity: 0.54,
      roughness: 0.12,
      metalness: 0.2,
    });
    const roofAccentMat = new THREE.MeshStandardMaterial({
      color: '#10B981',
      emissive: '#059669',
      emissiveIntensity: 0.45,
    });

    // Lower chassis skirt (split neatly to leave open doorway bay at x = +2.25 on +Z side)
    const floorDeck = new THREE.Mesh(new THREE.BoxGeometry(8.8, 0.24, 2.42), chassisMat);
    floorDeck.position.set(0, 0.72, 0);
    floorDeck.castShadow = true;
    this.busGroup.add(floorDeck);

    // Rear lower body (-4.4 to +1.55)
    const lowerRear = new THREE.Mesh(new THREE.BoxGeometry(5.95, 0.88, 2.44), [
      chassisMat,
      chassisMat,
      chassisMat,
      chassisMat,
      sideDecalMat,
      sideDecalMat,
    ]);
    lowerRear.position.set(-1.425, 1.24, 0);
    lowerRear.castShadow = true;
    this.busGroup.add(lowerRear);

    // Front lower nose (+2.95 to +4.4)
    const lowerFront = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.88, 2.44), chassisMat);
    lowerFront.position.set(3.675, 1.24, 0);
    lowerFront.castShadow = true;
    this.busGroup.add(lowerFront);

    // Left (-Z) continuous lower panel across doorway X span so bus isn't hollow on back side
    const leftDoorBackWall = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.88, 0.14), chassisMat);
    leftDoorBackWall.position.set(2.25, 1.24, -1.15);
    this.busGroup.add(leftDoorBackWall);

    // Interior cabin floor & seats (visible through semi-transparent windows!)
    const seatMat = new THREE.MeshStandardMaterial({ color: '#1E3A5F', roughness: 0.75 });
    for (let sx = -3.4; sx <= 0.8; sx += 1.05) {
      [-0.72, 0.72].forEach((sz) => {
        const seatBase = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.34, 0.56), seatMat);
        seatBase.position.set(sx, 1.02, sz);
        this.busGroup.add(seatBase);

        const seatBack = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.72, 0.54), seatMat);
        seatBack.position.set(sx - 0.22, 1.44, sz);
        this.busGroup.add(seatBack);
      });
    }

    // Driver seat & dashboard console
    const dash = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.75, 2.1), chassisMat);
    dash.position.set(3.95, 1.35, 0);
    this.busGroup.add(dash);

    // Semi-transparent side windows (camera-facing +Z side behind doorway & -Z side full)
    const rightWindowRear = new THREE.Mesh(new THREE.BoxGeometry(5.85, 1.15, 0.06), glassMat);
    rightWindowRear.position.set(-1.42, 2.25, 1.2);
    this.busGroup.add(rightWindowRear);

    const rightWindowFront = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.15, 0.06), glassMat);
    rightWindowFront.position.set(3.65, 2.25, 1.2);
    this.busGroup.add(rightWindowFront);

    const leftWindowFull = new THREE.Mesh(new THREE.BoxGeometry(8.5, 1.15, 0.06), glassMat);
    leftWindowFull.position.set(0, 2.25, -1.2);
    this.busGroup.add(leftWindowFull);

    // Front panoramic windshield (+X) & Rear window (-X)
    const frontWindshield = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.28, 2.22), glassMat);
    frontWindshield.position.set(4.38, 2.22, 0);
    this.busGroup.add(frontWindshield);

    const rearPanel = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.9, 2.42), bodyUpperMat);
    rearPanel.position.set(-4.35, 2.05, 0);
    this.busGroup.add(rearPanel);

    // Window structural pillars
    [-4.3, -2.5, -0.7, 1.5, 3.0, 4.32].forEach((px) => {
      [-1.18, 1.18].forEach((pz) => {
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.22, 0.12), chassisMat);
        pillar.position.set(px, 2.25, pz);
        this.busGroup.add(pillar);
      });
    });

    // Sleek Bus Roof & HVAC Pod
    const roof = new THREE.Mesh(new THREE.BoxGeometry(8.86, 0.34, 2.48), bodyUpperMat);
    roof.position.set(0, 2.98, 0);
    roof.castShadow = true;
    this.busGroup.add(roof);

    const roofStripe = new THREE.Mesh(new THREE.BoxGeometry(8.9, 0.09, 2.52), roofAccentMat);
    roofStripe.position.set(0, 2.86, 0);
    this.busGroup.add(roofStripe);

    const hvacPod = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.28, 1.5), chassisMat);
    hvacPod.position.set(-0.6, 3.28, 0);
    this.busGroup.add(hvacPod);

    // Front LED Destination Board ("RUTA PULSO · U-04")
    const destTex = createBusDestinationTexture('RUTA PULSO · U-04');
    const destMat = new THREE.MeshBasicMaterial({ map: destTex });
    const destBoard = new THREE.Mesh(new THREE.PlaneGeometry(1.75, 0.3), destMat);
    destBoard.rotation.y = Math.PI / 2;
    destBoard.position.set(4.44, 2.94, 0);
    this.busGroup.add(destBoard);

    // Warm calm interior cabin light (NEVER flashes sirens!)
    this.cabinLight = new THREE.PointLight('#E2E8F0', 2.4, 7, 1.5);
    this.cabinLight.position.set(0.6, 2.65, 0);
    this.busGroup.add(this.cabinLight);

    // Animated Bi-Parting Side Doors (+Z doorway at x = +2.25, span 1.4m)
    const doorFrameMat = new THREE.MeshStandardMaterial({ color: '#0F172A', roughness: 0.4, metalness: 0.6 });
    const doorGlassMat = new THREE.MeshPhysicalMaterial({
      color: '#38BDF8',
      transparent: true,
      opacity: 0.34,
      roughness: 0.1,
    });

    const createDoorLeaf = () => {
      const leaf = new THREE.Group();
      const frameTop = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.1, 0.08), doorFrameMat);
      frameTop.position.y = 0.96;
      leaf.add(frameTop);
      const frameBot = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.25, 0.08), doorFrameMat);
      frameBot.position.y = -0.88;
      leaf.add(frameBot);
      const pane = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.65, 0.05), doorGlassMat);
      pane.position.y = 0.08;
      leaf.add(pane);
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 1.85, 0.09),
        new THREE.MeshStandardMaterial({ color: '#10B981', emissive: '#10B981', emissiveIntensity: 0.4 })
      );
      strip.position.x = 0;
      leaf.add(strip);
      return leaf;
    };

    this.doorLeft = createDoorLeaf();
    this.doorLeft.position.set(1.9, 1.78, 1.24);
    this.busGroup.add(this.doorLeft);

    this.doorRight = createDoorLeaf();
    this.doorRight.position.set(2.6, 1.78, 1.24);
    this.busGroup.add(this.doorRight);

    // Headlights (+X front) with Night Volumetric Cones & SpotLights
    [-0.86, 0.86].forEach((lz) => {
      const bulbMat = new THREE.MeshStandardMaterial({
        color: '#FFFFFF',
        emissive: new THREE.Color('#FEF9C3'),
        emissiveIntensity: 2.2,
      });
      this.headlightBulbMats.push(bulbMat);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.24, 0.38), bulbMat);
      lamp.position.set(4.42, 1.12, lz);
      this.busGroup.add(lamp);

      // Volumetric beam cone pointing along +X
      const coneMat = new THREE.MeshBasicMaterial({
        color: '#FEF9C3',
        transparent: true,
        opacity: 0.13,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      this.headlightCones.push(coneMat);
      const beam = new THREE.Mesh(new THREE.ConeGeometry(1.7, 9.2, 18, 1, true), coneMat);
      beam.rotation.z = Math.PI / 2;
      beam.position.set(9.05, 0.82, lz);
      this.busGroup.add(beam);

      const spot = new THREE.SpotLight('#FEF3C7', 16, 22, Math.PI * 0.24, 0.65, 1.4);
      spot.position.set(4.45, 1.12, lz);
      const target = new THREE.Object3D();
      target.position.set(13.5, 0.0, lz * 1.15);
      this.busGroup.add(target);
      spot.target = target;
      this.headlightSpots.push(spot);
      this.busGroup.add(spot);
    });

    // Rear Taillights / Brake Lights (-X rear)
    [-0.9, 0.9].forEach((lz) => {
      const tailMat = new THREE.MeshStandardMaterial({
        color: '#EF4444',
        emissive: new THREE.Color('#EF4444'),
        emissiveIntensity: 1.5,
      });
      this.brakeLightMats.push(tailMat);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.34, 0.34), tailMat);
      tail.position.set(-4.42, 1.18, lz);
      this.busGroup.add(tail);
    });

    // 4 Spinning Wheels with visible spokes
    const tireMat = new THREE.MeshStandardMaterial({ color: '#0F141D', roughness: 0.9 });
    const rimMat = new THREE.MeshStandardMaterial({ color: '#94A3B8', roughness: 0.35, metalness: 0.8 });
    const wheelCoords: Array<[number, number]> = [
      [-2.65, 1.24],
      [-2.65, -1.24],
      [2.85, 1.24],
      [2.85, -1.24],
    ];
    wheelCoords.forEach(([wx, wz]) => {
      const wGroup = new THREE.Group();
      wGroup.position.set(wx, 0.48, wz);

      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.32, 24), tireMat);
      tire.rotation.x = Math.PI / 2;
      tire.castShadow = true;
      wGroup.add(tire);

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.34, 16), rimMat);
      rim.rotation.x = Math.PI / 2;
      wGroup.add(rim);

      // Cross spokes so wheel rotation is visibly crisp!
      const spoke1 = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.06, 0.36), chassisMat);
      const spoke2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.48, 0.36), chassisMat);
      wGroup.add(spoke1, spoke2);

      this.wheels.push(wGroup);
      this.busGroup.add(wGroup);
    });

    // =========================================================================
    // PROMINENT VISIBLE 3D NFC READER AT BUS DOORWAY
    // =========================================================================
    const nfcGroup = new THREE.Group();
    nfcGroup.position.set(3.16, 1.52, 1.32);
    nfcGroup.rotation.y = 0.08;

    // Pedestal mount bracket
    const mount = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.56, 0.14),
      new THREE.MeshStandardMaterial({ color: '#0F172A', roughness: 0.35, metalness: 0.75 })
    );
    nfcGroup.add(mount);

    // NFC Pad Graphic Face
    const nfcPadTex = createNfcPadTexture();
    const padFace = new THREE.Mesh(
      new THREE.PlaneGeometry(0.36, 0.36),
      new THREE.MeshStandardMaterial({
        map: nfcPadTex,
        emissive: new THREE.Color('#38BDF8'),
        emissiveMap: nfcPadTex,
        emissiveIntensity: 0.5,
      })
    );
    padFace.position.z = 0.075;
    nfcGroup.add(padFace);

    // Dynamic 3D LED Halo Ring around NFC Reader
    this.nfcHaloMat = new THREE.MeshStandardMaterial({
      color: '#38BDF8',
      emissive: new THREE.Color('#38BDF8'),
      emissiveIntensity: 2.2,
      roughness: 0.2,
    });
    const haloRing = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.044, 14, 32), this.nfcHaloMat);
    haloRing.position.z = 0.08;
    nfcGroup.add(haloRing);

    // Dynamic PointLight on NFC Reader
    this.nfcHaloLight = new THREE.PointLight('#38BDF8', 2.8, 5.5, 1.6);
    this.nfcHaloLight.position.set(0, 0, 0.35);
    nfcGroup.add(this.nfcHaloLight);

    // Anchor for shockwaves & camera zoom
    this.nfcReaderWorldAnchor.position.set(0, 0, 0.12);
    nfcGroup.add(this.nfcReaderWorldAnchor);

    // Pooled 3D Expanding Shockwave Rings emitted on NFC tap
    for (let i = 0; i < 6; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: '#10B981',
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.24, 0.33, 36), mat);
      ring.position.set(0, 0, 0.14);
      ring.visible = false;
      nfcGroup.add(ring);
      this.shockwaves.push({
        mesh: ring,
        material: mat,
        active: false,
        age: 0,
        maxAge: 0.9,
        maxScale: 4.2,
        subtle: false,
      });
    }

    this.busGroup.add(nfcGroup);
    this.scene.add(this.busGroup);
  }

  // =========================================================================
  // STYLIZED 3D PASSENGERS & TUTOR
  // =========================================================================
  private buildCharacters() {
    this.sofia = this.createPassengerRig({
      bodyColor: '#10B981',
      headColor: '#FDE68A',
      accentColor: '#34D399',
      scale: 0.9,
      hasBackpack: true,
      badgeName: 'Sofía M.',
      badgeSub: 'Escolar · NFC',
    });

    this.tutor = this.createPassengerRig({
      bodyColor: '#38BDF8',
      headColor: '#E2E8F0',
      accentColor: '#38BDF8',
      scale: 1.06,
      hasBackpack: false,
      badgeName: 'Carlos M.',
      badgeSub: 'Tutor Verificado ✓',
    });

    this.mateo = this.createPassengerRig({
      bodyColor: '#F59E0B',
      headColor: '#FDE68A',
      accentColor: '#FBBF24',
      scale: 0.92,
      hasBackpack: true,
      badgeName: 'Mateo R.',
      badgeSub: 'Escolar · NFC',
    });

    this.ana = this.createPassengerRig({
      bodyColor: '#A855F7',
      headColor: '#F5D0FE',
      accentColor: '#D946EF',
      scale: 1.0,
      hasBackpack: false,
      badgeName: 'Ana L.',
      badgeSub: 'Turno Nocturno',
    });

    this.scene.add(this.sofia.group, this.tutor.group, this.mateo.group, this.ana.group);
  }

  private createPassengerRig(opts: {
    bodyColor: string;
    headColor: string;
    accentColor: string;
    scale: number;
    hasBackpack: boolean;
    badgeName: string;
    badgeSub: string;
  }): PassengerRig {
    const group = new THREE.Group();
    const s = opts.scale;

    const bodyMat = new THREE.MeshStandardMaterial({
      color: opts.bodyColor,
      roughness: 0.5,
      metalness: 0.15,
    });
    const limbMat = new THREE.MeshStandardMaterial({
      color: '#1E293B',
      roughness: 0.7,
    });
    const headMat = new THREE.MeshStandardMaterial({
      color: opts.headColor,
      roughness: 0.55,
    });

    // Subtle glowing ground identification ring
    const idRing = new THREE.Mesh(
      new THREE.RingGeometry(0.32, 0.4, 24),
      new THREE.MeshBasicMaterial({
        color: opts.accentColor,
        transparent: true,
        opacity: 0.78,
        side: THREE.DoubleSide,
      })
    );
    idRing.rotation.x = -Math.PI / 2;
    idRing.position.y = 0.025;
    group.add(idRing);

    // Legs (pivoted at hip y = 0.68 * s)
    const createLeg = (xOff: number) => {
      const pivot = new THREE.Group();
      pivot.position.set(xOff * s, 0.68 * s, 0);
      const legMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.075 * s, 0.065 * s, 0.66 * s, 10), limbMat);
      legMesh.position.y = -0.33 * s;
      legMesh.castShadow = true;
      pivot.add(legMesh);
      return pivot;
    };
    const leftLeg = createLeg(-0.11);
    const rightLeg = createLeg(0.11);
    group.add(leftLeg, rightLeg);

    // Torso
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.17 * s, 0.68 * s, 12), bodyMat);
    torso.position.y = 1.02 * s;
    torso.castShadow = true;
    group.add(torso);

    // Optional school backpack
    if (opts.hasBackpack) {
      const pack = new THREE.Mesh(
        new THREE.BoxGeometry(0.28 * s, 0.36 * s, 0.16 * s),
        new THREE.MeshStandardMaterial({ color: '#0F172A', roughness: 0.7 })
      );
      pack.position.set(0, 1.04 * s, -0.2 * s);
      group.add(pack);
    }

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.19 * s, 16, 16), headMat);
    head.position.y = 1.56 * s;
    head.castShadow = true;
    group.add(head);

    // Arms (pivoted at shoulder y = 1.28 * s)
    const createArm = (xOff: number, withNfcCard: boolean) => {
      const pivot = new THREE.Group();
      pivot.position.set(xOff * s, 1.28 * s, 0);
      const armMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06 * s, 0.055 * s, 0.56 * s, 10), bodyMat);
      armMesh.position.y = -0.26 * s;
      pivot.add(armMesh);

      let cardMesh!: THREE.Mesh;
      let cardMat!: THREE.MeshStandardMaterial;
      if (withNfcCard) {
        cardMat = new THREE.MeshStandardMaterial({
          color: '#FFFFFF',
          emissive: new THREE.Color(opts.accentColor),
          emissiveIntensity: 1.6,
        });
        cardMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14 * s, 0.09 * s, 0.02 * s), cardMat);
        cardMesh.position.set(0, -0.54 * s, 0.08 * s);
        cardMesh.visible = false;
        pivot.add(cardMesh);
      }
      return { pivot, cardMesh, cardMat };
    };

    const leftArmData = createArm(-0.26, false);
    const rightArmData = createArm(0.26, true);
    group.add(leftArmData.pivot, rightArmData.pivot);

    // Floating crisp ID sprite badge
    const badgeTex = createCharacterBadgeTexture(opts.badgeName, opts.badgeSub, opts.accentColor);
    const badgeMat = new THREE.SpriteMaterial({
      map: badgeTex,
      transparent: true,
      depthTest: false,
    });
    const badge = new THREE.Sprite(badgeMat);
    badge.scale.set(2.15, 0.65, 1);
    badge.position.set(0, (opts.scale > 1.0 ? 2.68 : 2.18) * s, 0);
    badge.renderOrder = 20;
    group.add(badge);

    return {
      group,
      leftLeg,
      rightLeg,
      leftArm: leftArmData.pivot,
      rightArm: rightArmData.pivot,
      nfcCard: rightArmData.cardMesh,
      nfcCardMat: rightArmData.cardMat,
      badge,
      walkPhase: 0,
      isWalking: false,
      armRaise: 0,
      targetArmRaise: 0,
    };
  }

  private positionInitialEntities() {
    // Bus parked cleanly at Parada 1
    this.busX = STOP_POSITIONS.stop1.busX;
    this.lastBusX = this.busX;
    this.busGroup.position.x = this.busX;
    this.targetDoorOpen = 0;
    this.doorOpenProgress = 0;
    this.isBraking = true;

    // Sofía waits at Parada 1 inside green geofence
    this.sofia.group.visible = true;
    this.sofia.badge.visible = true;
    this.sofia.group.position.set(STOP_POSITIONS.stop1.x + 0.35, 0.22, 3.95);
    this.sofia.group.rotation.y = Math.PI; // Facing bus (-Z)
    this.sofia.isWalking = false;
    this.sofia.targetArmRaise = 0;
    this.sofia.nfcCard.visible = false;

    // Carlos (Tutor Verificado) waits at Parada 2 inside blue geofence
    this.tutor.group.visible = true;
    this.tutor.badge.visible = true;
    this.tutor.group.position.set(STOP_POSITIONS.stop2.x + 1.0, 0.22, 4.1);
    this.tutor.group.rotation.y = Math.PI;
    this.tutor.isWalking = false;
    this.tutor.targetArmRaise = 0;
    this.tutor.nfcCard.visible = false;

    // Mateo & Ana start aboard (seated inside bus, hidden from sidewalk until their scenarios)
    this.mateo.group.visible = false;
    this.mateo.isWalking = false;
    this.mateo.targetArmRaise = 0;
    this.mateo.nfcCard.visible = false;

    this.ana.group.visible = false;
    this.ana.isWalking = false;
    this.ana.targetArmRaise = 0;
    this.ana.nfcCard.visible = false;

    // Reset Geofence visuals
    this.resetGeofences();
    this.setNfcState('idle', 'En espera · Lector NFC activo');
  }

  private resetGeofences() {
    this.geofences.stop1.activeColor.copy(this.geofences.stop1.baseColor);
    this.geofences.stop1.pulseBoost = 0;
    this.geofences.stop1.flashingRed = false;

    this.geofences.stop2.activeColor.copy(this.geofences.stop2.baseColor);
    this.geofences.stop2.pulseBoost = 0;
    this.geofences.stop2.flashingRed = false;

    this.geofences.stop3.activeColor.copy(this.geofences.stop3.baseColor);
    this.geofences.stop3.pulseBoost = 0;
    this.geofences.stop3.flashingRed = false;
  }

  // =========================================================================
  // PUBLIC CONTROLS (LIGHTING, CAMERA, SCENARIOS, RESET)
  // =========================================================================
  public setLightingMode(mode: LightingMode) {
    this.lightingMode = mode;
    this.targetNightFactor = mode === 'night' ? 1 : 0;
  }

  public getLightingMode(): LightingMode {
    return this.lightingMode;
  }

  public setCameraPreset(preset: CameraPreset) {
    this.cameraPreset = preset;
    this.cameraTransitioning = true;

    if (preset === 'panoramic') {
      this.desiredCamPos.set(0, 21.5, 40.5);
      this.desiredCamTarget.set(0, 1.2, 1.4);
    } else if (preset === 'nfc') {
      const readerPos = this.getNfcReaderWorldPosition();
      this.desiredCamPos.set(readerPos.x + 1.35, readerPos.y + 0.95, readerPos.z + 3.4);
      this.desiredCamTarget.set(readerPos.x - 0.35, readerPos.y - 0.05, readerPos.z - 0.1);
    } else if (preset === 'follow') {
      this.desiredCamPos.set(this.busX - 8.5, 8.2, 13.8);
      this.desiredCamTarget.set(this.busX + 1.5, 1.7, 1.4);
    }
  }

  public resetSimulation() {
    this.runToken++;
    this.positionInitialEntities();
    this.callbacks.onSpeedChange(0, this.busX);
    this.callbacks.onDoorChange(false);
    this.callbacks.onStopChange(STOP_POSITIONS.stop1.label, 'SEGURA');
    this.setCameraPreset('panoramic');
  }

  // =========================================================================
  // SCENARIO CHOREOGRAPHY (ALL 4 SCENARIOS SELF-HEALING & SMOOTH)
  // =========================================================================
  public async runScenario(scenarioId: ScenarioId) {
    const token = ++this.runToken;
    const isAlive = () => !this.disposed && token === this.runToken;

    if (scenarioId === 1) {
      await this.executeScenario1(isAlive);
    } else if (scenarioId === 2) {
      await this.executeScenario2(isAlive);
    } else if (scenarioId === 3) {
      await this.executeScenario3(isAlive);
    } else if (scenarioId === 4) {
      await this.executeScenario4(isAlive);
    }

    if (isAlive()) {
      this.callbacks.onScenarioComplete(scenarioId);
    }
  }

  /** SCENARIO 1: Abordaje Seguro con NFC en Parada 1 */
  private async executeScenario1(isAlive: () => boolean) {
    this.resetGeofences();
    this.mateo.group.visible = false;
    this.ana.group.visible = false;
    this.setNfcState('idle', 'Arribando a Parada 1 · Lector NFC listo');

    // Place Sofía waiting at Parada 1
    this.sofia.group.visible = true;
    this.sofia.badge.visible = true;
    this.sofia.group.position.set(STOP_POSITIONS.stop1.x + 0.55, 0.22, 4.15);
    this.sofia.group.rotation.y = Math.PI;
    this.sofia.targetArmRaise = 0;
    this.sofia.nfcCard.visible = false;

    // Close door before moving if bus isn't at Parada 1
    if (Math.abs(this.busX - STOP_POSITIONS.stop1.busX) > 0.25) {
      this.setDoorOpen(false);
      await this.sleep(350, isAlive);
      if (!isAlive()) return;
      await this.driveBusTo(STOP_POSITIONS.stop1.busX, isAlive);
      if (!isAlive()) return;
    }

    this.callbacks.onStopChange(STOP_POSITIONS.stop1.label, 'SEGURA');
    this.setDoorOpen(true);
    await this.sleep(620, isAlive);
    if (!isAlive()) return;

    // Sofía walks up right next to the 3D NFC Reader
    const readerX = STOP_POSITIONS.stop1.busX + 3.16;
    await this.walkCharacterTo(this.sofia, new THREE.Vector3(readerX - 0.15, 0.22, 2.95), 950, isAlive);
    if (!isAlive()) return;

    // Raise NFC Card toward reader
    this.sofia.group.rotation.y = Math.PI;
    this.sofia.nfcCard.visible = true;
    this.sofia.targetArmRaise = 1;
    await this.sleep(360, isAlive);
    if (!isAlive()) return;

    // GREEN NFC VALIDATION + SHOCKWAVES
    this.setNfcState('safe', 'Lectura NFC válida · Sofía M. abordando');
    this.geofences.stop1.pulseBoost = 1.0;
    this.triggerShockwaveBurst('#10B981', 3, false);
    this.callbacks.onScenarioEvent({ type: 'sc1_boarded' });

    await this.sleep(820, isAlive);
    if (!isAlive()) return;

    // Sofía lowers card and steps into the open bus doorway
    this.sofia.targetArmRaise = 0;
    this.sofia.nfcCard.visible = false;
    await this.walkCharacterTo(
      this.sofia,
      new THREE.Vector3(STOP_POSITIONS.stop1.busX + 2.25, 0.45, 2.05),
      650,
      isAlive
    );
    if (!isAlive()) return;

    // Boarded inside cabin
    this.sofia.group.visible = false;
    this.setDoorOpen(false);
    await this.sleep(550, isAlive);
    if (!isAlive()) return;

    this.setNfcState('idle', 'Abordaje confirmado · En ruta segura');
  }

  /** SCENARIO 2: Descenso Seguro + Validación de Tutor en Parada 2 */
  private async executeScenario2(isAlive: () => boolean) {
    this.resetGeofences();
    this.mateo.group.visible = false;
    this.ana.group.visible = false;
    this.sofia.group.visible = false;

    // Place verified Tutor waiting at Parada 2
    this.tutor.group.visible = true;
    this.tutor.badge.visible = true;
    this.tutor.group.position.set(STOP_POSITIONS.stop2.x + 1.25, 0.22, 4.15);
    this.tutor.group.rotation.y = Math.PI;
    this.tutor.targetArmRaise = 0;
    this.tutor.nfcCard.visible = false;

    this.setDoorOpen(false);
    this.setNfcState('idle', 'En tránsito hacia Parada 2 (Destino)');
    await this.sleep(300, isAlive);
    if (!isAlive()) return;

    // Drive smoothly to Parada 2
    await this.driveBusTo(STOP_POSITIONS.stop2.busX, isAlive);
    if (!isAlive()) return;

    this.callbacks.onStopChange(STOP_POSITIONS.stop2.label, 'SEGURA');
    this.setDoorOpen(true);
    await this.sleep(620, isAlive);
    if (!isAlive()) return;

    // Sofía steps out of bus doorway to NFC reader
    const doorX = STOP_POSITIONS.stop2.busX + 2.25;
    const readerX = STOP_POSITIONS.stop2.busX + 3.16;
    this.sofia.group.visible = true;
    this.sofia.badge.visible = true;
    this.sofia.group.position.set(doorX, 0.45, 2.05);
    await this.walkCharacterTo(this.sofia, new THREE.Vector3(doorX + 0.35, 0.22, 2.98), 650, isAlive);
    if (!isAlive()) return;

    // Sofía scans exit NFC
    this.sofia.group.rotation.y = Math.PI;
    this.sofia.nfcCard.visible = true;
    this.sofia.targetArmRaise = 1;
    await this.sleep(280, isAlive);
    if (!isAlive()) return;

    this.setNfcState('safe', 'Salida NFC Sofía M. · Esperando NFC Tutor...');
    this.triggerShockwaveBurst('#38BDF8', 2, false);
    await this.sleep(420, isAlive);
    if (!isAlive()) return;
    this.sofia.targetArmRaise = 0;
    this.sofia.nfcCard.visible = false;

    // Tutor approaches NFC reader to validate delivery
    await this.walkCharacterTo(this.tutor, new THREE.Vector3(readerX + 0.05, 0.22, 2.95), 720, isAlive);
    if (!isAlive()) return;

    this.tutor.group.rotation.y = Math.PI;
    this.tutor.nfcCard.visible = true;
    this.tutor.targetArmRaise = 1;
    await this.sleep(320, isAlive);
    if (!isAlive()) return;

    // DUAL TUTOR VALIDATION: Geofence turns luminous Emerald Green!
    this.setNfcState('safe', 'Tutor Verificado · Entrega Confirmada NFC');
    this.geofences.stop2.activeColor.set('#10B981');
    this.geofences.stop2.pulseBoost = 1.25;
    this.triggerShockwaveBurst('#10B981', 3, false);
    this.callbacks.onScenarioEvent({ type: 'sc2_tutor_verified' });

    await this.sleep(820, isAlive);
    if (!isAlive()) return;

    // Both step safely into the shelter zone with clean spacing so labels never overlap
    this.tutor.targetArmRaise = 0;
    this.tutor.nfcCard.visible = false;
    await Promise.all([
      this.walkCharacterTo(this.sofia, new THREE.Vector3(STOP_POSITIONS.stop2.x - 1.45, 0.22, 4.35), 900, isAlive),
      this.walkCharacterTo(this.tutor, new THREE.Vector3(STOP_POSITIONS.stop2.x + 0.65, 0.22, 4.35), 900, isAlive),
    ]);
    if (!isAlive()) return;

    this.setDoorOpen(false);
    await this.sleep(450, isAlive);
  }

  /** SCENARIO 3: Alerta de Parada No Autorizada / Desvío en Parada 3 */
  private async executeScenario3(isAlive: () => boolean) {
    this.resetGeofences();
    this.ana.group.visible = false;
    this.mateo.group.visible = false;

    this.setDoorOpen(false);
    this.setNfcState('idle', 'Desvío detectado · Aproximando a Parada 3');
    await this.sleep(280, isAlive);
    if (!isAlive()) return;

    // Bus drives to Parada 3 (Zona Aislada)
    await this.driveBusTo(STOP_POSITIONS.stop3.busX, isAlive);
    if (!isAlive()) return;

    this.callbacks.onStopChange(STOP_POSITIONS.stop3.label, 'RIESGO');
    this.setDoorOpen(true);
    await this.sleep(580, isAlive);
    if (!isAlive()) return;

    // Mateo steps to doorway threshold and tries to scan NFC card outside assigned geofence
    const doorX = STOP_POSITIONS.stop3.busX + 2.25;
    this.mateo.group.visible = true;
    this.mateo.badge.visible = true;
    this.mateo.group.position.set(doorX, 0.45, 2.05);
    await this.walkCharacterTo(this.mateo, new THREE.Vector3(doorX + 0.52, 0.22, 2.86), 720, isAlive);
    if (!isAlive()) return;

    this.mateo.group.rotation.y = Math.PI;
    this.mateo.nfcCard.visible = true;
    this.mateo.targetArmRaise = 1;
    await this.sleep(320, isAlive);
    if (!isAlive()) return;

    // CRITICAL RED ALERT: Flashing NFC Reader + Flashing Red Geofence!
    this.setNfcState('alert', '¡ALERTA! Descenso fuera de geocerca autorizada');
    this.geofences.stop3.flashingRed = true;
    this.geofences.stop3.pulseBoost = 1.4;
    this.triggerShockwaveBurst('#EF4444', 3, false);
    this.callbacks.onScenarioEvent({ type: 'sc3_unauthorized_alert' });

    // Second wave of red pulse for dramatic clarity
    await this.sleep(900, isAlive);
    if (!isAlive()) return;
    this.triggerShockwaveBurst('#EF4444', 2, false);
  }

  /** SCENARIO 4: Alerta Silenciosa de Acoso o Emergencia (Protocolo Violeta) */
  private async executeScenario4(isAlive: () => boolean) {
    this.resetGeofences();
    this.mateo.group.visible = false;

    // Switch smoothly to Night Shift Mode to highlight nocturnal safety context!
    this.setLightingMode('night');

    this.setDoorOpen(false);
    this.setNfcState('idle', 'Turno Nocturno activo · Monitoreo continuo');

    // Move smoothly along dark corridor between Parada 2 and Parada 3
    const nightTargetX = 4.2;
    if (Math.abs(this.busX - nightTargetX) > 0.6) {
      await this.driveBusTo(nightTargetX, isAlive);
      if (!isAlive()) return;
    }

    this.callbacks.onStopChange('Tramo Nocturno · Av. Norte (Entre P2 y P3)', 'EN RUTA');

    // Position Ana L. visibly INSIDE the calm, illuminated bus vestibule next to the NFC reader
    // Facing +Z (toward the reader & camera through the semi-transparent glass doorway)
    this.ana.group.visible = true;
    this.ana.badge.visible = true;
    this.ana.group.position.set(this.busX + 2.65, 0.76, 1.72);
    this.ana.group.rotation.y = 0.35; // Facing slightly toward the NFC reader pillar (+X/+Z)
    this.ana.nfcCard.visible = true;
    this.ana.nfcCardMat.emissive.set('#D946EF');

    // Discreet DOUBLE-TAP 1 (subtle micro-pulse on NFC reader, cabin remains totally calm)
    this.ana.targetArmRaise = 0.88;
    await this.sleep(320, isAlive);
    if (!isAlive()) return;
    this.triggerShockwaveBurst('#D946EF', 1, true);
    this.ana.targetArmRaise = 0.32;
    await this.sleep(340, isAlive);
    if (!isAlive()) return;

    // Discreet DOUBLE-TAP 2 -> Triggers Protocolo Violeta!
    this.ana.targetArmRaise = 0.92;
    await this.sleep(300, isAlive);
    if (!isAlive()) return;

    // CRITICAL: NO loud sirens, NO flashing exterior lights! Only subtle discreet amber/magenta halo pulse on reader.
    this.setNfcState('silent', 'Pulso discreto NFC · Sin alerta sonora en cabina');
    this.triggerShockwaveBurst('#F59E0B', 1, true);
    this.callbacks.onScenarioEvent({ type: 'sc4_silent_violet' });

    await this.sleep(650, isAlive);
    if (!isAlive()) return;
    this.ana.targetArmRaise = 0;
    this.ana.nfcCard.visible = false;
  }

  // =========================================================================
  // INTERPOLATION HELPERS
  // =========================================================================
  private driveBusTo(targetX: number, isAlive: () => boolean): Promise<void> {
    return new Promise((resolve) => {
      const startX = this.busX;
      const dist = Math.abs(targetX - startX);
      if (dist < 0.05) {
        this.callbacks.onSpeedChange(0, this.busX);
        resolve();
        return;
      }

      const durationMs = Math.max(1500, Math.min(3400, dist * 135));
      const startTime = performance.now();
      this.isBraking = false;
      this.callbacks.onStopChange('En ruta · Corredor Pulso NFC', 'EN RUTA');

      const step = () => {
        if (!isAlive()) {
          this.isBraking = true;
          this.callbacks.onSpeedChange(0, this.busX);
          resolve();
          return;
        }
        const now = performance.now();
        const t = Math.min(1, (now - startTime) / durationMs);
        // Smooth cubic ease-in-out
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const prevX = this.busX;
        this.busX = startX + (targetX - startX) * eased;
        this.busGroup.position.x = this.busX;

        // Instantaneous simulated speed (peaks smoothly around ~38-44 km/h)
        const velocityBell = Math.sin(t * Math.PI);
        const speedKmh = Math.round(velocityBell * (36 + Math.min(8, dist * 0.25)));
        this.isBraking = t > 0.78;
        this.callbacks.onSpeedChange(speedKmh, this.busX);

        // If user selected Follow or NFC Zoom while bus moves, keep camera locked smoothly
        if (this.cameraPreset === 'follow' || this.cameraPreset === 'nfc') {
          const dx = this.busX - prevX;
          this.camera.position.x += dx;
          this.controls.target.x += dx;
          this.desiredCamPos.x += dx;
          this.desiredCamTarget.x += dx;
        }

        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          this.busX = targetX;
          this.busGroup.position.x = targetX;
          this.isBraking = true;
          this.callbacks.onSpeedChange(0, this.busX);
          resolve();
        }
      };

      requestAnimationFrame(step);
    });
  }

  private walkCharacterTo(
    rig: PassengerRig,
    targetPos: THREE.Vector3,
    durationMs: number,
    isAlive: () => boolean
  ): Promise<void> {
    return new Promise((resolve) => {
      const startPos = rig.group.position.clone();
      const startTime = performance.now();
      rig.isWalking = true;

      // Face movement direction
      const dx = targetPos.x - startPos.x;
      const dz = targetPos.z - startPos.z;
      if (Math.hypot(dx, dz) > 0.05) {
        rig.group.rotation.y = Math.atan2(dx, dz);
      }

      const step = () => {
        if (!isAlive()) {
          rig.isWalking = false;
          resolve();
          return;
        }
        const t = Math.min(1, (performance.now() - startTime) / durationMs);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        rig.group.position.lerpVectors(startPos, targetPos, eased);

        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          rig.group.position.copy(targetPos);
          rig.isWalking = false;
          resolve();
        }
      };

      requestAnimationFrame(step);
    });
  }

  private sleep(ms: number, isAlive: () => boolean): Promise<void> {
    return new Promise((resolve) => {
      const id = window.setTimeout(() => {
        resolve();
      }, ms);
      if (!isAlive()) {
        window.clearTimeout(id);
        resolve();
      }
    });
  }

  private setDoorOpen(open: boolean) {
    this.targetDoorOpen = open ? 1 : 0;
    this.callbacks.onDoorChange(open);
  }

  private setNfcState(state: NfcState, statusText: string) {
    this.nfcState = state;
    this.callbacks.onNfcStateChange(state, statusText);
  }

  private triggerShockwaveBurst(colorHex: string, count: number, subtle: boolean) {
    let spawned = 0;
    for (let i = 0; i < this.shockwaves.length && spawned < count; i++) {
      const sw = this.shockwaves[i];
      if (!sw.active) {
        sw.active = true;
        sw.age = -spawned * 0.16; // Stagger waves cleanly
        sw.maxAge = subtle ? 0.65 : 0.95;
        sw.maxScale = subtle ? 2.1 : 4.6;
        sw.subtle = subtle;
        sw.material.color.set(colorHex);
        sw.material.opacity = 0;
        sw.mesh.scale.set(1, 1, 1);
        sw.mesh.position.z = 0.14;
        sw.mesh.visible = true;
        spawned++;
      }
    }
  }

  private getNfcReaderWorldPosition(): THREE.Vector3 {
    const pos = new THREE.Vector3();
    this.busGroup.updateMatrixWorld(true);
    this.nfcReaderWorldAnchor.getWorldPosition(pos);
    return pos;
  }

  // =========================================================================
  // MAIN RENDER & ANIMATION LOOP (60 FPS)
  // =========================================================================
  private animate = () => {
    if (this.disposed) return;
    this.rafId = requestAnimationFrame(this.animate);

    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.elapsedTotal += dt;

    // 1. Smooth Day <-> Night Shift interpolation
    if (Math.abs(this.nightFactor - this.targetNightFactor) > 0.002) {
      this.nightFactor = THREE.MathUtils.lerp(this.nightFactor, this.targetNightFactor, Math.min(1, dt * 3.5));
      this.applyLightingBlend(this.nightFactor);
    }

    // 2. Wheel Rotation coupled strictly to Bus X travel
    const deltaX = this.busX - this.lastBusX;
    this.lastBusX = this.busX;
    if (Math.abs(deltaX) > 0.0001) {
      const angularDelta = -deltaX / 0.48; // wheel radius = 0.48m
      this.wheels.forEach((w) => {
        w.rotation.z += angularDelta;
      });
    }

    // 3. Brake lights intensity
    const brakeIntensity = this.isBraking ? 2.4 : 0.65;
    this.brakeLightMats.forEach((m) => {
      m.emissiveIntensity = THREE.MathUtils.lerp(m.emissiveIntensity, brakeIntensity, dt * 8);
    });

    // 4. Animated Bi-parting Bus Side Doors
    this.doorOpenProgress = THREE.MathUtils.lerp(this.doorOpenProgress, this.targetDoorOpen, Math.min(1, dt * 6.5));
    const slideOffset = this.doorOpenProgress * 0.62;
    this.doorLeft.position.x = 1.9 - slideOffset;
    this.doorRight.position.x = 2.6 + slideOffset;
    this.doorLeft.position.z = 1.24 + this.doorOpenProgress * 0.04;
    this.doorRight.position.z = 1.24 + this.doorOpenProgress * 0.04;

    // 5. Dynamic 3D NFC Reader LED Halo + Shockwaves
    this.updateNfcVisuals(dt);

    // 6. Luminous Ground Geofences animation
    this.updateGeofences(dt);

    // 7. Character walking & arm-raising articulation
    [this.sofia, this.tutor, this.mateo, this.ana].forEach((rig) => this.updateCharacterRig(rig, dt));

    // 8. Smooth Camera Presets & OrbitControls
    if (this.cameraTransitioning) {
      if (this.cameraPreset === 'nfc') {
        const readerPos = this.getNfcReaderWorldPosition();
        this.desiredCamPos.set(readerPos.x + 1.35, readerPos.y + 0.95, readerPos.z + 3.4);
        this.desiredCamTarget.set(readerPos.x - 0.35, readerPos.y - 0.05, readerPos.z - 0.1);
      } else if (this.cameraPreset === 'follow') {
        this.desiredCamPos.set(this.busX - 8.5, 8.2, 13.8);
        this.desiredCamTarget.set(this.busX + 1.5, 1.7, 1.4);
      }

      const lerpSpeed = Math.min(1, dt * 4.5);
      this.camera.position.lerp(this.desiredCamPos, lerpSpeed);
      this.controls.target.lerp(this.desiredCamTarget, lerpSpeed);

      if (
        this.camera.position.distanceTo(this.desiredCamPos) < 0.08 &&
        this.controls.target.distanceTo(this.desiredCamTarget) < 0.08
      ) {
        this.cameraTransitioning = false;
      }
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  private applyLightingBlend(nf: number) {
    // Background & Fog: Crisp bright daylight vs Deep midnight sky
    const bg = this.skyDayColor.clone().lerp(this.skyNightColor, nf);
    this.scene.background = bg;
    if (this.scene.fog instanceof THREE.FogExp2) {
      this.scene.fog.color.copy(this.fogDayColor).lerp(this.fogNightColor, nf);
      this.scene.fog.density = THREE.MathUtils.lerp(0.0052, 0.0155, nf);
    }

    // Hemisphere & Directional Sun/Moon
    this.hemiLight.intensity = THREE.MathUtils.lerp(1.65, 0.22, nf);
    this.hemiLight.color.set('#E0F2FE').lerp(new THREE.Color('#334155'), nf);
    this.hemiLight.groundColor.set('#475569').lerp(new THREE.Color('#090D16'), nf);
    this.sunLight.intensity = THREE.MathUtils.lerp(2.65, 0.2, nf);
    this.sunLight.color.set('#FFFDF2').lerp(new THREE.Color('#64748B'), nf);
    this.fillLight.intensity = THREE.MathUtils.lerp(0.65, 0.12, nf);

    // Stars
    const starMat = this.starsPoints.material as THREE.PointsMaterial;
    starMat.opacity = nf * 0.9;

    // Streetlights along authorized stops (Parada 1 & 2 illuminate warmly; Parada 3 stays dark!)
    this.streetLights.forEach((sl) => {
      sl.pointLight.intensity = nf * 12.5;
      sl.bulbMat.emissiveIntensity = 0.1 + nf * 3.0;
      sl.coneMat.opacity = nf * 0.11;
    });

    // Building windows
    this.buildingWindowMats.forEach((m) => {
      m.emissiveIntensity = 0.02 + nf * 1.05;
    });

    // Shelter accent strips
    this.shelterLightMats.forEach((m) => {
      m.emissiveIntensity = 0.45 + nf * 1.65;
    });

    // Bus Headlights & Volumetric Cones
    this.headlightCones.forEach((c) => {
      c.opacity = nf * 0.17;
    });
    this.headlightSpots.forEach((s) => {
      s.intensity = nf * 28;
    });
    this.headlightBulbMats.forEach((m) => {
      m.emissiveIntensity = 0.4 + nf * 3.0;
    });

    // Calm interior bus lighting
    this.cabinLight.intensity = 0.6 + nf * 2.8;
  }

  private updateNfcVisuals(dt: number) {
    const t = this.elapsedTotal;

    if (this.nfcState === 'idle') {
      const pulse = 0.65 + Math.sin(t * 2.4) * 0.35;
      this.nfcHaloMat.color.set('#38BDF8');
      this.nfcHaloMat.emissive.set('#38BDF8');
      this.nfcHaloMat.emissiveIntensity = 1.4 + pulse * 0.8;
      this.nfcHaloLight.color.set('#38BDF8');
      this.nfcHaloLight.intensity = 1.6 + pulse * 1.0;
    } else if (this.nfcState === 'safe') {
      const pulse = 0.5 + Math.sin(t * 6.0) * 0.5;
      this.nfcHaloMat.color.set('#10B981');
      this.nfcHaloMat.emissive.set('#34D399');
      this.nfcHaloMat.emissiveIntensity = 2.4 + pulse * 1.6;
      this.nfcHaloLight.color.set('#10B981');
      this.nfcHaloLight.intensity = 3.8 + pulse * 2.2;
    } else if (this.nfcState === 'alert') {
      // Intense rapid red flash for Scenario 3
      const flash = Math.sin(t * 16) > 0 ? 1 : 0.15;
      this.nfcHaloMat.color.set('#EF4444');
      this.nfcHaloMat.emissive.set('#FF2442');
      this.nfcHaloMat.emissiveIntensity = 0.5 + flash * 4.5;
      this.nfcHaloLight.color.set('#EF4444');
      this.nfcHaloLight.intensity = 1.0 + flash * 6.5;
    } else if (this.nfcState === 'silent') {
      // Discreet subtle alternating amber/magenta micro-pulse ONLY on the NFC halo (calm, non-alarming!)
      const wave = 0.5 + Math.sin(t * 2.8) * 0.5;
      const discreetColor = new THREE.Color('#F59E0B').lerp(new THREE.Color('#D946EF'), wave);
      this.nfcHaloMat.color.copy(discreetColor);
      this.nfcHaloMat.emissive.copy(discreetColor);
      this.nfcHaloMat.emissiveIntensity = 0.85 + wave * 0.75; // Deliberately subtle!
      this.nfcHaloLight.color.copy(discreetColor);
      this.nfcHaloLight.intensity = 0.9 + wave * 0.65;
    }

    // Animate active expanding 3D shockwave rings
    this.shockwaves.forEach((sw) => {
      if (!sw.active) return;
      sw.age += dt;
      if (sw.age < 0) return;
      const p = sw.age / sw.maxAge;
      if (p >= 1) {
        sw.active = false;
        sw.mesh.visible = false;
        return;
      }
      const easeOut = 1 - Math.pow(1 - p, 2.2);
      const scale = 1 + easeOut * (sw.maxScale - 1);
      sw.mesh.scale.set(scale, scale, 1);
      sw.mesh.position.z = 0.14 + easeOut * (sw.subtle ? 0.45 : 1.15);
      sw.material.opacity = (1 - p) * (sw.subtle ? 0.55 : 0.92);
    });
  }

  private updateGeofences(dt: number) {
    const t = this.elapsedTotal;
    const list = [this.geofences.stop1, this.geofences.stop2, this.geofences.stop3];

    list.forEach((g, idx) => {
      g.outerRing.rotation.z += dt * (idx === 2 ? -0.9 : 0.55);
      if (g.pulseBoost > 0) {
        g.pulseBoost = Math.max(0, g.pulseBoost - dt * 0.42);
      }

      if (g.flashingRed) {
        const flash = 0.5 + Math.sin(t * 14) * 0.5;
        g.ringMat.color.set('#FF2442');
        g.discMat.color.set('#EF4444');
        g.outerMat.color.set('#FF2442');
        g.beamMat.color.set('#EF4444');
        g.ringMat.opacity = 0.55 + flash * 0.45;
        g.discMat.opacity = 0.18 + flash * 0.3;
        g.beamMat.opacity = 0.12 + flash * 0.28;
        const s = 1 + flash * 0.06;
        g.ringMesh.scale.set(s, s, 1);
      } else {
        const idlePulse = 0.5 + Math.sin(t * 2.2 + idx * 1.3) * 0.5;
        g.ringMat.color.lerp(g.activeColor, Math.min(1, dt * 6));
        g.discMat.color.lerp(g.activeColor, Math.min(1, dt * 6));
        g.outerMat.color.lerp(g.activeColor, Math.min(1, dt * 6));
        g.beamMat.color.lerp(g.activeColor, Math.min(1, dt * 6));

        g.ringMat.opacity = Math.min(1, 0.72 + idlePulse * 0.18 + g.pulseBoost * 0.25);
        g.discMat.opacity = Math.min(0.48, 0.11 + idlePulse * 0.05 + g.pulseBoost * 0.22);
        g.beamMat.opacity = Math.min(0.35, 0.07 + idlePulse * 0.04 + g.pulseBoost * 0.18);
        const s = 1 + g.pulseBoost * 0.07;
        g.ringMesh.scale.set(s, s, 1);
      }
    });
  }

  private updateCharacterRig(rig: PassengerRig, dt: number) {
    if (!rig.group.visible) return;

    if (rig.isWalking) {
      rig.walkPhase += dt * 10.5;
      const swing = Math.sin(rig.walkPhase) * 0.55;
      rig.leftLeg.rotation.x = swing;
      rig.rightLeg.rotation.x = -swing;
      rig.leftArm.rotation.x = -swing * 0.65;
      if (rig.targetArmRaise < 0.1) {
        rig.rightArm.rotation.x = swing * 0.65;
      }
    } else {
      rig.leftLeg.rotation.x = THREE.MathUtils.lerp(rig.leftLeg.rotation.x, 0, dt * 8);
      rig.rightLeg.rotation.x = THREE.MathUtils.lerp(rig.rightLeg.rotation.x, 0, dt * 8);
      rig.leftArm.rotation.x = THREE.MathUtils.lerp(rig.leftArm.rotation.x, 0, dt * 8);
    }

    rig.armRaise = THREE.MathUtils.lerp(rig.armRaise, rig.targetArmRaise, Math.min(1, dt * 10));
    if (rig.armRaise > 0.01) {
      // Raise right arm forward (+Z in local rig space -> toward NFC reader)
      rig.rightArm.rotation.x = -rig.armRaise * 1.35;
    } else if (!rig.isWalking) {
      rig.rightArm.rotation.x = THREE.MathUtils.lerp(rig.rightArm.rotation.x, 0, dt * 8);
    }
  }

  public dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.rafId);
    this.resizeObserver.disconnect();
    this.controls.dispose();
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
