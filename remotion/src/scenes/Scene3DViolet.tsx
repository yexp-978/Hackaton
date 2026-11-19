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
 * Escena 6 (360 frames / 12.0s) — ESCENARIO 4: Modo Turno Nocturno + Protocolo Violeta
 * - 0..80: Transición dramática a Modo Turno Nocturno (faros encendidos, estrellas, luna, farolas en paradas seguras).
 * - 80..200: Zoom 3D directo al Lector NFC: Ana L. realiza doble toque discreto -> pulso tenue ámbar/magenta SIN sirena ni luces en cabina, antena superior enviando datos violetas a C4.
 * - 200..360: Unidad 04 llega a Parada 1 iluminada; Ana desciende con normalidad bajo seguimiento C4 Chihuahua + alerta silenciosa en celular de confianza.
 */
export const Scene3DViolet: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const violetActive = frame >= 82;
  const safeExit = frame >= 246;

  const badgeSpring = spring({ frame: frame - 6, fps, config: { damping: 18, stiffness: 120 } });
  const c4Spring = spring({ frame: frame - 196, fps, config: { damping: 17, stiffness: 115 } });

  const recSeconds = violetActive ? Math.floor((frame - 82) / 30) : 0;
  const recFmt = `00:${String(recSeconds).padStart(2, '0')}`;

  const captionText = safeExit
    ? 'La unidad llega a Parada 1 iluminada · Ana L. desciende segura con seguimiento C4 activo'
    : violetActive
      ? 'Protocolo Violeta silencioso: SIN sirena ni luces en cabina · grabación y GPS enviados a C4'
      : 'Modo Turno Nocturno: faros activos y paradas seguras iluminadas en ruta de regreso';

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#040711',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <HtmlWorld3D mode="violet" frame={frame} width={1920} height={1080} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(4,7,17,0.48) 0%, transparent 18%, transparent 78%, rgba(4,7,17,0.72) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top-Left Protocolo Violeta Badge */}
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
          background: violetActive ? 'rgba(46, 16, 101, 0.92)' : 'rgba(15, 23, 42, 0.88)',
          border: `1.5px solid ${violetActive ? '#C084FC' : '#818CF8'}`,
          boxShadow: '0 14px 36px rgba(0,0,0,0.55)',
          opacity: badgeSpring,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'rgba(168, 85, 247, 0.28)',
            border: '1px solid #C084FC',
            color: '#E9D5FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: 20,
          }}
        >
          4
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: '#E9D5FF' }}>
            ESCENARIO 4 · PERSPECTIVA DE GÉNERO · TURNO NOCTURNO
          </div>
          <div style={{ fontSize: 21, fontWeight: 800, marginTop: 2 }}>
            Alerta Silenciosa · Protocolo Violeta (Doble Toque NFC)
          </div>
        </div>
      </div>

      {/* Silent Cabin Note Banner (Visible during Protocolo Violeta) */}
      {violetActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 118,
            left: 42,
            padding: '11px 20px',
            borderRadius: 12,
            background: 'rgba(46, 16, 101, 0.9)',
            border: '1.5px dashed rgba(216, 180, 254, 0.72)',
            color: '#F3E8FF',
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          En cabina 3D: <strong>NO suena nada ni se encienden luces de alarma</strong> · el agresor no se entera
        </div>
      )}

      {/* Right Stack: Central Monitoring C4 + Trusted Contact Smartphone (frames 196..360) */}
      {frame >= 196 && (
        <div
          style={{
            position: 'absolute',
            right: 46,
            top: '50%',
            width: 500,
            transform: `translateY(-50%) translateX(${interpolate(c4Spring, [0, 1], [130, 0])}px)`,
            opacity: c4Spring,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* C4 Central Monitoring Priority Card */}
          <div
            style={{
              padding: '18px 22px',
              borderRadius: 18,
              background: 'linear-gradient(90deg, rgba(88, 28, 135, 0.95), rgba(168, 85, 247, 0.32))',
              border: '1.5px solid #C084FC',
              boxShadow: '0 18px 50px rgba(88, 28, 135, 0.45)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: '#E9D5FF', letterSpacing: '0.1em' }}>
                MONITOREO CENTRAL · C4 CHIHUAHUA
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#FECDD3', fontWeight: 800 }}>
                ● REC {recFmt}
              </span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>
              PROTOCOLO VIOLETA ACTIVO
            </div>
            <div style={{ fontSize: 14, color: '#F3E8FF', marginTop: 4, lineHeight: 1.35 }}>
              Sin alerta sonora en cabina · Grabación ambiental y GPS en vivo enviados a C4 y contactos de confianza.
            </div>
          </div>

          {/* Trusted Contact Phone Push Card */}
          <div
            style={{
              background: 'linear-gradient(160deg, #130B22 0%, #070910 100%)',
              border: '2.5px solid #581C87',
              borderRadius: 28,
              padding: '18px 20px 22px',
              boxShadow: '0 24px 70px rgba(0,0,0,0.85)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700 }}>
              <span style={{ color: '#E9D5FF' }}>● ALERTA SILENCIOSA · CONTACTO DE CONFIANZA</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#CBD5E1' }}>22:45</span>
            </div>
            <div style={{ fontSize: 16, color: '#F8FAFC', lineHeight: 1.38 }}>
              {safeExit
                ? 'Ana descendió en Parada 1 (zona iluminada). La ubicación en vivo sigue activa hasta que C4 cierre el protocolo.'
                : 'Ana L. activó alerta silenciosa en Unidad 04 (NFC-07C2). Compartiendo ubicación en vivo con Mariana L. y C4.'}
            </div>
            <div
              style={{
                padding: '9px 12px',
                borderRadius: 10,
                background: 'rgba(168, 85, 247, 0.16)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 13,
                color: '#E9D5FF',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>● GPS EN VIVO</span>
              <span>28.63790, -106.07740</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: 12,
                  background: '#A855F7',
                  color: '#FFFFFF',
                  fontSize: 14,
                  fontWeight: 800,
                  textAlign: 'center',
                }}
              >
                Ubicación en vivo
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
                Llamar al 911
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
          right: frame >= 196 ? 575 : 42,
          padding: '18px 26px',
          borderRadius: 18,
          background: 'rgba(14, 9, 24, 0.92)',
          border: `1.5px solid ${violetActive ? '#C084FC' : '#6366F1'}`,
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
            background: 'rgba(168, 85, 247, 0.25)',
            color: '#E9D5FF',
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
          }}
        >
          {safeExit ? 'PASAJERA SEGURA ✓' : violetActive ? 'PROTOCOLO VIOLETA' : 'TURNO NOCTURNO'}
        </span>
        <span style={{ fontSize: 21, fontWeight: 600, color: '#F1F5F9', lineHeight: 1.3 }}>
          {captionText}
        </span>
      </div>
    </AbsoluteFill>
  );
};
