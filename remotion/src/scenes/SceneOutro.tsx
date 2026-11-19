import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { APP_DATA } from '../generatedAppData';

export const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({ frame, fps, config: { damping: 16, stiffness: 110 } });
  const copySpring = spring({ frame: frame - 14, fps, config: { damping: 18, stiffness: 110 } });
  const pillsSpring = spring({ frame: frame - 28, fps, config: { damping: 18, stiffness: 110 } });

  const pulseScale = interpolate((frame % 60) / 60, [0, 1], [0.85, 1.85]);
  const pulseOpacity = interpolate((frame % 60) / 60, [0, 0.25, 1], [0, 0.35, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B0F17',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 140px',
        overflow: 'hidden',
      }}
    >
      {/* Emerald + Violet Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 38% 48%, rgba(16, 185, 129, 0.16) 0%, transparent 50%), radial-gradient(circle at 65% 55%, rgba(168, 85, 247, 0.16) 0%, transparent 50%)',
        }}
      />

      {/* Ambient Pulse Ring */}
      <div
        style={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          border: '2px solid #34D399',
          transform: `scale(${pulseScale})`,
          opacity: pulseOpacity,
        }}
      />

      {/* Brand */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          opacity: logoSpring,
          transform: `scale(${interpolate(logoSpring, [0, 1], [0.9, 1])})`,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 24px',
            borderRadius: 999,
            background: 'rgba(168, 85, 247, 0.16)',
            border: '1px solid rgba(217, 70, 239, 0.45)',
            color: '#F5D0FE',
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '0.14em',
            marginBottom: 24,
          }}
        >
          TECNOLOGÍA CON PROPÓSITO SOCIAL
        </div>

        <h1
          style={{
            fontSize: 102,
            fontWeight: 900,
            margin: 0,
            letterSpacing: '-0.025em',
            lineHeight: 1.05,
          }}
        >
          {APP_DATA.projectName}
        </h1>
      </div>

      {/* Impact Tagline */}
      <p
        style={{
          position: 'relative',
          zIndex: 2,
          fontSize: 34,
          color: '#CBD5E1',
          maxWidth: 1120,
          lineHeight: 1.4,
          marginTop: 22,
          marginBottom: 46,
          opacity: copySpring,
          transform: `translateY(${interpolate(copySpring, [0, 1], [22, 0])}px)`,
        }}
      >
        Cada viaje escolar y turno nocturno acompañado en tiempo real.
        <br />
        <strong style={{ color: '#FFFFFF' }}>
          Pulsera NFC + Lector en Autobús + Gemelo Digital 3D.
        </strong>
      </p>

      {/* Feature Pillars */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          gap: 22,
          opacity: pillsSpring,
          transform: `translateY(${interpolate(pillsSpring, [0, 1], [22, 0])}px)`,
        }}
      >
        {[
          { text: 'Pulsera Plástica NFC', color: '#34D399' },
          { text: 'Lector NFC en Autobús', color: '#38BDF8' },
          { text: 'Alertas Familiares Push', color: '#FBBF24' },
          { text: 'Protocolo Violeta C4', color: '#E879F9' },
        ].map((pill) => (
          <div
            key={pill.text}
            style={{
              padding: '15px 26px',
              borderRadius: 16,
              background: 'rgba(15, 22, 36, 0.88)',
              border: `1.5px solid ${pill.color}66`,
              color: pill.color,
              fontSize: 21,
              fontWeight: 800,
            }}
          >
            {pill.text}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
