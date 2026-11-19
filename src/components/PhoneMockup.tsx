import React, { useState } from 'react';
import {
  BatteryCharging,
  Bell,
  CheckCircle2,
  MapPin,
  Phone,
  PhoneOff,
  Radio,
  ShieldAlert,
  Signal,
  Smartphone,
  Wifi,
  X,
} from 'lucide-react';
import { LightingMode, PhoneNotification, TelemetryState } from '../types/simulation';

interface PhoneMockupProps {
  notifications: PhoneNotification[];
  telemetry: TelemetryState;
  lightingMode: LightingMode;
}

type PhoneModalMode = null | 'call' | 'gps' | 'c4';

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  notifications,
  telemetry,
  lightingMode,
}) => {
  const [modalMode, setModalMode] = useState<PhoneModalMode>(null);

  const phoneClock = lightingMode === 'night' ? '22:45' : '07:14';
  const latestNotif = notifications[0];

  return (
    <section className="zone-phone" aria-label="Mockup móvil de notificaciones en tiempo real">
      <div className="phone-zone-header">
        <div className="panel-heading">
          <Smartphone size={14} color="#38BDF8" />
          <span>App Familiar / Contactos de Confianza (Tiempo Real)</span>
        </div>
        <span
          className="mono"
          style={{
            fontSize: 10,
            color: '#94A3B8',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Bell size={11} color="#34D399" /> {notifications.length}{' '}
          {notifications.length === 1 ? 'notificación push' : 'notificaciones push'}
        </span>
      </div>

      <div className="phone-stage">
        <div className="phone-device">
          {/* Smartphone Top Status Bar + Dynamic Island */}
          <div className="phone-statusbar">
            <span className="mono">{phoneClock}</span>
            <div className="phone-island">
              <span className="phone-cam-dot" />
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Signal size={11} />
              <Wifi size={11} />
              <BatteryCharging size={12} color="#34D399" />
            </span>
          </div>

          {/* App Header */}
          <div className="phone-appbar">
            <div className="phone-app-title">
              <Radio size={13} color="#34D399" />
              <span>Pulso Familiar</span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: 999,
                  background: 'rgba(16,185,129,0.16)',
                  color: '#6EE7B7',
                }}
              >
                EN VIVO
              </span>
            </div>
            <span style={{ fontSize: 10, color: '#94A3B8' }}>
              {latestNotif ? latestNotif.recipientLabel : 'Madre / Contacto'}
            </span>
          </div>

          {/* Push Notifications Feed */}
          <div className="phone-feed">
            {notifications.map((notif) => (
              <article key={notif.id} className={`push-card ${notif.variant}`}>
                <div className="push-top">
                  <span className="push-badge">
                    {notif.variant === 'safe' && <CheckCircle2 size={10} />}
                    {notif.variant === 'danger' && <ShieldAlert size={10} />}
                    {notif.variant === 'violet' && <ShieldAlert size={10} />}
                    {notif.badge}
                  </span>
                  <span className="mono" style={{ fontSize: 9.5, color: '#CBD5E1' }}>
                    {notif.timestamp}
                  </span>
                </div>

                <div className="push-title">{notif.title}</div>
                <div className="push-body">{notif.body}</div>

                {notif.gpsCoords && (
                  <div
                    className="mono"
                    style={{
                      marginTop: 5,
                      fontSize: 9.5,
                      color: notif.variant === 'violet' ? '#F5D0FE' : '#FCA5A5',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <MapPin size={10} /> GPS: {notif.gpsCoords}
                  </div>
                )}

                {notif.actions && (
                  <div className="push-actions">
                    {notif.actions.callDriver && (
                      <button
                        type="button"
                        className="phone-action-btn red"
                        onClick={() => setModalMode('call')}
                      >
                        <Phone size={11} /> Llamar al chofer
                      </button>
                    )}
                    {notif.actions.viewGps && (
                      <button
                        type="button"
                        className="phone-action-btn outline"
                        onClick={() => setModalMode('gps')}
                      >
                        <MapPin size={11} /> Ver GPS
                      </button>
                    )}
                    {notif.actions.viewC4 && (
                      <button
                        type="button"
                        className="phone-action-btn violet"
                        onClick={() => setModalMode('c4')}
                      >
                        <MapPin size={11} /> Ubicación en Vivo / C4
                      </button>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Interactive In-Phone Overlay (Llamar al chofer / Ver GPS / Protocolo Violeta C4) */}
          {modalMode && (
            <div className="phone-modal">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: 11.5, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {modalMode === 'call' ? (
                    <>
                      <Phone size={13} color="#34D399" /> Llamada Prioritaria · Unidad 04
                    </>
                  ) : modalMode === 'c4' ? (
                    <>
                      <ShieldAlert size={13} color="#E879F9" /> Protocolo Violeta · Enlace C4
                    </>
                  ) : (
                    <>
                      <MapPin size={13} color="#F87171" /> Rastreo GPS en Tiempo Real
                    </>
                  )}
                </strong>
                <button
                  type="button"
                  onClick={() => setModalMode(null)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: 6,
                    width: 22,
                    height: 22,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Cerrar vista móvil"
                >
                  <X size={13} />
                </button>
              </div>

              {modalMode === 'call' ? (
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: 'rgba(16,185,129,0.2)',
                      border: '1px solid #34D399',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={18} color="#34D399" />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>Operador Roberto G. · Unidad 04</div>
                  <div style={{ fontSize: 10.5, color: '#34D399' }} className="mono">
                    Línea directa conectada · Monitoreo en copia
                  </div>
                </div>
              ) : (
                <div className="gps-radar">
                  <div
                    className="radar-ping"
                    style={{
                      background: modalMode === 'c4' ? '#D946EF' : '#EF4444',
                      color: modalMode === 'c4' ? '#D946EF' : '#EF4444',
                    }}
                  />
                  <div
                    className="mono"
                    style={{
                      position: 'absolute',
                      bottom: 6,
                      left: 8,
                      right: 8,
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 9.5,
                      color: '#E2E8F0',
                    }}
                  >
                    <span>
                      {telemetry.coordinates.lat.toFixed(4)}°N, {Math.abs(telemetry.coordinates.lng).toFixed(4)}°O
                    </span>
                    <span style={{ color: modalMode === 'c4' ? '#F0ABFC' : '#FCA5A5' }}>
                      {modalMode === 'c4' ? 'C4 + AUDIO ENCRIPTADO' : telemetry.geofenceStatus}
                    </span>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#94A3B8' }}>
                  {telemetry.currentStopLabel}
                </span>
                <button
                  type="button"
                  className={`phone-action-btn ${modalMode === 'call' ? 'red' : 'outline'}`}
                  onClick={() => setModalMode(null)}
                >
                  {modalMode === 'call' ? (
                    <>
                      <PhoneOff size={11} /> Colgar
                    </>
                  ) : (
                    'Volver a alertas'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
