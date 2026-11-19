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
 * Escena 4 (330 frames / 11.0s) — ESCENARIO 2: Descenso Seguro + Recogida por Tutora / Madre
 * - 0..85: Unidad 04 avanza a Parada 2 (Parque Industrial / Destino).
 * - 85..170: Zoom 3D real a la puerta; Sofía desciende y marca NFC (lector cambia a ÁMBAR: esperando tutora).
 * - 170..255: Laura M. (tutora autorizada) acerca su tarjeta NFC -> geocerca azul brilla en VERDE ESMERALDA.
 * - 255..330: Sofía y Laura caminan seguras juntas mientras llega la confirmación push al celular.
 */
export const Scene3DTutor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const waitingTutor = frame >= 142 && frame < 220;
  const delivered = frame >= 220;

  const badgeSpring = spring({ frame: frame - 6, fps, config: { damping: 18, stiffness: 120 } });
  const phoneSpring = spring({ frame: frame - 232, fps, config: { damping: 17, stiffness: 115 } });

  const captionText = delivered
    ? '✓ Doble NFC validado (alumna + tutora) · geocerca verde y entrega confirmada'
    : waitingTutor
      ? 'Salida de Sofía registrada · el lector en ÁMBAR exige el NFC de la tutora autorizada'
      : frame >= 86
        ? 'Unidad 04 en Parada 2 (Parque Industrial) · Sofía desciende y registra su salida NFC'
        : 'La Unidad 04 avanza automáticamente hacia Parada 2 · Geocerca autorizada de descenso';

  const accent = delivered ? '#10B981' : waitingTutor ? '#F59E0B' : '#3B82F6';

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0B0F17',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <HtmlWorld3D mode="tutor" frame={frame} width={1920} height={1080} />

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
          border: `1.5px solid ${accent}`,
          boxShadow: '0 14px 36px rgba(0,0,0,0.48)',
          opacity: badgeSpring,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: `${accent}33`,
            border: `1px solid ${accent}`,
            color: accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: 20,
          }}
        >
          2
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: accent }}>
            ESCENARIO 2 · DESCENSO SEGURO + TUTOR VERIFICADO
          </div>
          <div style={{ fontSize: 21, fontWeight: 800, marginTop: 2 }}>
            Parada 2 · Doble Validación NFC (Alumna + Tutora)
          </div>
        </div>
      </div>

      {/* Top-Right Status Chips */}
      <div style={{ position: 'absolute', top: 34, right: 42, display: 'flex', gap: 12 }}>
        <div
          style={{
            padding: '12px 18px',
            borderRadius: 14,
            background: 'rgba(11, 16, 27, 0.88)',
            border: `1px solid ${accent}88`,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em' }}>LECTOR NFC</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: accent, fontFamily: 'JetBrains Mono, monospace' }}>
            {delivered ? 'TUTOR OK ✓' : waitingTutor ? 'ESPERA TUTOR' : 'AUTORIZADO'}
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
          <div style={{ fontSize: 11, fontWeight: 800, color: '#94A3B8', letterSpacing: '0.1em' }}>GEOCERCA P2</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: delivered ? '#34D399' : '#60A5FA', fontFamily: 'JetBrains Mono, monospace' }}>
            {delivered ? 'VERDE ✓' : 'SEGURA'}
          </div>
        </div>
      </div>

      {/* Smartphone Confirmation Card (frames 232..330) */}
      {frame >= 232 && (
        <div
          style={{
            position: 'absolute',
            right: 46,
            top: '50%',
            width: 480,
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
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 700 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>07:38</span>
              <span style={{ color: '#34D399' }}>Ruta Pulso · Entrega Escolar</span>
            </div>

            <div
              style={{
                padding: 18,
                borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.75), rgba(15, 23, 42, 0.96))',
                border: '1.5px solid #34D399',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#6EE7B7' }}>✓ ENTREGA CONFIRMADA</span>
                <span style={{ fontSize: 12, color: '#CBD5E1', fontFamily: 'JetBrains Mono, monospace' }}>07:38 AM</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 6 }}>
                Sofía descendió con Tutor Verificado
              </div>
              <div style={{ fontSize: 15, color: '#E2E8F0', lineHeight: 1.4 }}>
                Doble validación completada en Parada 2: Alumna (NFC-04A1) + Tutora Laura M. (NFC-T219).
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
          right: frame >= 232 ? 560 : 42,
          padding: '18px 26px',
          borderRadius: 18,
          background: 'rgba(8, 12, 20, 0.9)',
          border: `1.5px solid ${accent}`,
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
            background: `${accent}26`,
            color: accent,
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
          }}
        >
          {delivered ? 'TUTOR VERIFICADO ✓' : waitingTutor ? 'ESPERANDO TUTOR' : 'PARADA 2'}
        </span>
        <span style={{ fontSize: 21, fontWeight: 600, color: '#F1F5F9', lineHeight: 1.3 }}>
          {captionText}
        </span>
      </div>
    </AbsoluteFill>
  );
};
