import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Live3DScene } from '../components/Live3DScene';

/**
 * Scene 5 (195 frames / 6.5s):
 * 100% NATIVE 1920x1080 THREE.JS 3D NIGHT SHIFT + REAL 3D CAMERA ZOOM ONTO NFC READER!
 * - Frames 0..64: Real 3D camera zooms toward Parada 3 (Zona Aislada oscura) with red flashing geofence + critical alert card.
 * - Frames 64..195: Real 3D camera zooms directly onto the glowing 3D NFC Reader & Ana L. inside the calm night-shift bus (Protocolo Violeta) + crisp native vector C4 phone card!
 */
export const SceneVioletProtocol: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isVioletPhase = frame >= 130;

  const badgeSpring = spring({
    frame: isVioletPhase ? frame - 134 : frame - 8,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const c4PhoneSpring = spring({
    frame: frame - 252,
    fps,
    config: { damping: 17, stiffness: 115 },
  });

  // Smooth cross-flash black dip at frame 130 when jumping from Parada 3 to Night Corridor close-up
  const cutFlash = interpolate(frame, [124, 130, 138], [0, 0.85, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#040711',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* NATIVE 1920x1080 REAL THREE.JS 3D NIGHT SHIFT & NFC READER CLOSE-UP */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Live3DScene mode="night-violet-zoom" frame={frame} width={1920} height={1080} />
      </div>

      {/* Smooth brief dark fade between Parada 3 alert and Protocolo Violeta NFC close-up */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#040711',
          opacity: cutFlash,
          pointerEvents: 'none',
        }}
      />

      {/* Top Mode Pill */}
      <div
        style={{
          position: 'absolute',
          top: 38,
          left: 46,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '13px 24px',
          borderRadius: 15,
          background: isVioletPhase ? 'rgba(46, 16, 78, 0.92)' : 'rgba(69, 10, 10, 0.9)',
          border: `1.5px solid ${isVioletPhase ? '#D946EF' : '#EF4444'}`,
          fontSize: 19,
          fontWeight: 800,
          letterSpacing: '0.07em',
          boxShadow: '0 14px 36px rgba(0,0,0,0.5)',
        }}
      >
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: '50%',
            background: isVioletPhase ? '#E879F9' : '#EF4444',
          }}
        />
        {isVioletPhase
          ? 'PERSPECTIVA DE GÉNERO · PROTOCOLO VIOLETA'
          : 'MODO TURNO NOCTURNO · ZONA AISLADA (PARADA 3)'}
      </div>

      {/* Bottom-Left Cabin Protection Pill during Protocolo Violeta */}
      {isVioletPhase && (
        <div
          style={{
            position: 'absolute',
            bottom: 38,
            left: 46,
            padding: '14px 24px',
            borderRadius: 15,
            background: 'rgba(35, 14, 52, 0.92)',
            border: '1.5px solid rgba(217, 70, 239, 0.72)',
            color: '#F5D0FE',
            fontSize: 18,
            fontWeight: 700,
            opacity: badgeSpring,
          }}
        >
          En cabina 3D: <strong>SIN sirena ni luces escandalosas</strong> · Pulso discreto en Lector NFC
        </div>
      )}

      {/* Editorial Narrative Card (Phase A & Phase B before C4 Phone arrives) */}
      {frame < 252 && (
        <div
          style={{
            position: 'absolute',
            bottom: 38,
            right: 46,
            maxWidth: 740,
            padding: '22px 30px',
            borderRadius: 20,
            background: 'rgba(11, 15, 23, 0.92)',
            border: `1.5px solid ${isVioletPhase ? '#D946EF' : '#EF4444'}`,
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
            opacity: badgeSpring,
            transform: `translateY(${interpolate(badgeSpring, [0, 1], [24, 0])}px)`,
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isVioletPhase ? '#F0ABFC' : '#FCA5A5',
              marginBottom: 6,
            }}
          >
            {isVioletPhase
              ? 'DOBLE TOQUE DISCRETO CON PULSERA NFC'
              : '¡ALERTA! DESCENSO FUERA DE ZONA AUTORIZADA'}
          </div>
          <div style={{ fontSize: 27, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
            {isVioletPhase
              ? 'Zoom directo al lector NFC 3D: activación silenciosa de auxilio'
              : 'Parada 3 sin alumbrado: bloqueo preventivo y aviso inmediato'}
          </div>
          <div style={{ fontSize: 18, color: '#CBD5E1', marginTop: 6, lineHeight: 1.35 }}>
            {isVioletPhase
              ? 'Ana L. realiza doble toque con su pulsera NFC sin alertar al agresor; monitoreo central y C4 reciben ubicación y audio.'
              : 'La geocerca roja y el lector parpadean mientras el chofer y los familiares reciben alerta crítica y rastreo GPS.'}
          </div>
        </div>
      )}

      {/* CRISP NATIVE VECTOR PROTOCOLO VIOLETA + C4 PHONE OVERLAY (FRAMES 252..360) */}
      {frame >= 252 && (
        <div
          style={{
            position: 'absolute',
            right: 52,
            top: '50%',
            width: 540,
            transform: `translateY(-50%) translateX(${interpolate(c4PhoneSpring, [0, 1], [140, 0])}px)`,
            opacity: c4PhoneSpring,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Central Monitoring Priority Banner */}
          <div
            style={{
              padding: '18px 22px',
              borderRadius: 18,
              background: 'linear-gradient(90deg, rgba(88, 28, 135, 0.94), rgba(168, 85, 247, 0.35))',
              border: '1.5px solid #E879F9',
              boxShadow: '0 18px 50px rgba(88, 28, 135, 0.5)',
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 800, color: '#F5D0FE', letterSpacing: '0.08em' }}>
              MONITOREO CENTRAL · PRIORIDAD MÁXIMA · 22:45 HRS
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>
              Protocolo Violeta Activo
            </div>
            <div style={{ fontSize: 15, color: '#F3E8FF', marginTop: 4, lineHeight: 1.35 }}>
              Sin alerta sonora en cabina · Grabación ambiental encriptada y GPS en vivo enviados a C4.
            </div>
          </div>

          {/* Trusted Contact Smartphone Card */}
          <div
            style={{
              background: 'linear-gradient(160deg, #0F172A 0%, #060911 100%)',
              border: '3px solid #4C2A6A',
              borderRadius: 32,
              padding: '20px 22px 24px',
              boxShadow: '0 28px 80px rgba(0, 0, 0, 0.85)',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 700 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>22:45</span>
              <span style={{ color: '#F0ABFC' }}>Red de Confianza · C4</span>
            </div>

            <div
              style={{
                padding: 18,
                borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.72), rgba(20, 14, 34, 0.96))',
                border: '1.5px solid #D946EF',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 800, color: '#F5D0FE', marginBottom: 6 }}>
                ● ALERTA SILENCIOSA · CÓDIGO NFC-2X-VIOLETA
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>
                Ana L. activó Protocolo Violeta
              </div>
              <div style={{ fontSize: 16, color: '#E2E8F0', lineHeight: 1.4 }}>
                Unidad 04 (Turno Nocturno). Sin alarma en cabina. Ubicación en tiempo real compartida con C4.
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 14,
                  color: '#F5D0FE',
                }}
              >
                GPS: 19.4368° N, 99.1281° O · AUDIO ENCRIPTADO
              </div>
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
