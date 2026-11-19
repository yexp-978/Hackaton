import React from 'react';
import {
  Activity,
  AlertTriangle,
  Clock,
  Play,
  RotateCcw,
  Shield,
  ShieldAlert,
  Users,
  Wifi,
} from 'lucide-react';
import {
  ActiveAlert,
  NfcLogEntry,
  Passenger,
  ScenarioId,
  TelemetryState,
} from '../types/simulation';

interface ControlDashboardProps {
  telemetry: TelemetryState;
  passengers: Passenger[];
  logs: NfcLogEntry[];
  activeScenario: ScenarioId | null;
  runningScenario: ScenarioId | null;
  activeAlert: ActiveAlert | null;
  onRunScenario: (id: ScenarioId) => void;
  onReset: () => void;
}

const SCENARIO_CARDS: Array<{
  id: ScenarioId;
  title: string;
  subtitle: string;
}> = [
  {
    id: 1,
    title: 'Abordaje Seguro NFC',
    subtitle: 'Parada 1 · Sofía M. + notificación',
  },
  {
    id: 2,
    title: 'Descenso + Tutor Verificado',
    subtitle: 'Parada 2 · Doble NFC escolar',
  },
  {
    id: 3,
    title: 'Parada No Autorizada',
    subtitle: 'Parada 3 · Alerta crítica geocerca',
  },
  {
    id: 4,
    title: 'Alerta Silenciosa (Género)',
    subtitle: 'Protocolo Violeta · Doble toque NFC',
  },
];

function getStatusChipClass(status: Passenger['status']): string {
  switch (status) {
    case 'A bordo':
      return 'abordo';
    case 'Entregado':
      return 'entregado';
    case 'Alerta':
      return 'alerta';
    case 'Protocolo Violeta':
      return 'violeta';
    default:
      return 'esperando';
  }
}

export const ControlDashboard: React.FC<ControlDashboardProps> = ({
  telemetry,
  passengers,
  logs,
  activeScenario,
  runningScenario,
  activeAlert,
  onRunScenario,
  onReset,
}) => {
  const aboardCount = passengers.filter(
    (p) => p.status === 'A bordo' || p.status === 'Alerta' || p.status === 'Protocolo Violeta'
  ).length;

  const geofenceClass =
    telemetry.geofenceStatus === 'SEGURA'
      ? 'safe'
      : telemetry.geofenceStatus === 'RIESGO'
        ? 'danger'
        : 'warning';

  const securityClass =
    telemetry.securityLevel === 'ÓPTIMO'
      ? 'safe'
      : telemetry.securityLevel === 'ALERTA CRÍTICA'
        ? 'danger'
        : telemetry.securityLevel === 'PROTOCOLO VIOLETA'
          ? 'violet'
          : 'warning';

  const securityDisplay =
    telemetry.securityLevel === 'ALERTA CRÍTICA'
      ? 'CRÍTICA'
      : telemetry.securityLevel === 'PROTOCOLO VIOLETA'
        ? 'P. VIOLETA'
        : telemetry.securityLevel;

  return (
    <section className="zone-dashboard" aria-label="Panel de Control de Simulación NFC y Telemetría">
      {/* HEADER */}
      <div className="panel-header">
        <div className="panel-heading">
          <Activity size={14} color="#34D399" />
          <span>Simular Escenario en Vivo · Monitoreo Central</span>
        </div>
        <button type="button" className="reset-btn" onClick={onReset}>
          <RotateCcw size={12} />
          <span>Reiniciar Simulación</span>
        </button>
      </div>

      {/* 4 SCENARIO TRIGGER BUTTONS */}
      <div className="scenario-grid">
        {SCENARIO_CARDS.map((sc) => {
          const isRunning = runningScenario === sc.id;
          const isActive = activeScenario === sc.id;
          return (
            <button
              key={sc.id}
              type="button"
              className={`scenario-btn sc-${sc.id} ${isActive ? 'active' : ''} ${isRunning ? 'running' : ''}`}
              onClick={() => onRunScenario(sc.id)}
            >
              <span className="sc-num mono">{sc.id}</span>
              <span className="sc-text">
                <div className="sc-title">{sc.title}</div>
                <div className="sc-sub">{sc.subtitle}</div>
              </span>
              <Play
                size={12}
                style={{
                  opacity: isRunning ? 1 : 0.45,
                  flexShrink: 0,
                }}
              />
            </button>
          );
        })}
      </div>

      {/* DYNAMIC CRITICAL / SILENT VIOLET ALERT BANNER */}
      {activeAlert && (
        <div className={`alert-banner ${activeAlert.type}`} role="alert">
          {activeAlert.type === 'violet' ? (
            <ShieldAlert size={15} color="#F0ABFC" style={{ flexShrink: 0, marginTop: 1 }} />
          ) : (
            <AlertTriangle size={15} color="#FCA5A5" style={{ flexShrink: 0, marginTop: 1 }} />
          )}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div className="alert-banner-title">
              {activeAlert.title} · <span className="mono">{activeAlert.timestamp}</span>
            </div>
            <div className="alert-banner-desc">{activeAlert.details}</div>
          </div>
        </div>
      )}

      {/* REAL-TIME TELEMETRY KPI STRIP */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <span className="kpi-label">Unidad / Vel.</span>
          <span className="kpi-value mono kpi-compact">
            {telemetry.unitId} · <span style={{ color: '#38BDF8' }}>{telemetry.speedKmh} km/h</span>
          </span>
        </div>

        <div className="kpi-card">
          <span className="kpi-label">A bordo</span>
          <span className="kpi-value mono kpi-compact">
            {aboardCount} <span style={{ fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>/ {passengers.length} reg.</span>
          </span>
        </div>

        <div className="kpi-card">
          <span className="kpi-label">Geocerca</span>
          <span className={`kpi-value kpi-compact ${geofenceClass}`}>{telemetry.geofenceStatus}</span>
        </div>

        <div className="kpi-card">
          <span className="kpi-label">Seguridad</span>
          <span className={`kpi-value kpi-compact ${securityClass}`}>{securityDisplay}</span>
        </div>
      </div>

      {/* PASSENGERS MANIFEST + LIVE NFC LOG */}
      <div className="telemetry-split">
        {/* Passengers List */}
        <div className="sub-panel">
          <div className="sub-panel-header">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Users size={11} color="#34D399" /> Pasajeros ({aboardCount} a bordo)
            </span>
            <span style={{ fontSize: 9.2, color: '#64748B' }}>NFC</span>
          </div>
          <div className="scroll-list">
            {passengers.map((p) => (
              <div key={p.id} className="passenger-row">
                <div style={{ minWidth: 0 }}>
                  <div className="p-name">{p.name}</div>
                  <div className="p-meta">
                    {p.role} · <span className="mono">{p.tagId}</span>
                  </div>
                </div>
                <span className={`status-chip ${getStatusChipClass(p.status)}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live NFC Audit Log */}
        <div className="sub-panel">
          <div className="sub-panel-header">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Wifi size={11} color="#38BDF8" /> Bitácora NFC en Vivo
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 9.2, color: '#64748B' }}>
              <Clock size={10} /> {logs.length} {logs.length === 1 ? 'evento' : 'eventos'}
            </span>
          </div>
          <div className="scroll-list">
            {logs.map((entry) => (
              <div key={entry.id} className={`log-item ${entry.severity}`}>
                <div className="log-top">
                  <strong style={{ color: '#FFFFFF', fontSize: 10.4 }}>{entry.passengerName}</strong>
                  <span className="log-time mono">{entry.timestamp}</span>
                </div>
                <div style={{ color: '#CBD5E1' }}>{entry.event}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, gap: 4 }}>
                  <span style={{ fontSize: 9.2, color: '#8B9BB4' }}>{entry.stopName}</span>
                  <span className="log-tag mono">{entry.tagId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle footer route status line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 10,
          color: '#8B9BB4',
          paddingTop: 1,
          flexShrink: 0,
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          <Shield size={11} color="#10B981" /> Ubicación actual: <strong style={{ color: '#E2E8F0' }}>{telemetry.currentStopLabel}</strong>
        </span>
        <span className="mono">
          {telemetry.coordinates.lat.toFixed(4)}° N, {Math.abs(telemetry.coordinates.lng).toFixed(4)}° O
        </span>
      </div>
    </section>
  );
};
