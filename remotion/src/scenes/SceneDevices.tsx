import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const SceneDevices: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerSpring = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const leftCardSpring = spring({ frame: frame - 12, fps, config: { damping: 16, stiffness: 100 } });
  const rightCardSpring = spring({ frame: frame - 24, fps, config: { damping: 16, stiffness: 100 } });
  const specsSpring = spring({ frame: frame - 42, fps, config: { damping: 18, stiffness: 110 } });

  // Gentle floating motion for hardware devices
  const floatLeft = Math.sin(frame / 18) * 8;
  const floatRight = Math.cos(frame / 18) * 8;

  // Simulated NFC wireless signal pulse traveling from Wristband -> Bus Reader
  const cycle = (frame - 35) % 68;
  const signalActive = frame >= 35;
  const packetProgress = signalActive
    ? interpolate(cycle, [0, 34], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.inOut(Easing.cubic),
      })
    : 0;

  // Reader glow flash when NFC signal arrives!
  const readerValidated = signalActive && cycle >= 30 && cycle <= 60;
  const flashIntensity = readerValidated
    ? interpolate(cycle, [30, 38, 60], [0, 1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 0;

  const readerGlowOpacity = readerValidated
    ? interpolate(cycle, [30, 38, 60], [0, 0.9, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 0;

  // Expanding NFC wave ring around reader on tap confirmation
  const confirmRingScale = readerValidated
    ? interpolate(cycle, [32, 60], [0.7, 1.85], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 0.7;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B0F17',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#FFFFFF',
        padding: '62px 86px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Ambient Background Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 26% 52%, rgba(16, 185, 129, 0.14) 0%, transparent 45%), radial-gradient(circle at 74% 52%, rgba(56, 189, 248, 0.14) 0%, transparent 45%)',
        }}
      />

      {/* Section Header */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          opacity: headerSpring,
          transform: `translateY(${interpolate(headerSpring, [0, 1], [24, 0])}px)`,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#34D399',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            HARDWARE DEL PROYECTO · SIN CONTACTO
          </div>
          <h2 style={{ fontSize: 54, fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
            Dispositivos NFC en Operación Real
          </h2>
        </div>

        <div
          style={{
            padding: '12px 22px',
            borderRadius: 14,
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(52, 211, 153, 0.4)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 20,
            color: '#6EE7B7',
            fontWeight: 700,
          }}
        >
          ISO/IEC 14443 · 13.56 MHz
        </div>
      </div>

      {/* Main Device Showcase Row */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 220px 1fr',
          alignItems: 'center',
          gap: 24,
          flex: 1,
          marginTop: 24,
        }}
      >
        {/* LEFT DEVICE: PULSERA DE PLÁSTICO CON NFC */}
        <div
          style={{
            background: 'rgba(15, 22, 36, 0.86)',
            border: '1px solid rgba(52, 211, 153, 0.35)',
            borderRadius: 28,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
            opacity: leftCardSpring,
            transform: `translateX(${interpolate(leftCardSpring, [0, 1], [-60, 0])}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                background: 'rgba(16, 185, 129, 0.18)',
                color: '#34D399',
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: '0.06em',
              }}
            >
              DISPOSITIVO 01 · USUARIO
            </span>
            <span style={{ fontSize: 16, color: '#94A3B8', fontFamily: 'JetBrains Mono, monospace' }}>
              NFC-TAG-PASIVO
            </span>
          </div>

          <div
            style={{
              position: 'relative',
              height: 410,
              borderRadius: 20,
              overflow: 'hidden',
              background: '#05080E',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Img
              src={staticFile('promo/device-pulsera-nfc.jpg')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transform: `translateY(${floatLeft}px) scale(1.02)`,
              }}
            />
          </div>

          <div>
            <h3 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px' }}>
              Pulsera Plástica con Chip NFC
            </h3>
            <p style={{ fontSize: 20, color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
              Polímero durable resistente al agua, sin batería y de uso cotidiano para estudiantes y
              trabajadoras en turno nocturno.
            </p>
          </div>
        </div>

        {/* CENTER ANIMATED NFC DATA TRANSFER BRIDGE */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
          }}
        >
          {/* Animated NFC Waves Icon */}
          <svg width="190" height="120" viewBox="0 0 190 120">
            <line
              x1="12"
              y1="60"
              x2="178"
              y2="60"
              stroke="rgba(148,163,184,0.25)"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            {signalActive && (
              <>
                <circle
                  cx={18 + packetProgress * 154}
                  cy="60"
                  r="14"
                  fill="#34D399"
                  opacity={1 - Math.abs(packetProgress - 0.5) * 0.4}
                />
                <circle
                  cx={18 + packetProgress * 154}
                  cy="60"
                  r="26"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  opacity={0.75 * (1 - packetProgress * 0.3)}
                />
              </>
            )}
          </svg>

          <div
            style={{
              padding: '10px 18px',
              borderRadius: 12,
              background: readerValidated
                ? 'rgba(16, 185, 129, 0.24)'
                : 'rgba(56, 189, 248, 0.14)',
              border: `1px solid ${readerValidated ? '#34D399' : 'rgba(56,189,248,0.45)'}`,
              color: readerValidated ? '#6EE7B7' : '#7DD3FC',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 17,
              fontWeight: 800,
              textAlign: 'center',
              transform: `scale(${1 + flashIntensity * 0.08})`,
            }}
          >
            {readerValidated ? 'VALIDADO ✓ 0.2s' : 'ESCANEO NFC →'}
          </div>

          <div style={{ fontSize: 15, color: '#94A3B8', textAlign: 'center', lineHeight: 1.35 }}>
            1 toque: Abordaje / Descenso
            <br />
            <span style={{ color: '#E879F9', fontWeight: 700 }}>2 toques: Protocolo Violeta</span>
          </div>
        </div>

        {/* RIGHT DEVICE: LECTOR NFC PARA TRANSPORTE / AUTOBÚS */}
        <div
          style={{
            background: 'rgba(15, 22, 36, 0.86)',
            border: `1px solid ${
              readerValidated ? 'rgba(52, 211, 153, 0.85)' : 'rgba(56, 189, 248, 0.35)'
            }`,
            borderRadius: 28,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            boxShadow: readerValidated
              ? '0 0 54px rgba(16, 185, 129, 0.28)'
              : '0 24px 60px rgba(0, 0, 0, 0.5)',
            opacity: rightCardSpring,
            transform: `translateX(${interpolate(rightCardSpring, [0, 1], [60, 0])}px)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                background: 'rgba(56, 189, 248, 0.18)',
                color: '#38BDF8',
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: '0.06em',
              }}
            >
              DISPOSITIVO 02 · AUTOBÚS
            </span>
            <span style={{ fontSize: 16, color: '#94A3B8', fontFamily: 'JetBrains Mono, monospace' }}>
              VALIDADOR U-04
            </span>
          </div>

          <div
            style={{
              position: 'relative',
              height: 410,
              borderRadius: 20,
              overflow: 'hidden',
              background: '#05080E',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Img
              src={staticFile('promo/device-lector-nfc.jpg')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transform: `translateY(${floatRight}px) scale(1.02)`,
              }}
            />

            {/* Dynamic expanding LED halo confirmation ring over the NFC reader pad */}
            {readerValidated && (
              <div
                style={{
                  position: 'absolute',
                  width: 170,
                  height: 170,
                  borderRadius: '50%',
                  border: '5px solid #34D399',
                  boxShadow: '0 0 35px #10B981',
                  opacity: readerGlowOpacity,
                  transform: `scale(${confirmRingScale})`,
                }}
              />
            )}
          </div>

          <div>
            <h3 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px' }}>
              Lector NFC para Transporte
            </h3>
            <p style={{ fontSize: 20, color: '#CBD5E1', margin: 0, lineHeight: 1.4 }}>
              Terminal instalada en el pasamanos del acceso con halo LED inteligente, validación de
              geocerca y enlace GPS en tiempo real.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Spec Strip */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: 22,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
          opacity: specsSpring,
          transform: `translateY(${interpolate(specsSpring, [0, 1], [18, 0])}px)`,
        }}
      >
        {[
          { k: 'Cero fricción al abordar', v: 'Lectura instantánea al acercar la muñeca', c: '#34D399' },
          { k: 'Validación por Geocerca', v: 'Bloquea descensos en zonas no autorizadas', c: '#38BDF8' },
          { k: 'Seguridad Discreta', v: 'Pulso silencioso sin alarmas en cabina', c: '#E879F9' },
        ].map((s) => (
          <div
            key={s.k}
            style={{
              padding: '14px 20px',
              borderRadius: 14,
              background: 'rgba(15, 22, 36, 0.72)',
              borderLeft: `4px solid ${s.c}`,
            }}
          >
            <div style={{ fontSize: 19, fontWeight: 800, color: '#FFFFFF' }}>{s.k}</div>
            <div style={{ fontSize: 16, color: '#94A3B8', marginTop: 2 }}>{s.v}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
