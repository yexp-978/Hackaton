import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { APP_DATA } from '../generatedAppData';

export const SceneBusNfcFlow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });

  // Animated 2D Bus traveling calmly along the 3 stops (300 frames / 10.0s for live explanation):
  // Stop 1 (x = 320): frames 0..84 (boards NFC cleanly)
  // Drive P1 -> P2: frames 84..132
  // Stop 2 (x = 960): frames 132..210 (tutor dual NFC)
  // Drive P2 -> P3: frames 210..252
  // Stop 3 (x = 1560): frames 252..300 (red unauthorized geofence alert!)
  let busX = 320;
  if (frame < 84) {
    busX = 320;
  } else if (frame < 132) {
    busX = interpolate(frame, [84, 132], [320, 960], {
      easing: Easing.inOut(Easing.cubic),
    });
  } else if (frame < 210) {
    busX = 960;
  } else if (frame < 252) {
    busX = interpolate(frame, [210, 252], [960, 1560], {
      easing: Easing.inOut(Easing.cubic),
    });
  } else {
    busX = 1560;
  }

  const wheelAngle = busX * 2.1;

  // Active phase for NFC status & shockwaves
  const inStop1 = frame >= 16 && frame < 86;
  const inStop2 = frame >= 132 && frame < 212;
  const inStop3 = frame >= 250;

  const activeColor = inStop3 ? '#EF4444' : inStop2 ? '#38BDF8' : '#10B981';
  const statusBanner = inStop3
    ? 'PARADA 3 · ZONA AISLADA → ¡ALERTA! Descenso fuera de geocerca'
    : inStop2
      ? 'PARADA 2 · DESTINO → Doble NFC (Alumna + Tutor Verificado ✓)'
      : inStop1
        ? 'PARADA 1 · ESCUELA → Pulsera NFC validada · Notificación enviada'
        : 'EN RUTA SEGURA · Telemetría GPS y NFC sincronizados';

  const wavePhase = ((frame % 26) / 26);
  const waveRadius = interpolate(wavePhase, [0, 1], [16, 95]);
  const waveOpacity = interpolate(wavePhase, [0, 0.2, 1], [0, 0.9, 0]);

  const stops = [
    { x: 320, code: 'PARADA 1', name: APP_DATA.stops[0], color: '#10B981', tag: 'Abordaje NFC' },
    { x: 960, code: 'PARADA 2', name: APP_DATA.stops[1], color: '#38BDF8', tag: 'Descenso + Tutor' },
    { x: 1560, code: 'PARADA 3', name: APP_DATA.stops[2], color: '#EF4444', tag: 'Zona de Riesgo' },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B0F17',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#FFFFFF',
        padding: '64px 86px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          opacity: headerSpring,
          transform: `translateY(${interpolate(headerSpring, [0, 1], [20, 0])}px)`,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#38BDF8',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            CÓMO FUNCIONA LA RUTA INTELIGENTE
          </div>
          <h2 style={{ fontSize: 52, fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
            Autobús Conectado + Geocercas NFC
          </h2>
        </div>

        <div
          style={{
            padding: '12px 24px',
            borderRadius: 14,
            background: `${activeColor}22`,
            border: `1.5px solid ${activeColor}`,
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {statusBanner}
        </div>
      </div>

      {/* Motion Graphic Animated Bus & 3-Stop Corridor */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          margin: '28px 0',
          borderRadius: 28,
          background: 'linear-gradient(180deg, rgba(16, 24, 40, 0.92) 0%, rgba(11, 15, 23, 0.96) 100%)',
          border: '1px solid rgba(148, 163, 184, 0.18)',
          overflow: 'hidden',
        }}
      >
        <svg width="1748" height="680" viewBox="0 0 1880 680" style={{ width: '100%', height: '100%' }}>
          {/* Subtle Skyline Silhouettes */}
          <rect x="130" y="130" width="220" height="230" rx="10" fill="#131D30" />
          <rect x="130" y="130" width="220" height="10" fill="#10B981" />
          <rect x="780" y="75" width="210" height="285" rx="10" fill="#121C2E" />
          <rect x="780" y="75" width="210" height="10" fill="#38BDF8" />
          <rect x="1020" y="170" width="160" height="190" rx="10" fill="#131D30" />
          {/* Dark isolated fence zone near Stop 3 */}
          <rect x="1420" y="270" width="320" height="90" fill="none" stroke="#334155" strokeWidth="3" strokeDasharray="10 8" />

          {/* Road Surface */}
          <rect x="0" y="360" width="1880" height="150" fill="#182130" />
          <line x1="0" y1="360" x2="1880" y2="360" stroke="#475569" strokeWidth="4" />
          <line x1="0" y1="510" x2="1880" y2="510" stroke="#475569" strokeWidth="4" />
          <line
            x1="0"
            y1="435"
            x2="1880"
            y2="435"
            stroke="#F59E0B"
            strokeWidth="5"
            strokeDasharray="34 26"
            opacity="0.8"
          />

          {/* 3 Luminous Stop Geofences */}
          {stops.map((st, i) => {
            const isActive = (i === 0 && inStop1) || (i === 1 && inStop2) || (i === 2 && inStop3);
            const displayColor = i === 1 && frame >= 160 ? '#10B981' : st.color;
            return (
              <g key={st.code}>
                {/* Vertical beacon */}
                <line
                  x1={st.x}
                  y1="190"
                  x2={st.x}
                  y2="520"
                  stroke={displayColor}
                  strokeWidth={isActive ? 4 : 2}
                  strokeDasharray="8 8"
                  opacity={isActive ? 0.85 : 0.35}
                />
                {/* Ground Geofence Ellipse */}
                <ellipse
                  cx={st.x}
                  cy="528"
                  rx="130"
                  ry="32"
                  fill={displayColor}
                  opacity={isActive ? 0.25 : 0.1}
                />
                <ellipse
                  cx={st.x}
                  cy="528"
                  rx="130"
                  ry="32"
                  fill="none"
                  stroke={displayColor}
                  strokeWidth={isActive ? 6 : 3}
                />
                {/* Label Card */}
                <rect
                  x={st.x - 160}
                  y="578"
                  width="320"
                  height="74"
                  rx="14"
                  fill="#0D1422"
                  stroke={displayColor}
                  strokeWidth="2.5"
                />
                <text
                  x={st.x}
                  y="607"
                  textAnchor="middle"
                  fill={displayColor}
                  fontSize="17"
                  fontWeight="800"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {st.code} · {st.tag.toUpperCase()}
                </text>
                <text
                  x={st.x}
                  y="635"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="18"
                  fontWeight="700"
                >
                  {st.name.split('·')[1]?.trim() ?? st.name}
                </text>
              </g>
            );
          })}

          {/* STYLIZED ANIMATED MOTION-GRAPHIC BUS */}
          <g transform={`translate(${busX - 180}, 248)`}>
            {/* Headlight beam */}
            <polygon points="362,102 490,74 490,148 362,126" fill="#FEF08A" opacity="0.22" />

            {/* Bus Chassis */}
            <rect x="0" y="18" width="364" height="148" rx="22" fill="#E2E8F0" />
            <rect x="0" y="96" width="364" height="70" rx="14" fill="#131C2E" />
            {/* Emerald Roof Trim */}
            <rect x="14" y="14" width="336" height="9" rx="4" fill="#10B981" />
            {/* Windows */}
            <rect x="22" y="34" width="70" height="52" rx="8" fill="#0B1628" />
            <rect x="104" y="34" width="70" height="52" rx="8" fill="#0B1628" />
            <rect x="186" y="34" width="70" height="52" rx="8" fill="#0B1628" />
            {/* Doorway with NFC Reader */}
            <rect x="270" y="34" width="54" height="122" rx="8" fill="#0F293A" stroke="#38BDF8" strokeWidth="3" />
            {/* Front Windshield */}
            <path d="M 336 34 L 358 34 Q 364 34 364 44 L 364 90 L 336 90 Z" fill="#0B1628" />

            {/* Side Brand Stripe */}
            <polyline
              points="18,132 70,132 82,110 95,148 108,120 118,132 252,132"
              fill="none"
              stroke="#10B981"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="120" y="124" fill="#FFFFFF" fontSize="15.5" fontWeight="900">
              RUTA PULSO NFC
            </text>

            {/* Glowing NFC Reader Module on Bus Door */}
            <circle cx="328" cy="108" r="14" fill="#09111F" stroke={activeColor} strokeWidth="4" />
            <circle cx="328" cy="108" r="5" fill={activeColor} />

            {/* Expanding NFC Wave emitted when scanning at stop */}
            {(inStop1 || inStop2 || inStop3) && (
              <circle
                cx="328"
                cy="108"
                r={waveRadius}
                fill="none"
                stroke={activeColor}
                strokeWidth="5"
                opacity={waveOpacity}
              />
            )}

            {/* Spinning Wheels */}
            {[82, 286].map((wx) => (
              <g key={wx} transform={`translate(${wx}, 168) rotate(${wheelAngle})`}>
                <circle cx="0" cy="0" r="30" fill="#0F172A" stroke="#334155" strokeWidth="4" />
                <circle cx="0" cy="0" r="16" fill="#94A3B8" />
                <line x1="-16" y1="0" x2="16" y2="0" stroke="#0F172A" strokeWidth="4" />
                <line x1="0" y1="-16" x2="0" y2="16" stroke="#0F172A" strokeWidth="4" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Bottom Mini Timeline Indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 19, color: '#94A3B8' }}>
        <span>● Lectura NFC sin contacto vinculada a geocerca GPS</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#34D399' }}>
          UNIDAD {APP_DATA.unitId} · TELEMETRÍA EN VIVO
        </span>
      </div>
    </AbsoluteFill>
  );
};
