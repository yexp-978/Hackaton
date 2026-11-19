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

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 110 } });
  const subSpring = spring({ frame: frame - 22, fps, config: { damping: 18, stiffness: 100 } });
  const statsSpring = spring({ frame: frame - 36, fps, config: { damping: 20, stiffness: 110 } });

  // Animated pulse SVG path stroke dashoffset
  const pulseDraw = interpolate(frame, [6, 56], [1200, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // Gentle expanding ambient NFC radar rings behind logo
  const ring1 = interpolate((frame % 75) / 75, [0, 1], [0.6, 2.2]);
  const ring1Op = interpolate((frame % 75) / 75, [0, 0.2, 1], [0, 0.32, 0]);
  const ring2 = interpolate(((frame + 37) % 75) / 75, [0, 1], [0.6, 2.2]);
  const ring2Op = interpolate(((frame + 37) % 75) / 75, [0, 0.2, 1], [0, 0.25, 0]);

  const subtleZoom = interpolate(frame, [0, 180], [1, 1.05], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B0F17',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Radial Backglow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 45%, rgba(16, 185, 129, 0.16) 0%, rgba(56, 189, 248, 0.06) 35%, rgba(11, 15, 23, 0) 70%)',
          transform: `scale(${subtleZoom})`,
        }}
      />

      {/* Subtle Architectural Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.65,
        }}
      />

      {/* Concentric Expanding NFC Pulse Rings */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 460,
          height: 460,
          marginLeft: -230,
          marginTop: -230,
          borderRadius: '50%',
          border: '2px solid #10B981',
          transform: `scale(${ring1})`,
          opacity: ring1Op,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 460,
          height: 460,
          marginLeft: -230,
          marginTop: -230,
          borderRadius: '50%',
          border: '2px solid #38BDF8',
          transform: `scale(${ring2})`,
          opacity: ring2Op,
        }}
      />

      {/* Horizontal ECG / Pulse Line behind title */}
      <svg
        width="1920"
        height="300"
        viewBox="0 0 1920 300"
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          opacity: 0.45,
        }}
      >
        <defs>
          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="30%" stopColor="#10B981" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 150 L 580 150 L 640 150 L 680 62 L 730 238 L 780 96 L 820 150 L 1100 150 L 1145 92 L 1190 210 L 1230 150 L 1920 150"
          fill="none"
          stroke="url(#pulseGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1200"
          strokeDashoffset={pulseDraw}
        />
      </svg>

      {/* Center Editorial Composition */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 140px',
          textAlign: 'center',
        }}
      >
        {/* Top Tag Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 24px',
            borderRadius: 999,
            background: 'rgba(16, 185, 129, 0.14)',
            border: '1px solid rgba(52, 211, 153, 0.45)',
            color: '#6EE7B7',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            opacity: badgeSpring,
            transform: `translateY(${interpolate(badgeSpring, [0, 1], [24, 0])}px)`,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#34D399',
              boxShadow: '0 0 14px #34D399',
            }}
          />
          MOVILIDAD SEGURA · TECNOLOGÍA NFC
        </div>

        {/* Main Hero Title */}
        <h1
          style={{
            marginTop: 32,
            marginBottom: 18,
            fontSize: 112,
            fontWeight: 900,
            letterSpacing: '-0.025em',
            lineHeight: 1.02,
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [36, 0])}px)`,
          }}
        >
          RUTA{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #34D399 0%, #38BDF8 55%, #C084FC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            PULSO
          </span>{' '}
          <span
            style={{
              display: 'inline-block',
              fontSize: 56,
              verticalAlign: 'middle',
              padding: '8px 22px',
              borderRadius: 18,
              background: '#10B981',
              color: '#04120D',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.04em',
              marginLeft: 8,
            }}
          >
            NFC
          </span>
        </h1>

        {/* Subtitle from real app metadata */}
        <p
          style={{
            fontSize: 34,
            fontWeight: 500,
            color: '#CBD5E1',
            maxWidth: 1180,
            lineHeight: 1.38,
            margin: 0,
            opacity: subSpring,
            transform: `translateY(${interpolate(subSpring, [0, 1], [24, 0])}px)`,
          }}
        >
          {APP_DATA.tagline} con{' '}
          <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>{APP_DATA.socialFocus}</strong>
        </p>

        {/* Bottom Extracted App Telemetry Chips */}
        <div
          style={{
            marginTop: 54,
            display: 'flex',
            gap: 20,
            opacity: statsSpring,
            transform: `translateY(${interpolate(statsSpring, [0, 1], [24, 0])}px)`,
          }}
        >
          {[
            { label: 'UNIDAD ACTIVA', val: `${APP_DATA.unitId} · ${APP_DATA.routeName}`, color: '#34D399' },
            { label: 'GEOCERCAS 3D', val: `${APP_DATA.stops.length} Paradas Monitoreadas`, color: '#38BDF8' },
            { label: 'PROTOCOLOS', val: `${APP_DATA.scenarios.length} Escenarios en Vivo`, color: '#E879F9' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: '16px 26px',
                borderRadius: 16,
                background: 'rgba(15, 23, 42, 0.84)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#94A3B8',
                }}
              >
                {item.label}
              </span>
              <span style={{ fontSize: 22, fontWeight: 700, color: item.color }}>{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
