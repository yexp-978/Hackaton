import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { HtmlWorld3D } from '../components/HtmlWorld3D';

/**
 * Escena 3 (330 frames / 11.0s) — ESCENARIO 1: Abordaje Seguro del Estudiante con NFC
 * - 0..90: Vista panorámica del circuito urbano y llegada de Unidad 04 a Parada 1 (Escuela / Residencial).
 * - 90..220: Zoom 3D real hacia la puerta y lector NFC mientras Sofía M. escanea su tarjeta/pulsera NFC.
 * - 220..330: Sofía aborda el autobús y entra notificación push verde al celular de su mamá (Laura M.).
 */
export const Scene3DBoarding: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const validated = frame >= 164;
  const boarded = frame >= 248;

  const badgeSpring = spring({ frame: frame - 8, fps, config: { damping: 18, stiffness: 120 } });
  const phoneSpring = spring({ frame: frame - 190, fps, config: { damping: 17, stiffness: 115 } });

  const captionText = boarded
    ? 'Sofía M. ya está a bordo · contador actualizado y familia notificada al instante'
    : validated
      ? '¡Lectura NFC validada en Parada 1! Halo verde, onda expansiva y registro automático'
      : frame >= 86
        ? 'Unidad 04 detenida dentro de la geocerca verde · puertas abiertas para abordaje'
        : 'Unidad 04 · Ruta R-12 aproximándose a Parada 1 (Escuela / Residencial)';

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B0F17',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* NATIVE 1920x1080 3D WORLD FROM RUTA PULSO HTML */}
      <HtmlWorld3D mode="boarding" frame={frame} width={1920} height={1080} />

      {/* Subtle framing vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(7,11,19,0.42) 0%, transparent 18%, transparent 78%, rgba(7,11,19,0.68) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top-Left Scenario Badge */}
      <div
        style={{
          position: 'absolute',
          top: 34,
          left: 42,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '14px 24px',
          borderRadius: 16,
          background: 'rgba(11, 16, 27, 0.88)',
          border: '1.5px solid rgba(16, 185, 129, 0.65)',
          boxShadow: '0 14px 36px rgba(0,0,0,0.48)',
          opacity: badgeSpring,
          transform: `translateY(${interpolate(badgeSpring, [0, 1], [-16, 0])}px)`,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'rgba(16, 185, 129, 0.22)',
            border: '1px solid #34D399',
            color: '#34D399',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: 20,
          }}
        >
          1
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: '#34D399' }}>
            ESCENARIO 1 · ABORDAJE SEGURO CON NFC
          </div>
          <div style={{ fontSize: 21, fontWeight: 800, marginTop: 2 }}>
            Parada 1 · Escuela / Residencial
          </div>
        </div>
      </div>

      {/* Top-Right Compact Telemetry Pill */}
      <div
        style={{
          position: 'absolute',
          top: 34,
          right: 42,
          display: 'flex',
          gap: 12,
          opacity: badgeSpring,
        }}
      >
        <div
          style={{
            padding: '12px 18px',
            borderRadius: 14,
            background: 'rgba(11, 16, 27, 0.88)',
            border: '1px solid rgba(148,163,184,0.24)',
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em' }}>LECTOR NFC</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: validated ? '#34D399' : '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>
            {validated ? 'VALIDADO ✓' : 'EN ESPERA'}
          </div>
        </div>
        <div
          style={{
            padding: '12px 18px',
            borderRadius: 14,
            background: 'rgba(11, 16, 27, 0.88)',
            border: '1px solid rgba(148,163,184,0.24)',
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em' }}>A BORDO</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#FFFFFF', fontFamily: 'JetBrains Mono, monospace' }}>
            {validated ? '1 de 3' : '0 de 3'}
          </div>
        </div>
      </div>

      {/* Real-Time Family Smartphone Push Notification (frames 190..330) */}
      {frame >= 190 && (
        <div
          style={{
            position: 'absolute',
            right: 46,
            top: '50%',
            width: 470,
            transform: `translateY(-50%) translateX(${interpolate(phoneSpring, [0, 1], [120, 0])}px)`,
            opacity: phoneSpring,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(160deg, #0F172A 0%, #070B13 100%)',
              border: '2.5px solid #2D3D5A',
              borderRadius: 30,
              padding: '20px 22px 24px',
              boxShadow: '0 28px 80px rgba(0,0,0,0.8)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14, fontWeight: 700 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>07:12</span>
              <span style={{ color: '#34D399', fontSize: 13 }}>Ruta Pulso · Celular familiar</span>
            </div>

            <div
              style={{
                padding: 18,
                borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.72), rgba(15, 23, 42, 0.96))',
                border: '1.5px solid #10B981',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#6EE7B7' }}>✓ ABORDAJE CONFIRMADO</span>
                <span style={{ fontSize: 12, color: '#CBD5E1', fontFamily: 'JetBrains Mono, monospace' }}>07:12 AM</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 6 }}>
                Sofía abordó la Unidad 04 en Parada 1
              </div>
              <div style={{ fontSize: 15, color: '#E2E8F0', lineHeight: 1.4 }}>
                Validación NFC-04A1 dentro de geocerca autorizada (Escuela / Residencial) — En ruta.
              </div>
              <div style={{ marginTop: 10, fontSize: 13, color: '#94A3B8' }}>
                Para: Laura M. (mamá) · Bitácora registrada
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Live Narrative Caption Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 34,
          left: 42,
          right: frame >= 190 ? 550 : 42,
          padding: '18px 26px',
          borderRadius: 18,
          background: 'rgba(8, 12, 20, 0.9)',
          border: `1.5px solid ${validated ? '#10B981' : 'rgba(255,255,255,0.2)'}`,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 18px 46px rgba(0,0,0,0.65)',
        }}
      >
        <span
          style={{
            padding: '7px 14px',
            borderRadius: 10,
            background: 'rgba(16, 185, 129, 0.2)',
            color: '#34D399',
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
          }}
        >
          {validated ? 'NFC VERIFICADO ✓' : 'ABORDAJE NFC'}
        </span>
        <span style={{ fontSize: 21, fontWeight: 600, color: '#F1F5F9', lineHeight: 1.3 }}>
          {captionText}
        </span>
      </div>
    </AbsoluteFill>
  );
};
