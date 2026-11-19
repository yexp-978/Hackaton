import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Easing, interpolate } from 'remotion';

export type HtmlScenarioMode = 'boarding' | 'tutor' | 'unauthorized' | 'violet';

interface HtmlWorld3DProps {
  mode: HtmlScenarioMode;
  frame: number;
  width: number;
  height: number;
}

/* =========================================================================
   EXACT ROUTE & STOP GEOMETRY FROM "RUTA PULSO NFC · Gemelo Digital 3D.html"
   ========================================================================= */
function makeLoop(A: number, B: number, R: number) {
  const sx = 2 * (A - R);
  const sz = 2 * (B - R);
  const arc = (Math.PI * R) / 2;
  const arcSeg = (cx: number, cz: number, p0: number) => ({
    len: arc,
    f: (u: number) => {
      const p = p0 - u / R;
      return {
        x: cx + R * Math.cos(p),
        z: cz + R * Math.sin(p),
        tx: Math.sin(p),
        tz: -Math.cos(p),
      };
    },
  });
  const segs = [
    { len: sx, f: (u: number) => ({ x: -A + R + u, z: B, tx: 1, tz: 0 }) },
    arcSeg(A - R, B - R, Math.PI / 2),
    { len: sz, f: (u: number) => ({ x: A, z: B - R - u, tx: 0, tz: -1 }) },
    arcSeg(A - R, -B + R, 0),
    { len: sx, f: (u: number) => ({ x: A - R - u, z: -B, tx: -1, tz: 0 }) },
    arcSeg(-A + R, -B + R, -Math.PI / 2),
    { len: sz, f: (u: number) => ({ x: -A, z: -B + R + u, tx: 0, tz: 1 }) },
    arcSeg(-A + R, B - R, -Math.PI),
  ];
  const L = segs.reduce((a, s) => a + s.len, 0);
  return {
    L,
    at(s: number) {
      let rem = ((s % L) + L) % L;
      for (const g of segs) {
        if (rem <= g.len) return g.f(rem);
        rem -= g.len;
      }
      return segs[0].f(0);
    },
  };
}

const LOOP = makeLoop(44.5, 22.5, 12.5);
const LL = LOOP.L;
const DOOR_X = 4.0;
const READER_X = 3.05;
const HALF_W = 1.25;
const NORTH_START = 64 + Math.PI * 12.5 + 20;

interface StopDef {
  id: 'P1' | 'P2' | 'P3';
  n: number;
  name: string;
  sub: string;
  color: string;
  doorX: number;
  side: 1 | -1;
  auth: boolean;
  s: number;
}

const STOPS: Record<'P1' | 'P2' | 'P3', StopDef> = {
  P1: {
    id: 'P1',
    n: 1,
    name: 'Escuela / Residencial',
    sub: 'Parada autorizada de abordaje',
    color: '#10B981',
    doorX: -18,
    side: 1,
    auth: true,
    s: -18 - DOOR_X + 32,
  },
  P2: {
    id: 'P2',
    n: 2,
    name: 'Parque Industrial / Destino',
    sub: 'Parada autorizada de descenso',
    color: '#3B82F6',
    doorX: 20,
    side: 1,
    auth: true,
    s: 20 - DOOR_X + 32,
  },
  P3: {
    id: 'P3',
    n: 3,
    name: 'Zona Aislada',
    sub: 'Parada NO autorizada · zona de riesgo',
    color: '#EF4444',
    doorX: 6,
    side: -1,
    auth: false,
    s: NORTH_START + (32 - (6 + DOOR_X)),
  },
};

const stopPt = (st: StopDef, along: number, out: number) => ({
  x: st.doorX + st.side * along,
  z: st.side * (25 + out),
});
const geoCenter = (st: StopDef) => stopPt(st, -0.6, 0.4);

function insideRR(x: number, z: number, A: number, B: number, R: number) {
  const dx = Math.max(Math.abs(x) - (A - R), 0);
  const dz = Math.max(Math.abs(z) - (B - R), 0);
  return Math.abs(x) <= A && Math.abs(z) <= B && dx * dx + dz * dz <= R * R;
}
const groundY = (x: number, z: number) =>
  !insideRR(x, z, 47, 25, 15) && insideRR(x, z, 52, 30, 20) ? 0.18 : 0;

function b2w(busX: number, busZ: number, busYaw: number, lx: number, lz: number) {
  const c = Math.cos(busYaw);
  const s = Math.sin(busYaw);
  return { x: busX + lx * c + lz * s, z: busZ - lx * s + lz * c };
}

interface PersonDef {
  id: 'sofia' | 'diego' | 'ana' | 'laura';
  name: string;
  short: string;
  role: string;
  color: string;
  badge: string;
  hair: string;
  pants: string;
  scale: number;
  bag?: string;
  longHair?: boolean;
  vest?: boolean;
  tutor?: boolean;
  seat?: [number, number];
}

const PEOPLE_LIST: PersonDef[] = [
  {
    id: 'sofia',
    name: 'Sofía M.',
    short: 'Sofía',
    role: 'Escolar',
    color: '#38BDF8',
    badge: '#10B981',
    hair: '#3a2214',
    pants: '#1e3a8a',
    scale: 0.84,
    bag: '#f43f5e',
    longHair: true,
    seat: [1.7, 0.55],
  },
  {
    id: 'diego',
    name: 'Diego R.',
    short: 'Diego',
    role: 'Escolar',
    color: '#FB923C',
    badge: '#10B981',
    hair: '#17120f',
    pants: '#334155',
    scale: 0.88,
    bag: '#2563eb',
    seat: [0.4, 0.55],
  },
  {
    id: 'ana',
    name: 'Ana L.',
    short: 'Ana',
    role: 'Turno Nocturno',
    color: '#2DD4BF',
    badge: '#F59E0B',
    hair: '#24150c',
    pants: '#1f2937',
    scale: 1,
    vest: true,
    longHair: true,
    seat: [-1.3, -0.55],
  },
  {
    id: 'laura',
    name: 'Laura M.',
    short: 'Laura',
    role: 'Tutora autorizada',
    color: '#F472B6',
    badge: '#3B82F6',
    hair: '#5b3820',
    pants: '#475569',
    scale: 1,
    longHair: true,
    tutor: true,
  },
];

interface PersonMesh {
  g: THREE.Group;
  legs: THREE.Group[];
  arms: THREE.Group[];
  card: THREE.Mesh;
}

interface GeoRig {
  fill: THREE.Mesh;
  ring: THREE.Mesh;
  rad: THREE.Mesh;
  wall: THREE.Mesh;
  base: THREE.Color;
}

interface LabelItem {
  id: string;
  el: HTMLDivElement;
}

interface HtmlWorldBundle {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  sky: THREE.Mesh;
  skyU: { top: { value: THREE.Color }; bot: { value: THREE.Color } };
  stars: THREE.Points;
  moon: THREE.Mesh;
  hemi: THREE.HemisphereLight;
  sun: THREE.DirectionalLight;
  bulbM: THREE.MeshStandardMaterial;
  poolM: THREE.MeshBasicMaterial;
  lampLights: THREE.PointLight[];
  brokenBulbM: THREE.MeshStandardMaterial;
  brokenPoolM: THREE.MeshBasicMaterial;
  brokenLight: THREE.PointLight | null;
  stopLights: THREE.PointLight[];
  stopPanelMats: THREE.MeshStandardMaterial[];
  signMats: Array<{ m: THREE.MeshStandardMaterial; auth: boolean }>;
  winMats: THREE.Material[];
  chimLight: THREE.Mesh;
  GEO: Record<'P1' | 'P2' | 'P3', GeoRig>;
  bus: THREE.Group;
  wheels: THREE.Group[];
  leaves: Array<{ hinge: THREE.Group; s: number }>;
  doorwayM: THREE.MeshStandardMaterial;
  stepLightM: THREE.MeshBasicMaterial;
  interior: THREE.MeshStandardMaterial;
  tailM: THREE.MeshStandardMaterial;
  headM: THREE.MeshStandardMaterial;
  spots: THREE.SpotLight[];
  beamM: THREE.MeshBasicMaterial;
  antM: THREE.MeshBasicMaterial;
  ant: THREE.Mesh;
  seats: Record<string, THREE.Group>;
  reader: {
    rd: THREE.Group;
    haloM: THREE.MeshBasicMaterial;
    barM: THREE.MeshBasicMaterial;
    glowM: THREE.SpriteMaterial;
    glow: THREE.Sprite;
    rl: THREE.PointLight;
  };
  nfcWaves: Array<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial }>;
  groundRipple: { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial };
  uplinkSprites: Array<{ sprite: THREE.Sprite; mat: THREE.SpriteMaterial }>;
  PM: Record<PersonDef['id'], PersonMesh>;
  labels: Record<string, LabelItem>;
  dispose: () => void;
}

function buildHtmlWorld(
  canvas: HTMLCanvasElement,
  labelHost: HTMLDivElement,
  width: number,
  height: number
): HtmlWorldBundle {
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
  renderer.toneMappingExposure = 1;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.5, 1000);
  scene.fog = new THREE.Fog(0xcfe2f0, 150, 430);

  const C = (c: string | number) => new THREE.Color(c);
  const Lam = (c: string, o: THREE.MeshLambertMaterialParameters = {}) =>
    new THREE.MeshLambertMaterial({ color: c, ...o });
  const Std = (c: string, o: THREE.MeshStandardMaterialParameters = {}) =>
    new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, metalness: 0, ...o });

  const FONT = 'Inter, "Segoe UI", Arial, sans-serif';
  function canvasTex(
    w: number,
    h: number,
    draw: (g: CanvasRenderingContext2D, W: number, H: number) => void,
    srgb = true
  ) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const g = c.getContext('2d')!;
    draw(g, w, h);
    const t = new THREE.CanvasTexture(c);
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }
  function rr(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    g.beginPath();
    g.moveTo(x + r, y);
    g.arcTo(x + w, y, x + w, y + h, r);
    g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r);
    g.arcTo(x, y, x + w, y, r);
    g.closePath();
  }

  const glowTex = canvasTex(128, 128, (g) => {
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.3, 'rgba(255,255,255,.5)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 128, 128);
  });
  const wallTex = canvasTex(4, 128, (g) => {
    const gr = g.createLinearGradient(0, 0, 0, 128);
    gr.addColorStop(0, 'rgba(255,255,255,0)');
    gr.addColorStop(1, 'rgba(255,255,255,1)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 4, 128);
  });
  const beamTex = canvasTex(4, 128, (g) => {
    const gr = g.createLinearGradient(0, 0, 0, 128);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 4, 128);
  });

  // Deterministic PRNG matching original HTML
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  /* --- Cielo, estrellas, luna --- */
  const skyU = { top: { value: C('#5d98d2') }, bot: { value: C('#d3e5f2') } };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(520, 32, 16),
    new THREE.ShaderMaterial({
      uniforms: skyU,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vP;
void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `uniform vec3 top;uniform vec3 bot;varying vec3 vP;
void main(){float h=smoothstep(-0.03,0.55,vP.y);gl_FragColor=vec4(mix(bot,top,h),1.0);
#include <colorspace_fragment>
}`,
    })
  );
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  scene.add(sky);

  const starG = new THREE.BufferGeometry();
  {
    const a: number[] = [];
    for (let i = 0; i < 900; i++) {
      const th = rnd() * Math.PI * 2;
      const ph = Math.acos(rnd() * 0.92 + 0.06);
      a.push(Math.sin(ph) * Math.cos(th) * 480, Math.cos(ph) * 480, Math.sin(ph) * Math.sin(th) * 480);
    }
    starG.setAttribute('position', new THREE.Float32BufferAttribute(a, 3));
  }
  const stars = new THREE.Points(
    starG,
    new THREE.PointsMaterial({
      color: '#e6ecff',
      size: 2.0,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      fog: false,
      depthWrite: false,
    })
  );
  stars.frustumCulled = false;
  scene.add(stars);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(9, 24, 16),
    new THREE.MeshBasicMaterial({ color: '#eef2ff', transparent: true, opacity: 0, fog: false })
  );
  moon.position.set(-170, 190, -330);
  scene.add(moon);

  /* --- Luces --- */
  const hemi = new THREE.HemisphereLight('#e3efff', '#5d6b4c', 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff1db', 2.7);
  sun.position.set(70, 110, 55);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -85, right: 85, top: 85, bottom: -85, near: 10, far: 320 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  scene.add(sun.target);

  /* --- Suelo, avenida circular, banquetas y paso peatonal --- */
  function rrShape(A: number, B: number, R: number) {
    const s = new THREE.Shape();
    s.moveTo(-A + R, -B);
    s.lineTo(A - R, -B);
    s.absarc(A - R, -B + R, R, -Math.PI / 2, 0, false);
    s.lineTo(A, B - R);
    s.absarc(A - R, B - R, R, 0, Math.PI / 2, false);
    s.lineTo(-A + R, B);
    s.absarc(-A + R, B - R, R, Math.PI / 2, Math.PI, false);
    s.lineTo(-A, -B + R);
    s.absarc(-A + R, -B + R, R, Math.PI, Math.PI * 1.5, false);
    return s;
  }
  function band(o: [number, number, number], i: [number, number, number] | null, depth = 0) {
    const s = rrShape(...o);
    if (i) s.holes.push(rrShape(...i));
    const g = depth
      ? new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: 28 })
      : new THREE.ShapeGeometry(s, 28);
    g.rotateX(-Math.PI / 2);
    return g;
  }
  const mesh = (g: THREE.BufferGeometry, m: THREE.Material, y = 0, cast = false, rec = true) => {
    const o = new THREE.Mesh(g, m);
    o.position.y = y;
    o.castShadow = cast;
    o.receiveShadow = rec;
    scene.add(o);
    return o;
  };

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), Lam('#71895f'));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const dirt = new THREE.Mesh(new THREE.PlaneGeometry(150, 64), Lam('#8c826b'));
  dirt.rotation.x = -Math.PI / 2;
  dirt.position.set(0, 0.012, -63);
  dirt.receiveShadow = true;
  scene.add(dirt);

  mesh(band([47, 25, 15], [37, 15, 5]), Lam('#2c3139'), 0.02);
  mesh(band([52, 30, 20], [47, 25, 15], 0.18), Lam('#b9bec6'), 0, false);
  mesh(band([37, 15, 5], [33, 11, 1], 0.18), Lam('#b9bec6'), 0, false);
  mesh(new THREE.ShapeGeometry(rrShape(33, 11, 1), 12).rotateX(-Math.PI / 2), Lam('#6c9a57'), 0.14);

  const lineM = Lam('#eef0f2');
  mesh(band([46.55, 24.55, 14.55], [46.35, 24.35, 14.35]), lineM, 0.03);
  mesh(band([37.65, 15.65, 5.65], [37.45, 15.45, 5.45]), lineM, 0.03);
  {
    const cl = makeLoop(42, 20, 10);
    const n = Math.floor(cl.L / 4);
    const im = new THREE.InstancedMesh(new THREE.BoxGeometry(2, 0.02, 0.16), Lam('#f2c14e'), n);
    const d = new THREE.Object3D();
    for (let i = 0; i < n; i++) {
      const p = cl.at(i * 4 + 1);
      d.position.set(p.x, 0.035, p.z);
      d.rotation.set(0, Math.atan2(-p.tz, p.tx), 0);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    im.receiveShadow = true;
    scene.add(im);
  }

  for (let k = 0; k < 9; k++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.02, 0.55), lineM);
    b.position.set(-7, 0.036, 15.6 + k * 1.1);
    b.receiveShadow = true;
    scene.add(b);
  }
  for (const z of [13.6, 26.4]) {
    const g = new THREE.Group();
    g.position.set(-9.2, 0.18, z);
    scene.add(g);
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 8), Std('#6b7280', { metalness: 0.5 }));
    p.position.y = 1.3;
    g.add(p);
    const s = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.62, 0.04),
      Std('#facc15', { emissive: '#facc15', emissiveIntensity: 0.1 })
    );
    s.position.y = 2.55;
    s.rotation.z = Math.PI / 4;
    g.add(s);
  }

  /* --- Edificios: Escuela, Residencial, Parque Industrial, Zona Aislada, Parque Central --- */
  const winMats: THREE.Material[] = [];
  function facade(cols: number, rows: number, base: string) {
    const cw = 32;
    const rh = 40;
    const W = cols * cw;
    const H = rows * rh;
    const map = canvasTex(W, H, (g) => {
      g.fillStyle = base;
      g.fillRect(0, 0, W, H);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const wx = x * cw + 7;
          const wy = y * rh + 9;
          g.fillStyle = 'rgba(0,0,0,.16)';
          g.fillRect(wx - 2, wy - 2, cw - 10, rh - 14);
          g.fillStyle = '#3d5068';
          g.fillRect(wx, wy, cw - 14, rh - 18);
          g.fillStyle = 'rgba(255,255,255,.2)';
          g.fillRect(wx, wy, cw - 14, 3);
        }
      }
    });
    const emi = canvasTex(W, H, (g) => {
      g.fillStyle = '#000';
      g.fillRect(0, 0, W, H);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (rnd() < 0.6) {
            g.fillStyle = rnd() < 0.8 ? '#ffd28a' : '#cfe8ff';
            g.fillRect(x * cw + 7, y * rh + 9, cw - 14, rh - 18);
          }
        }
      }
    });
    const m = new THREE.MeshLambertMaterial({ map, emissiveMap: emi, emissive: '#ffcf8a', emissiveIntensity: 0 });
    winMats.push(m);
    return m;
  }

  function building(w: number, h: number, d: number, x: number, z: number, color: string, roof = '#7b828c', rot = 0) {
    const fr = facade(Math.max(2, Math.round(w / 2.6)), Math.max(1, Math.round(h / 3.2)), color);
    const sd = facade(Math.max(2, Math.round(d / 2.6)), Math.max(1, Math.round(h / 3.2)), color);
    const rf = Lam(roof);
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [sd, sd, rf, rf, fr, fr]);
    b.position.set(x, h / 2, z);
    b.rotation.y = rot;
    b.castShadow = b.receiveShadow = true;
    scene.add(b);
    return b;
  }

  function roofText(txt: string, x: number, y: number, z: number, w: number, h: number, size = 110, color = '#ffffff') {
    const t = canvasTex(1024, Math.round((1024 * h) / w), (g, W, H) => {
      g.fillStyle = color;
      g.font = `900 ${size}px ${FONT}`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(txt, W / 2, H / 2);
    });
    const p = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshStandardMaterial({ map: t, transparent: true, roughness: 0.8, depthWrite: false })
    );
    p.rotation.x = -Math.PI / 2;
    p.position.set(x, y, z);
    scene.add(p);
  }

  // Escuela + bandera de México
  building(18, 6, 8, -21, 42, '#ead9b8', '#9c5b3c');
  roofText('ESCUELA', -21, 6.03, 42, 15, 4.2, 150, '#fff7e6');
  {
    const fl = new THREE.Group();
    fl.position.set(-11, 0, 36.5);
    scene.add(fl);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 9, 8), Std('#cbd5e1', { metalness: 0.6 }));
    pole.position.y = 4.5;
    pole.castShadow = true;
    fl.add(pole);
    const fg = new THREE.Group();
    fg.position.set(1.1, 8.1, 0);
    fl.add(fg);
    ['#006847', '#ffffff', '#ce1126'].forEach((c, i) => {
      const s = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 1.3), Std(c, { side: THREE.DoubleSide }));
      s.position.x = -0.72 + i * 0.72;
      fg.add(s);
    });
  }
  for (let i = 0; i < 7; i++) {
    const f = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.9, 0.06),
      Std('#64748b', { metalness: 0.4, transparent: true, opacity: 0.7 })
    );
    f.position.set(-30.5 + i * 2.8, 0.45, 36.2);
    scene.add(f);
  }

  // Casas residenciales
  const winM = Std('#26303d', { emissive: '#ffcf8a', emissiveIntensity: 0 });
  winMats.push(winM);
  function house(x: number, z: number, w: number, d: number, h: number, color: string, roofC: string, rot = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    scene.add(g);
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), Lam(color));
    b.position.y = h / 2;
    b.castShadow = b.receiveShadow = true;
    g.add(b);
    const m = Math.max(w, d);
    const r = new THREE.Mesh(
      new THREE.ConeGeometry((m / 2 + 0.5) * Math.SQRT2, h * 0.65, 4),
      Lam(roofC, { flatShading: true })
    );
    r.rotation.y = Math.PI / 4;
    r.scale.set((w + 1) / (m + 1), 1, (d + 1) / (m + 1));
    r.position.y = h + h * 0.325;
    r.castShadow = true;
    g.add(r);
    for (const s of [-1, 1]) {
      const wn = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.8), winM);
      wn.position.set(s * w * 0.25, h * 0.55, -d / 2 - 0.01);
      wn.rotation.y = Math.PI;
      g.add(wn);
    }
    const dr = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.6), Lam('#5b4636'));
    dr.position.set(0, 0.8, -d / 2 - 0.012);
    dr.rotation.y = Math.PI;
    g.add(dr);
  }
  house(-44, 40, 6, 5, 3.4, '#e9cba7', '#b45b44');
  house(-36, 46, 5.5, 5, 3.2, '#c9d8e6', '#4f6478');
  house(-50, 48, 6, 5.5, 3.6, '#dbe5c6', '#8a5a3b');
  house(-62, 14, 6, 6, 3.4, '#f0d9c8', '#a8553f', Math.PI / 2);
  house(-62, 0, 5.5, 6, 3.2, '#d7dfe8', '#596b80', Math.PI / 2);
  house(-63, -14, 6, 5, 3.4, '#e5d7b8', '#8b4a37', Math.PI / 2);
  house(-56, 28, 5, 5, 3, '#d6c4e0', '#6d4f7a');

  // Parque Industrial + chimenea + torre de agua
  building(24, 5.5, 12, 25, 47, '#aab4be', '#8994a0');
  for (let i = 0; i < 4; i++) {
    const pr = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 11.4, 3), Lam('#8f9aa6', { flatShading: true }));
    pr.rotation.x = -Math.PI / 2;
    pr.position.set(16 + i * 6, 5.5 + 0.75, 47);
    pr.castShadow = true;
    scene.add(pr);
  }
  building(15, 5, 11, 50, 45, '#9fb0b8', '#7d8a94');
  roofText('PARQUE INDUSTRIAL', 50, 5.03, 45, 13, 3.2, 92, '#e8f1ff');
  let chimLight!: THREE.Mesh;
  {
    const ch = new THREE.Group();
    ch.position.set(39, 0, 52);
    scene.add(ch);
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(
        new THREE.CylinderGeometry(0.62 - i * 0.04, 0.68 - i * 0.04, 4, 16),
        Lam(i % 2 ? '#f3f4f6' : '#c2410c')
      );
      c.position.y = 2 + i * 4;
      c.castShadow = true;
      ch.add(c);
    }
    chimLight = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshBasicMaterial({ color: '#ff2d2d' }));
    chimLight.position.y = 16.3;
    ch.add(chimLight);
  }
  {
    const tw = new THREE.Group();
    tw.position.set(58, 0, 30);
    scene.add(tw);
    const lm = Std('#64748b', { metalness: 0.5 });
    for (const [a, b] of [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ]) {
      const l = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 8, 6), lm);
      l.position.set(a * 1.2, 4, b * 1.2);
      tw.add(l);
    }
    const tk = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 3, 20), Lam('#dfe6ec'));
    tk.position.y = 9.5;
    tk.castShadow = true;
    tw.add(tk);
  }

  // Oficinas + fondo urbano + cerros
  building(10, 16, 10, 68, -12, '#cfd6de', '#7d8590');
  building(12, 11, 12, 70, 9, '#b9c4cf', '#6f7a86');
  building(9, 8, 9, 64, 24, '#d9d2c6', '#837766');

  const farM = Lam('#7f8ea0');
  for (let i = 0; i < 14; i++) {
    const h = 8 + rnd() * 22;
    const w = 8 + rnd() * 12;
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 8 + rnd() * 8), farM);
    b.position.set(-150 + i * 24 + rnd() * 8, h / 2, 105 + rnd() * 30);
    scene.add(b);
  }
  const hillM = Lam('#8a96a3', { flatShading: true });
  [
    [-200, -260, 95, 48],
    [-60, -290, 120, 60],
    [110, -270, 100, 44],
    [260, -220, 90, 40],
    [-300, -120, 80, 36],
    [320, 40, 90, 38],
  ].forEach(([x, z, r, h]) => {
    const c = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), hillM);
    c.position.set(x, h / 2 - 2, z);
    scene.add(c);
  });

  // Zona Aislada: malla ciclónica, árboles secos y bodega abandonada
  {
    const fenceTex = canvasTex(128, 128, (g) => {
      g.strokeStyle = 'rgba(180,186,196,.95)';
      g.lineWidth = 3;
      for (let i = -128; i < 256; i += 22) {
        g.beginPath();
        g.moveTo(i, 0);
        g.lineTo(i + 128, 128);
        g.stroke();
        g.beginPath();
        g.moveTo(i + 128, 0);
        g.lineTo(i, 128);
        g.stroke();
      }
    });
    fenceTex.wrapS = fenceTex.wrapT = THREE.RepeatWrapping;
    fenceTex.repeat.set(36, 1);
    const fm = new THREE.MeshStandardMaterial({
      map: fenceTex,
      transparent: true,
      alphaTest: 0.3,
      side: THREE.DoubleSide,
      roughness: 0.8,
      metalness: 0.3,
    });
    const fp = new THREE.Mesh(new THREE.PlaneGeometry(80, 2), fm);
    fp.position.set(-2, 1, -33.5);
    scene.add(fp);
    const pm = Std('#6b7280', { metalness: 0.6 });
    for (let x = -42; x <= 38; x += 4) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.2, 6), pm);
      p.position.set(x, 1.1, -33.5);
      scene.add(p);
    }
    const bm = Lam('#4a3b2c');
    [
      [-30, -42],
      [-4, -52],
      [18, -40],
      [34, -56],
      [-46, -58],
      [6, -70],
    ].forEach(([x, z], i) => {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      g.rotation.y = i * 1.3;
      scene.add(g);
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 3.4, 6), bm);
      t.position.y = 1.7;
      t.castShadow = true;
      g.add(t);
      for (let k = 0; k < 3; k++) {
        const br = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.08, 1.6, 5), bm);
        br.position.set(Math.cos(k * 2.1) * 0.4, 2.8 + k * 0.25, Math.sin(k * 2.1) * 0.4);
        br.rotation.set(Math.sin(k * 2.1) * 0.8, 0, -Math.cos(k * 2.1) * 0.8);
        br.castShadow = true;
        g.add(br);
      }
    });
    const sh = new THREE.Mesh(new THREE.BoxGeometry(7, 3.2, 5), Lam('#5d6168'));
    sh.position.set(-16, 1.6, -47);
    sh.castShadow = sh.receiveShadow = true;
    scene.add(sh);
    const shr = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.12, 5.6), Lam('#4a4e55'));
    shr.position.set(-16, 3.35, -47);
    shr.rotation.z = 0.08;
    scene.add(shr);
    for (const x of [-18, -14]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.9), Lam('#0b0d10'));
      w.position.set(x, 1.9, -44.49);
      scene.add(w);
    }
  }

  // Parque central con fuente
  {
    const pm = Lam('#d8d2c2');
    const a = new THREE.Mesh(new THREE.BoxGeometry(64, 0.03, 1.6), pm);
    a.position.set(0, 0.155, 0);
    a.receiveShadow = true;
    scene.add(a);
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.03, 21), pm);
    b.position.set(0, 0.156, 0);
    b.receiveShadow = true;
    scene.add(b);
    const pl = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 0.06, 40), pm);
    pl.position.set(0, 0.16, 0);
    pl.receiveShadow = true;
    scene.add(pl);
    const fo = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2, 0.55, 28), Lam('#a8a29e'));
    fo.position.set(0, 0.45, 0);
    fo.castShadow = true;
    scene.add(fo);
    const wa = new THREE.Mesh(
      new THREE.CylinderGeometry(1.55, 1.55, 0.05, 28),
      Std('#38bdf8', { roughness: 0.1, metalness: 0.2, emissive: '#0ea5e9', emissiveIntensity: 0.15 })
    );
    wa.position.set(0, 0.71, 0);
    scene.add(wa);
    const co = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 1.6, 10), Lam('#d6d3d1'));
    co.position.set(0, 1.4, 0);
    co.castShadow = true;
    scene.add(co);
  }

  // Árboles instanciados
  {
    const pts: Array<[number, number, number, number]> = [];
    for (const x of [-28, -21, -14, -8, 8, 14, 21, 28]) {
      for (const z of [-6.5, 6.5]) {
        pts.push([x + (rnd() - 0.5) * 2, z + (rnd() - 0.5) * 1.5, 0.14, 0.8 + rnd() * 0.45]);
      }
    }
    [
      [-40, 52],
      [-47, 36],
      [-32, 52],
      [-58, 34],
      [-68, 6],
      [-68, -8],
      [60, -28],
      [74, -2],
      [56, 16],
      [-56, -24],
      [30, 58],
      [-6, 52],
      [8, 48],
    ].forEach(([x, z]) => pts.push([x, z, 0, 0.9 + rnd() * 0.5]));
    const tg = new THREE.CylinderGeometry(0.14, 0.2, 1.7, 6);
    tg.translate(0, 0.85, 0);
    const cg = new THREE.IcosahedronGeometry(1.45, 0);
    cg.translate(0, 2.75, 0);
    const ti = new THREE.InstancedMesh(tg, Lam('#6b4a2f'), pts.length);
    const ci = new THREE.InstancedMesh(cg, new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true }), pts.length);
    const d = new THREE.Object3D();
    const col = new THREE.Color();
    const greens = ['#4f8a46', '#5c9a4e', '#46803f', '#6aa557'];
    pts.forEach(([x, z, y, s], i) => {
      d.position.set(x, y, z);
      d.rotation.set(0, rnd() * 6, 0);
      d.scale.setScalar(s);
      d.updateMatrix();
      ti.setMatrixAt(i, d.matrix);
      ci.setMatrixAt(i, d.matrix);
      col.set(greens[i % 4]);
      ci.setColorAt(i, col);
    });
    if (ci.instanceColor) ci.instanceColor.needsUpdate = true;
    ti.castShadow = ci.castShadow = true;
    ci.receiveShadow = true;
    scene.add(ti, ci);
  }

  /* --- Alumbrado público --- */
  const bulbM = Std('#fff6dc', { emissive: '#ffd48a', emissiveIntensity: 0 });
  const poolM = new THREE.MeshBasicMaterial({
    map: glowTex,
    color: '#ffcf8a',
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const lampLights: THREE.PointLight[] = [];
  const brokenBulbM = Std('#fff6dc', { emissive: '#ffd48a', emissiveIntensity: 0 });
  const brokenPoolM = poolM.clone();
  let brokenLight: THREE.PointLight | null = null;

  function lamp(x: number, z: number, fx: number, fz: number, real: boolean, broken = false) {
    const g = new THREE.Group();
    g.position.set(x, 0.18, z);
    g.rotation.y = Math.atan2(fx, fz);
    scene.add(g);
    const pm = Std('#3b4352', { metalness: 0.5, roughness: 0.5 });
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 6.3, 8), pm);
    p.position.y = 3.15;
    p.castShadow = true;
    g.add(p);
    const a = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1.9), pm);
    a.position.set(0, 6.2, 0.9);
    g.add(a);
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.16, 0.62), pm);
    h.position.set(0, 6.12, 1.8);
    g.add(h);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.04, 0.48), broken ? brokenBulbM : bulbM);
    b.position.set(0, 6.03, 1.8);
    g.add(b);
    const hx = x + fx * 1.8;
    const hz = z + fz * 1.8;
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(13, 13), broken ? brokenPoolM : poolM);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(hx, 0.205, hz);
    pool.renderOrder = 1;
    scene.add(pool);
    if (real || broken) {
      const l = new THREE.PointLight('#ffd9a0', 0, 26, 1.6);
      l.position.set(hx, 5.7, hz);
      scene.add(l);
      if (broken) brokenLight = l;
      else lampLights.push(l);
    }
  }
  [-44, -30, -6, 6, 32, 45].forEach((x) => lamp(x, 28.4, 0, -1, [-30, 6, 32].includes(x)));
  lamp(50.4, 0, -1, 0, false);
  lamp(-50.4, 0, 1, 0, false);
  [-22, 0, 22].forEach((x) => lamp(x, 13.3, 0, 1, false));
  lamp(-24, -28.4, 0, 1, false, true);

  /* --- Paradas y letreros 3D --- */
  const stopLights: THREE.PointLight[] = [];
  const stopPanelMats: THREE.MeshStandardMaterial[] = [];
  const signMats: Array<{ m: THREE.MeshStandardMaterial; auth: boolean }> = [];

  function signTexture(st: StopDef) {
    return canvasTex(512, 384, (g, W, H) => {
      g.fillStyle = '#0b1220';
      rr(g, 0, 0, W, H, 34);
      g.fill();
      g.fillStyle = st.color;
      rr(g, 0, 0, W, 128, 34);
      g.fill();
      g.fillRect(0, 90, W, 38);
      g.fillStyle = '#fff';
      g.font = `900 72px ${FONT}`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(`PARADA ${st.n}`, W / 2, 68);
      g.font = `800 ${st.name.length > 18 ? 38 : 46}px ${FONT}`;
      g.fillText(st.name, W / 2, 190);
      g.fillStyle = st.auth ? '#a7f3d0' : '#fecaca';
      g.font = `700 31px ${FONT}`;
      g.fillText(st.auth ? (st.n === 1 ? '✓ Abordaje autorizado' : '✓ Descenso autorizado') : '✕ No autorizada', W / 2, 262);
      g.fillStyle = '#94a3b8';
      g.font = `600 26px ${FONT}`;
      g.fillText('RUTA PULSO · NFC', W / 2, 332);
    });
  }

  Object.values(STOPS).forEach((st) => {
    const g = new THREE.Group();
    g.position.set(st.doorX, 0.18, st.side * 25);
    g.rotation.y = st.side > 0 ? 0 : Math.PI;
    scene.add(g);
    const frame = Std(st.auth ? '#334155' : '#4b4f57', { metalness: 0.5, roughness: 0.45 });
    const roofM = st.auth ? Std('#e2e8f0', { roughness: 0.5 }) : Lam('#5b5f66');
    const cx = -1.8;
    for (const [ax, az] of [
      [-1.95, 1.75],
      [1.95, 1.75],
      [-1.95, 3.5],
      [1.95, 3.5],
    ]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.5, 8), frame);
      p.position.set(cx + ax, 1.25, az);
      p.castShadow = true;
      g.add(p);
    }
    const roof = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.12, 2.1), roofM);
    roof.position.set(cx, 2.55, 2.6);
    if (!st.auth) {
      roof.rotation.z = 0.06;
      roof.scale.x = 0.82;
      roof.position.x = cx - 0.35;
    }
    roof.castShadow = true;
    g.add(roof);
    const acc = new THREE.Mesh(
      new THREE.BoxGeometry(4.3, 0.1, 0.05),
      Std(st.color, { emissive: st.color, emissiveIntensity: st.auth ? 0.6 : 0.25 })
    );
    acc.position.set(cx, 2.47, 1.55);
    g.add(acc);
    if (st.auth) {
      const gl = new THREE.Mesh(
        new THREE.BoxGeometry(4.1, 2.0, 0.04),
        new THREE.MeshStandardMaterial({
          color: '#bfe3ff',
          transparent: true,
          opacity: 0.22,
          roughness: 0.05,
          metalness: 0.2,
          depthWrite: false,
        })
      );
      gl.position.set(cx, 1.35, 3.55);
      g.add(gl);
      const pm = Std('#e8f6ff', { emissive: '#e8f6ff', emissiveIntensity: 0 });
      stopPanelMats.push(pm);
      const lp = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.03, 0.5), pm);
      lp.position.set(cx, 2.485, 2.6);
      g.add(lp);
      const l = new THREE.PointLight('#e9f5ff', 0, 16, 1.6);
      const w = stopPt(st, -1.8, 2.4);
      l.position.set(w.x, 2.3, w.z);
      scene.add(l);
      stopLights.push(l);
      const adM = Std(st.color, { emissive: st.color, emissiveIntensity: 0 });
      const ad = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.7), adM);
      ad.position.set(cx + 1.25, 1.35, 3.52);
      ad.rotation.y = Math.PI;
      g.add(ad);
      stopPanelMats.push(adM);
    } else {
      const gl = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 1.4, 0.04),
        new THREE.MeshStandardMaterial({ color: '#9ca3af', transparent: true, opacity: 0.18, depthWrite: false })
      );
      gl.position.set(cx - 1.1, 1.0, 3.55);
      gl.rotation.z = 0.12;
      g.add(gl);
    }
    const bench = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.08, 0.5), Std(st.auth ? '#8b5e3c' : '#57534e'));
    bench.position.set(cx, 0.5, 3.15);
    bench.castShadow = true;
    g.add(bench);
    for (const bx of [-1.3, 1.3]) {
      const lg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.4), frame);
      lg.position.set(cx + bx, 0.25, 3.15);
      g.add(lg);
    }
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 3.9, 8), frame);
    pole.position.set(3.6, 1.95, 1.3);
    pole.castShadow = true;
    g.add(pole);
    const tx = signTexture(st);
    const sm = new THREE.MeshStandardMaterial({
      map: tx,
      emissiveMap: tx,
      emissive: '#ffffff',
      emissiveIntensity: 0.15,
      roughness: 0.55,
    });
    signMats.push({ m: sm, auth: st.auth });
    const side = Std('#0b1220');
    const sign = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.42, 0.08), [side, side, side, side, sm, sm]);
    sign.position.set(3.6, 3.35, 1.3);
    sign.castShadow = true;
    g.add(sign);
    if (!st.auth) {
      const tr = new THREE.Mesh(
        new THREE.CylinderGeometry(0.42, 0.42, 0.04, 3),
        Std('#facc15', { emissive: '#facc15', emissiveIntensity: 0.25 })
      );
      tr.rotation.x = Math.PI / 2;
      tr.rotation.y = Math.PI;
      tr.position.set(3.6, 4.45, 1.3);
      g.add(tr);
    }
  });

  /* --- Geocercas luminosas --- */
  const GEO = {} as Record<'P1' | 'P2' | 'P3', GeoRig>;
  Object.values(STOPS).forEach((st) => {
    const c = geoCenter(st);
    const R = 5.8;
    const grp = new THREE.Group();
    grp.position.set(c.x, 0, c.z);
    scene.add(grp);
    const mk = (geo: THREE.BufferGeometry, op: number, y: number, rot = true, map: THREE.Texture | null = null) => {
      const m = new THREE.MeshBasicMaterial({
        color: st.color,
        transparent: true,
        opacity: op,
        depthWrite: false,
        side: THREE.DoubleSide,
        toneMapped: false,
        map,
      });
      const o = new THREE.Mesh(geo, m);
      if (rot) o.rotation.x = -Math.PI / 2;
      o.position.y = y;
      o.renderOrder = 3;
      grp.add(o);
      return o;
    };
    const fill = mk(new THREE.CircleGeometry(R, 64), 0.16, 0.215);
    const ring = mk(new THREE.RingGeometry(R - 0.24, R, 96), 0.9, 0.225);
    const rad = mk(new THREE.RingGeometry(0.9, 1, 96), 0.5, 0.23);
    const wall = mk(new THREE.CylinderGeometry(R, R, 1.7, 96, 1, true), 0.34, 0.85, false, wallTex);
    GEO[st.id] = { fill, ring, rad, wall, base: C(st.color) };
  });

  /* --- Autobús Unidad 04 · Ruta R-12 + Lector NFC 3D --- */
  const bus = new THREE.Group();
  scene.add(bus);
  const white = Std('#eef2f6', { roughness: 0.42, metalness: 0.12 });
  const dark = Std('#1a202b', { roughness: 0.7 });
  const trim = Std('#0f172a', { roughness: 0.5, metalness: 0.3 });
  const emer = Std('#10B981', { roughness: 0.35, emissive: '#10B981', emissiveIntensity: 0.35 });
  const glass = new THREE.MeshStandardMaterial({
    color: '#0c1826',
    roughness: 0.06,
    metalness: 0.5,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });
  const interior = new THREE.MeshStandardMaterial({
    color: '#3a4556',
    roughness: 0.9,
    side: THREE.BackSide,
    emissive: '#ffdcaa',
    emissiveIntensity: 0,
  });
  const addB = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, cast = true, par: THREE.Object3D = bus) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = cast;
    m.receiveShadow = true;
    par.add(m);
    return m;
  };
  const Bx = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);

  addB(Bx(11, 1.3, 2.5), white, 0, 1.1, 0);
  addB(Bx(11.04, 0.32, 2.54), dark, 0, 0.56, 0);
  addB(Bx(11.03, 0.13, 2.52), emer, 0, 1.62, 0);
  addB(Bx(10.7, 0.96, 2.36), interior, 0, 2.25, 0, false);
  const gl = addB(Bx(10.96, 1.0, 2.48), glass, 0, 2.25, 0, false);
  gl.renderOrder = 2;
  for (const x of [-3.9, -2.3, -0.7, 0.9, 2.5, 3.42, 4.58]) {
    for (const z of [-1.245, 1.245]) {
      if (z > 0 && (x === 3.42 || x === 4.58)) continue;
      addB(Bx(0.17, 1.0, 0.07), white, x, 2.25, z);
    }
  }
  addB(Bx(0.14, 1.0, 2.5), white, -5.43, 2.25, 0);
  for (const z of [-1.2, 1.2]) addB(Bx(0.16, 1.0, 0.12), white, 5.42, 2.25, z);
  addB(Bx(11, 0.42, 2.5), white, 0, 2.96, 0);
  addB(Bx(10.4, 0.1, 2.2), white, 0, 3.22, 0);
  addB(Bx(2.6, 0.32, 1.5), Std('#cfd6de', { metalness: 0.3 }), -1.2, 3.43, 0);
  addB(Bx(0.07, 0.64, 2.42), trim, 5.53, 0.98, 0);
  addB(Bx(0.28, 0.26, 2.54), dark, 5.56, 0.55, 0);
  addB(Bx(0.24, 0.26, 2.54), dark, -5.55, 0.55, 0);

  const headM = Std('#fff7df', { emissive: '#fff2cf', emissiveIntensity: 0.25 });
  for (const z of [-0.82, 0.82]) addB(Bx(0.05, 0.22, 0.46), headM, 5.575, 0.98, z, false);
  const tailM = Std('#7f1d1d', { emissive: '#ff2a2a', emissiveIntensity: 0.5 });
  for (const z of [-0.95, 0.95]) addB(Bx(0.05, 0.32, 0.28), tailM, -5.56, 1.25, z, false);

  // Letrero LED frontal
  const led = canvasTex(512, 80, (g, W, H) => {
    g.fillStyle = '#120c02';
    g.fillRect(0, 0, W, H);
    g.fillStyle = '#ffb020';
    g.font = `800 46px ${FONT}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('R-12 · ESCOLAR / LABORAL', W / 2, H / 2 + 2);
  });
  const lp = new THREE.Mesh(
    new THREE.PlaneGeometry(2.1, 0.32),
    new THREE.MeshStandardMaterial({ map: led, emissiveMap: led, emissive: '#ffffff', emissiveIntensity: 0.9 })
  );
  lp.rotation.y = Math.PI / 2;
  lp.position.set(5.512, 2.95, 0);
  bus.add(lp);

  // Rotulación lateral
  const deco = canvasTex(1024, 128, (g, W, H) => {
    g.fillStyle = '#0f172a';
    g.font = `900 62px ${FONT}`;
    g.textBaseline = 'middle';
    g.fillText('RUTA PULSO', 24, H / 2 + 2);
    g.fillStyle = '#059669';
    g.fillText('NFC', 456, H / 2 + 2);
    g.fillStyle = '#334155';
    g.font = `800 50px ${FONT}`;
    g.textAlign = 'right';
    g.fillText('UNIDAD 04', W - 24, H / 2 + 2);
  });
  for (const s of [1, -1]) {
    const dp = new THREE.Mesh(
      new THREE.PlaneGeometry(5.6, 0.7),
      new THREE.MeshStandardMaterial({ map: deco, transparent: true, roughness: 0.5 })
    );
    dp.position.set(-1.4, 1.18, s * 1.256);
    if (s < 0) dp.rotation.y = Math.PI;
    bus.add(dp);
  }
  for (const z of [-1, 1]) {
    addB(Bx(0.5, 0.05, 0.05), trim, 5.62, 2.35, z * 1.38, false);
    addB(Bx(0.08, 0.42, 0.22), trim, 5.82, 2.15, z * 1.55);
  }

  // Ruedas giratorias
  const wheels: THREE.Group[] = [];
  const tireM = Std('#15181d', { roughness: 0.9 });
  const hubM = Std('#c7ccd3', { metalness: 0.6, roughness: 0.35 });
  const spM = Std('#4b5563');
  for (const x of [3.55, -3.45]) {
    for (const z of [-1.13, 1.13]) {
      const w = new THREE.Group();
      w.position.set(x, 0.5, z);
      bus.add(w);
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.36, 24), tireM);
      t.rotation.x = Math.PI / 2;
      t.castShadow = true;
      w.add(t);
      const h = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.38, 16), hubM);
      h.rotation.x = Math.PI / 2;
      w.add(h);
      for (let i = 0; i < 3; i++) {
        const sp = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.07, 0.39), spM);
        sp.rotation.z = (i * Math.PI) / 3;
        w.add(sp);
      }
      wheels.push(w);
    }
  }

  // Puerta abatible + escalón iluminado
  const doorwayM = Std('#0d1117', { emissive: '#ffd9a8', emissiveIntensity: 0 });
  addB(Bx(1.12, 2.2, 0.02), doorwayM, DOOR_X, 1.55, 1.254, false);
  addB(Bx(1.1, 0.07, 0.34), Std('#94a3b8', { metalness: 0.5 }), DOOR_X, 0.45, 1.36, false);
  const stepLightM = new THREE.MeshBasicMaterial({ color: '#34d399', transparent: true, opacity: 0, toneMapped: false });
  addB(Bx(1.0, 0.03, 0.05), stepLightM, DOOR_X, 0.5, 1.5, false);
  const doorM = Std('#d7dde4', { metalness: 0.35, roughness: 0.4 });
  const leaves: Array<{ hinge: THREE.Group; s: number }> = [];
  for (const s of [-1, 1]) {
    const hinge = new THREE.Group();
    hinge.position.set(DOOR_X + s * 0.57, 1.55, 1.29);
    bus.add(hinge);
    const lf = new THREE.Mesh(new THREE.BoxGeometry(0.56, 2.16, 0.05), doorM);
    lf.position.x = -s * 0.28;
    lf.castShadow = true;
    hinge.add(lf);
    const lg = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.05, 0.06), glass);
    lg.position.set(-s * 0.28, 0.4, 0);
    hinge.add(lg);
    leaves.push({ hinge, s });
  }

  // Chofer
  const drv = new THREE.Group();
  drv.position.set(4.55, 0, -0.55);
  bus.add(drv);
  const dt = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.34, 3, 8), Std('#1e3a5f'));
  dt.position.y = 1.85;
  const dh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), Std('#c99474'));
  dh.position.y = 2.32;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), Std('#10B981'));
  cap.position.y = 2.36;
  drv.add(dt, dh, cap);

  // Antena superior
  addB(new THREE.CylinderGeometry(0.025, 0.025, 0.7, 6), trim, -3.6, 3.6, 0.6, false);
  const antM = new THREE.MeshBasicMaterial({ color: '#64748b', toneMapped: false });
  const ant = addB(new THREE.SphereGeometry(0.08, 10, 8), antM, -3.6, 3.97, 0.6, false);

  // Faros delanteros (luz + haz volumétrico)
  const spots: THREE.SpotLight[] = [];
  const beamM = new THREE.MeshBasicMaterial({
    map: beamTex,
    color: '#fff1d0',
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  for (const z of [-0.82, 0.82]) {
    const sp = new THREE.SpotLight('#fff1d6', 0, 48, 0.5, 0.55, 1.4);
    sp.position.set(5.62, 1.0, z);
    sp.target.position.set(20, -0.4, z * 1.6);
    bus.add(sp, sp.target);
    spots.push(sp);
    const bm = new THREE.Mesh(new THREE.ConeGeometry(2.3, 13, 24, 1, true), beamM);
    bm.rotation.z = Math.PI / 2 + 0.06;
    bm.position.set(5.62 + 6.5, 0.75, z);
    bus.add(bm);
  }

  // Lector NFC 3D
  const rd = new THREE.Group();
  rd.position.set(READER_X, 1.38, 1.285);
  rd.scale.setScalar(1.32);
  bus.add(rd);
  addB(Bx(0.32, 0.48, 0.07), Std('#111827', { metalness: 0.6, roughness: 0.35 }), 0, 0, 0, true, rd);
  const face = canvasTex(128, 128, (g) => {
    g.fillStyle = '#0b1220';
    g.fillRect(0, 0, 128, 128);
    g.strokeStyle = '#e2e8f0';
    g.lineWidth = 7;
    g.lineCap = 'round';
    for (let i = 0; i < 3; i++) {
      g.beginPath();
      g.arc(40, 64, 16 + i * 16, -Math.PI / 3.2, Math.PI / 3.2);
      g.stroke();
    }
    g.fillStyle = '#e2e8f0';
    g.beginPath();
    g.arc(40, 64, 6, 0, Math.PI * 2);
    g.fill();
  });
  const fp = new THREE.Mesh(
    new THREE.PlaneGeometry(0.24, 0.24),
    new THREE.MeshStandardMaterial({ map: face, emissiveMap: face, emissive: '#ffffff', emissiveIntensity: 0.55 })
  );
  fp.position.set(0, 0.07, 0.037);
  rd.add(fp);
  const haloM = new THREE.MeshBasicMaterial({ color: '#3B82F6', toneMapped: false });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.026, 12, 48), haloM);
  halo.position.set(0, 0.07, 0.045);
  rd.add(halo);
  const barM = new THREE.MeshBasicMaterial({ color: '#3B82F6', toneMapped: false });
  addB(Bx(0.2, 0.03, 0.02), barM, 0, -0.18, 0.04, false, rd);
  const glowM = new THREE.SpriteMaterial({
    map: glowTex,
    color: '#3B82F6',
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const glow = new THREE.Sprite(glowM);
  glow.position.set(0, 0.07, 0.14);
  glow.scale.set(1.1, 1.1, 1);
  rd.add(glow);
  const rl = new THREE.PointLight('#3B82F6', 1, 5, 1.6);
  rl.position.set(0, 0.07, 0.4);
  rd.add(rl);

  // Pooled NFC shockwaves on bus reader + ground ripple + violet antenna uplink sprites
  const nfcWaves: HtmlWorldBundle['nfcWaves'] = [];
  for (let i = 0; i < 3; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: '#10B981',
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.22, 48), mat);
    mesh.position.set(READER_X, 1.47, 1.38);
    mesh.visible = false;
    bus.add(mesh);
    nfcWaves.push({ mesh, mat });
  }

  const rippleMat = new THREE.MeshBasicMaterial({
    color: '#10B981',
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const rippleMesh = new THREE.Mesh(new THREE.RingGeometry(0.32, 0.42, 48), rippleMat);
  rippleMesh.rotation.x = -Math.PI / 2;
  rippleMesh.visible = false;
  scene.add(rippleMesh);

  const uplinkSprites: HtmlWorldBundle['uplinkSprites'] = [];
  for (let i = 0; i < 5; i++) {
    const mat = new THREE.SpriteMaterial({
      map: glowTex,
      color: '#c084fc',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.visible = false;
    scene.add(sprite);
    uplinkSprites.push({ sprite, mat });
  }

  // Seated passenger silhouettes inside bus
  const seats: Record<string, THREE.Group> = {};
  for (const p of PEOPLE_LIST) {
    if (!p.seat) continue;
    const sg = new THREE.Group();
    sg.position.set(p.seat[0], 0, p.seat[1]);
    sg.visible = false;
    bus.add(sg);
    const t = new THREE.Mesh(new THREE.CapsuleGeometry(0.19 * p.scale, 0.3, 3, 8), Std(p.color));
    t.position.y = 1.82;
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.15 * p.scale, 12, 10), Std('#d9a77f'));
    h.position.y = 2.2;
    const hr = new THREE.Mesh(
      new THREE.SphereGeometry(0.16 * p.scale, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55),
      Std(p.hair)
    );
    hr.position.y = 2.22;
    sg.add(t, h, hr);
    seats[p.id] = sg;
  }

  // Detailed 3D People (Sofía, Diego, Ana, Laura)
  const PM = {} as Record<PersonDef['id'], PersonMesh>;
  for (const p of PEOPLE_LIST) {
    const g = new THREE.Group();
    scene.add(g);
    const skin = Std('#d9a77f');
    const shirt = Std(p.color, { roughness: 0.65 });
    const pants = Std(p.pants);
    const hair = Std(p.hair, { roughness: 0.9 });
    const shoe = Std('#111827');
    const mk = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, par: THREE.Object3D = g) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      par.add(m);
      return m;
    };
    mk(new THREE.CapsuleGeometry(0.2, 0.46, 4, 10), shirt, 0, 1.13, 0);
    mk(new THREE.SphereGeometry(0.17, 16, 12), skin, 0, 1.62, 0);
    mk(new THREE.SphereGeometry(0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair, 0, 1.645, -0.01);
    if (p.longHair) mk(new THREE.CapsuleGeometry(0.1, 0.2, 3, 8), hair, 0, 1.5, -0.13);
    const legs: THREE.Group[] = [];
    const arms: THREE.Group[] = [];
    for (const s of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(s * 0.1, 0.8, 0);
      g.add(hip);
      mk(new THREE.CapsuleGeometry(0.085, 0.5, 3, 8), pants, 0, -0.36, 0, hip);
      mk(new THREE.BoxGeometry(0.14, 0.08, 0.25), shoe, 0, -0.75, 0.04, hip);
      legs.push(hip);
      const sh = new THREE.Group();
      sh.position.set(s * 0.27, 1.38, 0);
      g.add(sh);
      mk(new THREE.CapsuleGeometry(0.065, 0.42, 3, 8), shirt, 0, -0.27, 0, sh);
      mk(new THREE.SphereGeometry(0.07, 10, 8), skin, 0, -0.55, 0, sh);
      arms.push(sh);
    }
    mk(new THREE.BoxGeometry(0.13, 0.09, 0.02), Std(p.badge, { emissive: p.badge, emissiveIntensity: 1.1 }), 0.08, 1.27, 0.205);
    if (p.bag) mk(new THREE.BoxGeometry(0.32, 0.38, 0.16), Std(p.bag), 0, 1.15, -0.25);
    if (p.vest) {
      const vm = Std('#f59e0b', { emissive: '#f59e0b', emissiveIntensity: 0.6 });
      for (const y of [1.0, 1.24]) {
        const v = new THREE.Mesh(new THREE.CylinderGeometry(0.212, 0.212, 0.05, 18, 1, true), vm);
        v.position.y = y;
        g.add(v);
      }
    }
    if (p.tutor) {
      const lan = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.14, 0.02),
        Std('#3B82F6', { emissive: '#3B82F6', emissiveIntensity: 1 })
      );
      lan.position.set(0, 1.2, 0.21);
      g.add(lan);
    }
    const card = mk(
      new THREE.BoxGeometry(0.12, 0.16, 0.018),
      Std('#ffffff', { emissive: '#d1fae5', emissiveIntensity: 0.9 }),
      0,
      -0.62,
      0.05,
      arms[0]
    );
    card.visible = false;
    g.scale.setScalar(p.scale);
    PM[p.id] = { g, legs, arms, card };
  }

  // Projected HTML labels matching the exact style of the HTML app
  labelHost.innerHTML = '';
  const labels: Record<string, LabelItem> = {};
  const mkLabel = (id: string, style: string, html: string) => {
    const el = document.createElement('div');
    el.style.cssText = `position:absolute;left:0;top:0;white-space:nowrap;pointer-events:none;font-family:Inter,system-ui,sans-serif;${style}`;
    el.innerHTML = html;
    labelHost.appendChild(el);
    labels[id] = { id, el };
  };

  Object.values(STOPS).forEach((st) => {
    mkLabel(
      `stop_${st.id}`,
      `display:flex;flex-direction:column;align-items:center;gap:2px;padding:7px 14px 8px;border-radius:12px;background:rgba(7,11,19,0.88);border:1.5px solid ${st.color};box-shadow:0 0 22px ${st.color}66;color:#fff;font-size:15px;font-weight:800;`,
      `<span><span style="color:${st.color}">P${st.n}</span> · ${st.name}</span><small style="font-weight:500;font-size:12px;color:#cbd5e1">${st.sub}</small>`
    );
  });

  mkLabel(
    'bus',
    `font-size:15px;font-weight:900;letter-spacing:0.06em;padding:6px 13px;border-radius:10px;background:rgba(7,11,19,0.88);border:1.5px solid rgba(52,211,153,0.7);color:#34D399;`,
    `UNIDAD 04 · R-12`
  );

  for (const p of PEOPLE_LIST) {
    mkLabel(
      `p_${p.id}`,
      `display:flex;align-items:center;gap:7px;font-size:14px;padding:4px 12px 5px;border-radius:999px;background:rgba(7,11,19,0.88);border:1.5px solid rgba(255,255,255,0.2);color:#fff;font-weight:800;`,
      `<span style="width:9px;height:9px;border-radius:50%;background:${p.color};box-shadow:0 0 8px ${p.color};display:inline-block"></span>${p.short}`
    );
  }

  mkLabel(
    'rejectX',
    `font-size:15px;font-weight:900;padding:6px 14px;border-radius:10px;background:#b91c1c;color:#fff;box-shadow:0 0 24px rgba(239,68,68,0.8);border:1.5px solid #fca5a5;`,
    `✕ Descenso rechazado · fuera de geocerca`
  );

  return {
    renderer,
    scene,
    camera,
    sky,
    skyU,
    stars,
    moon,
    hemi,
    sun,
    bulbM,
    poolM,
    lampLights,
    brokenBulbM,
    brokenPoolM,
    brokenLight,
    stopLights,
    stopPanelMats,
    signMats,
    winMats,
    chimLight,
    GEO,
    bus,
    wheels,
    leaves,
    doorwayM,
    stepLightM,
    interior,
    tailM,
    headM,
    spots,
    beamM,
    antM,
    ant,
    seats,
    reader: { rd, haloM, barM, glowM, glow, rl },
    nfcWaves,
    groundRipple: { mesh: rippleMesh, mat: rippleMat },
    uplinkSprites,
    PM,
    labels,
    dispose: () => renderer.dispose(),
  };
}

function setPersonPose(
  pm: PersonMesh,
  visible: boolean,
  x: number,
  z: number,
  yaw: number,
  walkPhase: number,
  isWalking: boolean,
  armRaise: number,
  showCard: boolean
) {
  pm.g.visible = visible;
  if (!visible) return;
  const gy = groundY(x, z);
  const sw = isWalking ? Math.sin(walkPhase) : 0;
  pm.g.position.set(x, gy + (isWalking ? Math.abs(Math.sin(walkPhase)) * 0.04 : 0), z);
  pm.g.rotation.y = yaw;
  pm.legs[0].rotation.x = sw * 0.55;
  pm.legs[1].rotation.x = -sw * 0.55;
  pm.arms[1].rotation.x = sw * 0.45;
  pm.arms[0].rotation.x = -sw * 0.45 * (1 - armRaise) - armRaise * 1.35;
  pm.card.visible = showCard;
}

function projectLabel(
  el: HTMLDivElement,
  camera: THREE.PerspectiveCamera,
  W: number,
  H: number,
  worldPos: THREE.Vector3 | null,
  visible: boolean
) {
  if (!visible || !worldPos) {
    el.style.display = 'none';
    return;
  }
  const v = worldPos.clone().project(camera);
  if (v.z > 1 || Math.abs(v.x) > 1.08 || Math.abs(v.y) > 1.08) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'flex';
  const sx = (v.x * 0.5 + 0.5) * W;
  const sy = (-v.y * 0.5 + 0.5) * H;
  el.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -100%)`;
}

function applyHtmlFrame(
  b: HtmlWorldBundle,
  mode: HtmlScenarioMode,
  frame: number,
  W: number,
  H: number
) {
  const t = frame / 30;
  if (b.camera.aspect !== W / H) {
    b.camera.aspect = W / H;
    b.camera.updateProjectionMatrix();
  }
  b.renderer.setSize(W, H, false);

  const DAYC = {
    top: new THREE.Color('#5d98d2'),
    bot: new THREE.Color('#d3e5f2'),
    hs: new THREE.Color('#e3efff'),
    hg: new THREE.Color('#5d6b4c'),
    sun: new THREE.Color('#fff1db'),
  };
  const NITC = {
    top: new THREE.Color('#02040b'),
    bot: new THREE.Color('#0a1424'),
    hs: new THREE.Color('#33415e'),
    hg: new THREE.Color('#07090d'),
    sun: new THREE.Color('#9db4ff'),
  };

  // Defaults per frame
  let nightT = 0;
  let busS = STOPS.P1.s;
  let door = 0;
  let brake = 0;
  let readerMode: 'idle' | 'ok' | 'wait' | 'alert' | 'silent' = 'idle';
  let violetActive = false;
  let geoModes: Record<'P1' | 'P2' | 'P3', 'normal' | 'ok' | 'alert'> = {
    P1: 'normal',
    P2: 'normal',
    P3: 'normal',
  };
  let nfcWaveColor = '#10B981';
  let nfcWavePhase = -1;
  let ripplePos: { x: number; z: number; color: string; p: number } | null = null;
  let showBusAlert = false;
  let showRejectX = false;

  // Hide all seated silhouettes by default
  Object.values(b.seats).forEach((s) => (s.visible = false));

  // Person states for labels
  const pLabels: Record<PersonDef['id'], { vis: boolean; x: number; z: number; status: string; col: string }> = {
    sofia: { vis: false, x: 0, z: 0, status: 'En espera', col: '#94a3b8' },
    diego: { vis: false, x: 0, z: 0, status: 'En espera', col: '#94a3b8' },
    ana: { vis: false, x: 0, z: 0, status: 'En espera', col: '#94a3b8' },
    laura: { vis: false, x: 0, z: 0, status: 'En parada', col: '#94a3b8' },
  };

  let camPos = new THREE.Vector3(30, 62, 92);
  let camTgt = new THREE.Vector3(0, 0, 3);

  // =========================================================================
  // SCENARIO 1: BOARDING AT PARADA 1 (330 frames / 11.0s)
  // =========================================================================
  if (mode === 'boarding') {
    nightT = 0;
    const startS = ((STOPS.P1.s - 26) % LL + LL) % LL;
    const driveP = interpolate(frame, [0, 86], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.sin),
    });
    busS = startS + 26 * driveP;
    brake = frame >= 68 && frame <= 100 ? 1 : 0;

    // Door opens at 84..108, closes at 292..318
    door =
      frame < 260
        ? interpolate(frame, [84, 108], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) })
        : interpolate(frame, [288, 312], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) });

    const busPose = LOOP.at(busS);
    const busYaw = Math.atan2(-busPose.tz, busPose.tx);
    const p1BusPose = LOOP.at(STOPS.P1.s);
    const p1Yaw = Math.atan2(-p1BusPose.tz, p1BusPose.tx);
    const rStand = b2w(p1BusPose.x, p1BusPose.z, p1Yaw, READER_X, HALF_W + 0.92);
    const rPt = b2w(p1BusPose.x, p1BusPose.z, p1Yaw, READER_X, HALF_W);
    const dStep = b2w(p1BusPose.x, p1BusPose.z, p1Yaw, DOOR_X, HALF_W + 0.82);
    const dIn = b2w(p1BusPose.x, p1BusPose.z, p1Yaw, DOOR_X, 0.35);

    const sofiaWait = stopPt(STOPS.P1, -3.0, 2.3);
    const diegoWait = stopPt(STOPS.P1, -1.6, 2.3);
    const lauraWait = stopPt(STOPS.P2, -3.2, 2.4);
    const anaWait = stopPt(STOPS.P2, -1.8, 2.4);

    // Laura & Ana waiting calmly at Parada 2
    setPersonPose(b.PM.laura, true, lauraWait.x, lauraWait.z, Math.PI, 0, false, 0, false);
    setPersonPose(b.PM.ana, true, anaWait.x, anaWait.z, Math.PI, 0, false, 0, false);

    // Diego waits at Parada 1 then steps up after Sofía boards
    const diegoWalkP = interpolate(frame, [228, 275], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const dx = THREE.MathUtils.lerp(diegoWait.x, rStand.x, diegoWalkP);
    const dz = THREE.MathUtils.lerp(diegoWait.z, rStand.z, diegoWalkP);
    const diegoYaw = diegoWalkP > 0 && diegoWalkP < 1 ? Math.atan2(rStand.x - diegoWait.x, rStand.z - diegoWait.z) : Math.PI;
    setPersonPose(b.PM.diego, true, dx, dz, diegoYaw, t * 9, diegoWalkP > 0 && diegoWalkP < 1, 0, false);
    pLabels.diego = { vis: true, x: dx, z: dz, status: 'En espera', col: '#94a3b8' };

    // Sofía walks from Parada 1 shelter -> NFC Reader (108..154), scans NFC (154..200), boards bus (200..255)!
    if (frame < 108) {
      setPersonPose(b.PM.sofia, true, sofiaWait.x, sofiaWait.z, Math.PI, 0, false, 0, false);
      pLabels.sofia = { vis: true, x: sofiaWait.x, z: sofiaWait.z, status: 'En espera', col: '#94a3b8' };
    } else if (frame < 154) {
      const k = interpolate(frame, [108, 154], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const sx = THREE.MathUtils.lerp(sofiaWait.x, rStand.x, k);
      const sz = THREE.MathUtils.lerp(sofiaWait.z, rStand.z, k);
      const syaw = Math.atan2(rStand.x - sofiaWait.x, rStand.z - sofiaWait.z);
      setPersonPose(b.PM.sofia, true, sx, sz, syaw, t * 9.5, true, 0, false);
      pLabels.sofia = { vis: true, x: sx, z: sz, status: 'Acercando NFC', col: '#38BDF8' };
    } else if (frame < 204) {
      const syaw = Math.atan2(rPt.x - rStand.x, rPt.z - rStand.z);
      const arm = interpolate(frame, [154, 166, 192, 204], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      setPersonPose(b.PM.sofia, true, rStand.x, rStand.z, syaw, 0, false, arm, arm > 0.35);
      if (frame >= 164) {
        readerMode = 'ok';
        geoModes.P1 = 'ok';
        nfcWaveColor = '#10B981';
        nfcWavePhase = (frame - 164) / 42;
        ripplePos = { x: rStand.x, z: rStand.z, color: '#10B981', p: Math.min(1, (frame - 164) / 36) };
        pLabels.sofia = { vis: true, x: rStand.x, z: rStand.z, status: 'A bordo ✓', col: '#10B981' };
      } else {
        pLabels.sofia = { vis: true, x: rStand.x, z: rStand.z, status: 'Escaneando NFC', col: '#34D399' };
      }
    } else if (frame < 252) {
      readerMode = 'ok';
      geoModes.P1 = 'ok';
      const k1 = interpolate(frame, [204, 228], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const k2 = interpolate(frame, [228, 252], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const sx = k2 > 0 ? THREE.MathUtils.lerp(dStep.x, dIn.x, k2) : THREE.MathUtils.lerp(rStand.x, dStep.x, k1);
      const sz = k2 > 0 ? THREE.MathUtils.lerp(dStep.z, dIn.z, k2) : THREE.MathUtils.lerp(rStand.z, dStep.z, k1);
      const syaw = k2 > 0 ? Math.atan2(dIn.x - dStep.x, dIn.z - dStep.z) : Math.atan2(dStep.x - rStand.x, dStep.z - rStand.z);
      setPersonPose(b.PM.sofia, true, sx, sz, syaw, t * 9.5, true, 0, false);
      pLabels.sofia = { vis: true, x: sx, z: sz, status: 'A bordo ✓', col: '#10B981' };
    } else {
      setPersonPose(b.PM.sofia, false, dIn.x, dIn.z, 0, 0, false, 0, false);
      b.seats.sofia.visible = true;
      geoModes.P1 = 'ok';
    }

    // Real 3D Camera: Panorámica (0..50) -> Swoops smoothly right into 3D NFC Reader & Parada 1 (50..145) -> Holds & gentle drift (145..330)!
    const zoom1 = interpolate(frame, [34, 138], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });
    const drift = interpolate(frame, [138, 330], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const p1RdWorld = b2w(p1BusPose.x, p1BusPose.z, p1Yaw, READER_X, HALF_W);

    const panoPos = new THREE.Vector3(24, 58, 94);
    const closePos = new THREE.Vector3(
      p1RdWorld.x + 4.4 + drift * 2.2,
      3.5 + drift * 0.5,
      p1RdWorld.z + 6.8 + drift * 1.4
    );
    camPos = panoPos.lerp(closePos, zoom1);

    const panoTgt = new THREE.Vector3(-4, 0, 14);
    const closeTgt = new THREE.Vector3(p1RdWorld.x + 0.5, 1.45, p1RdWorld.z + 0.4);
    camTgt = panoTgt.lerp(closeTgt, zoom1);

    // Subtle bus yaw update
    void busYaw;
  }

  // =========================================================================
  // SCENARIO 2: DESCENSO SEGURO + RECOGIDA POR TUTORA EN PARADA 2 (330 frames / 11.0s)
  // =========================================================================
  else if (mode === 'tutor') {
    nightT = 0;
    const driveP = interpolate(frame, [0, 74], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.sin),
    });
    busS = STOPS.P1.s + (STOPS.P2.s - STOPS.P1.s) * driveP;
    brake = frame >= 56 && frame <= 90 ? 1 : 0;

    door =
      frame < 275
        ? interpolate(frame, [72, 94], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) })
        : interpolate(frame, [286, 312], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) });

    const p2Pose = LOOP.at(STOPS.P2.s);
    const p2Yaw = Math.atan2(-p2Pose.tz, p2Pose.tx);
    const rStand = b2w(p2Pose.x, p2Pose.z, p2Yaw, READER_X, HALF_W + 0.92);
    const rPt = b2w(p2Pose.x, p2Pose.z, p2Yaw, READER_X, HALF_W);
    const dStep = b2w(p2Pose.x, p2Pose.z, p2Yaw, DOOR_X, HALF_W + 0.82);
    const dIn = b2w(p2Pose.x, p2Pose.z, p2Yaw, DOOR_X, 0.35);

    const lauraStart = stopPt(STOPS.P2, -3.2, 2.4);
    const anaWait = stopPt(STOPS.P2, -1.8, 2.4);
    const sofiaWaitTutor = stopPt(STOPS.P2, 0.9, 1.15);
    const sofiaSafe = stopPt(STOPS.P2, -4.6, 1.3);
    const lauraSafe = stopPt(STOPS.P2, -5.4, 2.1);

    // Diego stays seated inside; Ana waits at P2
    b.seats.diego.visible = true;
    setPersonPose(b.PM.diego, false, 0, 0, 0, 0, false, 0, false);
    setPersonPose(b.PM.ana, true, anaWait.x, anaWait.z, Math.PI, 0, false, 0, false);

    // Sofía exits bus (94..134), scans NFC (134..166 -> reader turns amber waiting for tutor!), steps aside (166..190), walks with Laura (252..305)
    if (frame < 94) {
      b.seats.sofia.visible = true;
      setPersonPose(b.PM.sofia, false, dIn.x, dIn.z, 0, 0, false, 0, false);
    } else if (frame < 134) {
      const k1 = interpolate(frame, [94, 114], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const k2 = interpolate(frame, [114, 134], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const sx = k2 > 0 ? THREE.MathUtils.lerp(dStep.x, rStand.x, k2) : THREE.MathUtils.lerp(dIn.x, dStep.x, k1);
      const sz = k2 > 0 ? THREE.MathUtils.lerp(dStep.z, rStand.z, k2) : THREE.MathUtils.lerp(dIn.z, dStep.z, k1);
      const syaw = k2 > 0 ? Math.atan2(rStand.x - dStep.x, rStand.z - dStep.z) : Math.atan2(dStep.x - dIn.x, dStep.z - dIn.z);
      setPersonPose(b.PM.sofia, true, sx, sz, syaw, t * 9.5, true, 0, false);
      pLabels.sofia = { vis: true, x: sx, z: sz, status: 'Descendiendo', col: '#38BDF8' };
    } else if (frame < 166) {
      const syaw = Math.atan2(rPt.x - rStand.x, rPt.z - rStand.z);
      const arm = interpolate(frame, [134, 144, 158, 166], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      setPersonPose(b.PM.sofia, true, rStand.x, rStand.z, syaw, 0, false, arm, arm > 0.35);
      if (frame >= 142) {
        readerMode = 'wait';
        nfcWaveColor = '#3B82F6';
        nfcWavePhase = (frame - 142) / 36;
      }
      pLabels.sofia = { vis: true, x: rStand.x, z: rStand.z, status: 'Esperando tutora', col: '#F59E0B' };
    } else if (frame < 252) {
      const k = interpolate(frame, [166, 190], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const sx = THREE.MathUtils.lerp(rStand.x, sofiaWaitTutor.x, k);
      const sz = THREE.MathUtils.lerp(rStand.z, sofiaWaitTutor.z, k);
      const syaw = k < 1 ? Math.atan2(sofiaWaitTutor.x - rStand.x, sofiaWaitTutor.z - rStand.z) : Math.atan2(rStand.x - sx, rStand.z - sz);
      setPersonPose(b.PM.sofia, true, sx, sz, syaw, t * 9, k < 1, 0, false);
      pLabels.sofia = {
        vis: true,
        x: sx,
        z: sz,
        status: frame >= 220 ? 'Entregada ✓' : 'Esperando tutora',
        col: frame >= 220 ? '#22c55e' : '#F59E0B',
      };
    } else {
      const k = interpolate(frame, [252, 305], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const sx = THREE.MathUtils.lerp(sofiaWaitTutor.x, sofiaSafe.x, k);
      const sz = THREE.MathUtils.lerp(sofiaWaitTutor.z, sofiaSafe.z, k);
      const syaw = k < 1 ? Math.atan2(sofiaSafe.x - sofiaWaitTutor.x, sofiaSafe.z - sofiaWaitTutor.z) : Math.PI;
      setPersonPose(b.PM.sofia, true, sx, sz, syaw, t * 8.5, k < 1, 0, false);
      pLabels.sofia = { vis: true, x: sx, z: sz, status: 'Entregada ✓', col: '#22c55e' };
    }

    // Laura M. (Tutora autorizada / Mamá) walks up (172..210), scans NFC (210..252 -> GREEN GEOFENCE!), walks away with Sofía (252..305)
    if (frame < 172) {
      setPersonPose(b.PM.laura, true, lauraStart.x, lauraStart.z, Math.PI, 0, false, 0, false);
      pLabels.laura = { vis: true, x: lauraStart.x, z: lauraStart.z, status: 'Tutora en parada', col: '#3B82F6' };
    } else if (frame < 210) {
      readerMode = 'wait';
      const k = interpolate(frame, [172, 210], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const lx = THREE.MathUtils.lerp(lauraStart.x, rStand.x, k);
      const lz = THREE.MathUtils.lerp(lauraStart.z, rStand.z, k);
      const lyaw = Math.atan2(rStand.x - lauraStart.x, rStand.z - lauraStart.z);
      setPersonPose(b.PM.laura, true, lx, lz, lyaw, t * 9, true, 0, false);
      pLabels.laura = { vis: true, x: lx, z: lz, status: 'Validando NFC...', col: '#38BDF8' };
    } else if (frame < 252) {
      const lyaw = Math.atan2(rPt.x - rStand.x, rPt.z - rStand.z);
      const arm = interpolate(frame, [210, 222, 244, 252], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      setPersonPose(b.PM.laura, true, rStand.x, rStand.z, lyaw, 0, false, arm, arm > 0.35);
      if (frame >= 220) {
        readerMode = 'ok';
        geoModes.P2 = 'ok';
        nfcWaveColor = '#10B981';
        nfcWavePhase = ((frame - 220) % 44) / 44;
        ripplePos = { x: rStand.x, z: rStand.z, color: '#10B981', p: Math.min(1, (frame - 220) / 38) };
      } else {
        readerMode = 'wait';
      }
      pLabels.laura = { vis: true, x: rStand.x, z: rStand.z, status: frame >= 220 ? 'Tutora Verificada ✓' : 'Escaneando NFC', col: '#22c55e' };
    } else {
      readerMode = 'ok';
      geoModes.P2 = 'ok';
      const k = interpolate(frame, [252, 305], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const lx = THREE.MathUtils.lerp(rStand.x, lauraSafe.x, k);
      const lz = THREE.MathUtils.lerp(rStand.z, lauraSafe.z, k);
      const lyaw = k < 1 ? Math.atan2(lauraSafe.x - rStand.x, lauraSafe.z - rStand.z) : Math.PI;
      setPersonPose(b.PM.laura, true, lx, lz, lyaw, t * 8.5, k < 1, 0, false);
      pLabels.laura = { vis: true, x: lx, z: lz, status: 'Tutora Verificada ✓', col: '#22c55e' };
    }

    // Real 3D Camera: Follows bus arriving at P2 (0..82) -> Smooth close zoom on Sofía + Laura + 3D NFC Reader (82..255) -> Pulls back slightly for phone overlay (255..330)
    const busPose = LOOP.at(busS);
    const p2RdWorld = b2w(p2Pose.x, p2Pose.z, p2Yaw, READER_X, HALF_W);
    const zoomP2 = interpolate(frame, [45, 130], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });
    const phoneShift = interpolate(frame, [242, 290], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.25, 0.95, 0.35, 1),
    });

    const followPos = new THREE.Vector3(busPose.x - 14, 14, busPose.z + 22);
    const closePos = new THREE.Vector3(p2RdWorld.x + 5.6 + phoneShift * 2.4, 4.4 + phoneShift * 1.4, p2RdWorld.z + 8.6 + phoneShift * 3.0);
    camPos = followPos.lerp(closePos, zoomP2);

    const followTgt = new THREE.Vector3(busPose.x + 2, 1.8, busPose.z + 1);
    const closeTgt = new THREE.Vector3(p2RdWorld.x - 0.6 + phoneShift * 2.5, 1.4, p2RdWorld.z + 0.8);
    camTgt = followTgt.lerp(closeTgt, zoomP2);
  }

  // =========================================================================
  // SCENARIO 3: PARADA NO AUTORIZADA / ZONA AISLADA (300 frames / 10.0s)
  // =========================================================================
  else if (mode === 'unauthorized') {
    // Late dusk/twilight emphasis so Zona Aislada looks stark and uninviting
    nightT = interpolate(frame, [0, 45], [0.25, 0.65], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

    const startS = STOPS.P3.s - 20;
    const driveP = interpolate(frame, [0, 68], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.sin),
    });
    busS = startS + 20 * driveP;
    brake = frame >= 52 && frame <= 84 ? 1 : 0;

    door =
      frame < 252
        ? interpolate(frame, [66, 86], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) })
        : interpolate(frame, [260, 286], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) });

    const p3Pose = LOOP.at(STOPS.P3.s);
    const p3Yaw = Math.atan2(-p3Pose.tz, p3Pose.tx);
    const rStand = b2w(p3Pose.x, p3Pose.z, p3Yaw, READER_X, HALF_W + 0.92);
    const rPt = b2w(p3Pose.x, p3Pose.z, p3Yaw, READER_X, HALF_W);
    const dStep = b2w(p3Pose.x, p3Pose.z, p3Yaw, DOOR_X, HALF_W + 0.82);
    const dIn = b2w(p3Pose.x, p3Pose.z, p3Yaw, DOOR_X, 0.35);

    // Ana seated aboard; Sofía & Laura safely back at P2
    b.seats.ana.visible = true;
    setPersonPose(b.PM.sofia, false, 0, 0, 0, 0, false, 0, false);
    setPersonPose(b.PM.laura, false, 0, 0, 0, 0, false, 0, false);
    setPersonPose(b.PM.ana, false, 0, 0, 0, 0, false, 0, false);

    // Diego exits doorway (86..126), scans NFC outside authorized geofence (126..218 -> RED CRITICAL ALERT!), driver retains & Diego returns aboard (218..260)!
    if (frame < 86) {
      b.seats.diego.visible = true;
      setPersonPose(b.PM.diego, false, dIn.x, dIn.z, 0, 0, false, 0, false);
    } else if (frame < 126) {
      const k1 = interpolate(frame, [86, 106], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const k2 = interpolate(frame, [106, 126], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const dx = k2 > 0 ? THREE.MathUtils.lerp(dStep.x, rStand.x, k2) : THREE.MathUtils.lerp(dIn.x, dStep.x, k1);
      const dz = k2 > 0 ? THREE.MathUtils.lerp(dStep.z, rStand.z, k2) : THREE.MathUtils.lerp(dIn.z, dStep.z, k1);
      const dyaw = k2 > 0 ? Math.atan2(rStand.x - dStep.x, rStand.z - dStep.z) : Math.atan2(dStep.x - dIn.x, dStep.z - dIn.z);
      setPersonPose(b.PM.diego, true, dx, dz, dyaw, t * 9.5, true, 0, false);
      pLabels.diego = { vis: true, x: dx, z: dz, status: 'Intentando bajar', col: '#F59E0B' };
    } else if (frame < 218) {
      const dyaw = Math.atan2(rPt.x - rStand.x, rPt.z - rStand.z);
      const arm = interpolate(frame, [126, 138, 178, 192], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      setPersonPose(b.PM.diego, true, rStand.x, rStand.z, dyaw, 0, false, arm, arm > 0.3);
      if (frame >= 136) {
        readerMode = 'alert';
        geoModes.P3 = 'alert';
        showBusAlert = true;
        showRejectX = true;
        nfcWaveColor = '#EF4444';
        nfcWavePhase = ((frame - 136) % 34) / 34;
        ripplePos = { x: rStand.x, z: rStand.z, color: '#EF4444', p: ((frame - 136) % 38) / 38 };
      }
      pLabels.diego = { vis: true, x: rStand.x, z: rStand.z, status: frame >= 136 ? '¡ALERTA!' : 'Escaneando NFC', col: '#EF4444' };
    } else if (frame < 260) {
      readerMode = 'alert';
      geoModes.P3 = 'alert';
      showBusAlert = true;
      const k1 = interpolate(frame, [218, 240], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const k2 = interpolate(frame, [240, 260], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const dx = k2 > 0 ? THREE.MathUtils.lerp(dStep.x, dIn.x, k2) : THREE.MathUtils.lerp(rStand.x, dStep.x, k1);
      const dz = k2 > 0 ? THREE.MathUtils.lerp(dStep.z, dIn.z, k2) : THREE.MathUtils.lerp(rStand.z, dStep.z, k1);
      const dyaw = k2 > 0 ? Math.atan2(dIn.x - dStep.x, dIn.z - dStep.z) : Math.atan2(dStep.x - rStand.x, dStep.z - rStand.z);
      setPersonPose(b.PM.diego, true, dx, dz, dyaw, t * 9, true, 0, false);
      pLabels.diego = { vis: true, x: dx, z: dz, status: 'Retenido a bordo', col: '#F59E0B' };
    } else {
      b.seats.diego.visible = true;
      geoModes.P3 = 'alert';
      showBusAlert = true;
      setPersonPose(b.PM.diego, false, dIn.x, dIn.z, 0, 0, false, 0, false);
    }

    // Real 3D Camera on north side (side = -1 -> camera placed on north side z < -25 looking south at P3 doorway!)
    const busPose = LOOP.at(busS);
    const p3RdWorld = b2w(p3Pose.x, p3Pose.z, p3Yaw, READER_X, HALF_W);
    const zoomP3 = interpolate(frame, [24, 112], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });
    const alertShift = interpolate(frame, [160, 210], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.25, 0.95, 0.35, 1),
    });

    const farPos = new THREE.Vector3(busPose.x + 16, 15.5, busPose.z - 22);
    const closePos = new THREE.Vector3(
      p3RdWorld.x - 5.2 - alertShift * 2.5,
      4.2 + alertShift * 1.1,
      p3RdWorld.z - 8.4 - alertShift * 2.4
    );
    camPos = farPos.lerp(closePos, zoomP3);

    const farTgt = new THREE.Vector3(busPose.x - 2, 1.5, busPose.z - 1);
    const closeTgt = new THREE.Vector3(p3RdWorld.x + 0.2 - alertShift * 2.2, 1.45, p3RdWorld.z - 0.5);
    camTgt = farTgt.lerp(closeTgt, zoomP3);
  }

  // =========================================================================
  // SCENARIO 4: MODO TURNO NOCTURNO + PROTOCOLO VIOLETA (360 frames / 12.0s)
  // =========================================================================
  else {
    // Smooth dramatic transition into full Night Shift (0..40)
    nightT = interpolate(frame, [0, 36], [0.25, 1.0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

    // Bus drives along the dark west-south curve arriving cleanly at illuminated Parada 1 (frames 0..225)!
    const startS = ((STOPS.P1.s - 34) % LL + LL) % LL;
    const driveP = interpolate(frame, [0, 225], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.sin),
    });
    busS = startS + 34 * driveP;
    brake = frame >= 200 && frame <= 238 ? 1 : 0;

    // Silent double-tap triggers at frame 82 -> reader turns discreet amber/magenta + violet antenna uplink!
    if (frame >= 82) {
      violetActive = true;
      readerMode = 'silent';
      if (frame >= 82 && frame <= 145) {
        nfcWaveColor = '#D946EF';
        nfcWavePhase = ((frame - 82) % 36) / 36;
      }
    }

    // Door opens at illuminated Parada 1 (224..246) and Ana descends safely (246..340)
    door = interpolate(frame, [224, 246], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    });

    const p1Pose = LOOP.at(STOPS.P1.s);
    const p1Yaw = Math.atan2(-p1Pose.tz, p1Pose.tx);
    const rStand = b2w(p1Pose.x, p1Pose.z, p1Yaw, READER_X, HALF_W + 0.92);
    const rPt = b2w(p1Pose.x, p1Pose.z, p1Yaw, READER_X, HALF_W);
    const dStep = b2w(p1Pose.x, p1Pose.z, p1Yaw, DOOR_X, HALF_W + 0.82);
    const dIn = b2w(p1Pose.x, p1Pose.z, p1Yaw, DOOR_X, 0.35);
    const anaSafe = stopPt(STOPS.P1, -2.5, 2.3);

    setPersonPose(b.PM.sofia, false, 0, 0, 0, 0, false, 0, false);
    setPersonPose(b.PM.laura, false, 0, 0, 0, 0, false, 0, false);
    setPersonPose(b.PM.diego, false, 0, 0, 0, 0, false, 0, false);
    b.seats.diego.visible = true;

    if (frame < 246) {
      b.seats.ana.visible = true;
      setPersonPose(b.PM.ana, false, 0, 0, 0, 0, false, 0, false);
    } else if (frame < 284) {
      const k1 = interpolate(frame, [246, 265], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const k2 = interpolate(frame, [265, 284], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const ax = k2 > 0 ? THREE.MathUtils.lerp(dStep.x, rStand.x, k2) : THREE.MathUtils.lerp(dIn.x, dStep.x, k1);
      const az = k2 > 0 ? THREE.MathUtils.lerp(dStep.z, rStand.z, k2) : THREE.MathUtils.lerp(dIn.z, dStep.z, k1);
      const ayaw = k2 > 0 ? Math.atan2(rStand.x - dStep.x, rStand.z - dStep.z) : Math.atan2(dStep.x - dIn.x, dStep.z - dIn.z);
      setPersonPose(b.PM.ana, true, ax, az, ayaw, t * 9, true, 0, false);
      pLabels.ana = { vis: true, x: ax, z: az, status: 'Protocolo Violeta', col: '#C084FC' };
    } else if (frame < 312) {
      const ayaw = Math.atan2(rPt.x - rStand.x, rPt.z - rStand.z);
      const arm = interpolate(frame, [284, 294, 304, 312], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      setPersonPose(b.PM.ana, true, rStand.x, rStand.z, ayaw, 0, false, arm, arm > 0.3);
      if (frame >= 292) {
        readerMode = 'ok';
        geoModes.P1 = 'ok';
        nfcWaveColor = '#10B981';
        nfcWavePhase = (frame - 292) / 36;
      }
      pLabels.ana = { vis: true, x: rStand.x, z: rStand.z, status: 'Segura · seguimiento C4', col: '#C084FC' };
    } else {
      geoModes.P1 = 'ok';
      const k = interpolate(frame, [312, 355], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
      const ax = THREE.MathUtils.lerp(rStand.x, anaSafe.x, k);
      const az = THREE.MathUtils.lerp(rStand.z, anaSafe.z, k);
      const ayaw = k < 1 ? Math.atan2(anaSafe.x - rStand.x, anaSafe.z - rStand.z) : Math.PI;
      setPersonPose(b.PM.ana, true, ax, az, ayaw, t * 8.5, k < 1, 0, false);
      pLabels.ana = { vis: true, x: ax, z: az, status: 'Segura · Parada iluminada', col: '#C084FC' };
    }

    // Real 3D Camera Choreography for Protocolo Violeta:
    // 0..76: Tracking night-shift bus cruising with blazing headlight beams
    // 76..185: Tight dramatic 3D zoom directly onto the Bus 3D NFC Reader (showing discreet amber/magenta pulse!) + roof violet antenna!
    // 185..360: Pulls smoothly out to frame illuminated Parada 1 as Ana safely exits while C4 phone slides in on right!
    const bp = LOOP.at(busS);
    const by = Math.atan2(-bp.tz, bp.tx);
    const rdWorld = b2w(bp.x, bp.z, by, READER_X, HALF_W);
    const busRightX = Math.sin(by);
    const busRightZ = Math.cos(by);
    const busFwdX = Math.cos(by);
    const busFwdZ = -Math.sin(by);

    const zoomReader = interpolate(frame, [62, 118], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    });
    const pullToStop = interpolate(frame, [188, 252], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.25, 0.95, 0.35, 1),
    });

    // Follow camera outside right-front of bus
    const chasePos = new THREE.Vector3(
      bp.x + busRightX * 14 + busFwdX * 11,
      6.8,
      bp.z + busRightZ * 14 + busFwdZ * 11
    );
    const readerClosePos = new THREE.Vector3(
      rdWorld.x + busRightX * 4.2 + busFwdX * 2.1,
      2.25,
      rdWorld.z + busRightZ * 4.2 + busFwdZ * 2.1
    );
    const stopSafePos = new THREE.Vector3(
      p1Pose.x + 8.5,
      5.8,
      p1Pose.z + 13.5
    );

    camPos = chasePos.clone().lerp(readerClosePos, zoomReader).lerp(stopSafePos, pullToStop);

    const chaseTgt = new THREE.Vector3(bp.x + busFwdX * 2, 1.8, bp.z + busFwdZ * 2);
    const readerTgt = new THREE.Vector3(rdWorld.x - busFwdX * 0.4, 1.65, rdWorld.z - busFwdZ * 0.4);
    const stopTgt = new THREE.Vector3(p1Pose.x + 3.6, 1.5, p1Pose.z + 1.5);
    camTgt = chaseTgt.clone().lerp(readerTgt, zoomReader).lerp(stopTgt, pullToStop);
  }

  // =========================================================================
  // APPLY LIGHTING, BUS POSE, NFC READER, GEOFENCES, FX & PROJECTED LABELS
  // =========================================================================
  const n = nightT;
  b.skyU.top.value.copy(DAYC.top).lerp(NITC.top, n);
  b.skyU.bot.value.copy(DAYC.bot).lerp(NITC.bot, n);
  if (b.scene.fog instanceof THREE.Fog) {
    b.scene.fog.color.copy(b.skyU.bot.value);
    b.scene.fog.near = THREE.MathUtils.lerp(150, 70, n);
    b.scene.fog.far = THREE.MathUtils.lerp(430, 280, n);
  }
  b.hemi.intensity = THREE.MathUtils.lerp(1.15, 0.14, n);
  b.hemi.color.copy(DAYC.hs).lerp(NITC.hs, n);
  b.hemi.groundColor.copy(DAYC.hg).lerp(NITC.hg, n);
  b.sun.intensity = THREE.MathUtils.lerp(2.7, 0.24, n);
  b.sun.color.copy(DAYC.sun).lerp(NITC.sun, n);
  b.renderer.toneMappingExposure = THREE.MathUtils.lerp(1, 1.24, n);
  (b.stars.material as THREE.PointsMaterial).opacity = n;
  (b.moon.material as THREE.MeshBasicMaterial).opacity = n;
  b.bulbM.emissiveIntensity = n * 3.4;
  b.poolM.opacity = n * 0.62;
  b.lampLights.forEach((l) => (l.intensity = n * 55));
  // Deterministic flicker on broken P3 streetlight
  const flick = Math.sin(frame * 1.7) * Math.cos(frame * 0.63) > 0.35 ? 0.85 : 0.08;
  b.brokenBulbM.emissiveIntensity = n * flick * 2.2;
  b.brokenPoolM.opacity = n * flick * 0.3;
  if (b.brokenLight) b.brokenLight.intensity = n * flick * 10;
  b.stopLights.forEach((l) => (l.intensity = n * 42));
  b.stopPanelMats.forEach((m) => (m.emissiveIntensity = n * 1.6));
  b.signMats.forEach((o) => (o.m.emissiveIntensity = o.auth ? 0.15 + n * 0.75 : 0.08 + n * 0.1));
  b.winMats.forEach((m) => ((m as THREE.MeshLambertMaterial).emissiveIntensity = n * 0.95));
  b.chimLight.visible = n > 0.2 && t % 1.4 < 0.7;

  // Bus Pose & Wheel Spin
  const bp = LOOP.at(busS);
  const by = Math.atan2(-bp.tz, bp.tx);
  b.bus.position.set(bp.x, 0, bp.z);
  b.bus.rotation.y = by;
  b.wheels.forEach((w) => (w.rotation.z = -busS / 0.5));
  b.leaves.forEach(({ hinge, s }) => (hinge.rotation.y = s * door * 1.45));
  b.doorwayM.emissiveIntensity = (0.15 + n * 0.9) * door;
  b.stepLightM.opacity = door * 0.9;
  b.interior.emissiveIntensity = n * 0.55;
  b.spots.forEach((s) => (s.intensity = n * 150));
  b.beamM.opacity = n * 0.13;
  b.headM.emissiveIntensity = 0.25 + n * 2.6;
  b.tailM.emissiveIntensity = 0.5 + n * 1.4 + brake * 2.2;
  b.antM.color.set(violetActive ? ((t * 2.2) % 1 < 0.5 ? '#c084fc' : '#4c1d95') : '#64748b');

  // 3D NFC Reader Halo
  const R = b.reader;
  const tmpC = new THREE.Color('#3B82F6');
  let I = 0.75 + 0.25 * Math.sin(t * 2.4);
  if (readerMode === 'ok') {
    tmpC.set('#10B981');
    I = 1.9 + 0.3 * Math.sin(t * 6);
  } else if (readerMode === 'alert') {
    tmpC.set('#EF4444');
    I = (t * 4.5) % 1 < 0.55 ? 2.6 : 0.14;
  } else if (readerMode === 'wait') {
    tmpC.set('#F59E0B');
    I = 1.1 + 0.5 * Math.sin(t * 5);
  } else if (readerMode === 'silent') {
    tmpC.set('#F59E0B').lerp(new THREE.Color('#D946EF'), 0.5 + 0.5 * Math.sin(t * 1.6));
    I = 0.55 + 0.25 * (0.5 + 0.5 * Math.sin(t * 2.6));
  }
  R.haloM.color.copy(tmpC).multiplyScalar(0.35 + 0.65 * Math.min(I, 1.6));
  R.barM.color.copy(R.haloM.color);
  R.glowM.color.copy(tmpC);
  R.glowM.opacity = Math.min(0.95, I * 0.42);
  const gs = 0.8 + I * 0.45;
  R.glow.scale.set(gs, gs, 1);
  R.rl.color.copy(tmpC);
  R.rl.intensity = I * 2.2;

  // NFC Expanding Waves
  b.nfcWaves.forEach((w, idx) => {
    const lp = nfcWavePhase - idx * 0.18;
    if (lp <= 0 || lp >= 1) {
      w.mesh.visible = false;
      return;
    }
    w.mesh.visible = true;
    w.mat.color.set(nfcWaveColor);
    const s = 1 + lp * (readerMode === 'silent' ? 6.5 : 12);
    w.mesh.scale.set(s, s, s);
    w.mat.opacity = (1 - lp) * (readerMode === 'silent' ? 0.55 : 0.95);
  });

  // Ground Ripple
  if (ripplePos && ripplePos.p > 0 && ripplePos.p < 1) {
    b.groundRipple.mesh.visible = true;
    b.groundRipple.mesh.position.set(ripplePos.x, groundY(ripplePos.x, ripplePos.z) + 0.05, ripplePos.z);
    b.groundRipple.mat.color.set(ripplePos.color);
    const rs = 1 + ripplePos.p * 7;
    b.groundRipple.mesh.scale.set(rs, rs, rs);
    b.groundRipple.mat.opacity = (1 - ripplePos.p) * 0.85;
  } else {
    b.groundRipple.mesh.visible = false;
  }

  // Violet Roof Antenna Uplink Particles (Protocolo Violeta telemetry rising to C4)
  b.bus.updateMatrixWorld(true);
  const antW = new THREE.Vector3();
  b.ant.getWorldPosition(antW);
  b.uplinkSprites.forEach((u, idx) => {
    if (!violetActive) {
      u.sprite.visible = false;
      return;
    }
    const k = (t * 0.65 + idx * 0.2) % 1;
    u.sprite.visible = true;
    u.sprite.position.set(antW.x, antW.y + k * 8.5, antW.z);
    const s = 0.55 + k * 0.7;
    u.sprite.scale.set(s, s, 1);
    u.mat.opacity = Math.sin(k * Math.PI) * 0.72;
  });

  // Geofences
  const GREEN = new THREE.Color('#10B981');
  const RED = new THREE.Color('#EF4444');
  (['P1', 'P2', 'P3'] as const).forEach((id) => {
    const g = b.GEO[id];
    const gm = geoModes[id];
    let fo = 0.15 + 0.05 * Math.sin(t * 2);
    let ro = 0.85;
    let wo = 0.3 + 0.08 * Math.sin(t * 2);
    const col = g.base.clone();
    if (gm === 'ok') {
      col.copy(GREEN);
      fo = 0.34 + 0.08 * Math.sin(t * 5);
      ro = 1;
      wo = 0.6 + 0.1 * Math.sin(t * 5);
    } else if (gm === 'alert') {
      col.copy(RED);
      const on = (t * 4) % 1 < 0.55;
      fo = on ? 0.52 : 0.08;
      ro = on ? 1 : 0.3;
      wo = on ? 0.8 : 0.12;
    }
    const nb = 1 + n * 0.35;
    (g.fill.material as THREE.MeshBasicMaterial).color.copy(col);
    (g.ring.material as THREE.MeshBasicMaterial).color.copy(col);
    (g.wall.material as THREE.MeshBasicMaterial).color.copy(col);
    (g.rad.material as THREE.MeshBasicMaterial).color.copy(col);
    (g.fill.material as THREE.MeshBasicMaterial).opacity = fo * nb;
    (g.ring.material as THREE.MeshBasicMaterial).opacity = Math.min(1, ro * nb);
    (g.wall.material as THREE.MeshBasicMaterial).opacity = Math.min(1, wo * nb);
    const k = (t * 0.55 + (id === 'P2' ? 0.33 : id === 'P3' ? 0.66 : 0)) % 1;
    const sc = 0.4 + k * 5.2;
    g.rad.scale.set(sc, sc, sc);
    (g.rad.material as THREE.MeshBasicMaterial).opacity = (1 - k) * 0.55 * nb;
  });

  // Update Camera
  b.camera.position.copy(camPos);
  b.camera.lookAt(camTgt);
  b.sky.position.copy(camPos);

  // Project crisp HTML labels over 3D world
  Object.values(STOPS).forEach((st) => {
    const pt = stopPt(st, 3.6, 1.3);
    const dist = camPos.distanceTo(new THREE.Vector3(pt.x, 5.6, pt.z));
    projectLabel(
      b.labels[`stop_${st.id}`].el,
      b.camera,
      W,
      H,
      new THREE.Vector3(pt.x, 5.6, pt.z),
      dist > 14 // Avoid huge covering label when camera is right next to stop
    );
  });

  const busEl = b.labels.bus.el;
  if (showBusAlert) {
    busEl.style.background = 'rgba(153,27,27,0.94)';
    busEl.style.borderColor = '#EF4444';
    busEl.style.color = '#ffffff';
    busEl.textContent = '⚠ ALERTA · DESCENSO NO AUTORIZADO';
  } else {
    busEl.style.background = 'rgba(7,11,19,0.88)';
    busEl.style.borderColor = 'rgba(52,211,153,0.7)';
    busEl.style.color = '#34D399';
    busEl.textContent = 'UNIDAD 04 · R-12';
  }
  projectLabel(busEl, b.camera, W, H, new THREE.Vector3(bp.x, 4.45, bp.z), camPos.distanceTo(new THREE.Vector3(bp.x, 2, bp.z)) > 20);

  for (const p of PEOPLE_LIST) {
    const st = pLabels[p.id];
    const el = b.labels[`p_${p.id}`].el;
    el.innerHTML = `<span style="width:9px;height:9px;border-radius:50%;background:${st.col};box-shadow:0 0 8px ${st.col};display:inline-block"></span>${p.short} <small style="color:#cbd5e1;font-weight:500">· ${st.status}</small>`;
    projectLabel(
      el,
      b.camera,
      W,
      H,
      new THREE.Vector3(st.x, 2.25 * p.scale + 0.35, st.z),
      st.vis
    );
  }

  projectLabel(
    b.labels.rejectX.el,
    b.camera,
    W,
    H,
    new THREE.Vector3(pLabels.diego.x, 2.95, pLabels.diego.z),
    showRejectX && pLabels.diego.vis
  );

  b.renderer.render(b.scene, b.camera);
}

export const HtmlWorld3D: React.FC<HtmlWorld3DProps> = ({ mode, frame, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const labelHostRef = useRef<HTMLDivElement | null>(null);
  const bundleRef = useRef<HtmlWorldBundle | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const labelHost = labelHostRef.current;
    if (!canvas || !labelHost) return;

    const bundle = buildHtmlWorld(canvas, labelHost, width, height);
    bundleRef.current = bundle;
    applyHtmlFrame(bundle, mode, frame, width, height);

    return () => {
      bundle.dispose();
      bundleRef.current = null;
    };
    // Build Three.js world once per scene mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!bundleRef.current) return;
    applyHtmlFrame(bundleRef.current, mode, frame, width, height);
  }, [mode, frame, width, height]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ width: '100%', height: '100%', display: 'block' }} />
      <div
        ref={labelHostRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
      />
    </div>
  );
};
