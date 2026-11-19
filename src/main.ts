import * as THREE from 'three';
import './styles.css';

/* =========================================================================
   RUTA PULSO NFC · Gemelo Digital 3D (Vite + Three.js Local Bundle + Mobile Ready)
   Escena 100% procedural con Three.js (sin modelos externos ni dependencias CDN).
   ========================================================================= */

const ICONS: Record<string, string> = {
  pulse: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/>',
  nfc: '<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36M9.46 6.21a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 .01 15.8M16.37 2a20.16 20.16 0 0 1 0 20"/>',
  bus: '<path d="M8 6v6M15 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
  video: '<path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  vol: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  mute: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',
  max: '<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  ucheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
  eyeoff: '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
};

const ic = (n: string) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ''}</svg>`;
document.querySelectorAll<HTMLElement>('[data-i]').forEach((el) => {
  const name = el.dataset.i;
  if (name) el.insertAdjacentHTML('afterbegin', ic(name));
});

/* ---------- utilidades ---------- */
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s)!;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const EZ = {
  lin: (t: number) => t,
  inOut: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  sine: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2,
  out: (t: number) => 1 - Math.pow(1 - t, 3),
};
const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
const norm = (s: number) => ((s % 86400) + 86400) % 86400;
const hms = (s: number) => {
  const n = norm(s);
  return `${pad(n / 3600)}:${pad((n % 3600) / 60)}:${pad(n % 60)}`;
};
const hm12 = (s: number) => {
  const n = norm(s);
  let h = Math.floor(n / 3600);
  const m = Math.floor((n % 3600) / 60);
  const ap = h >= 12 ? 'PM' : 'AM';
  h %= 12;
  if (!h) h = 12;
  return `${pad(h)}:${pad(m)} ${ap}`;
};
const hmPhone = (s: number) => {
  const n = norm(s);
  return `${Math.floor(n / 3600)}:${pad((n % 3600) / 60)}`;
};

/* ---------- geometría de la ruta (circuito de esquinas redondeadas) ---------- */
function makeLoop(A: number, B: number, R: number) {
  const sx = 2 * (A - R);
  const sz = 2 * (B - R);
  const arc = (Math.PI * R) / 2;
  const arcSeg = (cx: number, cz: number, p0: number) => ({
    len: arc,
    f: (u: number) => {
      const p = p0 - u / R;
      return { x: cx + R * Math.cos(p), z: cz + R * Math.sin(p), tx: Math.sin(p), tz: -Math.cos(p) };
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

const LOOP = makeLoop(44.5, 22.5, 12.5);
const LL = LOOP.L;
const DOOR_X = 4.0;
const READER_X = 3.05;
const HALF_W = 1.25;
const NORTH_START = 64 + Math.PI * 12.5 + 20;

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

const S0 = (((STOPS.P1.s - 26) % LL) + LL) % LL;
const stopPt = (st: StopDef, along: number, out: number) => ({
  x: st.doorX + st.side * along,
  z: st.side * (25 + out),
});
const geoCenter = (st: StopDef) => stopPt(st, -0.6, 0.4);

interface PersonState {
  id: 'sofia' | 'diego' | 'ana' | 'laura';
  name: string;
  short: string;
  role: string;
  nfc: string;
  route: string;
  color: string;
  badge: string;
  hair: string;
  pants: string;
  scale: number;
  bag?: string;
  longHair?: boolean;
  vest?: boolean;
  tutor?: boolean;
  contact?: string;
  av: string;
  seat?: [number, number];
  visible: boolean;
  walking: boolean;
  arm: number;
  card: boolean;
  aboard: boolean;
  status: string;
  phase: number;
  hl: boolean;
  x: number;
  z: number;
  yaw: number;
}

const DAY0 = 7 * 3600 + 11 * 60;
const NIGHT0 = 22 * 3600 + 44 * 60;
const TIME_SCALE = 5;

const S = {
  night: false,
  nightT: 0,
  auto: true,
  stage: 0,
  busy: false,
  demo: false,
  alert: 'ok' as 'ok' | 'warn' | 'critical' | 'violet',
  clock: DAY0,
  violet: false,
  violetT0: 0,
  reader: 'idle' as 'idle' | 'ok' | 'alert' | 'wait' | 'silent',
  readerT: 0,
  sound: true,
  camMode: 'pano' as 'pano' | 'nfc' | 'bus' | 'stop',
};

const BUS = { s: S0, lastS: S0, door: 0, x: 0, z: 0, yaw: 0, yawRaw: 0, yawU: 0, vx: 0, vz: 0, speed: 0, brake: 0, wheelA: 0 };

const PEOPLE: Record<'sofia' | 'diego' | 'ana' | 'laura', PersonState> = {
  sofia: {
    id: 'sofia', name: 'Sofía M.', short: 'Sofía', role: 'Escolar', nfc: 'NFC-04A1', route: 'P1 → P2',
    color: '#38BDF8', badge: '#10B981', hair: '#3a2214', pants: '#1e3a8a', scale: 0.84, bag: '#f43f5e',
    longHair: true, contact: 'Laura M. (mamá)', av: 'SM', seat: [1.7, 0.55],
    visible: true, walking: false, arm: 0, card: false, aboard: false, status: 'wait', phase: 0, hl: false, x: 0, z: 0, yaw: 0,
  },
  diego: {
    id: 'diego', name: 'Diego R.', short: 'Diego', role: 'Escolar', nfc: 'NFC-04B7', route: 'P1 → P2',
    color: '#FB923C', badge: '#10B981', hair: '#17120f', pants: '#334155', scale: 0.88, bag: '#2563eb',
    contact: 'Familia Ramírez', av: 'DR', seat: [0.4, 0.55],
    visible: true, walking: false, arm: 0, card: false, aboard: false, status: 'wait', phase: 0, hl: false, x: 0, z: 0, yaw: 0,
  },
  ana: {
    id: 'ana', name: 'Ana L.', short: 'Ana', role: 'Turno Nocturno', nfc: 'NFC-07C2', route: 'P2 → P1',
    color: '#2DD4BF', badge: '#F59E0B', hair: '#24150c', pants: '#1f2937', scale: 1, vest: true,
    longHair: true, contact: 'Mariana L. (contacto de confianza)', av: 'AL', seat: [-1.3, -0.55],
    visible: true, walking: false, arm: 0, card: false, aboard: false, status: 'wait', phase: 0, hl: false, x: 0, z: 0, yaw: 0,
  },
  laura: {
    id: 'laura', name: 'Laura M.', short: 'Laura', role: 'Tutora autorizada de Sofía', nfc: 'NFC-T219', route: 'Tutora',
    color: '#F472B6', badge: '#3B82F6', hair: '#5b3820', pants: '#475569', scale: 1, longHair: true, tutor: true, av: 'LM',
    visible: true, walking: false, arm: 0, card: false, aboard: false, status: 'standby', phase: 0, hl: false, x: 0, z: 0, yaw: 0,
  },
};
const PL = Object.values(PEOPLE);

const ST: Record<string, [string, string, string]> = {
  wait: ['En espera', 'wait', '#94a3b8'],
  board: ['A bordo', 'board', '#10B981'],
  tutor: ['Esperando tutor', 'warn', '#F59E0B'],
  done: ['Entregada ✓', 'done', '#22c55e'],
  pend: ['No descendió', 'warn', '#F59E0B'],
  alert: ['ALERTA', 'bad', '#EF4444'],
  held: ['Retenido a bordo', 'warn', '#F59E0B'],
  vio: ['Protocolo Violeta', 'vio', '#A855F7'],
  safe: ['Segura · en seguimiento', 'vio', '#A855F7'],
  verif: ['Verificada ✓', 'done', '#22c55e'],
  standby: ['En parada', 'wait', '#94a3b8'],
};

/* ---------- motor de animación con cancelación ---------- */
class Cancel extends Error {}
interface TweenItem {
  t: number;
  d: number;
  fn: (eased: number, k: number) => void;
  ez: (t: number) => number;
  res: () => void;
  rej: (err: unknown) => void;
}
const tweens = new Set<TweenItem>();
function tween(d: number, fn: (eased: number, k: number) => void, ez = EZ.inOut): Promise<void> {
  return new Promise((res, rej) => {
    tweens.add({ t: 0, d: Math.max(0.001, d), fn, ez, res, rej });
  });
}
const wait = (d: number) => tween(d, () => {}, EZ.lin);
function stepTweens(dt: number) {
  for (const tw of [...tweens]) {
    tw.t += dt;
    const k = Math.min(1, tw.t / tw.d);
    try {
      tw.fn(tw.ez(k), k);
    } catch (e) {
      console.error(e);
    }
    if (k >= 1) {
      tweens.delete(tw);
      tw.res();
    }
  }
}
function cancelAll() {
  const l = [...tweens];
  tweens.clear();
  l.forEach((t) => t.rej(new Cancel()));
}

/* ---------- pose del autobús ---------- */
function updateBusPose(dt: number) {
  const p = LOOP.at(BUS.s);
  const yaw = Math.atan2(-p.tz, p.tx);
  let dy = yaw - BUS.yawRaw;
  if (dy > Math.PI) dy -= 2 * Math.PI;
  if (dy < -Math.PI) dy += 2 * Math.PI;
  BUS.yawU += dy;
  BUS.yawRaw = yaw;
  BUS.yaw = yaw;
  if (dt > 0) {
    BUS.vx = lerp(BUS.vx, (p.x - BUS.x) / dt, 0.3);
    BUS.vz = lerp(BUS.vz, (p.z - BUS.z) / dt, 0.3);
  } else {
    BUS.lastS = ((BUS.s % LL) + LL) % LL;
  }
  BUS.x = p.x;
  BUS.z = p.z;
}

function b2w(lx: number, lz: number) {
  const c = Math.cos(BUS.yaw);
  const s = Math.sin(BUS.yaw);
  return { x: BUS.x + lx * c + lz * s, z: BUS.z - lx * s + lz * c };
}
const readerStand = () => b2w(READER_X, HALF_W + 0.9);
const readerPt = () => b2w(READER_X, HALF_W);
const doorStep = () => b2w(DOOR_X, HALF_W + 0.82);
const doorIn = () => b2w(DOOR_X, 0.35);

function insideRR(x: number, z: number, A: number, B: number, R: number) {
  const dx = Math.max(Math.abs(x) - (A - R), 0);
  const dz = Math.max(Math.abs(z) - (B - R), 0);
  return Math.abs(x) <= A && Math.abs(z) <= B && dx * dx + dz * dz <= R * R;
}
const groundY = (x: number, z: number) => (!insideRR(x, z, 47, 25, 15) && insideRR(x, z, 52, 30, 20) ? 0.18 : 0);

/* ---------- audio (Web Audio, sin archivos) ---------- */
let actx: AudioContext | null = null;
function ac() {
  if (!actx) {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      actx = new AudioCtx();
    } catch {
      actx = null;
    }
  }
  if (actx && actx.state === 'suspended') void actx.resume().catch(() => {});
  return actx;
}
function tone(f: number, t0: number, dur: number, type: OscillatorType = 'sine', vol = 0.1) {
  if (!S.sound) return;
  const a = actx;
  if (!a) return;
  try {
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type;
    o.frequency.value = f;
    const t = a.currentTime + t0;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + dur + 0.05);
  } catch {
    // ignore audio block
  }
}
const sfx = {
  ok() {
    tone(880, 0, 0.16, 'sine', 0.09);
    tone(1318.5, 0.1, 0.3, 'sine', 0.08);
  },
  notif() {
    tone(1046.5, 0, 0.1, 'sine', 0.05);
    tone(1568, 0.07, 0.16, 'sine', 0.045);
  },
  warn() {
    tone(587, 0, 0.17, 'triangle', 0.09);
    tone(587, 0.23, 0.17, 'triangle', 0.09);
  },
  alert() {
    for (let i = 0; i < 6; i++) tone(i % 2 ? 740 : 988, i * 0.2, 0.18, 'square', 0.045);
  },
  door() {
    tone(330, 0, 0.18, 'sine', 0.03);
    tone(247, 0.12, 0.22, 'sine', 0.03);
  },
};

/* ---------- mobile tab helper ---------- */
function setMobTab(tab: 'ctrl' | 'phone' | 'log') {
  const appEl = $('.app');
  appEl.dataset.mobTab = tab;
  document.querySelectorAll<HTMLButtonElement>('#mobTabs .mob-tab').forEach((b) => {
    b.classList.toggle('on', b.dataset.tab === tab);
  });
  sizePhone();
}
document.querySelectorAll<HTMLButtonElement>('#mobTabs .mob-tab').forEach((b) => {
  b.addEventListener('click', () => {
    const tab = (b.dataset.tab || 'ctrl') as 'ctrl' | 'phone' | 'log';
    setMobTab(tab);
  });
});

/* ---------- UI: bitácora ---------- */
const LOGTXT: string[] = [];
let logN = 0;
const LOGTAG: Record<string, string> = { ok: 'NFC', info: 'GPS', warn: 'AVISO', bad: 'ALERTA', vio: 'VIOLETA', sys: 'SISTEMA' };

function syncMobBadges() {
  const mobPh = document.getElementById('mobPhBadge');
  if (mobPh) {
    mobPh.textContent = String(notifN);
    mobPh.classList.toggle('z', notifN === 0);
  }
  const mobLog = document.getElementById('mobLogBadge');
  if (mobLog) {
    mobLog.textContent = String(logN);
    mobLog.classList.toggle('z', logN === 0);
  }
}

function log(type: string, msg: string, tag?: string) {
  const t = hms(S.clock);
  const tg = tag || LOGTAG[type] || 'INFO';
  LOGTXT.push(`[${t}] ${tg} · ${msg}`);
  document.getElementById('logEmpty')?.remove();
  const li = document.createElement('li');
  li.className = 'le ' + type;
  const tm = document.createElement('time');
  tm.textContent = t;
  const dv = document.createElement('div');
  const sp = document.createElement('span');
  sp.className = 'lt';
  sp.textContent = tg;
  dv.append(sp, document.createTextNode(msg));
  li.append(tm, dv);
  const ol = $('#logList');
  ol.prepend(li);
  while (ol.children.length > 120) ol.lastElementChild?.remove();
  $('#logCnt').textContent = String(++logN);
  syncMobBadges();
}

function clearLog() {
  LOGTXT.length = 0;
  logN = 0;
  $('#logCnt').textContent = '0';
  $('#logList').innerHTML =
    '<li class="log-empty" id="logEmpty">Cada lectura NFC y evento de la unidad quedará registrado aquí con su hora exacta.</li>';
  syncMobBadges();
}

/* ---------- UI: celular ---------- */
let notifN = 0;
const NOTIFS: Array<{ el: HTMLDivElement; t: number }> = [];
const NT_ICON: Record<string, string> = { ok: 'check', warn: 'alert', bad: 'alert', vio: 'eyeoff', info: 'info' };

function mapSVG() {
  const sx = (x: number) => 100 + x * 1.6;
  const sy = (z: number) => 64 + z * 1.6;
  const stops = Object.values(STOPS)
    .map((st) => {
      const c = geoCenter(st);
      return `<circle cx="${sx(c.x)}" cy="${sy(c.z)}" r="8" fill="${st.color}" opacity=".18"/><circle cx="${sx(c.x)}" cy="${sy(c.z)}" r="3.2" fill="${st.color}"/><text x="${sx(c.x)}" y="${sy(c.z) + (st.side > 0 ? 15 : -9)}" fill="#cbd5e1" font-size="7.5" font-weight="700" text-anchor="middle" font-family="Inter,sans-serif">${st.id}</text>`;
    })
    .join('');
  return `<svg viewBox="0 0 200 128" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="128" fill="#0b1220"/>
  <g stroke="#16213a" stroke-width=".6">${Array.from({ length: 11 }, (_, i) => `<line x1="${i * 20}" y1="0" x2="${i * 20}" y2="128"/>`).join('')}${Array.from({ length: 7 }, (_, i) => `<line x1="0" y1="${i * 20 + 4}" x2="200" y2="${i * 20 + 4}"/>`).join('')}</g>
  <rect x="${sx(-33)}" y="${sy(-11)}" width="${66 * 1.6}" height="${22 * 1.6}" rx="2" fill="#12321f" opacity=".8"/>
  <rect x="${sx(-42)}" y="${sy(-20)}" width="${84 * 1.6}" height="${40 * 1.6}" rx="${10 * 1.6}" fill="none" stroke="#2b3748" stroke-width="13"/>
  <rect x="${sx(-42)}" y="${sy(-20)}" width="${84 * 1.6}" height="${40 * 1.6}" rx="${10 * 1.6}" fill="none" stroke="#475569" stroke-width=".8" stroke-dasharray="3 3"/>
  ${stops}
  <g class="mm-bus" transform="translate(${sx(BUS.x)},${sy(BUS.z)})"><circle r="9" fill="#a855f7" opacity=".28"><animate attributeName="r" values="5;11;5" dur="1.6s" repeatCount="indefinite"/></circle><circle r="3.8" fill="#fff" stroke="#10B981" stroke-width="1.8"/></g></svg>`;
}

function notify(opts: {
  type?: string;
  title: string;
  body: string;
  meta?: string;
  actions?: Array<{ act: string; icon: string; label: string }>;
  map?: boolean;
  shake?: boolean;
}) {
  const { type = 'info', title, body, meta, actions, map, shake } = opts;
  document.getElementById('phEmpty')?.remove();
  const el = document.createElement('div');
  el.className = `nt ${type}${shake ? ' shake' : ''}`;
  el.innerHTML = `<div class="nt-h"><div class="nt-ic">${ic(NT_ICON[type] || 'info')}</div><div class="nt-t"></div><div class="nt-tm">ahora</div></div><div class="nt-b"></div>${map ? `<div class="mm">${mapSVG()}<div class="mm-cap"><span>● EN VIVO</span><span class="mm-ll">—</span></div></div>` : ''}${meta ? '<div class="nt-m"></div>' : ''}${actions ? `<div class="nt-a">${actions.map((a) => `<button data-act="${a.act}">${ic(a.icon)}${a.label}</button>`).join('')}</div>` : ''}`;
  el.querySelector('.nt-t')!.textContent = title;
  el.querySelector('.nt-b')!.textContent = body;
  if (meta) el.querySelector('.nt-m')!.textContent = meta;
  const list = $('#phList');
  list.prepend(el);
  list.scrollTop = 0;
  NOTIFS.push({ el, t: S.clock });
  notifN++;
  const b = $('#phBadge');
  b.textContent = String(notifN);
  b.classList.remove('z');
  syncMobBadges();
  if (type === 'ok' || type === 'info') sfx.notif();
  else if (type === 'warn') sfx.warn();
}

function clearPhone() {
  NOTIFS.length = 0;
  notifN = 0;
  $('#phBadge').classList.add('z');
  $('#phList').innerHTML = `<div class="phempty" id="phEmpty">${ic('bell')}Sin notificaciones.<br>Los avisos de la Unidad 04 llegarán aquí al instante.</div>`;
  closeOvl();
  syncMobBadges();
}

function vibrate() {
  const p = $('#phone');
  p.classList.remove('vib');
  void p.offsetWidth;
  p.classList.add('vib');
}

let callTimer: number | null = null;
function closeOvl() {
  const o = $('#phOvl');
  o.classList.remove('show');
  o.innerHTML = '';
  if (callTimer !== null) {
    window.clearInterval(callTimer);
    callTimer = null;
  }
}

function openCall(name: string, sub: string) {
  closeOvl();
  const o = $('#phOvl');
  o.innerHTML = `<div class="call"><div class="call-top"><div class="call-av">${ic('phone')}</div><b></b><small></small><div class="call-st" id="callSt">Llamando…</div></div><div class="call-note">Llamada simulada para la demostración</div><button class="hang" data-close="1">${ic('phone')}</button></div>`;
  o.querySelector('b')!.textContent = name;
  o.querySelector('small')!.textContent = sub;
  o.classList.add('show');
  let sec = 0;
  callTimer = window.setInterval(() => {
    sec++;
    const st = document.getElementById('callSt');
    if (st && sec >= 2) st.textContent = `Conectado · 00:${pad(sec - 2)}`;
  }, 1000);
  log('info', `Llamada desde app familiar a ${name}`, 'APP');
}

function openGPS() {
  closeOvl();
  const o = $('#phOvl');
  o.innerHTML = `<div class="gps"><div class="gps-h"><button data-close="1">${ic('x')}</button><b>Ubicación de la Unidad 04</b><span class="live">EN VIVO</span></div><div class="gps-map">${mapSVG()}</div><div class="gps-info"><div><small>Unidad</small><b>04 · Ruta R-12</b></div><div><small>Velocidad</small><b class="gps-spd">0 km/h</b></div><div class="w"><small>Coordenadas GPS</small><b class="mono gps-ll">—</b></div><div class="w"><small>Estado</small><b class="gps-st">—</b></div></div></div>`;
  o.classList.add('show');
  log('info', 'Familia consultó el GPS en vivo de la Unidad 04', 'APP');
}

$('#phone').addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const c = target.closest('[data-close]');
  if (c) {
    closeOvl();
    return;
  }
  const b = target.closest<HTMLElement>('[data-act]');
  if (!b) return;
  ac();
  const a = b.dataset.act;
  if (a === 'call') openCall('Roberto S.', 'Chofer · Unidad 04');
  else if (a === 'gps') openGPS();
  else if (a === '911') openCall('911 · Emergencias', 'Enlace C4 Chihuahua');
});

/* ---------- UI: monitor central, leyendas, pasajeros ---------- */
function setMonitor(l: 'ok' | 'warn' | 'bad' | 'vio', title: string, sub: string, side = '') {
  const m = $('#monitor');
  m.dataset.l = l;
  m.classList.remove('ack');
  $('#monIc').innerHTML = ic({ ok: 'shield', warn: 'alert', bad: 'alert', vio: 'eyeoff' }[l]);
  $('#monK').textContent = {
    ok: 'Centro de Monitoreo · C4',
    warn: 'Centro de Monitoreo · Aviso operativo',
    bad: 'Centro de Monitoreo · Alerta crítica',
    vio: 'Centro de Monitoreo · Alerta silenciosa · Prioridad máxima',
  }[l];
  $('#monT').textContent = title;
  $('#monS').textContent = sub;
  $('#monSide').innerHTML = side;
}
const monitorOk = () =>
  setMonitor('ok', 'Monitoreo normal', 'Sin incidentes activos · Unidad 04 en servicio · enlace con C4 activo');

$('#monitor').addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('[data-ack]')) ackCritical();
});

function ackCritical() {
  if (S.alert !== 'critical') return;
  S.alert = 'warn';
  $('#monitor').classList.add('ack');
  setMonitor('warn', 'Alerta atendida por Monitoreo', 'Descenso no autorizado retenido · Diego R. a bordo · ruta corregida');
  if (V) {
    V.geo('P3', 'normal');
    V.setBusAlert(false);
  }
  $('#phStrip').textContent = 'Unidad 04 en servicio · alerta atendida';
  $('#phDot').style.background = 'var(--warn)';
  log('sys', 'Alerta crítica reconocida por el Centro de Monitoreo');
}

function setCap(tag: string, text: string, tone = 'idle') {
  $('#capTag').textContent = tag;
  $('#capText').textContent = text;
  $('#caption').dataset.tone = tone;
}

function renderPax() {
  const h = PL.map((p) => {
    const s = ST[p.status] || ST.wait;
    return `<div class="pr${p.hl ? ' hl' : ''}"><div class="av" style="background:${p.color}">${p.av}</div><div class="pn"><b>${p.name}</b><small>${p.role}</small></div><div class="prt">${p.nfc}<br>${p.route}</div><span class="bd ${s[1]}">${s[0]}</span></div>`;
  }).join('');
  $('#paxList').innerHTML = h;
  if (V) V.updateTags();
}

let toastT: number | null = null;
function toast(msg: string) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  if (toastT !== null) window.clearTimeout(toastT);
  toastT = window.setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- Día / Noche ---------- */
function setNight(on: boolean, quiet = false) {
  S.night = on;
  S.clock = on ? NIGHT0 : DAY0;
  document.querySelectorAll<HTMLButtonElement>('#segMode button').forEach((b) => {
    b.classList.toggle('on', (b.dataset.mode === 'night') === on);
  });
  const mc = $('#modeChip');
  mc.classList.toggle('night', on);
  mc.innerHTML = on ? `${ic('moon')}<span>Turno nocturno</span>` : `${ic('sun')}<span>Turno diurno</span>`;
  if (!quiet) {
    log('sys', on ? 'Modo Turno Nocturno: faros, alumbrado de paradas autorizadas e iluminación activados' : 'Modo Día activado');
    toast(on ? 'Modo Turno Nocturno activado' : 'Modo Día activado');
  }
}

/* =========================================================================
   VISTA 3D (Three.js local bundle + Responsive Mobile Camera)
   ========================================================================= */
interface ViewController {
  render: (dt: number) => void;
  wave: (color: string) => void;
  ripple: (x: number, z: number, color: string) => void;
  geo: (id: 'P1' | 'P2' | 'P3', mode: string) => void;
  seat: (id: string, on: boolean) => void;
  setCam: (m: 'pano' | 'nfc' | 'bus' | 'stop') => void;
  updateTags: () => void;
  setBusAlert: (on: boolean) => void;
  clearFx: () => void;
  snap: () => void;
  showX: boolean;
  readonly mode: 'pano' | 'nfc' | 'bus' | 'stop';
  renderer: THREE.WebGLRenderer;
}

let V: ViewController | null = null;
let T = 0;
let V_chimLight: THREE.Mesh | null = null;

function initView(): ViewController {
  const wrap = $('#scene');
  const canvas = $<HTMLCanvasElement>('#c3d');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.5, 1000);
  scene.fog = new THREE.Fog(0xcfe2f0, 150, 430);
  const C = (c: string | number) => new THREE.Color(c);
  const Lam = (c: string, o: THREE.MeshLambertMaterialParameters = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });
  const Std = (c: string, o: THREE.MeshStandardMaterialParameters = {}) =>
    new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, metalness: 0, ...o });

  function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D, W: number, H: number) => void, srgb = true) {
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
  const FONT = 'Inter, "Segoe UI", Arial, sans-serif';

  /* --- cielo, estrellas, luna --- */
  const skyU = { top: { value: C('#5d98d2') }, bot: { value: C('#d3e5f2') } };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(520, 32, 16),
    new THREE.ShaderMaterial({
      uniforms: skyU,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vP;\nvoid main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `uniform vec3 top;uniform vec3 bot;varying vec3 vP;\nvoid main(){float h=smoothstep(-0.03,0.55,vP.y);gl_FragColor=vec4(mix(bot,top,h),1.0);\n#include <colorspace_fragment>\n}`,
    })
  );
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  scene.add(sky);

  const starG = new THREE.BufferGeometry();
  {
    const a: number[] = [];
    for (let i = 0; i < 900; i++) {
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 0.92 + 0.06);
      a.push(Math.sin(ph) * Math.cos(th) * 480, Math.cos(ph) * 480, Math.sin(ph) * Math.sin(th) * 480);
    }
    starG.setAttribute('position', new THREE.Float32BufferAttribute(a, 3));
  }
  const stars = new THREE.Points(
    starG,
    new THREE.PointsMaterial({ color: '#e6ecff', size: 1.7, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false })
  );
  stars.frustumCulled = false;
  scene.add(stars);

  const moon = new THREE.Mesh(new THREE.SphereGeometry(9, 24, 16), new THREE.MeshBasicMaterial({ color: '#eef2ff', transparent: true, opacity: 0, fog: false }));
  moon.position.set(-170, 190, -330);
  scene.add(moon);

  /* --- luces --- */
  const hemi = new THREE.HemisphereLight('#e3efff', '#5d6b4c', 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff1db', 2.7);
  sun.position.set(70, 110, 55);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -85, right: 85, top: 85, bottom: -85, near: 10, far: 320 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.04;
  scene.add(sun, sun.target);

  /* --- suelo, avenida, banquetas --- */
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
    const g = depth ? new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: 28 }) : new THREE.ShapeGeometry(s, 28);
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
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.62, 0.04), Std('#facc15', { emissive: '#facc15', emissiveIntensity: 0.1 }));
    s.position.y = 2.55;
    s.rotation.z = Math.PI / 4;
    g.add(s);
  }

  /* --- edificios --- */
  const winMats: THREE.Material[] = [];
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  function facade(cols: number, rows: number, base: string) {
    const cw = 32;
    const rh = 40;
    const W = cols * cw;
    const H = rows * rh;
    const map = canvasTex(W, H, (g) => {
      g.fillStyle = base;
      g.fillRect(0, 0, W, H);
      for (let y = 0; y < rows; y++)
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
    });
    const emi = canvasTex(W, H, (g) => {
      g.fillStyle = '#000';
      g.fillRect(0, 0, W, H);
      for (let y = 0; y < rows; y++)
        for (let x = 0; x < cols; x++) {
          if (rnd() < 0.6) {
            g.fillStyle = rnd() < 0.8 ? '#ffd28a' : '#cfe8ff';
            g.fillRect(x * cw + 7, y * rh + 9, cw - 14, rh - 18);
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
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, transparent: true, roughness: 0.8, depthWrite: false }));
    p.rotation.x = -Math.PI / 2;
    p.position.set(x, y, z);
    scene.add(p);
  }

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
    const f = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.9, 0.06), Std('#64748b', { metalness: 0.4, transparent: true, opacity: 0.7 }));
    f.position.set(-30.5 + i * 2.8, 0.45, 36.2);
    scene.add(f);
  }

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
    const r = new THREE.Mesh(new THREE.ConeGeometry((m / 2 + 0.5) * Math.SQRT2, h * 0.65, 4), Lam(roofC, { flatShading: true }));
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
  {
    const ch = new THREE.Group();
    ch.position.set(39, 0, 52);
    scene.add(ch);
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.62 - i * 0.04, 0.68 - i * 0.04, 4, 16), Lam(i % 2 ? '#f3f4f6' : '#c2410c'));
      c.position.y = 2 + i * 4;
      c.castShadow = true;
      ch.add(c);
    }
    V_chimLight = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshBasicMaterial({ color: '#ff2d2d' }));
    V_chimLight.position.y = 16.3;
    ch.add(V_chimLight);
  }
  {
    const tw = new THREE.Group();
    tw.position.set(58, 0, 30);
    scene.add(tw);
    const lm = Std('#64748b', { metalness: 0.5 });
    for (const [a, b] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const l = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 8, 6), lm);
      l.position.set(a * 1.2, 4, b * 1.2);
      tw.add(l);
    }
    const tk = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 3, 20), Lam('#dfe6ec'));
    tk.position.y = 9.5;
    tk.castShadow = true;
    tw.add(tk);
  }

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
  [[-200, -260, 95, 48], [-60, -290, 120, 60], [110, -270, 100, 44], [260, -220, 90, 40], [-300, -120, 80, 36], [320, 40, 90, 38]].forEach(([x, z, r, h]) => {
    const c = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), hillM);
    c.position.set(x, h / 2 - 2, z);
    scene.add(c);
  });

  // Zona Aislada
  {
    const fenceTex = canvasTex(128, 128, (g) => {
      g.strokeStyle = 'rgba(180,186,196,.95)';
      g.lineWidth = 3;
      for (let i = -128; i < 256; i += 22) {
        g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 128, 128); g.stroke();
        g.beginPath(); g.moveTo(i + 128, 0); g.lineTo(i, 128); g.stroke();
      }
    });
    fenceTex.wrapS = fenceTex.wrapT = THREE.RepeatWrapping;
    fenceTex.repeat.set(36, 1);
    const fm = new THREE.MeshStandardMaterial({ map: fenceTex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, roughness: 0.8, metalness: 0.3 });
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
    [[-30, -42], [-4, -52], [18, -40], [34, -56], [-46, -58], [6, -70]].forEach(([x, z], i) => {
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
    for (let i = 0; i < 10; i++) {
      const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3 + rnd() * 0.5, 0), Lam('#6e6658', { flatShading: true }));
      r.position.set(-40 + rnd() * 80, 0.15, -36 - rnd() * 30);
      scene.add(r);
    }
  }

  // Parque central
  {
    const pm = Lam('#d8d2c2');
    const a = new THREE.Mesh(new THREE.BoxGeometry(64, 0.03, 1.6), pm); a.position.set(0, 0.155, 0); a.receiveShadow = true; scene.add(a);
    const b = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.03, 21), pm); b.position.set(0, 0.156, 0); b.receiveShadow = true; scene.add(b);
    const pl = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 0.06, 40), pm); pl.position.set(0, 0.16, 0); pl.receiveShadow = true; scene.add(pl);
    const fo = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2, 0.55, 28), Lam('#a8a29e')); fo.position.set(0, 0.45, 0); fo.castShadow = true; scene.add(fo);
    const wa = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.55, 0.05, 28), Std('#38bdf8', { roughness: 0.1, metalness: 0.2, emissive: '#0ea5e9', emissiveIntensity: 0.15 })); wa.position.set(0, 0.71, 0); scene.add(wa);
    const co = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 1.6, 10), Lam('#d6d3d1')); co.position.set(0, 1.4, 0); co.castShadow = true; scene.add(co);
  }

  // Árboles
  {
    const pts: Array<[number, number, number, number]> = [];
    for (const x of [-28, -21, -14, -8, 8, 14, 21, 28]) for (const z of [-6.5, 6.5]) pts.push([x + (rnd() - 0.5) * 2, z + (rnd() - 0.5) * 1.5, 0.14, 0.8 + rnd() * 0.45]);
    [[-40, 52], [-47, 36], [-32, 52], [-58, 34], [-68, 6], [-68, -8], [60, -28], [74, -2], [56, 16], [-56, -24], [30, 58], [-6, 52], [8, 48]].forEach(([x, z]) => pts.push([x, z, 0, 0.9 + rnd() * 0.5]));
    const tg = new THREE.CylinderGeometry(0.14, 0.2, 1.7, 6); tg.translate(0, 0.85, 0);
    const cg = new THREE.IcosahedronGeometry(1.45, 0); cg.translate(0, 2.75, 0);
    const ti = new THREE.InstancedMesh(tg, Lam('#6b4a2f'), pts.length);
    const ci = new THREE.InstancedMesh(cg, new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true }), pts.length);
    const d = new THREE.Object3D();
    const col = new THREE.Color();
    const greens = ['#4f8a46', '#5c9a4e', '#46803f', '#6aa557'];
    pts.forEach(([x, z, y, s], i) => {
      d.position.set(x, y, z); d.rotation.set(0, rnd() * 6, 0); d.scale.setScalar(s); d.updateMatrix();
      ti.setMatrixAt(i, d.matrix); ci.setMatrixAt(i, d.matrix);
      col.set(greens[i % 4]); ci.setColorAt(i, col);
    });
    if (ci.instanceColor) ci.instanceColor.needsUpdate = true;
    ti.castShadow = ci.castShadow = true; ci.receiveShadow = true;
    scene.add(ti, ci);
  }

  /* --- alumbrado público --- */
  const bulbM = Std('#fff6dc', { emissive: '#ffd48a', emissiveIntensity: 0 });
  const poolM = new THREE.MeshBasicMaterial({ map: glowTex, color: '#ffcf8a', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const lampLights: THREE.PointLight[] = [];
  const brokenBulbM = Std('#fff6dc', { emissive: '#ffd48a', emissiveIntensity: 0 });
  const brokenPoolM = poolM.clone();
  let brokenLight: THREE.PointLight | null = null;
  function lamp(x: number, z: number, fx: number, fz: number, real: boolean, broken = false) {
    const g = new THREE.Group(); g.position.set(x, 0.18, z); g.rotation.y = Math.atan2(fx, fz); scene.add(g);
    const pm = Std('#3b4352', { metalness: 0.5, roughness: 0.5 });
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 6.3, 8), pm); p.position.y = 3.15; p.castShadow = true; g.add(p);
    const a = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1.9), pm); a.position.set(0, 6.2, 0.9); g.add(a);
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.16, 0.62), pm); h.position.set(0, 6.12, 1.8); h.castShadow = true; g.add(h);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.04, 0.48), broken ? brokenBulbM : bulbM); b.position.set(0, 6.03, 1.8); g.add(b);
    const hx = x + fx * 1.8; const hz = z + fz * 1.8;
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(13, 13), broken ? brokenPoolM : poolM); pool.rotation.x = -Math.PI / 2; pool.position.set(hx, 0.205, hz); pool.renderOrder = 1; scene.add(pool);
    if (real || broken) {
      const l = new THREE.PointLight('#ffd9a0', 0, 26, 1.6); l.position.set(hx, 5.7, hz); scene.add(l);
      if (broken) brokenLight = l; else lampLights.push(l);
    }
  }
  [-44, -30, -6, 6, 32, 45].forEach((x) => lamp(x, 28.4, 0, -1, [-30, 6, 32].includes(x)));
  lamp(50.4, 0, -1, 0, false); lamp(-50.4, 0, 1, 0, false);
  [-22, 0, 22].forEach((x) => lamp(x, 13.3, 0, 1, false));
  lamp(-24, -28.4, 0, 1, false, true);

  /* --- paradas --- */
  const stopLights: THREE.PointLight[] = [];
  const stopPanelMats: THREE.MeshStandardMaterial[] = [];
  const signMats: Array<{ m: THREE.MeshStandardMaterial; auth: boolean }> = [];
  function signTexture(st: StopDef) {
    return canvasTex(512, 384, (g, W, H) => {
      g.fillStyle = '#0b1220'; rr(g, 0, 0, W, H, 34); g.fill();
      g.fillStyle = st.color; rr(g, 0, 0, W, 128, 34); g.fill(); g.fillRect(0, 90, W, 38);
      g.fillStyle = '#fff'; g.font = `900 72px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(`PARADA ${st.n}`, W / 2, 68);
      g.font = `800 ${st.name.length > 18 ? 38 : 46}px ${FONT}`; g.fillText(st.name, W / 2, 190);
      g.fillStyle = st.auth ? '#a7f3d0' : '#fecaca'; g.font = `700 31px ${FONT}`; g.fillText(st.auth ? (st.n === 1 ? '✓ Abordaje autorizado' : '✓ Descenso autorizado') : '✕ No autorizada', W / 2, 262);
      g.fillStyle = '#94a3b8'; g.font = `600 26px ${FONT}`; g.fillText('RUTA PULSO · NFC', W / 2, 332);
    });
  }
  Object.values(STOPS).forEach((st) => {
    const g = new THREE.Group(); g.position.set(st.doorX, 0.18, st.side * 25); g.rotation.y = st.side > 0 ? 0 : Math.PI; scene.add(g);
    const frame = Std(st.auth ? '#334155' : '#4b4f57', { metalness: 0.5, roughness: 0.45 });
    const roofM = st.auth ? Std('#e2e8f0', { roughness: 0.5 }) : Lam('#5b5f66');
    const cx = -1.8;
    for (const [ax, az] of [[-1.95, 1.75], [1.95, 1.75], [-1.95, 3.5], [1.95, 3.5]]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.5, 8), frame); p.position.set(cx + ax, 1.25, az); p.castShadow = true; g.add(p);
    }
    const roof = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.12, 2.1), roofM); roof.position.set(cx, 2.55, 2.6);
    if (!st.auth) { roof.rotation.z = 0.06; roof.scale.x = 0.82; roof.position.x = cx - 0.35; }
    roof.castShadow = true; g.add(roof);
    const acc = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.1, 0.05), Std(st.color, { emissive: st.color, emissiveIntensity: st.auth ? 0.6 : 0.25 })); acc.position.set(cx, 2.47, 1.55); g.add(acc);
    if (st.auth) {
      const gl = new THREE.Mesh(new THREE.BoxGeometry(4.1, 2.0, 0.04), new THREE.MeshStandardMaterial({ color: '#bfe3ff', transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0.2, depthWrite: false })); gl.position.set(cx, 1.35, 3.55); g.add(gl);
      const pm = Std('#e8f6ff', { emissive: '#e8f6ff', emissiveIntensity: 0 }); stopPanelMats.push(pm);
      const lp = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.03, 0.5), pm); lp.position.set(cx, 2.485, 2.6); g.add(lp);
      const l = new THREE.PointLight('#e9f5ff', 0, 16, 1.6); const w = stopPt(st, -1.8, 2.4); l.position.set(w.x, 2.3, w.z); scene.add(l); stopLights.push(l);
      const adM = Std(st.color, { emissive: st.color, emissiveIntensity: 0 });
      const ad = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.7), adM); ad.position.set(cx + 1.25, 1.35, 3.52); ad.rotation.y = Math.PI; g.add(ad); stopPanelMats.push(adM);
    } else {
      const gl = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 0.04), new THREE.MeshStandardMaterial({ color: '#9ca3af', transparent: true, opacity: 0.18, depthWrite: false })); gl.position.set(cx - 1.1, 1.0, 3.55); gl.rotation.z = 0.12; g.add(gl);
    }
    const bench = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.08, 0.5), Std(st.auth ? '#8b5e3c' : '#57534e')); bench.position.set(cx, 0.5, 3.15); bench.castShadow = true; g.add(bench);
    for (const bx of [-1.3, 1.3]) { const lg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.4), frame); lg.position.set(cx + bx, 0.25, 3.15); g.add(lg); }
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 3.9, 8), frame); pole.position.set(3.6, 1.95, 1.3); pole.castShadow = true; g.add(pole);
    const tx = signTexture(st);
    const sm = new THREE.MeshStandardMaterial({ map: tx, emissiveMap: tx, emissive: '#ffffff', emissiveIntensity: 0.15, roughness: 0.55 }); signMats.push({ m: sm, auth: st.auth });
    const side = Std('#0b1220');
    const sign = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.42, 0.08), [side, side, side, side, sm, sm]); sign.position.set(3.6, 3.35, 1.3); sign.castShadow = true; g.add(sign);
    if (!st.auth) {
      const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.04, 3), Std('#facc15', { emissive: '#facc15', emissiveIntensity: 0.25 })); tr.rotation.x = Math.PI / 2; tr.rotation.y = Math.PI; tr.position.set(3.6, 4.45, 1.3); g.add(tr);
    }
  });

  /* --- geocercas luminosas --- */
  const GEO: Record<'P1' | 'P2' | 'P3', { fill: THREE.Mesh; ring: THREE.Mesh; rad: THREE.Mesh; wall: THREE.Mesh; base: THREE.Color; mode: string; col: THREE.Color }> = {} as never;
  Object.values(STOPS).forEach((st) => {
    const c = geoCenter(st); const R = 5.8; const grp = new THREE.Group(); grp.position.set(c.x, 0, c.z); scene.add(grp);
    const mk = (geo: THREE.BufferGeometry, op: number, y: number, rot = true, map: THREE.Texture | null = null) => {
      const m = new THREE.MeshBasicMaterial({ color: st.color, transparent: true, opacity: op, depthWrite: false, side: THREE.DoubleSide, toneMapped: false, map });
      const o = new THREE.Mesh(geo, m); if (rot) o.rotation.x = -Math.PI / 2; o.position.y = y; o.renderOrder = 3; grp.add(o); return o;
    };
    GEO[st.id] = {
      fill: mk(new THREE.CircleGeometry(R, 64), 0.16, 0.215),
      ring: mk(new THREE.RingGeometry(R - 0.24, R, 96), 0.9, 0.225),
      rad: mk(new THREE.RingGeometry(0.9, 1, 96), 0.5, 0.23),
      wall: mk(new THREE.CylinderGeometry(R, R, 1.7, 96, 1, true), 0.34, 0.85, false, wallTex),
      base: C(st.color), mode: 'normal', col: C(st.color),
    };
  });
  const GREEN = C('#10B981'); const RED = C('#EF4444');

  /* --- autobús --- */
  const bus = new THREE.Group(); scene.add(bus);
  const wheels: THREE.Group[] = [];
  const leaves: Array<{ hinge: THREE.Group; s: number }> = [];
  const spots: THREE.SpotLight[] = [];
  const seats: Record<string, THREE.Group> = {};
  const white = Std('#eef2f6', { roughness: 0.42, metalness: 0.12 });
  const dark = Std('#1a202b', { roughness: 0.7 });
  const trim = Std('#0f172a', { roughness: 0.5, metalness: 0.3 });
  const emer = Std('#10B981', { roughness: 0.35, emissive: '#10B981', emissiveIntensity: 0.35 });
  const glass = new THREE.MeshStandardMaterial({ color: '#0c1826', roughness: 0.06, metalness: 0.5, transparent: true, opacity: 0.5, depthWrite: false });
  const interior = new THREE.MeshStandardMaterial({ color: '#3a4556', roughness: 0.9, side: THREE.BackSide, emissive: '#ffdcaa', emissiveIntensity: 0 });
  const addB = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, cast = true, par: THREE.Object3D = bus) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; par.add(m); return m;
  };
  const Bx = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
  addB(Bx(11, 1.3, 2.5), white, 0, 1.1, 0);
  addB(Bx(11.04, 0.32, 2.54), dark, 0, 0.56, 0);
  addB(Bx(11.03, 0.13, 2.52), emer, 0, 1.62, 0);
  addB(Bx(10.7, 0.96, 2.36), interior, 0, 2.25, 0, false);
  const gl = addB(Bx(10.96, 1.0, 2.48), glass, 0, 2.25, 0, false); gl.renderOrder = 2;
  for (const x of [-3.9, -2.3, -0.7, 0.9, 2.5, 3.42, 4.58]) for (const z of [-1.245, 1.245]) { if (z > 0 && (x === 3.42 || x === 4.58)) continue; addB(Bx(0.17, 1.0, 0.07), white, x, 2.25, z); }
  addB(Bx(0.14, 1.0, 2.5), white, -5.43, 2.25, 0);
  for (const z of [-1.2, 1.2]) addB(Bx(0.16, 1.0, 0.12), white, 5.42, 2.25, z);
  addB(Bx(11, 0.42, 2.5), white, 0, 2.96, 0);
  addB(Bx(10.4, 0.1, 2.2), white, 0, 3.22, 0);
  addB(Bx(2.6, 0.32, 1.5), Std('#cfd6de', { metalness: 0.3 }), -1.2, 3.43, 0);
  addB(Bx(0.07, 0.64, 2.42), trim, 5.53, 0.98, 0);
  addB(Bx(0.28, 0.26, 2.54), dark, 5.56, 0.55, 0); addB(Bx(0.24, 0.26, 2.54), dark, -5.55, 0.55, 0);
  const headM = Std('#fff7df', { emissive: '#fff2cf', emissiveIntensity: 0.25 });
  for (const z of [-0.82, 0.82]) addB(Bx(0.05, 0.22, 0.46), headM, 5.575, 0.98, z, false);
  const tailM = Std('#7f1d1d', { emissive: '#ff2a2a', emissiveIntensity: 0.5 });
  for (const z of [-0.95, 0.95]) addB(Bx(0.05, 0.32, 0.28), tailM, -5.56, 1.25, z, false);
  const led = canvasTex(512, 80, (g, W, H) => { g.fillStyle = '#120c02'; g.fillRect(0, 0, W, H); g.fillStyle = '#ffb020'; g.font = `800 46px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('R-12 · ESCOLAR / LABORAL', W / 2, H / 2 + 2); });
  const lp = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 0.32), new THREE.MeshStandardMaterial({ map: led, emissiveMap: led, emissive: '#ffffff', emissiveIntensity: 0.9 })); lp.rotation.y = Math.PI / 2; lp.position.set(5.512, 2.95, 0); bus.add(lp);
  const deco = canvasTex(1024, 128, (g, W, H) => { g.fillStyle = '#0f172a'; g.font = `900 62px ${FONT}`; g.textBaseline = 'middle'; g.fillText('RUTA PULSO', 24, H / 2 + 2); g.fillStyle = '#059669'; g.fillText('NFC', 450, H / 2 + 2); g.fillStyle = '#334155'; g.font = `800 50px ${FONT}`; g.textAlign = 'right'; g.fillText('UNIDAD 04', W - 24, H / 2 + 2); });
  for (const s of [1, -1]) { const dp = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 0.7), new THREE.MeshStandardMaterial({ map: deco, transparent: true, roughness: 0.5 })); dp.position.set(-1.4, 1.18, s * 1.256); if (s < 0) dp.rotation.y = Math.PI; bus.add(dp); }
  for (const z of [-1, 1]) { addB(Bx(0.5, 0.05, 0.05), trim, 5.62, 2.35, z * 1.38, false); addB(Bx(0.08, 0.42, 0.22), trim, 5.82, 2.15, z * 1.55); }
  const tireM = Std('#15181d', { roughness: 0.9 }); const hubM = Std('#c7ccd3', { metalness: 0.6, roughness: 0.35 }); const spM = Std('#4b5563');
  for (const x of [3.55, -3.45]) for (const z of [-1.13, 1.13]) {
    const w = new THREE.Group(); w.position.set(x, 0.5, z); bus.add(w);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.36, 24), tireM); t.rotation.x = Math.PI / 2; t.castShadow = true; w.add(t);
    const h = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.38, 16), hubM); h.rotation.x = Math.PI / 2; w.add(h);
    for (let i = 0; i < 3; i++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.07, 0.39), spM); sp.rotation.z = (i * Math.PI) / 3; w.add(sp); }
    wheels.push(w);
  }
  const doorwayM = Std('#0d1117', { emissive: '#ffd9a8', emissiveIntensity: 0 });
  addB(Bx(1.12, 2.2, 0.02), doorwayM, DOOR_X, 1.55, 1.254, false);
  addB(Bx(1.1, 0.07, 0.34), Std('#94a3b8', { metalness: 0.5 }), DOOR_X, 0.45, 1.36, false);
  const stepLightM = new THREE.MeshBasicMaterial({ color: '#34d399', transparent: true, opacity: 0, toneMapped: false });
  addB(Bx(1.0, 0.03, 0.05), stepLightM, DOOR_X, 0.5, 1.5, false);
  const doorM = Std('#d7dde4', { metalness: 0.35, roughness: 0.4 });
  for (const s of [-1, 1]) {
    const hinge = new THREE.Group(); hinge.position.set(DOOR_X + s * 0.57, 1.55, 1.29); bus.add(hinge);
    const lf = new THREE.Mesh(new THREE.BoxGeometry(0.56, 2.16, 0.05), doorM); lf.position.x = -s * 0.28; lf.castShadow = true; hinge.add(lf);
    const lg = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.05, 0.06), glass); lg.position.set(-s * 0.28, 0.4, 0); hinge.add(lg);
    leaves.push({ hinge, s });
  }
  const drv = new THREE.Group(); drv.position.set(4.55, 0, -0.55); bus.add(drv);
  const dtM = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.34, 3, 8), Std('#1e3a5f')); dtM.position.y = 1.85; drv.add(dtM);
  const dh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), Std('#c99474')); dh.position.y = 2.32; drv.add(dh);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), Std('#10B981')); cap.position.y = 2.36; drv.add(cap);
  addB(new THREE.CylinderGeometry(0.025, 0.025, 0.7, 6), trim, -3.6, 3.6, 0.6, false);
  const antM = new THREE.MeshBasicMaterial({ color: '#64748b', toneMapped: false });
  const ant = addB(new THREE.SphereGeometry(0.07, 10, 8), antM, -3.6, 3.97, 0.6, false);
  const beamM = new THREE.MeshBasicMaterial({ map: beamTex, color: '#fff1d0', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  for (const z of [-0.82, 0.82]) {
    const sp = new THREE.SpotLight('#fff1d6', 0, 48, 0.5, 0.55, 1.4); sp.position.set(5.62, 1.0, z); sp.target.position.set(20, -0.4, z * 1.6); bus.add(sp, sp.target); spots.push(sp);
    const bm = new THREE.Mesh(new THREE.ConeGeometry(2.3, 13, 24, 1, true), beamM); bm.rotation.z = Math.PI / 2 + 0.06; bm.position.set(5.62 + 6.5, 0.75, z); bus.add(bm);
  }
  const rd = new THREE.Group(); rd.position.set(READER_X, 1.38, 1.285); rd.scale.setScalar(1.3); bus.add(rd);
  addB(Bx(0.32, 0.48, 0.07), Std('#111827', { metalness: 0.6, roughness: 0.35 }), 0, 0, 0, true, rd);
  const face = canvasTex(128, 128, (g) => { g.fillStyle = '#0b1220'; g.fillRect(0, 0, 128, 128); g.strokeStyle = '#e2e8f0'; g.lineWidth = 7; g.lineCap = 'round'; for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(40, 64, 16 + i * 16, -Math.PI / 3.2, Math.PI / 3.2); g.stroke(); } g.fillStyle = '#e2e8f0'; g.beginPath(); g.arc(40, 64, 6, 0, Math.PI * 2); g.fill(); });
  const fp = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.24), new THREE.MeshStandardMaterial({ map: face, emissiveMap: face, emissive: '#ffffff', emissiveIntensity: 0.5 })); fp.position.set(0, 0.07, 0.037); rd.add(fp);
  const haloM = new THREE.MeshBasicMaterial({ color: '#3B82F6', toneMapped: false });
  const halo = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.024, 10, 48), haloM); halo.position.set(0, 0.07, 0.045); rd.add(halo);
  const barM = new THREE.MeshBasicMaterial({ color: '#3B82F6', toneMapped: false }); addB(Bx(0.2, 0.03, 0.02), barM, 0, -0.18, 0.04, false, rd);
  const glowM = new THREE.SpriteMaterial({ map: glowTex, color: '#3B82F6', transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending });
  const glow = new THREE.Sprite(glowM); glow.position.set(0, 0.07, 0.14); glow.scale.set(1.1, 1.1, 1); rd.add(glow);
  const rl = new THREE.PointLight('#3B82F6', 1, 5, 1.6); rl.position.set(0, 0.07, 0.4); rd.add(rl);

  for (const p of PL) {
    if (!p.seat) continue;
    const sg = new THREE.Group(); sg.position.set(p.seat[0], 0, p.seat[1]); sg.visible = false; bus.add(sg);
    const t = new THREE.Mesh(new THREE.CapsuleGeometry(0.19 * p.scale, 0.3, 3, 8), Std(p.color)); t.position.y = 1.82; sg.add(t);
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.15 * p.scale, 12, 10), Std('#d9a77f')); h.position.y = 2.2; sg.add(h);
    const hr = new THREE.Mesh(new THREE.SphereGeometry(0.16 * p.scale, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), Std(p.hair)); hr.position.y = 2.22; sg.add(hr);
    seats[p.id] = sg;
  }

  /* --- personas --- */
  const PM: Record<string, { g: THREE.Group; legs: THREE.Group[]; arms: THREE.Group[]; card: THREE.Mesh; yaw: number; y: number }> = {};
  for (const p of PL) {
    const g = new THREE.Group(); scene.add(g);
    const skin = Std('#d9a77f'); const shirt = Std(p.color, { roughness: 0.65 }); const pants = Std(p.pants); const hair = Std(p.hair, { roughness: 0.9 }); const shoe = Std('#111827');
    const mk = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, par: THREE.Object3D = g) => {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; par.add(m); return m;
    };
    mk(new THREE.CapsuleGeometry(0.2, 0.46, 4, 10), shirt, 0, 1.13, 0);
    mk(new THREE.SphereGeometry(0.17, 16, 12), skin, 0, 1.62, 0);
    mk(new THREE.SphereGeometry(0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair, 0, 1.645, -0.01);
    if (p.longHair) mk(new THREE.CapsuleGeometry(0.1, 0.2, 3, 8), hair, 0, 1.5, -0.13);
    const legs: THREE.Group[] = []; const arms: THREE.Group[] = [];
    for (const s of [-1, 1]) {
      const hip = new THREE.Group(); hip.position.set(s * 0.1, 0.8, 0); g.add(hip);
      mk(new THREE.CapsuleGeometry(0.085, 0.5, 3, 8), pants, 0, -0.36, 0, hip);
      mk(new THREE.BoxGeometry(0.14, 0.08, 0.25), shoe, 0, -0.75, 0.04, hip);
      legs.push(hip);
      const sh = new THREE.Group(); sh.position.set(s * 0.27, 1.38, 0); g.add(sh);
      mk(new THREE.CapsuleGeometry(0.065, 0.42, 3, 8), shirt, 0, -0.27, 0, sh);
      mk(new THREE.SphereGeometry(0.07, 10, 8), skin, 0, -0.55, 0, sh);
      arms.push(sh);
    }
    mk(new THREE.BoxGeometry(0.13, 0.09, 0.02), Std(p.badge, { emissive: p.badge, emissiveIntensity: 1.1 }), 0.08, 1.27, 0.205);
    if (p.bag) mk(new THREE.BoxGeometry(0.32, 0.38, 0.16), Std(p.bag), 0, 1.15, -0.25);
    if (p.vest) {
      const vm = Std('#f59e0b', { emissive: '#f59e0b', emissiveIntensity: 0.6 });
      for (const y of [1.0, 1.24]) { const v = new THREE.Mesh(new THREE.CylinderGeometry(0.212, 0.212, 0.05, 18, 1, true), vm); v.position.y = y; g.add(v); }
    }
    if (p.tutor) {
      const lan = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.14, 0.02), Std('#3B82F6', { emissive: '#3B82F6', emissiveIntensity: 1 })); lan.position.set(0, 1.2, 0.21); g.add(lan);
    }
    const card = mk(new THREE.BoxGeometry(0.1, 0.14, 0.014), Std('#ffffff', { emissive: '#d1fae5', emissiveIntensity: 0.5 }), 0, -0.62, 0.05, arms[0]);
    card.visible = false;
    g.scale.setScalar(p.scale);
    PM[p.id] = { g, legs, arms, card, yaw: 0, y: 0 };
  }

  /* --- etiquetas HTML proyectadas --- */
  const labelsEl = $('#labels');
  const LBL: Array<{ el: HTMLDivElement; getPos: () => { x: number; y: number; z: number }; vis?: () => boolean }> = [];
  function addLabel(cls: string, html: string, getPos: () => { x: number; y: number; z: number }, vis?: () => boolean) {
    const el = document.createElement('div');
    el.className = 'lbl ' + cls;
    el.innerHTML = html;
    labelsEl.appendChild(el);
    const o = { el, getPos, vis };
    LBL.push(o);
    return o;
  }
  const v3 = new THREE.Vector3();
  const stopLbl: Record<string, { el: HTMLDivElement }> = {};
  Object.values(STOPS).forEach((st) => {
    const p = stopPt(st, 3.6, 1.3);
    stopLbl[st.id] = addLabel('lbl-stop', `<span><span class="n">P${st.n}</span> · ${st.name}</span><small>${st.sub}</small>`, () => ({ x: p.x, y: 5.6, z: p.z }));
    stopLbl[st.id].el.style.setProperty('--c', st.color);
  });
  const tagLbl: Record<string, { el: HTMLDivElement }> = {};
  const camDist = (p: { x: number; z: number }) => Math.hypot(camera.position.x - p.x, camera.position.y - 1, camera.position.z - p.z);
  PL.forEach((p) => {
    tagLbl[p.id] = addLabel('lbl-tag', '', () => ({ x: p.x, y: 2.15 * p.scale + 0.25, z: p.z }), () => p.visible && camDist(p) < 75);
  });
  const busLbl = addLabel('lbl-bus', `${ic('bus')}<span>UNIDAD 04</span>`, () => ({ x: BUS.x, y: 4.35, z: BUS.z }));
  const controllerRef = { showX: false };
  addLabel('lbl-x', `${ic('x')}<span>Descenso rechazado · fuera de geocerca</span>`, () => ({ x: PEOPLE.diego.x, y: 2.7, z: PEOPLE.diego.z }), () => controllerRef.showX && PEOPLE.diego.visible);

  function updateTags() {
    PL.forEach((p) => {
      const s = ST[p.status] || ST.wait;
      tagLbl[p.id].el.innerHTML = `<i style="--c:${s[2]}"></i>${p.short}<small>· ${s[0]}</small>`;
    });
  }

  /* --- efectos (ondas NFC, partículas) --- */
  interface FxItem {
    obj: THREE.Object3D;
    parent: THREE.Object3D;
    t: number;
    dur: number;
    upd: (k: number, obj: THREE.Object3D, t: number) => void;
  }
  const FX: FxItem[] = [];
  const ringGeo = new THREE.RingGeometry(0.16, 0.21, 48);
  const gRingGeo = new THREE.RingGeometry(0.32, 0.4, 48);
  function addFx(obj: THREE.Object3D, parent: THREE.Object3D, dur: number, upd: FxItem['upd']) {
    parent.add(obj);
    FX.push({ obj, parent, t: 0, dur, upd });
  }
  function wave(color: string) {
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
      m.position.set(READER_X, 1.47, 1.36);
      const delay = i * 0.17;
      addFx(m, bus, 1.15 + delay, (_k, o, t) => {
        const tt = (t - delay) / 1.15;
        if (tt < 0) { o.visible = false; return; }
        o.visible = true;
        const s = 1 + tt * 12;
        o.scale.set(s, s, s);
        ((o as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = (1 - tt) * 0.95;
      });
    }
  }
  function ripple(x: number, z: number, color: string) {
    const m = new THREE.Mesh(gRingGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, groundY(x, z) + 0.05, z);
    addFx(m, scene, 1.1, (k, o) => {
      const s = 1 + k * 7;
      o.scale.set(s, s, s);
      ((o as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = (1 - k) * 0.85;
    });
  }
  let upT = 0;
  function uplink(dt: number) {
    upT -= dt;
    if (upT > 0) return;
    upT = 0.22;
    const w = new THREE.Vector3();
    ant.getWorldPosition(w);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#c084fc', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    sp.position.copy(w);
    sp.scale.set(0.6, 0.6, 1);
    addFx(sp, scene, 1.8, (k, o) => {
      o.position.y = w.y + k * 9;
      ((o as THREE.Sprite).material as THREE.SpriteMaterial).opacity = Math.sin(k * Math.PI) * 0.55;
      const s = 0.5 + k * 0.6;
      o.scale.set(s, s, 1);
    });
  }

  /* --- cámara adaptativa para escritorio y móvil --- */
  let W = 1;
  let H = 1;
  const CAM = {
    mode: 'pano' as 'pano' | 'nfc' | 'bus' | 'stop',
    sph: { theta: 0.5, phi: 0.88, r: 120 },
    pan: new THREE.Vector3(0, 0, 3),
    pos: new THREE.Vector3(70, 80, 110),
    tgt: new THREE.Vector3(0, 0, 3),
  };
  function panoR() {
    const mobile = W < 640;
    return (mobile ? 105 : 118) * Math.max(1, (mobile ? 1.05 : 1.38) / Math.max(camera.aspect, 0.6));
  }
  const PRE: Record<'pano' | 'bus' | 'nfc' | 'stop', () => { theta: number; phi: number; r: number }> = {
    pano: () => ({ theta: 0.32, phi: W < 640 ? 0.68 : 0.74, r: panoR() }),
    bus: () => ({ theta: -0.95, phi: 1.12, r: 21 }),
    nfc: () => ({ theta: 0.62, phi: 1.28, r: 6.8 }),
    stop: () => ({ theta: 0.62, phi: 0.82, r: 17.5 }),
  };
  const LIM: Record<'pano' | 'bus' | 'nfc' | 'stop', [number, number]> = {
    pano: [25, 260],
    bus: [7, 70],
    nfc: [2.6, 24],
    stop: [6, 60],
  };

  function setCam(m: 'pano' | 'nfc' | 'bus' | 'stop') {
    CAM.mode = m;
    S.camMode = m;
    Object.assign(CAM.sph, PRE[m]());
    if (m !== 'pano') CAM.sph.r = clamp(CAM.sph.r * Math.max(1, 1.18 / Math.max(camera.aspect, 0.65)), LIM[m][0], LIM[m][1]);
    if (m === 'pano') CAM.pan.set(0, 0, 3);
    document.querySelectorAll<HTMLButtonElement>('#segCam button').forEach((b) => b.classList.toggle('on', b.dataset.cam === m));
  }

  const tgtV = new THREE.Vector3();
  const desV = new THREE.Vector3();
  const rdW = new THREE.Vector3();
  function camTarget(out: THREE.Vector3) {
    const m = CAM.mode;
    if (m === 'pano') return out.copy(CAM.pan);
    if (m === 'nfc') { rd.getWorldPosition(rdW); return out.copy(rdW); }
    if (m === 'bus') return out.set(BUS.x, 1.6, BUS.z);
    const d = b2w(DOOR_X - 0.6, HALF_W + 1.6);
    return out.set(d.x, 1.2, d.z);
  }
  function updateCam(dt: number, snap: boolean) {
    camTarget(tgtV);
    const base = CAM.mode === 'pano' ? 0 : BUS.yawU;
    const a = CAM.sph.theta + base;
    const ph = CAM.sph.phi;
    const r = CAM.sph.r;
    const rate = CAM.mode === 'nfc' ? 5 : CAM.mode === 'pano' ? 3.2 : 3.6;
    if (CAM.mode !== 'pano') {
      tgtV.x += BUS.vx / rate;
      tgtV.z += BUS.vz / rate;
    }
    desV.set(tgtV.x + r * Math.sin(ph) * Math.sin(a), tgtV.y + r * Math.cos(ph), tgtV.z + r * Math.sin(ph) * Math.cos(a));
    const k = snap ? 1 : 1 - Math.exp(-dt * rate);
    CAM.pos.lerp(desV, k);
    CAM.tgt.lerp(tgtV, k);
    camera.position.copy(CAM.pos);
    camera.lookAt(CAM.tgt);
    sky.position.copy(camera.position);
  }

  // Controles táctiles (1 dedo rotar, 2 dedos pinch-zoom) y mouse
  const ptrs = new Map<number, { x: number; y: number }>();
  let pinch0 = 0;
  let drag: { pan: boolean } | null = null;
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    drag = { pan: e.button === 2 || e.shiftKey };
    if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      pinch0 = Math.hypot(a.x - b.x, a.y - b.y);
    }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!ptrs.has(e.pointerId)) return;
    const pr = ptrs.get(e.pointerId)!;
    const dx = e.clientX - pr.x;
    const dy = e.clientY - pr.y;
    pr.x = e.clientX;
    pr.y = e.clientY;
    if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch0 > 0) zoom(pinch0 / d);
      pinch0 = d;
      return;
    }
    if (drag && drag.pan && CAM.mode === 'pano') panBy(dx, dy);
    else {
      CAM.sph.theta -= dx * 0.0062;
      CAM.sph.phi = clamp(CAM.sph.phi - dy * 0.005, 0.18, 1.47);
    }
  });
  const up = (e: PointerEvent) => {
    ptrs.delete(e.pointerId);
    if (ptrs.size < 2) pinch0 = 0;
    if (!ptrs.size) drag = null;
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    zoom(Math.exp(e.deltaY * 0.0011));
  }, { passive: false });
  function zoom(f: number) {
    const l = LIM[CAM.mode];
    CAM.sph.r = clamp(CAM.sph.r * f, l[0], l[1]);
  }
  function panBy(dx: number, dy: number) {
    const a = CAM.sph.theta;
    const s = CAM.sph.r * 0.0017;
    const rx = Math.cos(a);
    const rz = -Math.sin(a);
    const fx = -Math.sin(a);
    const fz = -Math.cos(a);
    CAM.pan.x = clamp(CAM.pan.x - rx * dx * s + fx * dy * s, -90, 90);
    CAM.pan.z = clamp(CAM.pan.z - rz * dx * s + fz * dy * s, -90, 90);
  }

  function resize() {
    W = wrap.clientWidth || 1;
    H = wrap.clientHeight || 1;
    renderer.setSize(W, H, false);
    camera.fov = W < 640 ? 48 : 40;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    if (CAM.mode === 'pano') CAM.sph.r = clamp(panoR(), LIM.pano[0], LIM.pano[1]);
  }
  new ResizeObserver(resize).observe(wrap);
  resize();

  const DAYC = { top: C('#5d98d2'), bot: C('#d3e5f2'), hs: C('#e3efff'), hg: C('#5d6b4c'), sun: C('#fff1db') };
  const NITC = { top: C('#02040b'), bot: C('#0a1424'), hs: C('#33415e'), hg: C('#07090d'), sun: C('#9db4ff') };
  const tmpC = new THREE.Color();
  let flick = 1;
  let flickT = 0;

  function render(dt: number) {
    const n = S.nightT;
    skyU.top.value.copy(DAYC.top).lerp(NITC.top, n);
    skyU.bot.value.copy(DAYC.bot).lerp(NITC.bot, n);
    if (scene.fog instanceof THREE.Fog) {
      scene.fog.color.copy(skyU.bot.value);
      scene.fog.near = lerp(150, 70, n);
      scene.fog.far = lerp(430, 280, n);
    }
    hemi.intensity = lerp(1.15, 0.12, n);
    hemi.color.copy(DAYC.hs).lerp(NITC.hs, n);
    hemi.groundColor.copy(DAYC.hg).lerp(NITC.hg, n);
    sun.intensity = lerp(2.7, 0.22, n);
    sun.color.copy(DAYC.sun).lerp(NITC.sun, n);
    renderer.toneMappingExposure = lerp(1, 1.22, n);
    (stars.material as THREE.PointsMaterial).opacity = n;
    (moon.material as THREE.MeshBasicMaterial).opacity = n;
    bulbM.emissiveIntensity = n * 3.4;
    poolM.opacity = n * 0.62;
    lampLights.forEach((l) => (l.intensity = n * 55));
    flickT -= dt;
    if (flickT <= 0) {
      flick = Math.random() < 0.55 ? Math.random() * 0.25 : Math.random() < 0.5 ? 0.9 : 0;
      flickT = 0.05 + Math.random() * 0.35;
    }
    brokenBulbM.emissiveIntensity = n * flick * 2.2;
    brokenPoolM.opacity = n * flick * 0.3;
    if (brokenLight) brokenLight.intensity = n * flick * 10;
    stopLights.forEach((l) => (l.intensity = n * 42));
    stopPanelMats.forEach((m) => (m.emissiveIntensity = n * 1.6));
    signMats.forEach((o) => (o.m.emissiveIntensity = o.auth ? 0.15 + n * 0.75 : 0.08 + n * 0.1));
    winMats.forEach((m) => ((m as THREE.MeshLambertMaterial).emissiveIntensity = n * 0.95));
    if (V_chimLight) V_chimLight.visible = n > 0.2 && T % 1.4 < 0.7;

    // autobús
    bus.position.set(BUS.x, 0, BUS.z);
    bus.rotation.y = BUS.yaw;
    wheels.forEach((w) => (w.rotation.z = BUS.wheelA));
    leaves.forEach(({ hinge, s }) => (hinge.rotation.y = s * BUS.door * 1.45));
    doorwayM.emissiveIntensity = (0.15 + n * 0.9) * BUS.door;
    stepLightM.opacity = BUS.door * 0.9;
    interior.emissiveIntensity = n * 0.55;
    spots.forEach((s) => (s.intensity = n * 150));
    beamM.opacity = n * 0.13;
    headM.emissiveIntensity = 0.25 + n * 2.6;
    tailM.emissiveIntensity = 0.5 + n * 1.4 + BUS.brake * 2.2;
    antM.color.set(S.violet ? ((T * 2.2) % 1 < 0.5 ? '#c084fc' : '#4c1d95') : '#64748b');
    for (const p of PL) {
      if (seats[p.id]) seats[p.id].visible = p.aboard && !p.visible;
    }

    // lector NFC
    let col: string | null = '#3B82F6';
    let I = 0.75 + 0.25 * Math.sin(T * 2.4);
    const since = T - S.readerT;
    if (S.reader === 'ok') {
      col = '#10B981';
      I = since < 1.8 ? 2.2 - since * 0.5 : 1.3;
      if (since > 2.2) setReader(S.violet ? 'silent' : 'idle');
    } else if (S.reader === 'alert') {
      col = '#EF4444';
      I = (T * 4.5) % 1 < 0.55 ? 2.6 : 0.12;
    } else if (S.reader === 'wait') {
      col = '#F59E0B';
      I = 0.9 + 0.6 * Math.sin(T * 5);
    } else if (S.reader === 'silent') {
      tmpC.set('#F59E0B').lerp(C('#D946EF'), 0.5 + 0.5 * Math.sin(T * 1.1));
      col = null;
      I = 0.42 + 0.22 * (0.5 + 0.5 * Math.sin(T * 2.2));
    }
    if (col) tmpC.set(col);
    haloM.color.copy(tmpC).multiplyScalar(0.35 + 0.65 * Math.min(I, 1.6));
    barM.color.copy(haloM.color);
    glowM.color.copy(tmpC);
    glowM.opacity = clamp(I * 0.42, 0, 0.95);
    const gs = 0.8 + I * 0.45;
    glow.scale.set(gs, gs, 1);
    rl.color.copy(tmpC);
    rl.intensity = I * 2.2;

    // geocercas
    (['P1', 'P2', 'P3'] as const).forEach((id) => {
      const g = GEO[id];
      let fo = 0.15 + 0.05 * Math.sin(T * 2);
      let ro = 0.85;
      let wo = 0.3 + 0.08 * Math.sin(T * 2);
      g.col.copy(g.base);
      if (g.mode === 'ok') { g.col.copy(GREEN); fo = 0.34 + 0.08 * Math.sin(T * 5); ro = 1; wo = 0.6 + 0.1 * Math.sin(T * 5); }
      else if (g.mode === 'alert') { g.col.copy(RED); const on = (T * 4) % 1 < 0.55; fo = on ? 0.5 : 0.08; ro = on ? 1 : 0.3; wo = on ? 0.78 : 0.12; }
      const nb = 1 + n * 0.35;
      const mats = [g.fill, g.ring, g.wall, g.rad].map((o) => o.material as THREE.MeshBasicMaterial);
      mats.forEach((m) => m.color.copy(g.col));
      mats[0].opacity = fo * nb;
      mats[1].opacity = Math.min(1, ro * nb);
      mats[2].opacity = Math.min(1, wo * nb);
      const k = (T * 0.55 + (id === 'P2' ? 0.33 : id === 'P3' ? 0.66 : 0)) % 1;
      const s = 0.4 + k * 5.2;
      g.rad.scale.set(s, s, s);
      mats[3].opacity = (1 - k) * 0.55 * nb;
      const blend = n > 0.5 ? THREE.AdditiveBlending : THREE.NormalBlending;
      if (mats[0].blending !== blend) mats.forEach((m) => { m.blending = blend; m.needsUpdate = true; });
    });

    // personas
    for (const p of PL) {
      const o = PM[p.id];
      o.g.visible = p.visible;
      if (!p.visible) continue;
      const gy = groundY(p.x, p.z);
      o.y += (gy - o.y) * Math.min(1, dt * 14);
      let d = p.yaw - o.yaw;
      d = (((d + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
      o.yaw += d * Math.min(1, dt * 10);
      p.phase += dt * (p.walking ? 9 : 0);
      const sw = p.walking ? Math.sin(p.phase) : 0;
      o.g.position.set(p.x, o.y + (p.walking ? Math.abs(Math.sin(p.phase)) * 0.04 : 0), p.z);
      o.g.rotation.y = o.yaw;
      o.legs[0].rotation.x = sw * 0.55;
      o.legs[1].rotation.x = -sw * 0.55;
      o.arms[1].rotation.x = sw * 0.45;
      o.arms[0].rotation.x = -sw * 0.45 * (1 - p.arm) - p.arm * 1.35;
      o.card.visible = p.card;
    }

    // efectos
    for (let i = FX.length - 1; i >= 0; i--) {
      const f = FX[i];
      f.t += dt;
      const k = f.t / f.dur;
      if (k >= 1) {
        f.parent.remove(f.obj);
        const m = (f.obj as THREE.Mesh).material;
        if (m && 'dispose' in m) (m as THREE.Material).dispose();
        FX.splice(i, 1);
      } else {
        f.upd(k, f.obj, f.t);
      }
    }
    if (S.violet) uplink(dt);
    const vn = $('#vnote');
    if (vn.classList.contains('show') !== S.violet) vn.classList.toggle('show', S.violet);

    updateCam(dt, false);

    for (const l of LBL) {
      const vis = l.vis ? l.vis() : true;
      if (!vis) { l.el.classList.add('hidden'); continue; }
      const p = l.getPos();
      v3.set(p.x, p.y, p.z).project(camera);
      if (v3.z > 1 || Math.abs(v3.x) > 1.15 || Math.abs(v3.y) > 1.15) { l.el.classList.add('hidden'); continue; }
      l.el.classList.remove('hidden');
      l.el.style.transform = `translate3d(${((v3.x * 0.5 + 0.5) * W).toFixed(1)}px,${((-v3.y * 0.5 + 0.5) * H).toFixed(1)}px,0) translate(-50%,-100%)`;
    }
    const p3 = stopLbl.P3.el.querySelector('small');
    const want = n > 0.5 ? 'Sin alumbrado · zona oscura de riesgo' : STOPS.P3.sub;
    if (p3 && p3.textContent !== want) p3.textContent = want;

    renderer.render(scene, camera);
  }

  setCam('pano');

  return {
    render,
    wave,
    ripple,
    geo: (id, mode) => { GEO[id].mode = mode; },
    seat: (id, on) => { if (seats[id]) seats[id].visible = on; },
    setCam,
    updateTags,
    setBusAlert: (on) => {
      busLbl.el.classList.toggle('alert', on);
      busLbl.el.querySelector('span')!.textContent = on ? '⚠ ALERTA · DESCENSO NO AUTORIZADO' : 'UNIDAD 04';
    },
    clearFx: () => {
      for (const f of FX) {
        f.parent.remove(f.obj);
        const m = (f.obj as THREE.Mesh).material;
        if (m && 'dispose' in m) (m as THREE.Material).dispose();
      }
      FX.length = 0;
    },
    snap: () => updateCam(0, true),
    get showX() { return controllerRef.showX; },
    set showX(v: boolean) { controllerRef.showX = v; },
    get mode() { return CAM.mode; },
    renderer,
  };
}

/* =========================================================================
   ACCIONES DEL MODELO Y ESCENARIOS
   ========================================================================= */
async function setDoor(v: number) {
  if (Math.abs(BUS.door - v) < 0.01) return;
  const a = BUS.door;
  sfx.door();
  await tween(0.9, (e) => { BUS.door = lerp(a, v, e); }, EZ.inOut);
}

async function driveTo(target: number) {
  if (BUS.door > 0.01) await setDoor(0);
  const s0 = BUS.s;
  const d = (((target - s0) % LL) + LL) % LL;
  if (d < 0.05) return;
  const dur = clamp(d / 12, 2.6, 8);
  await tween(dur, (e) => { BUS.s = s0 + d * e; }, EZ.sine);
  BUS.s = (((s0 + d) % LL) + LL) % LL;
}

function walk(p: PersonState, pt: { x: number; z: number }, speed = 2.0) {
  const x0 = p.x;
  const z0 = p.z;
  const d = Math.hypot(pt.x - x0, pt.z - z0);
  if (d < 0.02) return Promise.resolve();
  p.yaw = Math.atan2(pt.x - x0, pt.z - z0);
  p.walking = true;
  return tween(d / speed, (e) => { p.x = lerp(x0, pt.x, e); p.z = lerp(z0, pt.z, e); }, EZ.lin).then(() => { p.walking = false; });
}

const faceTo = (p: PersonState, pt: { x: number; z: number }) => { p.yaw = Math.atan2(pt.x - p.x, pt.z - p.z); };
const faceRoad = (p: PersonState, st: StopDef) => { p.yaw = Math.atan2(0, -st.side); };
const place = (p: PersonState, pt: { x: number; z: number }) => { p.x = pt.x; p.z = pt.z; };
function setReader(mode: typeof S.reader) { S.reader = mode; S.readerT = T; }

async function scan(p: PersonState, mode: typeof S.reader) {
  faceTo(p, readerPt());
  await tween(0.32, (e) => { p.arm = e; }, EZ.out);
  p.card = true;
  if (V) {
    V.wave(mode === 'alert' ? '#EF4444' : mode === 'silent' ? '#D946EF' : '#10B981');
    V.ripple(p.x, p.z, mode === 'alert' ? '#EF4444' : '#10B981');
  }
  setReader(mode);
  if (mode === 'ok') sfx.ok();
  await wait(0.5);
  p.card = false;
  await tween(0.28, (e) => { p.arm = 1 - e; }, EZ.inOut);
}

function seat(p: PersonState, on: boolean) {
  p.aboard = on;
  if (V) V.seat(p.id, on);
}

const P = PEOPLE;
const camAuto = (m: 'pano' | 'nfc' | 'bus' | 'stop') => { if (S.auto && V) V.setCam(m); };
const fx12 = () => hm12(S.clock);
const WAIT: Record<PersonState['id'], ['P1' | 'P2' | 'P3', number, number]> = {
  sofia: ['P1', -3.0, 2.3],
  diego: ['P1', -1.7, 2.3],
  laura: ['P2', -3.2, 2.4],
  ana: ['P2', -1.8, 2.4],
};

function resetPeople() {
  for (const p of PL) {
    Object.assign(p, { visible: true, walking: false, arm: 0, card: false, aboard: false, status: p.tutor ? 'standby' : 'wait', phase: 0, hl: false });
    const [sid, a, o] = WAIT[p.id];
    place(p, stopPt(STOPS[sid], a, o));
    faceRoad(p, STOPS[sid]);
    seat(p, false);
  }
}

function resetWorld(keepMode = false) {
  cancelAll();
  if (V) {
    V.clearFx();
    V.showX = false;
    V.setBusAlert(false);
    (['P1', 'P2', 'P3'] as const).forEach((id) => V!.geo(id, 'normal'));
  }
  S.busy = false;
  S.demo = false;
  S.stage = 0;
  S.alert = 'ok';
  S.violet = false;
  setReader('idle');
  BUS.s = S0;
  BUS.door = 0;
  BUS.vx = BUS.vz = 0;
  BUS.speed = 0;
  updateBusPose(0);
  resetPeople();
  if (!keepMode) { setNight(false, true); S.nightT = 0; }
  S.clock = S.night ? NIGHT0 : DAY0;
  clearLog();
  clearPhone();
  monitorOk();
  renderPax();
  setCap('LISTO', 'Selecciona un escenario en el panel de control para iniciar la simulación en vivo.', 'idle');
  $('#phStrip').textContent = 'Unidad 04 en servicio · 3 pasajeros vinculados';
  $('#phDot').style.background = 'var(--ok)';
  if (V) V.setCam('pano');
  updateButtons();
}

function prepareStage(k: number) {
  resetWorld(true);
  if (k >= 1) {
    BUS.s = STOPS.P1.s;
    updateBusPose(0);
    for (const p of [P.sofia, P.diego]) { p.visible = false; seat(p, true); p.status = 'board'; }
  }
  if (k >= 2) {
    BUS.s = STOPS.P2.s;
    updateBusPose(0);
    const P2 = STOPS.P2;
    P.sofia.visible = true; seat(P.sofia, false); P.sofia.aboard = false; place(P.sofia, stopPt(P2, -5.4, 1.2)); faceRoad(P.sofia, P2); P.sofia.status = 'done';
    place(P.laura, stopPt(P2, -6.0, 1.9)); faceRoad(P.laura, P2); P.laura.status = 'verif';
    P.ana.visible = false; seat(P.ana, true); P.ana.status = 'board'; P.diego.status = 'pend'; S.alert = 'warn';
    setMonitor('warn', 'Aviso operativo · Parada 2', 'Diego R. no descendió en su parada asignada · chofer notificado');
  }
  if (k >= 3) {
    BUS.s = STOPS.P3.s;
    updateBusPose(0);
    P.diego.status = 'held'; S.alert = 'warn';
    setMonitor('warn', 'Alerta previa atendida', 'Descenso no autorizado retenido · Diego R. a bordo');
  }
  S.stage = k;
  renderPax();
  if (k > 0) log('sys', `Estado precargado: escenario${k > 1 ? 's 1–' + k : ' 1'} completado${k > 1 ? 's' : ''}`);
}

function updateButtons() {
  document.querySelectorAll<HTMLButtonElement>('.scen').forEach((b) => {
    const n = Number(b.dataset.s);
    b.disabled = S.busy || S.demo;
    b.classList.toggle('done', n <= S.stage && !b.classList.contains('running'));
    const ss = b.querySelector('.ss')!;
    ss.textContent = b.classList.contains('running') ? '● En curso' : n <= S.stage ? '✓ Completado' : '';
  });
  $<HTMLButtonElement>('#btnDemo').disabled = S.busy || S.demo;
}

async function boardAtStop(p: PersonState, stopName: string, routeTxt: string, tone: { n: number; t: string }) {
  setCap(`ESCENARIO ${tone.n}`, `${p.name} (${p.role}) acerca su tarjeta NFC al lector de la puerta`, tone.t);
  p.hl = true;
  renderPax();
  await walk(p, readerStand());
  await scan(p, 'ok');
  p.status = 'board';
  p.hl = false;
  renderPax();
  log('ok', `${p.nfc} · ${p.name} (${p.role}) · Abordaje validado · ${stopName}`);
  notify({ type: 'ok', title: 'Abordaje confirmado', body: `${p.short} abordó la Unidad 04 en ${stopName} (${fx12()}) - ${routeTxt}`, meta: `Para: ${p.contact} · ${p.nfc}` });
  await walk(p, doorStep(), 1.8);
  await walk(p, doorIn(), 1.6);
  p.visible = false;
  seat(p, true);
}

async function exitAtDoor(p: PersonState) {
  seat(p, false);
  place(p, doorIn());
  p.yaw = Math.atan2(doorStep().x - p.x, doorStep().z - p.z);
  p.visible = true;
  await walk(p, doorStep(), 1.6);
  await walk(p, readerStand(), 1.6);
}

const SCEN: Record<number, () => Promise<void>> = {
  1: async () => {
    const st = STOPS.P1;
    setCap('ESCENARIO 1', 'La Unidad 04 se aproxima a la Parada 1 · Escuela / Residencial', 'ok');
    log('sys', 'Escenario 1 · Unidad 04 en aproximación a Parada 1');
    camAuto('bus');
    await driveTo(st.s);
    log('info', 'Unidad 04 detenida en Parada 1 · dentro de geocerca autorizada', 'GPS');
    setCap('ESCENARIO 1', 'Unidad dentro de la geocerca autorizada (verde) · se abren las puertas', 'ok');
    await setDoor(1);
    camAuto('nfc');
    await boardAtStop(P.sofia, 'Parada 1', 'En ruta', { n: 1, t: 'ok' });
    camAuto('stop');
    await boardAtStop(P.diego, 'Parada 1', 'En ruta', { n: 1, t: 'ok' });
    await setDoor(0);
    setCap('ESCENARIO 1 ✓', '2 abordajes validados por NFC · contador actualizado · familias notificadas al instante', 'ok');
    camAuto('bus');
  },
  2: async () => {
    const st = STOPS.P2;
    setCap('ESCENARIO 2', 'La unidad avanza automáticamente a la Parada 2 · Parque Industrial / Destino', 'info');
    log('sys', 'Escenario 2 · Unidad 04 en ruta a Parada 2');
    camAuto('bus');
    await driveTo(st.s);
    log('info', 'Unidad 04 en Parada 2 · geocerca de descenso autorizada', 'GPS');
    await setDoor(1);
    camAuto('stop');
    const s = P.sofia;
    const l = P.laura;
    setCap('ESCENARIO 2', 'Sofía registra su salida con su tarjeta NFC', 'info');
    s.hl = true;
    renderPax();
    await exitAtDoor(s);
    await scan(s, 'ok');
    setReader('wait');
    s.status = 'tutor';
    renderPax();
    log('warn', `${s.nfc} · ${s.name} · Salida registrada · esperando validación del tutor autorizado`);
    setCap('ESCENARIO 2', 'Salida registrada · el sistema exige el NFC del tutor autorizado para entregar a la alumna', 'warn');
    await walk(s, stopPt(st, 0.6, 0.8), 1.6);
    faceTo(s, readerStand());
    l.hl = true;
    renderPax();
    setCap('ESCENARIO 2', 'Laura M. (tutora) valida su identidad con su propia tarjeta NFC', 'info');
    await walk(l, readerStand());
    await scan(l, 'ok');
    V?.geo('P2', 'ok');
    s.status = 'done';
    l.status = 'verif';
    s.hl = l.hl = false;
    renderPax();
    log('ok', `${l.nfc} · ${l.name} (tutora) · Identidad verificada · entrega autorizada`);
    log('ok', 'Entrega completada · Sofía M. → Laura M. · Parada 2 (geocerca verde)');
    notify({ type: 'ok', title: 'Entrega confirmada', body: 'Entrega confirmada: Sofía descendió en Parada Autorizada con Tutor Verificado', meta: `Parada 2 · Tutora: Laura M. · ${fx12()}` });
    setCap('ESCENARIO 2', '✓ Geocerca en verde: entrega verificada con doble NFC (alumna + tutora)', 'ok');
    await Promise.all([walk(s, stopPt(st, -5.4, 1.2), 1.5), walk(l, stopPt(st, -6.0, 1.9), 1.5)]);
    faceRoad(s, st);
    faceRoad(l, st);
    camAuto('nfc');
    setCap('ESCENARIO 2', 'En la misma parada aborda Ana L., que sale de su turno nocturno', 'info');
    await boardAtStop(P.ana, 'Parada 2', 'Regreso a casa', { n: 2, t: 'info' });
    const d = P.diego;
    d.status = 'pend';
    renderPax();
    S.alert = 'warn';
    setMonitor('warn', 'Aviso operativo · Parada 2', 'Diego R. no descendió en su parada asignada · chofer notificado');
    log('warn', `${d.nfc} · ${d.name} no descendió en su parada asignada (Parada 2)`);
    notify({ type: 'warn', title: 'Aviso de ruta', body: 'Diego no descendió en su parada asignada (Parada 2). El chofer ya fue notificado.', meta: `Para: ${d.contact} · ${fx12()}` });
    await setDoor(0);
    setCap('ESCENARIO 2 ✓', 'Entrega segura confirmada · aviso preventivo: Diego sigue a bordo', 'ok');
  },
  3: async () => {
    const st = STOPS.P3;
    const d = P.diego;
    V?.geo('P2', 'normal');
    setCap('ESCENARIO 3', 'Desvío: la unidad se dirige a la Parada 3 · Zona Aislada (no autorizada)', 'bad');
    log('warn', 'Desvío detectado · Unidad 04 se dirige a Parada 3 (zona no autorizada)', 'RUTA');
    camAuto('bus');
    await driveTo(st.s);
    log('bad', 'Unidad 04 detenida en Parada 3 · ZONA NO AUTORIZADA', 'GPS');
    await setDoor(1);
    camAuto('stop');
    setCap('ESCENARIO 3', 'Diego intenta bajar marcando su NFC fuera de su geocerca asignada', 'bad');
    d.hl = true;
    renderPax();
    await exitAtDoor(d);
    await scan(d, 'alert');
    V?.geo('P3', 'alert');
    if (V) { V.showX = true; V.setBusAlert(true); }
    d.status = 'alert';
    renderPax();
    S.alert = 'critical';
    sfx.alert();
    setMonitor('bad', '¡ALERTA! Descenso fuera de zona autorizada', 'Diego R. · NFC-04B7 · Parada 3 (Zona Aislada) · geocerca asignada: Parada 2 · chofer alertado en cabina', '<button class="mini-btn" data-ack="1">Reconocer</button>');
    log('bad', `${d.nfc} · ${d.name} · DESCENSO RECHAZADO · fuera de geocerca (asignada: Parada 2)`);
    log('bad', 'Alerta crítica enviada a chofer (cabina), Centro de Monitoreo y familia', 'ALERTA');
    notify({ type: 'bad', title: '¡ALERTA URGENTE!', body: 'Diego intentó descender en Parada 3 (Zona Aislada), fuera de su zona autorizada.', meta: `Unidad 04 · ${fx12()} · Chofer y monitoreo alertados`, actions: [{ act: 'call', icon: 'phone', label: 'Llamar al chofer' }, { act: 'gps', icon: 'pin', label: 'Ver GPS' }], shake: true });
    vibrate();
    $('#phStrip').textContent = '¡Alerta activa en la Unidad 04!';
    $('#phDot').style.background = 'var(--bad)';
    setCap('ESCENARIO 3', '🚨 Lector y geocerca en rojo · chofer, monitoreo y familia notificados al instante', 'bad');
    await wait(3.4);
    setCap('ESCENARIO 3', 'El chofer retiene el descenso: Diego regresa a la unidad', 'warn');
    await walk(d, doorStep(), 1.5);
    if (V) V.showX = false;
    await walk(d, doorIn(), 1.4);
    d.visible = false;
    seat(d, true);
    d.status = 'held';
    d.hl = false;
    renderPax();
    log('warn', 'Descenso retenido por el chofer · Diego R. permanece a bordo', 'CHOFER');
    notify({ type: 'info', title: 'Descenso retenido', body: 'El chofer retuvo el descenso. Diego permanece a bordo y la unidad retoma la ruta autorizada.', meta: `Para: ${d.contact} · ${fx12()}` });
    await setDoor(0);
    setReader('idle');
    setCap('ESCENARIO 3 ✓', 'Descenso no autorizado bloqueado · trazabilidad completa en la bitácora', 'bad');
  },
  4: async () => {
    const st = STOPS.P1;
    const a = P.ana;
    if (S.alert === 'critical') ackCritical();
    V?.geo('P3', 'normal');
    V?.setBusAlert(false);
    $('#phStrip').textContent = 'Unidad 04 en servicio · 3 pasajeros vinculados';
    $('#phDot').style.background = 'var(--ok)';
    if (!S.night) { setCap('ESCENARIO 4', 'Cambiando a Modo Turno Nocturno…', 'vio'); setNight(true); await wait(2.0); }
    setCap('ESCENARIO 4', 'Turno nocturno · la unidad retoma su ruta hacia la Parada 1 (Residencial)', 'vio');
    log('sys', 'Escenario 4 · Turno nocturno · Unidad 04 en ruta a Parada 1');
    camAuto('bus');
    const drive = driveTo(st.s);
    drive.catch(() => {});
    await wait(2.6);
    setCap('ESCENARIO 4', 'Ana da un doble toque discreto con su pulsera NFC (código silencioso)…', 'vio');
    a.hl = true;
    renderPax();
    setReader('silent');
    await wait(1.1);
    S.violet = true;
    S.violetT0 = T;
    S.alert = 'violet';
    a.status = 'vio';
    renderPax();
    setMonitor('vio', 'PROTOCOLO VIOLETA ACTIVO', 'Sin alerta sonora en cabina · Grabación y GPS enviados a C4 y contactos de confianza', '<span class="rec"><i></i>REC <span id="recT">00:00</span></span><span id="monGps">—</span>');
    log('vio', `${a.nfc} · ${a.name} · Doble toque detectado · código silencioso`);
    log('vio', 'Protocolo Violeta activo · grabación de cabina y GPS en vivo enviados a C4');
    log('vio', 'Ubicación compartida con contactos de confianza · sin alerta sonora ni luces en cabina');
    notify({ type: 'vio', title: 'Alerta silenciosa · Protocolo Violeta', body: 'Ana activó una alerta silenciosa en la Unidad 04. Compartiendo su ubicación en vivo. C4 ya fue notificado.', meta: `Para: ${a.contact} · ${fx12()}`, map: true, actions: [{ act: 'gps', icon: 'pin', label: 'Ubicación en vivo' }, { act: '911', icon: 'phone', label: 'Llamar al 911' }] });
    vibrate();
    $('#phStrip').textContent = 'Protocolo Violeta activo · ubicación en vivo';
    $('#phDot').style.background = 'var(--vio)';
    setCap('ESCENARIO 4', '🔇 Protocolo Violeta: en cabina no suena nada ni se encienden luces · el agresor no se entera', 'vio');
    await wait(2.2);
    log('vio', 'C4 Chihuahua: unidad de respuesta asignada · seguimiento en tiempo real', 'C4');
    await drive;
    log('info', 'Unidad 04 en Parada 1 · zona iluminada y autorizada', 'GPS');
    await setDoor(1);
    camAuto('stop');
    setCap('ESCENARIO 4', 'La unidad llega a una parada iluminada y autorizada · Ana desciende con normalidad', 'vio');
    await exitAtDoor(a);
    await scan(a, 'ok');
    a.status = 'safe';
    renderPax();
    log('ok', `${a.nfc} · ${a.name} · Descenso en parada autorizada · Parada 1 · Protocolo Violeta en seguimiento`);
    notify({ type: 'vio', title: 'Ana llegó a Parada 1', body: 'Ana descendió en Parada 1 (zona iluminada). La ubicación en vivo sigue activa hasta que C4 cierre el protocolo.', meta: `Para: ${a.contact} · ${fx12()}` });
    await walk(a, stopPt(st, -2.4, 2.4), 1.6);
    faceRoad(a, st);
    a.hl = false;
    renderPax();
    await setDoor(0);
    setCap('ESCENARIO 4 ✓', 'Pasajera segura · C4 y contactos de confianza con grabación y GPS · pulsa Reiniciar para repetir', 'vio');
  },
};

async function runScenario(n: number) {
  if (S.busy) return false;
  ac();
  if (n !== S.stage + 1) prepareStage(n - 1);
  S.busy = true;
  const btn = document.querySelector<HTMLButtonElement>(`.scen[data-s="${n}"]`)!;
  btn.classList.add('running');
  updateButtons();
  let ok = false;
  try {
    await SCEN[n]();
    S.stage = n;
    ok = true;
  } catch (e) {
    if (!(e instanceof Cancel)) console.error(e);
  } finally {
    btn.classList.remove('running');
    if (ok) S.busy = false;
    updateButtons();
  }
  return ok;
}

async function runDemo() {
  if (S.busy || S.demo) return;
  ac();
  resetWorld(false);
  S.demo = true;
  updateButtons();
  log('sys', 'Demo completa iniciada · escenarios 1 → 4');
  try {
    for (let n = 1; n <= 4; n++) {
      S.busy = false;
      const ok = await runScenario(n);
      if (!ok) return;
      S.demo = true;
      updateButtons();
      if (n < 4) await wait(2.2);
    }
  } catch (e) {
    if (!(e instanceof Cancel)) console.error(e);
    return;
  }
  S.demo = false;
  updateButtons();
}

/* =========================================================================
   BUCLE PRINCIPAL & TELEMETRÍA
   ========================================================================= */
let SPEED = 1;
let last = performance.now();
let uiAcc = 0;
let prevSpeed = 0;

function frame(now: number) {
  const rdt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const dt = rdt * SPEED;
  T += dt;
  stepTweens(dt);
  S.clock += dt * TIME_SCALE;
  S.nightT += ((S.night ? 1 : 0) - S.nightT) * Math.min(1, rdt * 2.2);
  updateBusPose(dt);
  let ds = (((BUS.s % LL) + LL) % LL) - BUS.lastS;
  if (ds < -LL / 2) ds += LL;
  if (ds > LL / 2) ds -= LL;
  BUS.lastS = ((BUS.s % LL) + LL) % LL;
  const spd = dt > 0 ? ds / dt : 0;
  BUS.speed = lerp(BUS.speed, spd, 0.2);
  BUS.wheelA -= ds / 0.5;
  BUS.brake = lerp(BUS.brake, (BUS.speed < prevSpeed - 0.02 && BUS.speed > 0.3) || (BUS.speed < 0.3 && BUS.door < 0.5 && S.busy) ? 1 : 0, 0.15);
  prevSpeed = BUS.speed;
  if (V) {
    try { V.render(dt); } catch (e) { console.error(e); }
  }
  uiAcc += rdt;
  if (uiAcc > 0.1) { uiAcc = 0; uiTick(); }
  mapTick();
  requestAnimationFrame(frame);
}

function zoneOf(): ['safe' | 'risk' | 'isolated' | 'route', StopDef?] {
  const d = b2w(DOOR_X, HALF_W);
  for (const st of Object.values(STOPS)) {
    const c = geoCenter(st);
    if (Math.hypot(d.x - c.x, d.z - c.z) < 6.4) return [st.auth ? 'safe' : 'risk', st];
  }
  if (BUS.z < -12) return ['isolated'];
  return ['route'];
}

const gps = () => `${(28.6381 - BUS.z * 0.000009).toFixed(5)}, ${(-106.0772 + BUS.x * 0.0000102).toFixed(5)}`;

function uiTick() {
  $('#clock').textContent = hms(S.clock);
  $('#phTime').textContent = hmPhone(S.clock);
  const kmh = Math.round(Math.abs(BUS.speed) * 3.6 * 0.7);
  $('#kSpd').textContent = String(kmh);
  const sb = $('#kSpdBar');
  sb.style.width = clamp((kmh / 60) * 100, 0, 100) + '%';
  sb.style.background = kmh > 45 ? 'var(--warn)' : 'var(--ok)';
  const aboard = PL.filter((p) => p.aboard).length;
  $('#kPax').textContent = String(aboard);
  const dl = PL.filter((p) => p.status === 'done').length;
  $('#kPaxS').textContent = aboard ? `${aboard} a bordo${dl ? ` · ${dl} entregada` : ''}` : dl ? `${dl} entregada · 0 a bordo` : 'Esperando abordaje';
  const [z, st] = zoneOf();
  const kg = $('#kGeo');
  const kgs = $('#kGeoS');
  const kpg = $('#kpiGeo');
  kpg.className = 'kpi';
  if (z === 'safe' && st) { kg.textContent = 'SEGURA'; kg.className = 'k-v c-ok'; kgs.textContent = `P${st.n} · ${st.name}`; kpg.classList.add('hl-ok'); }
  else if (z === 'risk' && st) { kg.textContent = 'RIESGO'; kg.className = 'k-v c-bad'; kgs.textContent = `P${st.n} · ${st.name}`; kpg.classList.add('hl-bad'); }
  else if (z === 'isolated') { kg.textContent = 'PRECAUCIÓN'; kg.className = 'k-v c-warn'; kgs.textContent = 'Tramo aislado · sin alumbrado'; kpg.classList.add('hl-warn'); }
  else { kg.textContent = 'EN RUTA'; kg.className = 'k-v c-info'; kgs.textContent = 'Corredor autorizado'; }
  let sv = 96;
  let sl = 'ALTO';
  let sc = 'ok';
  if (S.alert === 'violet') { sv = 18; sl = 'VIOLETA'; sc = 'vio'; }
  else if (S.alert === 'critical') { sv = 24; sl = 'CRÍTICO'; sc = 'bad'; }
  else {
    if (S.alert === 'warn') { sv = 74; sl = 'MEDIO'; sc = 'warn'; }
    if (z === 'risk') { sv = Math.min(sv, 52); sl = 'RIESGO'; sc = 'warn'; }
    else if (z === 'isolated') { sv = Math.min(sv, 80); if (sc === 'ok') { sl = 'MEDIO'; sc = 'warn'; } }
    if (S.night && sc === 'ok') sv = 90;
  }
  const ks = $('#kSec');
  ks.textContent = sl;
  ks.className = 'k-v c-' + sc;
  const kb = $('#kSecBar');
  kb.style.width = sv + '%';
  kb.style.background = `var(--${sc === 'vio' ? 'vio' : sc === 'bad' ? 'bad' : sc === 'warn' ? 'warn' : 'ok'})`;
  const kps = $('#kpiSec');
  kps.className = 'kpi' + (sc === 'bad' ? ' hl-bad' : sc === 'vio' ? ' hl-vio' : sc === 'warn' ? ' hl-warn' : '');
  const RD = {
    idle: ['EN ESPERA', 'c-info', 'Halo azul · listo para leer'],
    ok: ['VALIDADO', 'c-ok', 'Halo verde · lectura correcta'],
    alert: ['ALERTA', 'c-bad', 'Rojo parpadeante · descenso rechazado'],
    wait: ['ESPERA TUTOR', 'c-warn', 'Ámbar · falta NFC del tutor'],
    silent: ['DISCRETO', 'c-vio', 'Pulso tenue · modo silencioso'],
  }[S.reader];
  const kr = $('#kRd');
  kr.textContent = RD[0];
  kr.className = 'k-v ' + RD[1];
  $('#kRdS').textContent = RD[2];
  $('#kpiRd').className = 'kpi' + (S.reader === 'alert' ? ' hl-bad' : S.reader === 'silent' ? ' hl-vio' : '');
  const g = gps();
  $('#gpsTxt').textContent = 'GPS ' + g;
  if (S.violet) {
    const e = Math.floor(T - S.violetT0);
    const rt = document.getElementById('recT');
    if (rt) rt.textContent = `${pad(e / 60)}:${pad(e % 60)}`;
    const mg = document.getElementById('monGps');
    if (mg) mg.textContent = g;
  }
  document.querySelectorAll('.mm-ll,.gps-ll').forEach((el) => (el.textContent = g));
  document.querySelectorAll('.gps-spd').forEach((el) => (el.textContent = kmh + ' km/h'));
  document.querySelectorAll('.gps-st').forEach((el) => (el.textContent = z === 'risk' ? 'Detenida en zona no autorizada' : z === 'safe' && st ? `Detenida en Parada ${st.n}` : 'En movimiento'));
  for (const n of NOTIFS) {
    const d = S.clock - n.t;
    const tm = n.el.querySelector('.nt-tm');
    if (tm) tm.textContent = d < 60 ? 'ahora' : `hace ${Math.floor(d / 60)} min`;
  }
}

function mapTick() {
  const els = document.querySelectorAll('.mm-bus');
  if (!els.length) return;
  const tr = `translate(${(100 + BUS.x * 1.6).toFixed(1)},${(64 + BUS.z * 1.6).toFixed(1)})`;
  els.forEach((e) => e.setAttribute('transform', tr));
}

/* =========================================================================
   EVENTOS DE INTERFAZ Y TAMAÑO DEL CELULAR
   ========================================================================= */
document.querySelectorAll<HTMLButtonElement>('.scen').forEach((b) => b.addEventListener('click', () => void runScenario(Number(b.dataset.s))));
$('#btnDemo').addEventListener('click', () => void runDemo());
$('#btnReset').addEventListener('click', () => { ac(); resetWorld(false); log('sys', 'Simulación reiniciada · Unidad 04 lista en ruta'); toast('Simulación reiniciada'); });
document.querySelectorAll<HTMLButtonElement>('#segMode button').forEach((b) =>
  b.addEventListener('click', () => {
    ac();
    const on = b.dataset.mode === 'night';
    if (on !== S.night) setNight(on);
  })
);
document.querySelectorAll<HTMLButtonElement>('#segCam button').forEach((b) =>
  b.addEventListener('click', () => {
    if (V && b.dataset.cam) V.setCam(b.dataset.cam as 'pano' | 'nfc' | 'bus');
  })
);
$('#btnAuto').addEventListener('click', () => {
  S.auto = !S.auto;
  $('#btnAuto').classList.toggle('on', S.auto);
  toast(S.auto ? 'Cámara automática activada' : 'Cámara automática desactivada');
});
$('#btnSound').addEventListener('click', () => {
  S.sound = !S.sound;
  ac();
  const b = $('#btnSound');
  b.innerHTML = `${ic(S.sound ? 'vol' : 'mute')}<span>${S.sound ? 'Sonido' : 'Silencio'}</span>`;
  toast(S.sound ? 'Sonido activado' : 'Sonido silenciado');
  if (S.sound) sfx.notif();
});
$('#btnFull').addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    toast('Pantalla completa no disponible');
  }
});
$('#btnCopy').addEventListener('click', async () => {
  const txt = ['RUTA PULSO NFC · Bitácora · Unidad 04', ...LOGTXT].join('\n');
  try {
    await navigator.clipboard.writeText(txt);
    toast('Bitácora copiada al portapapeles');
  } catch {
    toast('No se pudo copiar en este navegador');
  }
});

window.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (['1', '2', '3', '4'].includes(k)) { if (!S.busy && !S.demo) void runScenario(Number(k)); }
  else if (k === 'd') void runDemo();
  else if (k === 'r') { ac(); resetWorld(false); toast('Simulación reiniciada'); }
  else if (k === 'n') { ac(); setNight(!S.night); }
  else if (k === 'c' && V) {
    const order: Array<'pano' | 'nfc' | 'bus'> = ['pano', 'nfc', 'bus'];
    V.setCam(order[(order.indexOf(V.mode as 'pano' | 'nfc' | 'bus') + 1) % 3]);
  }
});

function sizePhone() {
  const bottom = $('.bottom');
  const cap = $('.phone-cap');
  const ph = $('#phone');
  if (!bottom || !ph) return;
  if (window.innerWidth <= 768) {
    ph.style.width = '';
    ph.style.height = '';
    $('.phone-col').style.width = '';
    return;
  }
  const stacked = getComputedStyle(bottom).gridTemplateColumns.trim().split(/\s+/).length === 1;
  let H = (stacked ? 540 : bottom.clientHeight) - (cap.offsetHeight || 14) - 6;
  H = Math.max(H, 260);
  let Wd = (H * 9) / 18.4;
  const maxW = stacked ? Math.min(bottom.clientWidth * 0.9, 340) : bottom.clientWidth * 0.56;
  if (Wd > maxW) {
    Wd = maxW;
    H = (Wd * 18.4) / 9;
  }
  ph.style.width = Wd.toFixed(1) + 'px';
  ph.style.height = H.toFixed(1) + 'px';
  $('.phone-col').style.width = stacked ? '' : Math.max(Wd, 150).toFixed(1) + 'px';
}
new ResizeObserver(sizePhone).observe($('.bottom'));
window.addEventListener('resize', sizePhone);
sizePhone();

/* =========================================================================
   ARRANQUE INMEDIATO (THREE.JS BUNDLED LOCALMENTE)
   ========================================================================= */
resetWorld(false);
log('sys', 'Sistema RUTA PULSO NFC en línea · Unidad 04 lista · enlace C4 activo');
requestAnimationFrame(frame);

const ld = $('#loader');
try {
  V = initView();
  resetPeople();
  renderPax();
  V.snap();
  V.render(0);
  requestAnimationFrame(() => ld.classList.add('hide'));
} catch (e) {
  console.error(e);
  V = null;
  ld.innerHTML =
    '<div class="ld"><b>Tu navegador no pudo iniciar WebGL.</b>Activa la aceleración por hardware o prueba en Chrome/Edge actualizado. El panel de control, la bitácora y el celular siguen funcionando.</div>';
}

(window as unknown as Record<string, unknown>).__rp = {
  runScenario,
  runDemo,
  resetWorld,
  setMobTab,
  setSpeed: (v: number) => { SPEED = v; },
  S,
  BUS,
  PEOPLE,
  get V() { return V; },
};
