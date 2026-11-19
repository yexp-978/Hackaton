import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Live3DScene } from '../components/Live3DScene';

/**
 * Scene 4 (210 frames / 7.0s — covers seconds ~14.7s to 21.7s, specifically 15s–20s):
 * 100% NATIVE 1920x1080 THREE.JS 3D CAMERA ZOOM — ZERO BITMAP/SCREENSHOT BLUR!
 * - Frames 0..38: Presents the live RUTA PULSO NFC app layout (3D scene + crisp native side dashboard) as the 3D bus drives from P1 to P2.
 * - Frames 38..136: Side panel glides away cleanly while the real Three.js 3D PerspectiveCamera zooms smoothly directly onto the 3D bus, doors, Sofía, Tutor Carlos, and glowing 3D NFC reader!
 * - Frames 136..210: Crisp native vector Pulso Familiar smartphone card slides in on the right confirming Tutor Verificado delivery while the 3D scene keeps moving crisply beside it.
 */
export const SceneAppZoom3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Right App Panel smoothly slides away at frames 50..92 so full 1920x1080 3D camera zoom shines!
  const panelHide = interpolate(frame, [50, 92], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  // Simulated bus speed synced with Live3DScene drive (frames 0..82)
  const speedKmh =
    frame < 82
      ? Math.round(Math.sin((frame / 82) * Math.PI) * 42)
      : 0;

  // Tutor validated flag synced with Live3DScene (frame >= 162)
  const tutorValidated = frame >= 162;

  // Callout springs
  const zoomCalloutSpring = spring({
    frame: frame - 92,
    fps,
    config: { damping: 18, stiffness: 120 },
  });
  const zoomCalloutExit = interpolate(frame, [230, 248], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const phoneCardSpring = spring({
    frame: frame - 245,
    fps,
    config: { damping: 17, stiffness: 115 },
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
      {/* NATIVE 1920x1080 REAL THREE.JS 3D MODEL & CAMERA ZOOM (CRYSTAL CLEAR!) */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Live3DScene mode="day-tutor-zoom" frame={frame} width={1920} height={1080} />
      </div>

      {/* Subtle cinematic top vignette so HUD badges pop crisply */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(7,11,20,0.45) 0%, transparent 18%, transparent 78%, rgba(7,11,20,0.58) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* TOP-LEFT AUTHENTIC APP HUD BADGE */}
      <div
        style={{
          position: 'absolute',
          top: 34,
          left: 42,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '14px 22px',
          borderRadius: 16,
          background: 'rgba(11, 16, 27, 0.86)',
          border: '1px solid rgba(52, 211, 153, 0.42)',
          boxShadow: '0 14px 36px rgba(0,0,0,0.45)',
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(52, 211, 153, 0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#34D399',
            fontWeight: 900,
            fontSize: 16,
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          NFC
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 21, fontWeight: 900, letterSpacing: '0.04em' }}>
              RUTA PULSO NFC
            </span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: 999,
                background: 'rgba(16, 185, 129, 0.18)',
                border: '1px solid rgba(52, 211, 153, 0.45)',
                color: '#6EE7B7',
                letterSpacing: '0.06em',
              }}
            >
              ● GEMELO DIGITAL 3D
            </span>
          </div>
          <div style={{ fontSize: 14, color: '#94A3B8', marginTop: 2 }}>
            Escenario 2 · Descenso Seguro + Validación de Tutor Verificado
          </div>
        </div>
      </div>

      {/* BOTTOM-LEFT LIVE NFC READER STATUS PILL */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 42,
          padding: '13px 22px',
          borderRadius: 14,
          background: tutorValidated ? 'rgba(6, 42, 30, 0.92)' : 'rgba(11, 16, 27, 0.88)',
          border: `1.5px solid ${tutorValidated ? '#34D399' : '#38BDF8'}`,
          color: tutorValidated ? '#6EE7B7' : '#BAE6FD',
          fontSize: 18,
          fontWeight: 700,
          boxShadow: '0 14px 36px rgba(0,0,0,0.48)',
        }}
      >
        <strong>Lector NFC 3D:</strong>{' '}
        {tutorValidated
          ? 'Tutor Verificado · Entrega Confirmada NFC ✓'
          : frame >= 92
            ? 'Puerta abierta en Parada 2 · Escaneando NFC...'
            : `En tránsito a Parada 2 · ${speedKmh} km/h`}
      </div>

      {/* INITIAL RIGHT SIDE APP DASHBOARD OVERLAY (SLIDES AWAY SMOOTHLY FOR FULL-BLEED 3D ZOOM) */}
      {panelHide < 0.99 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 680,
            background: 'rgba(11, 15, 23, 0.94)',
            borderLeft: '1px solid rgba(148, 163, 184, 0.18)',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            transform: `translateX(${panelHide * 720}px)`,
            opacity: 1 - panelHide * 0.65,
          }}
        >
          <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '0.08em', color: '#34D399' }}>
            ● PANEL DE MONITOREO CENTRAL · EN VIVO
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { n: '1', t: 'Abordaje Seguro NFC', c: '#10B981', active: false },
              { n: '2', t: 'Descenso + Tutor Verificado', c: '#38BDF8', active: true },
              { n: '3', t: 'Parada No Autorizada', c: '#EF4444', active: false },
              { n: '4', t: 'Alerta Silenciosa (Género)', c: '#D946EF', active: false },
            ].map((sc) => (
              <div
                key={sc.n}
                style={{
                  padding: '13px 14px',
                  borderRadius: 12,
                  background: sc.active ? 'rgba(56, 189, 248, 0.16)' : 'rgba(22, 31, 49, 0.72)',
                  border: `1.5px solid ${sc.active ? '#38BDF8' : 'rgba(148,163,184,0.16)'}`,
                  borderLeft: `4px solid ${sc.c}`,
                  fontSize: 13.5,
                  fontWeight: 700,
                }}
              >
                {sc.n}. {sc.t}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            <div style={{ padding: 12, borderRadius: 10, background: 'rgba(22,31,49,0.75)' }}>
              <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 700 }}>VELOCIDAD</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>
                {speedKmh} km/h
              </div>
            </div>
            <div style={{ padding: 12, borderRadius: 10, background: 'rgba(22,31,49,0.75)' }}>
              <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 700 }}>A BORDO</div>
              <div style={{ fontSize: 20, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>3 / 3</div>
            </div>
            <div style={{ padding: 12, borderRadius: 10, background: 'rgba(22,31,49,0.75)' }}>
              <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 700 }}>GEOCERCA</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#34D399' }}>SEGURA</div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              borderRadius: 20,
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 800, color: '#38BDF8', letterSpacing: '0.06em' }}>
              APP PULSO FAMILIAR · TIEMPO REAL
            </div>
            <div
              style={{
                padding: 16,
                borderRadius: 14,
                background: 'rgba(6, 78, 59, 0.42)',
                border: '1px solid rgba(16, 185, 129, 0.5)',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 800, color: '#6EE7B7' }}>✓ NFC VERIFICADO · 07:12 AM</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 4 }}>Abordaje Seguro Confirmado</div>
              <div style={{ fontSize: 15, color: '#E2E8F0', marginTop: 4 }}>
                Sofía abordó la Unidad 04 en Parada 1 — En ruta hacia Parada 2.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CRISP ANNOTATION DURING REAL 3D MODEL CAMERA ZOOM */}
      {frame >= 92 && frame <= 250 && (
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            right: 44,
            maxWidth: 680,
            padding: '20px 28px',
            borderRadius: 20,
            background: 'rgba(11, 15, 23, 0.9)',
            border: '1.5px solid #10B981',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.72)',
            opacity: zoomCalloutSpring * zoomCalloutExit,
            transform: `translateY(${interpolate(zoomCalloutSpring, [0, 1], [24, 0])}px)`,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#34D399',
              marginBottom: 6,
            }}
          >
            VALIDACIÓN NFC EN TIEMPO REAL · PARADA 2
          </div>
          <div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.2 }}>
            Doble lectura NFC: Alumna + Tutor Verificado
          </div>
          <div style={{ fontSize: 18, color: '#CBD5E1', marginTop: 6, lineHeight: 1.35 }}>
            Al validar ambas tarjetas en el lector del autobús, la geocerca cambia a verde esmeralda y confirma la entrega segura.
          </div>
        </div>
      )}

      {/* NATIVE VECTOR SMARTPHONE PUSH NOTIFICATION CARD (ZERO BLUR, GLIDES IN AT FRAMES 245..360) */}
      {frame >= 245 && (
        <div
          style={{
            position: 'absolute',
            right: 54,
            top: '50%',
            width: 520,
            transform: `translateY(-50%) translateX(${interpolate(phoneCardSpring, [0, 1], [140, 0])}px)`,
            opacity: phoneCardSpring,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(160deg, #0F172A 0%, #060911 100%)',
              border: '3px solid #2D3E5C',
              borderRadius: 36,
              padding: '22px 24px 28px',
              boxShadow: '0 32px 90px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Dynamic Island */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15, fontWeight: 700 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>07:38</span>
              <div style={{ width: 112, height: 24, borderRadius: 999, background: '#020409' }} />
              <span style={{ color: '#34D399', fontFamily: 'JetBrains Mono, monospace' }}>5G · 98%</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 12 }}>
              <span style={{ fontSize: 20, fontWeight: 800 }}>Pulso Familiar</span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: 999,
                  background: 'rgba(16,185,129,0.2)',
                  color: '#6EE7B7',
                }}
              >
                NOTIFICACIÓN EN VIVO
              </span>
            </div>

            {/* Primary Green Tutor Verification Push Card */}
            <div
              style={{
                padding: 20,
                borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.72), rgba(15, 23, 42, 0.96))',
                border: '1.5px solid #34D399',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.22)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#6EE7B7', letterSpacing: '0.06em' }}>
                  ✓ TUTOR VERIFICADO NFC
                </span>
                <span style={{ fontSize: 13, color: '#CBD5E1', fontFamily: 'JetBrains Mono, monospace' }}>
                  07:38 AM
                </span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF', marginBottom: 6 }}>
                Entrega Confirmada con Tutor
              </div>
              <div style={{ fontSize: 17, color: '#E2E8F0', lineHeight: 1.4 }}>
                Sofía descendió en Parada Autorizada (Parada 2) con Tutor Verificado (Carlos M.).
              </div>
            </div>

            {/* Previous Boarding Push Card */}
            <div
              style={{
                padding: 16,
                borderRadius: 16,
                background: 'rgba(20, 29, 46, 0.85)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: '#38BDF8' }}>NFC VERIFICADO</span>
                <span style={{ fontSize: 12, color: '#94A3B8', fontFamily: 'JetBrains Mono, monospace' }}>07:12 AM</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Sofía abordó la Unidad 04 en Parada 1</div>
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
