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
 * Escena 5 (300 frames / 10.0s) — ESCENARIO 3: Alerta de Parada No Autorizada / Desvío
 * - 0..85: Desvío hacia Parada 3 (Zona Aislada, malla ciclónica, árboles secos, geocerca roja).
 * - 85..215: Zoom 3D real a la puerta: Diego R. marca su NFC fuera de su parada asignada -> lector y geocerca parpadean en ROJO.
 * - 215..300: Chofer retiene el descenso, Diego vuelve a bordo y la familia recibe alerta roja con Llamar al chofer / Ver GPS.
 */
export const Scene3DUnauthorized: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const alertFired = frame >= 136;
  const retained = frame >= 218;

  const badgeSpring = spring({ frame: frame - 6, fps, config: { damping: 18, stiffness: 120 } });
  const alertSpring = spring({ frame: frame - 146, fps, config: { damping: 16, stiffness: 120 } });

  const captionText = retained
    ? 'El chofer retiene el descenso: Diego R. regresa seguro a bordo · trazabilidad completa'
    : alertFired
      ? '¡ALERTA CRÍTICA! Lector NFC y geocerca en rojo · chofer, monitoreo y familia notificados'
      : frame >= 86
        ? 'Diego R. intenta bajar en Parada 3 (Zona Aislada), fuera de su geocerca autorizada'
        : 'Desvío detectado: Unidad 04 detenida en Parada 3 · Zona Aislada (NO autorizada)';

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B0F17',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <HtmlWorld3D mode="unauthorized" frame={frame} width={1920} height={1080} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(15,6,9,0.48) 0%, transparent 18%, transparent 78%, rgba(15,6,9,0.72) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top-Left Danger Scenario Badge */}
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
          background: alertFired ? 'rgba(69, 10, 10, 0.92)' : 'rgba(11, 16, 27, 0.88)',
          border: '1.5px solid #EF4444',
          boxShadow: '0 14px 36px rgba(0,0,0,0.55)',
          opacity: badgeSpring,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'rgba(239, 68, 68, 0.28)',
            border: '1px solid #EF4444',
            color: '#FCA5A5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: 20,
          }}
        >
          3
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: '#FCA5A5' }}>
            ESCENARIO 3 · PARADA NO AUTORIZADA / DESVÍO
          </div>
          <div style={{ fontSize: 21, fontWeight: 800, marginTop: 2 }}>
            Parada 3 · Zona Aislada (Geocerca de Riesgo)
          </div>
        </div>
      </div>

      {/* Right Urgent Alert Stack (Central Monitoring + Family Phone Push) */}
      {frame >= 146 && (
        <div
          style={{
            position: 'absolute',
            right: 46,
            top: '50%',
            width: 495,
            transform: `translateY(-50%) translateX(${interpolate(alertSpring, [0, 1], [130, 0])}px)`,
            opacity: alertSpring,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Central Monitoring Red Banner */}
          <div
            style={{
              padding: '18px 22px',
              borderRadius: 18,
              background: 'linear-gradient(90deg, rgba(127, 29, 29, 0.95), rgba(239, 68, 68, 0.35))',
              border: '1.5px solid #EF4444',
              boxShadow: '0 16px 46px rgba(239, 68, 68, 0.32)',
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, color: '#FECACA', letterSpacing: '0.1em' }}>
              CENTRO DE MONITOREO · ALERTA CRÍTICA
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>
              ¡ALERTA! Descenso fuera de zona autorizada
            </div>
            <div style={{ fontSize: 14, color: '#FEE2E2', marginTop: 4, lineHeight: 1.35 }}>
              Diego R. (NFC-04B7) intentó descender en Parada 3 (geocerca asignada: Parada 2). Chofer alertado en cabina.
            </div>
          </div>

          {/* Family Urgent Phone Push Card */}
          <div
            style={{
              background: 'linear-gradient(160deg, #160B10 0%, #07090F 100%)',
              border: '2.5px solid #7F1D1D',
              borderRadius: 28,
              padding: '18px 20px 22px',
              boxShadow: '0 24px 70px rgba(0,0,0,0.85)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700 }}>
              <span style={{ color: '#FCA5A5' }}>⚠ ¡ALERTA URGENTE! · FAMILIA RAMÍREZ</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#CBD5E1' }}>ahora</span>
            </div>
            <div style={{ fontSize: 16, color: '#F8FAFC', lineHeight: 1.38 }}>
              Diego intentó descender en Parada 3 (Zona Aislada), fuera de su zona autorizada.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4 }}>
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: 12,
                  background: '#FFFFFF',
                  color: '#7F1D1D',
                  fontSize: 14,
                  fontWeight: 800,
                  textAlign: 'center',
                }}
              >
                Llamar al chofer
              </div>
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 800,
                  textAlign: 'center',
                }}
              >
                Ver GPS en vivo
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Narrative Caption */}
      <div
        style={{
          position: 'absolute',
          bottom: 34,
          left: 42,
          right: frame >= 146 ? 570 : 42,
          padding: '18px 26px',
          borderRadius: 18,
          background: 'rgba(18, 8, 12, 0.92)',
          border: `1.5px solid ${retained ? '#F59E0B' : '#EF4444'}`,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 18px 46px rgba(0,0,0,0.68)',
        }}
      >
        <span
          style={{
            padding: '7px 14px',
            borderRadius: 10,
            background: retained ? 'rgba(245, 158, 11, 0.22)' : 'rgba(239, 68, 68, 0.25)',
            color: retained ? '#FCD34D' : '#FCA5A5',
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
          }}
        >
          {retained ? 'DESCENSO RETENIDO' : 'ALERTA GEOCERCA'}
        </span>
        <span style={{ fontSize: 21, fontWeight: 600, color: '#F1F5F9', lineHeight: 1.3 }}>
          {captionText}
        </span>
      </div>
    </AbsoluteFill>
  );
};
