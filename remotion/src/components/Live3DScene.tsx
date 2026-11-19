import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Easing, interpolate } from 'remotion';
import {
  createBuildingWindowTexture,
  createBusDestinationTexture,
  createBusSideGraphicTexture,
  createCharacterBadgeTexture,
  createNfcPadTexture,
  createStopSignTexture,
} from '../../../src/scene/textures';

export type Live3DMode = 'day-tutor-zoom' | 'night-violet-zoom';

interface Live3DSceneProps {
  mode: Live3DMode;
  frame: number;
  width: number;
  height: number;
}

const STOP_1_X = -13.5;
const STOP_2_X = 0;
const STOP_3_X = 13.5;

const BUS_AT_P1 = -15.75;
const BUS_AT_P2 = -2.25;
const BUS_AT_P3 = 11.25;
const BUS_AT_NIGHT = 4.2;

interface CharacterParts {
  group: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  nfcCard: THREE.Mesh;
  nfcCardMat: THREE.MeshStandardMaterial;
}

interface GeofenceParts {
  ringMesh: THREE.Mesh;
  ringMat: THREE.MeshBasicMaterial;
  discMat: THREE.MeshBasicMaterial;
  outerRing: THREE.Mesh;
  outerMat: THREE.MeshBasicMaterial;
  beamMat: THREE.MeshBasicMaterial;
}

interface ThreeBundle {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  hemiLight: THREE.HemisphereLight;
  sunLight: THREE.DirectionalLight;
  fillLight: THREE.DirectionalLight;
  starsMat: THREE.PointsMaterial;
  streetLights: Array<{
    bulbMat: THREE.MeshStandardMaterial;
    pointLight: THREE.PointLight;
    coneMat: THREE.MeshBasicMaterial;
  }>;
  buildingWindowMats: THREE.MeshStandardMaterial[];
  shelterLightMats: THREE.MeshStandardMaterial[];
  geofences: { p1: GeofenceParts; p2: GeofenceParts; p3: GeofenceParts };
  busGroup: THREE.Group;
  wheels: THREE.Group[];
  doorLeft: THREE.Group;
  doorRight: THREE.Group;
  headlightCones: THREE.MeshBasicMaterial[];
  headlightSpots: THREE.SpotLight[];
  headlightBulbMats: THREE.MeshStandardMaterial[];
  brakeLightMats: THREE.MeshStandardMaterial[];
  cabinLight: THREE.PointLight;
  nfcHaloMat: THREE.MeshStandardMaterial;
  nfcHaloLight: THREE.PointLight;
  shockwaves: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial }>;
  sofia: CharacterParts;
  tutor: CharacterParts;
  mateo: CharacterParts;
  ana: CharacterParts;
  dispose: () => void;
}

function createCharacter(opts: {
  bodyColor: string;
  headColor: string;
  accentColor: string;
  scale: number;
  hasBackpack: boolean;
  badgeName: string;
  badgeSub: string;
}): CharacterParts {
  const group = new THREE.Group();
  const s = opts.scale;

  const bodyMat = new THREE.MeshStandardMaterial({ color: opts.bodyColor, roughness: 0.48, metalness: 0.15 });
  const limbMat = new THREE.MeshStandardMaterial({ color: '#1E293B', roughness: 0.7 });
  const headMat = new THREE.MeshStandardMaterial({ color: opts.headColor, roughness: 0.52 });

  const idRing = new THREE.Mesh(
    new THREE.RingGeometry(0.32, 0.4, 24),
    new THREE.MeshBasicMaterial({ color: opts.accentColor, transparent: true, opacity: 0.82, side: THREE.DoubleSide })
  );
  idRing.rotation.x = -Math.PI / 2;
  idRing.position.y = 0.025;
  group.add(idRing);

  const makeLeg = (xOff: number) => {
    const pivot = new THREE.Group();
    pivot.position.set(xOff * s, 0.68 * s, 0);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.075 * s, 0.065 * s, 0.66 * s, 10), limbMat);
    mesh.position.y = -0.33 * s;
    mesh.castShadow = true;
    pivot.add(mesh);
    return pivot;
  };
  const leftLeg = makeLeg(-0.11);
  const rightLeg = makeLeg(0.11);
  group.add(leftLeg, rightLeg);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.17 * s, 0.68 * s, 14), bodyMat);
  torso.position.y = 1.02 * s;
  torso.castShadow = true;
  group.add(torso);

  if (opts.hasBackpack) {
    const pack = new THREE.Mesh(
      new THREE.BoxGeometry(0.28 * s, 0.36 * s, 0.16 * s),
      new THREE.MeshStandardMaterial({ color: '#0F172A', roughness: 0.7 })
    );
    pack.position.set(0, 1.04 * s, -0.2 * s);
    group.add(pack);
  }

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.19 * s, 18, 18), headMat);
  head.position.y = 1.56 * s;
  head.castShadow = true;
  group.add(head);

  const makeArm = (xOff: number, withCard: boolean) => {
    const pivot = new THREE.Group();
    pivot.position.set(xOff * s, 1.28 * s, 0);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06 * s, 0.055 * s, 0.56 * s, 10), bodyMat);
    mesh.position.y = -0.26 * s;
    pivot.add(mesh);

    let cardMesh!: THREE.Mesh;
    let cardMat!: THREE.MeshStandardMaterial;
    if (withCard) {
      cardMat = new THREE.MeshStandardMaterial({
        color: '#FFFFFF',
        emissive: new THREE.Color(opts.accentColor),
        emissiveIntensity: 1.8,
      });
      cardMesh = new THREE.Mesh(new THREE.BoxGeometry(0.15 * s, 0.1 * s, 0.024 * s), cardMat);
      cardMesh.position.set(0, -0.54 * s, 0.09 * s);
      cardMesh.visible = false;
      pivot.add(cardMesh);
    }
    return { pivot, cardMesh, cardMat };
  };

  const la = makeArm(-0.26, false);
  const ra = makeArm(0.26, true);
  group.add(la.pivot, ra.pivot);

  const badgeTex = createCharacterBadgeTexture(opts.badgeName, opts.badgeSub, opts.accentColor);
  const badge = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: badgeTex, transparent: true, depthTest: false })
  );
  badge.scale.set(2.15, 0.65, 1);
  badge.position.set(0, (opts.scale > 1 ? 2.68 : 2.18) * s, 0);
  badge.renderOrder = 20;
  group.add(badge);

  return {
    group,
    leftLeg,
    rightLeg,
    leftArm: la.pivot,
    rightArm: ra.pivot,
    nfcCard: ra.cardMesh,
    nfcCardMat: ra.cardMat,
  };
}

function buildWorld(canvas: HTMLCanvasElement, width: number, height: number): ThreeBundle {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#6FA8DC');
  scene.fog = new THREE.FogExp2('#8CC0EC', 0.0052);

  const camera = new THREE.PerspectiveCamera(44, width / height, 0.2, 200);
  camera.position.set(0, 21.5, 40.5);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(1);
  renderer.setSize(width, height, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  // Lights
  const hemiLight = new THREE.HemisphereLight('#E0F2FE', '#475569', 1.65);
  scene.add(hemiLight);

  const sunLight = new THREE.DirectionalLight('#FFFDF2', 2.65);
  sunLight.position.set(22, 32, 20);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.near = 5;
  sunLight.shadow.camera.far = 90;
  const d = 32;
  sunLight.shadow.camera.left = -d;
  sunLight.shadow.camera.right = d;
  sunLight.shadow.camera.top = d;
  sunLight.shadow.camera.bottom = -d;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  const fillLight = new THREE.DirectionalLight('#60A5FA', 0.65);
  fillLight.position.set(-25, 16, -18);
  scene.add(fillLight);

  // Deterministic Stars
  const starCount = 260;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const a = ((i * 137.508) % 360) * (Math.PI / 180);
    const r = 56 + ((i * 29) % 42);
    starPos[i * 3] = Math.cos(a) * r;
    starPos[i * 3 + 1] = 18 + ((i * 17) % 38);
    starPos[i * 3 + 2] = Math.sin(a) * r;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starsMat = new THREE.PointsMaterial({ color: '#CBD5E1', size: 0.34, transparent: true, opacity: 0 });
  scene.add(new THREE.Points(starGeo, starsMat));

  // Ground, Road & Sidewalks
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(180, 140),
    new THREE.MeshStandardMaterial({ color: '#1E293B', roughness: 0.92 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  scene.add(ground);

  const road = new THREE.Mesh(
    new THREE.BoxGeometry(92, 0.06, 7.0),
    new THREE.MeshStandardMaterial({ color: '#2B3444', roughness: 0.84 })
  );
  road.position.set(0, -0.02, -0.7);
  road.receiveShadow = true;
  scene.add(road);

  const edgeLineMat = new THREE.MeshBasicMaterial({ color: '#CBD5E1', transparent: true, opacity: 0.68 });
  [-3.95, 2.55].forEach((zPos) => {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(90, 0.1), edgeLineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(0, 0.016, zPos);
    scene.add(line);
  });

  const dashMat = new THREE.MeshBasicMaterial({ color: '#F59E0B', transparent: true, opacity: 0.88 });
  for (let x = -42; x <= 42; x += 3.6) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.13), dashMat);
    dash.rotation.x = -Math.PI / 2;
    dash.position.set(x, 0.016, -0.7);
    scene.add(dash);
  }

  const zebraMat = new THREE.MeshBasicMaterial({ color: '#F1F5F9', transparent: true, opacity: 0.9 });
  [-7.4, 6.6].forEach((cx) => {
    for (let z = -3.4; z <= 2.0; z += 0.72) {
      const bar = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.36), zebraMat);
      bar.rotation.x = -Math.PI / 2;
      bar.position.set(cx, 0.018, z);
      scene.add(bar);
    }
  });

  const sidewalkMat = new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.82 });
  const fgSidewalk = new THREE.Mesh(new THREE.BoxGeometry(92, 0.22, 5.6), sidewalkMat);
  fgSidewalk.position.set(0, 0.11, 5.6);
  fgSidewalk.receiveShadow = true;
  scene.add(fgSidewalk);

  const isolatedPatch = new THREE.Mesh(
    new THREE.BoxGeometry(24, 0.226, 5.65),
    new THREE.MeshStandardMaterial({ color: '#1E242F', roughness: 0.96 })
  );
  isolatedPatch.position.set(18, 0.11, 5.6);
  isolatedPatch.receiveShadow = true;
  scene.add(isolatedPatch);

  const fgCurb = new THREE.Mesh(
    new THREE.BoxGeometry(92, 0.23, 0.2),
    new THREE.MeshStandardMaterial({ color: '#64748B', roughness: 0.72 })
  );
  fgCurb.position.set(0, 0.115, 2.86);
  scene.add(fgCurb);

  const bgSidewalk = new THREE.Mesh(new THREE.BoxGeometry(92, 0.22, 3.4), sidewalkMat);
  bgSidewalk.position.set(0, 0.11, -5.9);
  bgSidewalk.receiveShadow = true;
  scene.add(bgSidewalk);

  // Buildings
  const buildingWindowMats: THREE.MeshStandardMaterial[] = [];
  const schoolMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.68 });
  const warmTex = createBuildingWindowTexture(5, 4, true);
  const warmWinMat = new THREE.MeshStandardMaterial({
    color: '#3B4C66',
    map: warmTex,
    emissive: new THREE.Color('#F59E0B'),
    emissiveMap: warmTex,
    emissiveIntensity: 0.02,
  });
  buildingWindowMats.push(warmWinMat);

  const school = new THREE.Mesh(new THREE.BoxGeometry(10.5, 6.0, 5.2), [
    schoolMat, schoolMat, schoolMat, schoolMat, warmWinMat, schoolMat,
  ]);
  school.position.set(-14.5, 3.0, -11.4);
  school.castShadow = true;
  scene.add(school);

  const schoolTop = new THREE.Mesh(
    new THREE.BoxGeometry(10.7, 0.28, 5.4),
    new THREE.MeshStandardMaterial({ color: '#10B981', emissive: '#059669', emissiveIntensity: 0.45 })
  );
  schoolTop.position.set(-14.5, 6.12, -11.4);
  scene.add(schoolTop);

  const coolTex = createBuildingWindowTexture(6, 7, false);
  const coolWinMat = new THREE.MeshStandardMaterial({
    color: '#32445E',
    map: coolTex,
    emissive: new THREE.Color('#38BDF8'),
    emissiveMap: coolTex,
    emissiveIntensity: 0.02,
  });
  buildingWindowMats.push(coolWinMat);

  const corpMat = new THREE.MeshStandardMaterial({ color: '#2B3B54', roughness: 0.6 });
  const tower = new THREE.Mesh(new THREE.BoxGeometry(7.2, 10.6, 5.6), [
    corpMat, corpMat, corpMat, corpMat, coolWinMat, corpMat,
  ]);
  tower.position.set(-2.2, 5.3, -12.2);
  tower.castShadow = true;
  scene.add(tower);

  const towerTop = new THREE.Mesh(
    new THREE.BoxGeometry(7.4, 0.25, 5.8),
    new THREE.MeshStandardMaterial({ color: '#38BDF8', emissive: '#0284C7', emissiveIntensity: 0.55 })
  );
  towerTop.position.set(-2.2, 10.7, -12.2);
  scene.add(towerTop);

  const hall = new THREE.Mesh(new THREE.BoxGeometry(6.8, 5.6, 5.8), [
    corpMat, corpMat, corpMat, corpMat, coolWinMat, corpMat,
  ]);
  hall.position.set(5.4, 2.8, -12.4);
  hall.castShadow = true;
  scene.add(hall);

  // Zone 3 Dark Vacant Fence & Silhouette
  const fencePostMat = new THREE.MeshStandardMaterial({ color: '#28303D', roughness: 0.9 });
  for (let x = 9.5; x <= 26.5; x += 3.4) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 2.4, 6), fencePostMat);
    post.position.set(x, 1.2, -7.8);
    scene.add(post);
  }
  const fencePanel = new THREE.Mesh(
    new THREE.PlaneGeometry(17, 2.1, 14, 3),
    new THREE.MeshBasicMaterial({ color: '#475569', wireframe: true, transparent: true, opacity: 0.42 })
  );
  fencePanel.position.set(18, 1.15, -7.8);
  scene.add(fencePanel);

  const darkWarehouse = new THREE.Mesh(
    new THREE.BoxGeometry(10, 3.8, 5),
    new THREE.MeshStandardMaterial({ color: '#141923', roughness: 0.95 })
  );
  darkWarehouse.position.set(17, 1.9, -15.5);
  scene.add(darkWarehouse);

  // Streetlights (back side only -> zero camera obstruction!)
  const streetLights: ThreeBundle['streetLights'] = [];
  const poleMat = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.5, metalness: 0.7 });
  [
    [-18.5, -5.0, 1],
    [-11.5, -5.0, 1],
    [-4.2, -5.0, 1],
    [3.5, -5.0, 1],
  ].forEach(([x, z, dirZ]) => {
    const g = new THREE.Group();
    g.position.set(x, 0.22, z);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 5.6, 8), poleMat);
    pole.position.y = 2.8;
    g.add(pole);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 1.7), poleMat);
    arm.position.set(0, 5.55, dirZ * 0.8);
    g.add(arm);
    const bulbMat = new THREE.MeshStandardMaterial({
      color: '#FFFBEB',
      emissive: new THREE.Color('#FDE68A'),
      emissiveIntensity: 0.1,
    });
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.06, 0.62), bulbMat);
    bulb.position.set(0, 5.42, dirZ * 1.45);
    g.add(bulb);
    const pointLight = new THREE.PointLight('#FDE68A', 0, 15, 1.5);
    pointLight.position.set(0, 5.1, dirZ * 1.45);
    g.add(pointLight);
    const coneMat = new THREE.MeshBasicMaterial({
      color: '#FEF3C7',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const cone = new THREE.Mesh(new THREE.ConeGeometry(2.8, 5.3, 18, 1, true), coneMat);
    cone.position.set(0, 2.72, dirZ * 1.45);
    g.add(cone);
    streetLights.push({ bulbMat, pointLight, coneMat });
    scene.add(g);
  });

  // Stylized Trees
  [-21, -8.5, 5.5].forEach((tx) => {
    const tg = new THREE.Group();
    tg.position.set(tx, 0.22, -6.5);
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.16, 1.3, 6),
      new THREE.MeshStandardMaterial({ color: '#3F2E21', roughness: 0.9 })
    );
    trunk.position.y = 0.65;
    const crown = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.85, 0),
      new THREE.MeshStandardMaterial({ color: '#14532D', roughness: 0.8 })
    );
    crown.position.y = 1.95;
    tg.add(trunk, crown);
    scene.add(tg);
  });

  // Stops, Shelters, Signs & Geofences
  const shelterLightMats: THREE.MeshStandardMaterial[] = [];
  const makeShelter = (x: number, accentHex: string) => {
    const g = new THREE.Group();
    g.position.set(x, 0.22, 5.55);
    const fMat = new THREE.MeshStandardMaterial({ color: '#1E293B', roughness: 0.4, metalness: 0.75 });
    const gMat = new THREE.MeshPhysicalMaterial({ color: '#93C5FD', transparent: true, opacity: 0.18 });
    [-1.35, 1.35].forEach((px) => {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.6, 0.12), fMat);
      p.position.set(px, 1.3, 0.65);
      g.add(p);
    });
    const back = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.2, 0.05), gMat);
    back.position.set(0, 1.25, 0.65);
    g.add(back);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.12, 1.5), fMat);
    roof.position.set(0, 2.6, 0.08);
    g.add(roof);
    const trimMat = new THREE.MeshStandardMaterial({
      color: accentHex,
      emissive: new THREE.Color(accentHex),
      emissiveIntensity: 0.6,
    });
    shelterLightMats.push(trimMat);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(3.12, 0.07, 0.08), trimMat);
    trim.position.set(0, 2.6, -0.66);
    g.add(trim);
    const bench = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.1, 0.46),
      new THREE.MeshStandardMaterial({ color: '#475569' })
    );
    bench.position.set(0, 0.56, 0.25);
    g.add(bench);
    scene.add(g);
  };

  const makeSign = (
    x: number,
    opts: { code: string; title: string; subtitle: string; accent: string; isDanger?: boolean }
  ) => {
    const g = new THREE.Group();
    g.position.set(x, 0.22, 5.1);
    g.rotation.y = -0.18;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 3.6, 8), poleMat);
    pole.position.y = 1.8;
    g.add(pole);
    const tex = createStopSignTexture(opts);
    const boxMat = new THREE.MeshStandardMaterial({ color: '#0F172A' });
    const faceMat = new THREE.MeshStandardMaterial({
      map: tex,
      emissive: new THREE.Color('#FFFFFF'),
      emissiveMap: tex,
      emissiveIntensity: 0.58,
    });
    const board = new THREE.Mesh(new THREE.BoxGeometry(2.95, 1.38, 0.12), [
      boxMat, boxMat, boxMat, boxMat, faceMat, faceMat,
    ]);
    board.position.set(0, 3.75, 0);
    g.add(board);
    scene.add(g);
  };

  const makeGeofence = (x: number, hexColor: string): GeofenceParts => {
    const g = new THREE.Group();
    g.position.set(x, 0.245, 3.85);
    const col = new THREE.Color(hexColor);
    const discMat = new THREE.MeshBasicMaterial({
      color: col,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.92, 48), discMat);
    disc.rotation.x = -Math.PI / 2;
    g.add(disc);
    const ringMat = new THREE.MeshBasicMaterial({
      color: col,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(new THREE.RingGeometry(1.8, 2.05, 48), ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.005;
    g.add(ringMesh);
    const outerMat = new THREE.MeshBasicMaterial({
      color: col,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const outerRing = new THREE.Mesh(new THREE.RingGeometry(2.18, 2.3, 36, 1, 0, Math.PI * 1.45), outerMat);
    outerRing.rotation.x = -Math.PI / 2;
    outerRing.position.y = 0.008;
    g.add(outerRing);
    const beamMat = new THREE.MeshBasicMaterial({
      color: col,
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.05, 2.05, 0.85, 40, 1, true), beamMat);
    beam.position.y = 0.425;
    g.add(beam);
    scene.add(g);
    return { ringMesh, ringMat, discMat, outerRing, outerMat, beamMat };
  };

  const p1 = makeGeofence(STOP_1_X, '#10B981');
  makeShelter(STOP_1_X - 3.05, '#10B981');
  makeSign(STOP_1_X + 2.45, {
    code: 'PARADA 1 · AUTORIZADA',
    title: 'Escuela / Residencial',
    subtitle: 'GEOCERCA VERDE · ABORDAJE NFC',
    accent: '#10B981',
  });

  const p2 = makeGeofence(STOP_2_X, '#38BDF8');
  makeShelter(STOP_2_X - 3.35, '#38BDF8');
  makeSign(STOP_2_X + 3.85, {
    code: 'PARADA 2 · AUTORIZADA',
    title: 'Parque Industrial / Destino',
    subtitle: 'GEOCERCA AZUL · DESCENSO + TUTOR',
    accent: '#38BDF8',
  });

  const p3 = makeGeofence(STOP_3_X, '#EF4444');
  makeSign(STOP_3_X + 2.35, {
    code: 'PARADA 3 · NO AUTORIZADA',
    title: 'Zona Aislada',
    subtitle: 'ZONA DE RIESGO · SIN ALUMBRADO',
    accent: '#EF4444',
    isDanger: true,
  });

  // Bus + Visible 3D NFC Reader
  const busGroup = new THREE.Group();
  busGroup.position.set(BUS_AT_P1, 0, 1.05);

  const chassisMat = new THREE.MeshStandardMaterial({ color: '#151F32', roughness: 0.42, metalness: 0.5 });
  const bodyUpperMat = new THREE.MeshStandardMaterial({ color: '#E2E8F0', roughness: 0.28, metalness: 0.25 });
  const sideDecalMat = new THREE.MeshStandardMaterial({ map: createBusSideGraphicTexture(), roughness: 0.35 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: '#0B1628', transparent: true, opacity: 0.52 });

  const floorDeck = new THREE.Mesh(new THREE.BoxGeometry(8.8, 0.24, 2.42), chassisMat);
  floorDeck.position.set(0, 0.72, 0);
  busGroup.add(floorDeck);

  const lowerRear = new THREE.Mesh(new THREE.BoxGeometry(5.95, 0.88, 2.44), [
    chassisMat, chassisMat, chassisMat, chassisMat, sideDecalMat, sideDecalMat,
  ]);
  lowerRear.position.set(-1.425, 1.24, 0);
  lowerRear.castShadow = true;
  busGroup.add(lowerRear);

  const lowerFront = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.88, 2.44), chassisMat);
  lowerFront.position.set(3.675, 1.24, 0);
  busGroup.add(lowerFront);

  const leftBackWall = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.88, 0.14), chassisMat);
  leftBackWall.position.set(2.25, 1.24, -1.15);
  busGroup.add(leftBackWall);

  const seatMat = new THREE.MeshStandardMaterial({ color: '#1E3A5F', roughness: 0.75 });
  for (let sx = -3.4; sx <= 0.8; sx += 1.05) {
    [-0.72, 0.72].forEach((sz) => {
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.34, 0.56), seatMat);
      base.position.set(sx, 1.02, sz);
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.72, 0.54), seatMat);
      back.position.set(sx - 0.22, 1.44, sz);
      busGroup.add(base, back);
    });
  }

  const rwRear = new THREE.Mesh(new THREE.BoxGeometry(5.85, 1.15, 0.06), glassMat);
  rwRear.position.set(-1.42, 2.25, 1.2);
  const rwFront = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.15, 0.06), glassMat);
  rwFront.position.set(3.65, 2.25, 1.2);
  const lwFull = new THREE.Mesh(new THREE.BoxGeometry(8.5, 1.15, 0.06), glassMat);
  lwFull.position.set(0, 2.25, -1.2);
  const fw = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.28, 2.22), glassMat);
  fw.position.set(4.38, 2.22, 0);
  const rp = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.9, 2.42), bodyUpperMat);
  rp.position.set(-4.35, 2.05, 0);
  busGroup.add(rwRear, rwFront, lwFull, fw, rp);

  [-4.3, -2.5, -0.7, 1.5, 3.0, 4.32].forEach((px) => {
    [-1.18, 1.18].forEach((pz) => {
      const pil = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.22, 0.12), chassisMat);
      pil.position.set(px, 2.25, pz);
      busGroup.add(pil);
    });
  });

  const roof = new THREE.Mesh(new THREE.BoxGeometry(8.86, 0.34, 2.48), bodyUpperMat);
  roof.position.set(0, 2.98, 0);
  roof.castShadow = true;
  const roofStripe = new THREE.Mesh(
    new THREE.BoxGeometry(8.9, 0.09, 2.52),
    new THREE.MeshStandardMaterial({ color: '#10B981', emissive: '#059669', emissiveIntensity: 0.45 })
  );
  roofStripe.position.set(0, 2.86, 0);
  const hvac = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.28, 1.5), chassisMat);
  hvac.position.set(-0.6, 3.28, 0);
  const dest = new THREE.Mesh(
    new THREE.PlaneGeometry(1.75, 0.3),
    new THREE.MeshBasicMaterial({ map: createBusDestinationTexture('RUTA PULSO · U-04') })
  );
  dest.rotation.y = Math.PI / 2;
  dest.position.set(4.44, 2.94, 0);
  busGroup.add(roof, roofStripe, hvac, dest);

  const cabinLight = new THREE.PointLight('#E2E8F0', 1.2, 7.5, 1.4);
  cabinLight.position.set(1.2, 2.65, 0.2);
  busGroup.add(cabinLight);

  // Doors
  const doorFrameMat = new THREE.MeshStandardMaterial({ color: '#0F172A', roughness: 0.4, metalness: 0.6 });
  const doorGlassMat = new THREE.MeshPhysicalMaterial({ color: '#38BDF8', transparent: true, opacity: 0.34 });
  const makeDoorLeaf = () => {
    const leaf = new THREE.Group();
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.1, 0.08), doorFrameMat);
    top.position.y = 0.96;
    const bot = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.25, 0.08), doorFrameMat);
    bot.position.y = -0.88;
    const pane = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.65, 0.05), doorGlassMat);
    pane.position.y = 0.08;
    const strip = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 1.85, 0.09),
      new THREE.MeshStandardMaterial({ color: '#10B981', emissive: '#10B981', emissiveIntensity: 0.5 })
    );
    leaf.add(top, bot, pane, strip);
    return leaf;
  };
  const doorLeft = makeDoorLeaf();
  doorLeft.position.set(1.9, 1.78, 1.24);
  const doorRight = makeDoorLeaf();
  doorRight.position.set(2.6, 1.78, 1.24);
  busGroup.add(doorLeft, doorRight);

  // Headlights & Taillights
  const headlightCones: THREE.MeshBasicMaterial[] = [];
  const headlightSpots: THREE.SpotLight[] = [];
  const headlightBulbMats: THREE.MeshStandardMaterial[] = [];
  [-0.86, 0.86].forEach((lz) => {
    const bMat = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      emissive: new THREE.Color('#FEF9C3'),
      emissiveIntensity: 0.5,
    });
    headlightBulbMats.push(bMat);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.24, 0.38), bMat);
    lamp.position.set(4.42, 1.12, lz);
    busGroup.add(lamp);
    const cMat = new THREE.MeshBasicMaterial({
      color: '#FEF9C3',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    headlightCones.push(cMat);
    const beam = new THREE.Mesh(new THREE.ConeGeometry(1.7, 9.2, 18, 1, true), cMat);
    beam.rotation.z = Math.PI / 2;
    beam.position.set(9.05, 0.82, lz);
    busGroup.add(beam);
    const spot = new THREE.SpotLight('#FEF3C7', 0, 22, Math.PI * 0.24, 0.65, 1.4);
    spot.position.set(4.45, 1.12, lz);
    const target = new THREE.Object3D();
    target.position.set(13.5, 0, lz * 1.15);
    busGroup.add(target);
    spot.target = target;
    headlightSpots.push(spot);
    busGroup.add(spot);
  });

  const brakeLightMats: THREE.MeshStandardMaterial[] = [];
  [-0.9, 0.9].forEach((lz) => {
    const tMat = new THREE.MeshStandardMaterial({
      color: '#EF4444',
      emissive: new THREE.Color('#EF4444'),
      emissiveIntensity: 1.5,
    });
    brakeLightMats.push(tMat);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.34, 0.34), tMat);
    tail.position.set(-4.42, 1.18, lz);
    busGroup.add(tail);
  });

  // 4 Spinning Wheels
  const wheels: THREE.Group[] = [];
  const tireMat = new THREE.MeshStandardMaterial({ color: '#0F141D', roughness: 0.9 });
  const rimMat = new THREE.MeshStandardMaterial({ color: '#94A3B8', roughness: 0.35, metalness: 0.8 });
  [
    [-2.65, 1.24],
    [-2.65, -1.24],
    [2.85, 1.24],
    [2.85, -1.24],
  ].forEach(([wx, wz]) => {
    const wg = new THREE.Group();
    wg.position.set(wx, 0.48, wz);
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.32, 24), tireMat);
    tire.rotation.x = Math.PI / 2;
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.34, 16), rimMat);
    rim.rotation.x = Math.PI / 2;
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.06, 0.36), chassisMat);
    const s2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.48, 0.36), chassisMat);
    wg.add(tire, rim, s1, s2);
    wheels.push(wg);
    busGroup.add(wg);
  });

  // Prominent 3D NFC Reader Module on Bus Doorway
  const nfcGroup = new THREE.Group();
  nfcGroup.position.set(3.16, 1.52, 1.32);
  nfcGroup.rotation.y = 0.08;
  nfcGroup.add(
    new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.56, 0.14),
      new THREE.MeshStandardMaterial({ color: '#0F172A', roughness: 0.35, metalness: 0.75 })
    )
  );
  const padTex = createNfcPadTexture();
  const pad = new THREE.Mesh(
    new THREE.PlaneGeometry(0.36, 0.36),
    new THREE.MeshStandardMaterial({
      map: padTex,
      emissive: new THREE.Color('#38BDF8'),
      emissiveMap: padTex,
      emissiveIntensity: 0.65,
    })
  );
  pad.position.z = 0.075;
  nfcGroup.add(pad);

  const nfcHaloMat = new THREE.MeshStandardMaterial({
    color: '#38BDF8',
    emissive: new THREE.Color('#38BDF8'),
    emissiveIntensity: 2.2,
  });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.046, 16, 36), nfcHaloMat);
  halo.position.z = 0.08;
  nfcGroup.add(halo);

  const nfcHaloLight = new THREE.PointLight('#38BDF8', 3.0, 5.5, 1.6);
  nfcHaloLight.position.set(0, 0, 0.35);
  nfcGroup.add(nfcHaloLight);

  const shockwaves: ThreeBundle['shockwaves'] = [];
  for (let i = 0; i < 3; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: '#10B981',
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.24, 0.33, 40), mat);
    mesh.position.set(0, 0, 0.14);
    mesh.visible = false;
    nfcGroup.add(mesh);
    shockwaves.push({ mesh, mat });
  }
  busGroup.add(nfcGroup);
  scene.add(busGroup);

  // Characters
  const sofia = createCharacter({
    bodyColor: '#10B981',
    headColor: '#FDE68A',
    accentColor: '#34D399',
    scale: 0.9,
    hasBackpack: true,
    badgeName: 'Sofía M.',
    badgeSub: 'Escolar · NFC',
  });
  const tutor = createCharacter({
    bodyColor: '#38BDF8',
    headColor: '#E2E8F0',
    accentColor: '#38BDF8',
    scale: 1.06,
    hasBackpack: false,
    badgeName: 'Carlos M.',
    badgeSub: 'Tutor Verificado ✓',
  });
  const mateo = createCharacter({
    bodyColor: '#F59E0B',
    headColor: '#FDE68A',
    accentColor: '#FBBF24',
    scale: 0.92,
    hasBackpack: true,
    badgeName: 'Mateo R.',
    badgeSub: 'Escolar · NFC',
  });
  const ana = createCharacter({
    bodyColor: '#A855F7',
    headColor: '#F5D0FE',
    accentColor: '#D946EF',
    scale: 1.0,
    hasBackpack: false,
    badgeName: 'Ana L.',
    badgeSub: 'Turno Nocturno',
  });
  scene.add(sofia.group, tutor.group, mateo.group, ana.group);

  return {
    renderer,
    scene,
    camera,
    hemiLight,
    sunLight,
    fillLight,
    starsMat,
    streetLights,
    buildingWindowMats,
    shelterLightMats,
    geofences: { p1, p2, p3 },
    busGroup,
    wheels,
    doorLeft,
    doorRight,
    headlightCones,
    headlightSpots,
    headlightBulbMats,
    brakeLightMats,
    cabinLight,
    nfcHaloMat,
    nfcHaloLight,
    shockwaves,
    sofia,
    tutor,
    mateo,
    ana,
    dispose: () => {
      renderer.dispose();
    },
  };
}

function applyNightBlend(b: ThreeBundle, nf: number) {
  const skyDay = new THREE.Color('#6FA8DC');
  const skyNight = new THREE.Color('#040711');
  const fogDay = new THREE.Color('#8CC0EC');
  const fogNight = new THREE.Color('#060A15');

  b.scene.background = skyDay.clone().lerp(skyNight, nf);
  if (b.scene.fog instanceof THREE.FogExp2) {
    b.scene.fog.color.copy(fogDay).lerp(fogNight, nf);
    b.scene.fog.density = THREE.MathUtils.lerp(0.0052, 0.0155, nf);
  }
  b.hemiLight.intensity = THREE.MathUtils.lerp(1.65, 0.22, nf);
  b.hemiLight.color.set('#E0F2FE').lerp(new THREE.Color('#334155'), nf);
  b.hemiLight.groundColor.set('#475569').lerp(new THREE.Color('#090D16'), nf);
  b.sunLight.intensity = THREE.MathUtils.lerp(2.65, 0.2, nf);
  b.fillLight.intensity = THREE.MathUtils.lerp(0.65, 0.12, nf);
  b.starsMat.opacity = nf * 0.9;

  b.streetLights.forEach((sl) => {
    sl.pointLight.intensity = nf * 12.5;
    sl.bulbMat.emissiveIntensity = 0.1 + nf * 3.0;
    sl.coneMat.opacity = nf * 0.11;
  });
  b.buildingWindowMats.forEach((m) => (m.emissiveIntensity = 0.02 + nf * 1.05));
  b.shelterLightMats.forEach((m) => (m.emissiveIntensity = 0.45 + nf * 1.65));
  b.headlightCones.forEach((c) => (c.opacity = nf * 0.17));
  b.headlightSpots.forEach((s) => (s.intensity = nf * 28));
  b.headlightBulbMats.forEach((m) => (m.emissiveIntensity = 0.4 + nf * 3.0));
  b.cabinLight.intensity = 0.7 + nf * 2.8;
}

function setShockwaves(
  b: ThreeBundle,
  progress: number, // 0..1 when active, <0 inactive
  colorHex: string,
  subtle = false
) {
  b.shockwaves.forEach((sw, i) => {
    const localP = progress - i * 0.2;
    if (localP <= 0 || localP >= 1 || (subtle && i > 0)) {
      sw.mesh.visible = false;
      return;
    }
    sw.mesh.visible = true;
    sw.mat.color.set(colorHex);
    const ease = 1 - Math.pow(1 - localP, 2.2);
    const scale = 1 + ease * (subtle ? 1.4 : 3.8);
    sw.mesh.scale.set(scale, scale, 1);
    sw.mesh.position.z = 0.14 + ease * (subtle ? 0.35 : 1.15);
    sw.mat.opacity = (1 - localP) * (subtle ? 0.65 : 0.95);
  });
}

function applyDeterministicFrame(b: ThreeBundle, mode: Live3DMode, frame: number, width: number, height: number) {
  if (b.camera.aspect !== width / height) {
    b.camera.aspect = width / height;
    b.camera.updateProjectionMatrix();
  }
  b.renderer.setSize(width, height, false);

  const t = frame / 30;
  // Orbit geofence outer rings smoothly
  b.geofences.p1.outerRing.rotation.z = t * 0.6;
  b.geofences.p2.outerRing.rotation.z = t * 0.6;
  b.geofences.p3.outerRing.rotation.z = -t * 0.9;

  if (mode === 'day-tutor-zoom') {
    applyNightBlend(b, 0);

    // 1. Bus glides calmly from Parada 1 -> Parada 2 (frames 0..82) so presenter can explain live
    const driveP = interpolate(frame, [0, 82], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    });
    const busX = BUS_AT_P1 + (BUS_AT_P2 - BUS_AT_P1) * driveP;
    b.busGroup.position.x = busX;

    // Wheel spin strictly coupled to bus displacement
    const wheelAngle = -(busX - BUS_AT_P1) / 0.48;
    b.wheels.forEach((w) => (w.rotation.z = wheelAngle));

    const braking = frame >= 64 ? 2.4 : 0.65;
    b.brakeLightMats.forEach((m) => (m.emissiveIntensity = braking));

    // 2. Bus doors open cleanly at Parada 2 (frames 76..96)
    const doorOpen = interpolate(frame, [76, 96], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    });
    b.doorLeft.position.x = 1.9 - doorOpen * 0.62;
    b.doorRight.position.x = 2.6 + doorOpen * 0.62;

    // 3. Characters choreography (Sofía exits, scans NFC; Tutor Carlos scans NFC -> Green validation!)
    b.mateo.group.visible = false;
    b.ana.group.visible = false;

    const sofiaOutP = interpolate(frame, [92, 118], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    });
    b.sofia.group.visible = frame >= 92;
    b.sofia.group.position.set(
      THREE.MathUtils.lerp(BUS_AT_P2 + 2.25, STOP_2_X + 0.15, sofiaOutP),
      THREE.MathUtils.lerp(0.45, 0.22, sofiaOutP),
      THREE.MathUtils.lerp(2.05, 3.1, sofiaOutP)
    );
    b.sofia.group.rotation.y = Math.PI;
    const sofiaRaise = interpolate(frame, [118, 130, 152, 164], [0, 1, 1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    b.sofia.rightArm.rotation.x = -sofiaRaise * 1.35;
    b.sofia.nfcCard.visible = sofiaRaise > 0.2;
    const sofiaWalkSwing = sofiaOutP > 0 && sofiaOutP < 1 ? Math.sin(frame * 0.55) * 0.5 : 0;
    b.sofia.leftLeg.rotation.x = sofiaWalkSwing;
    b.sofia.rightLeg.rotation.x = -sofiaWalkSwing;

    // Tutor Carlos approaches NFC reader and scans!
    b.tutor.group.visible = true;
    const tutorStepP = interpolate(frame, [122, 152], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    });
    b.tutor.group.position.set(
      THREE.MathUtils.lerp(STOP_2_X + 1.55, BUS_AT_P2 + 3.25, tutorStepP),
      0.22,
      THREE.MathUtils.lerp(4.15, 3.02, tutorStepP)
    );
    b.tutor.group.rotation.y = Math.PI;
    const tutorRaise = interpolate(frame, [152, 166, 224, 240], [0, 1, 1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    b.tutor.rightArm.rotation.x = -tutorRaise * 1.35;
    b.tutor.nfcCard.visible = tutorRaise > 0.2;
    const tutorWalkSwing = tutorStepP > 0 && tutorStepP < 1 ? Math.sin(frame * 0.55) * 0.45 : 0;
    b.tutor.leftLeg.rotation.x = tutorWalkSwing;
    b.tutor.rightLeg.rotation.x = -tutorWalkSwing;

    // 4. 3D NFC Reader Halo + Expanding 3D Shockwave Rings + Parada 2 Geofence Blue -> Emerald!
    const validatedP = interpolate(frame, [162, 184], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const p2Color = new THREE.Color('#38BDF8').lerp(new THREE.Color('#10B981'), validatedP);
    b.geofences.p2.ringMat.color.copy(p2Color);
    b.geofences.p2.discMat.color.copy(p2Color);
    b.geofences.p2.outerMat.color.copy(p2Color);
    b.geofences.p2.beamMat.color.copy(p2Color);
    b.geofences.p2.discMat.opacity = 0.16 + validatedP * 0.16;
    b.geofences.p2.beamMat.opacity = 0.1 + validatedP * 0.14;

    if (frame >= 162) {
      const pulse = 0.5 + Math.sin(t * 6.5) * 0.5;
      b.nfcHaloMat.color.set('#10B981');
      b.nfcHaloMat.emissive.set('#34D399');
      b.nfcHaloMat.emissiveIntensity = 2.6 + pulse * 1.5;
      b.nfcHaloLight.color.set('#10B981');
      b.nfcHaloLight.intensity = 4.2 + pulse * 2.0;
      const waveLoop = ((frame - 162) % 42) / 42;
      setShockwaves(b, waveLoop, '#10B981', false);
    } else if (frame >= 122) {
      b.nfcHaloMat.color.set('#38BDF8');
      b.nfcHaloMat.emissive.set('#38BDF8');
      b.nfcHaloMat.emissiveIntensity = 3.0;
      const waveLoop = ((frame - 122) % 34) / 34;
      setShockwaves(b, waveLoop, '#38BDF8', false);
    } else {
      b.nfcHaloMat.color.set('#38BDF8');
      b.nfcHaloMat.emissive.set('#38BDF8');
      b.nfcHaloMat.emissiveIntensity = 1.8;
      setShockwaves(b, -1, '#38BDF8');
    }

    // 5. REAL 3D CAMERA FLY-IN ZOOM (360 frames / 12s paced calmly for live narration!)
    const zoomInP = interpolate(frame, [48, 148], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });
    const orbitDrift = interpolate(frame, [148, 360], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.sin),
    });

    // Shift look target slightly right during frames 240..295 for the native PhoneMockup on the right!
    const phoneRoomShift = interpolate(frame, [240, 295], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.25, 0.95, 0.35, 1),
    });

    const camStart = new THREE.Vector3(0, 20.5, 39.0);
    // Slightly left-3/4 angle so the Parada 2 sign sits cleanly on the right with ZERO pole occlusion!
    const camClose = new THREE.Vector3(-1.8 + orbitDrift * 1.6, 3.25 - orbitDrift * 0.25, 9.2 - orbitDrift * 0.6);
    const camPos = camStart.lerp(camClose, zoomInP);
    camPos.x += phoneRoomShift * 1.4;
    camPos.z += phoneRoomShift * 1.8;

    const tgtStart = new THREE.Vector3(0, 1.2, 1.4);
    const tgtClose = new THREE.Vector3(0.45, 1.5, 2.55);
    const tgtPos = tgtStart.lerp(tgtClose, zoomInP);
    tgtPos.x += phoneRoomShift * 2.1;

    b.camera.position.copy(camPos);
    b.camera.lookAt(tgtPos);
  } else {
    // =========================================================================
    // MODE: NIGHT SHIFT + PARADA 3 ALERT -> PROTOCOLO VIOLETA 3D NFC CLOSE-UP (360 frames / 12s)
    // =========================================================================
    applyNightBlend(b, 1);

    const isVioletPhase = frame >= 130;
    if (!isVioletPhase) {
      // Phase A (frames 0..130 / 4.3s): Bus stopped at dark isolated Parada 3 with flashing RED geofence & Mateo
      b.busGroup.position.x = BUS_AT_P3;
      b.doorLeft.position.x = 1.9 - 0.62;
      b.doorRight.position.x = 2.6 + 0.62;
      b.brakeLightMats.forEach((m) => (m.emissiveIntensity = 2.4));

      b.sofia.group.visible = false;
      b.tutor.group.visible = true;
      b.tutor.group.position.set(STOP_2_X + 0.6, 0.22, 4.15);
      b.ana.group.visible = false;

      b.mateo.group.visible = true;
      b.mateo.group.position.set(BUS_AT_P3 + 2.75, 0.22, 2.86);
      b.mateo.group.rotation.y = Math.PI;
      b.mateo.rightArm.rotation.x = -1.3;
      b.mateo.nfcCard.visible = true;

      // Rapid flashing red NFC halo + Parada 3 geofence
      const flash = Math.sin(t * 14) > 0 ? 1 : 0.2;
      b.nfcHaloMat.color.set('#EF4444');
      b.nfcHaloMat.emissive.set('#FF2442');
      b.nfcHaloMat.emissiveIntensity = 0.8 + flash * 4.2;
      b.nfcHaloLight.color.set('#EF4444');
      b.nfcHaloLight.intensity = 1.2 + flash * 6.0;
      b.geofences.p3.ringMat.opacity = 0.55 + flash * 0.45;
      b.geofences.p3.discMat.opacity = 0.18 + flash * 0.3;
      setShockwaves(b, (frame % 30) / 30, '#EF4444', false);

      // Smooth 3D camera zoom toward dark Parada 3!
      const p3Zoom = interpolate(frame, [0, 96], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.bezier(0.22, 1, 0.36, 1),
      });
      b.camera.position.lerpVectors(new THREE.Vector3(6.0, 15.0, 27.5), new THREE.Vector3(14.5, 4.4, 11.4), p3Zoom);
      b.camera.lookAt(
        new THREE.Vector3(8.0, 1.3, 2.0).lerp(new THREE.Vector3(13.8, 1.5, 2.8), p3Zoom)
      );
    } else {
      // Phase B (frames 130..360 / 7.7s): Protocolo Violeta — Real 3D Close-Up directly on NFC Reader & Ana L. inside calm night bus!
      b.busGroup.position.x = BUS_AT_NIGHT;
      b.doorLeft.position.x = 1.9;
      b.doorRight.position.x = 2.6;
      b.brakeLightMats.forEach((m) => (m.emissiveIntensity = 1.2));

      b.sofia.group.visible = false;
      b.mateo.group.visible = false;
      b.tutor.group.visible = false;

      // Ana L. inside calm illuminated doorway doing discreet double-tap on NFC reader
      b.ana.group.visible = true;
      b.ana.group.position.set(BUS_AT_NIGHT + 2.65, 0.76, 1.72);
      b.ana.group.rotation.y = 0.35;
      b.ana.nfcCardMat.emissive.set('#D946EF');

      // Discreet double-tap wave: Tap 1 (158..188), Tap 2 (192..238)
      const tap1 = interpolate(frame, [158, 170, 182, 190], [0, 0.9, 0.9, 0.28], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      });
      const tap2 = interpolate(frame, [190, 202, 230, 246], [0.28, 0.95, 0.95, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      });
      const armVal = frame < 190 ? tap1 : tap2;
      b.ana.rightArm.rotation.x = -armVal * 1.35;
      b.ana.nfcCard.visible = armVal > 0.2;

      // Subtle discreet amber/magenta pulse ONLY on NFC halo (NO flashing alarm!)
      const wave = 0.5 + Math.sin(t * 2.8) * 0.5;
      const discreet = new THREE.Color('#F59E0B').lerp(new THREE.Color('#D946EF'), wave);
      b.nfcHaloMat.color.copy(discreet);
      b.nfcHaloMat.emissive.copy(discreet);
      b.nfcHaloMat.emissiveIntensity = 1.0 + wave * 0.85;
      b.nfcHaloLight.color.copy(discreet);
      b.nfcHaloLight.intensity = 1.1 + wave * 0.7;

      if (frame >= 200) {
        const subtleLoop = ((frame - 200) % 52) / 52;
        setShockwaves(b, subtleLoop, '#D946EF', true);
      } else {
        setShockwaves(b, -1, '#D946EF', true);
      }

      // Razor-sharp REAL 3D camera zoom directly into the Bus NFC Reader & Ana L.!
      const zoomViolet = interpolate(frame, [130, 206], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.bezier(0.22, 1, 0.36, 1),
      });
      const sideShift = interpolate(frame, [248, 300], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.bezier(0.25, 0.95, 0.35, 1),
      });

      const readerWorldX = BUS_AT_NIGHT + 3.16;
      const readerWorldY = 1.52;
      const readerWorldZ = 1.05 + 1.32;

      const camFrom = new THREE.Vector3(readerWorldX + 4.8, 4.6, readerWorldZ + 9.2);
      const camTo = new THREE.Vector3(readerWorldX + 1.25, readerWorldY + 0.92, readerWorldZ + 4.05);
      const camPos = camFrom.lerp(camTo, zoomViolet);
      camPos.x += sideShift * 1.25;
      camPos.z += sideShift * 1.1;

      const tgtFrom = new THREE.Vector3(readerWorldX - 0.5, 1.55, readerWorldZ - 0.2);
      const tgtTo = new THREE.Vector3(readerWorldX - 0.25, readerWorldY + 0.32, readerWorldZ - 0.1);
      const tgtPos = tgtFrom.lerp(tgtTo, zoomViolet);
      tgtPos.x += sideShift * 1.45;

      b.camera.position.copy(camPos);
      b.camera.lookAt(tgtPos);
    }
  }

  b.renderer.render(b.scene, b.camera);
}

export const Live3DScene: React.FC<Live3DSceneProps> = ({ mode, frame, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bundleRef = useRef<ThreeBundle | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const bundle = buildWorld(canvas, width, height);
    bundleRef.current = bundle;
    applyDeterministicFrame(bundle, mode, frame, width, height);

    return () => {
      bundle.dispose();
      bundleRef.current = null;
    };
    // Build Three.js world once per mounted scene
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!bundleRef.current) return;
    applyDeterministicFrame(bundleRef.current, mode, frame, width, height);
  }, [mode, frame, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
};
