import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ControlDashboard } from './components/ControlDashboard';
import { PhoneMockup } from './components/PhoneMockup';
import { SceneViewport } from './components/SceneViewport';
import { DigitalTwinEngine, STOP_POSITIONS } from './scene/DigitalTwinEngine';
import {
  ActiveAlert,
  CameraPreset,
  EngineCallbacks,
  GeofenceStatus,
  LightingMode,
  NfcLogEntry,
  NfcState,
  Passenger,
  PhoneNotification,
  ScenarioEngineEvent,
  ScenarioId,
  TelemetryState,
} from './types/simulation';
import { soundEngine } from './utils/sound';

const INITIAL_PASSENGERS: Passenger[] = [
  {
    id: 'sofia',
    name: 'Sofía M.',
    role: 'Escolar',
    tagId: 'NFC-ESC-104',
    status: 'Esperando',
    assignedStop: 'Parada 2 · Destino',
  },
  {
    id: 'mateo',
    name: 'Mateo R.',
    role: 'Escolar',
    tagId: 'NFC-ESC-208',
    status: 'A bordo',
    assignedStop: 'Parada 2 · Destino',
  },
  {
    id: 'ana',
    name: 'Ana L.',
    role: 'Turno Nocturno',
    tagId: 'NFC-NOC-419',
    status: 'A bordo',
    assignedStop: 'Parada 2 · Parque Ind.',
  },
];

const INITIAL_LOGS: NfcLogEntry[] = [
  {
    id: 'init-1',
    timestamp: '07:05 AM',
    tagId: 'SYS-U04',
    passengerName: 'Unidad 04 · Ruta Norte',
    stopName: 'Parada 1 · Escuela / Residencial',
    event: 'Lector NFC 3D y geocercas sincronizadas en línea.',
    severity: 'info',
  },
];

const INITIAL_NOTIFICATIONS: PhoneNotification[] = [
  {
    id: 'notif-init',
    timestamp: '07:05 AM',
    title: 'Unidad 04 en aproximación',
    body: 'La unidad escolar y laboral RUTA PULSO NFC llegó a Parada 1 (Escuela / Residencial). Lector NFC listo.',
    recipientLabel: 'Familia Morales · Contacto',
    variant: 'info',
    badge: 'Sistema Activo',
  },
];

const INITIAL_TELEMETRY: TelemetryState = {
  unitId: 'U-04',
  routeName: 'Corredor Norte Seguro',
  speedKmh: 0,
  currentStopLabel: STOP_POSITIONS.stop1.label,
  geofenceStatus: 'SEGURA',
  securityLevel: 'ÓPTIMO',
  nfcState: 'idle',
  nfcStatusText: 'En espera · Lector NFC activo',
  doorOpen: false,
  busProgress: 0,
  coordinates: { lat: 19.4326, lng: -99.1332 },
};

let uidCounter = 1;
const nextId = (prefix: string) => `${prefix}-${Date.now()}-${uidCounter++}`;

export const App: React.FC = () => {
  const engineRef = useRef<DigitalTwinEngine | null>(null);

  const [lightingMode, setLightingMode] = useState<LightingMode>('day');
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('panoramic');
  const [muted, setMuted] = useState(false);

  const [telemetry, setTelemetry] = useState<TelemetryState>(INITIAL_TELEMETRY);
  const [passengers, setPassengers] = useState<Passenger[]>(INITIAL_PASSENGERS);
  const [logs, setLogs] = useState<NfcLogEntry[]>(INITIAL_LOGS);
  const [notifications, setNotifications] = useState<PhoneNotification[]>(INITIAL_NOTIFICATIONS);
  const [activeAlert, setActiveAlert] = useState<ActiveAlert | null>(null);
  const [activeScenario, setActiveScenario] = useState<ScenarioId | null>(null);
  const [runningScenario, setRunningScenario] = useState<ScenarioId | null>(null);

  const handleEngineReady = useCallback((engine: DigitalTwinEngine | null) => {
    engineRef.current = engine;
  }, []);

  const handleToggleLighting = useCallback(() => {
    setLightingMode((prev) => {
      const next: LightingMode = prev === 'day' ? 'night' : 'day';
      engineRef.current?.setLightingMode(next);
      return next;
    });
  }, []);

  const handleSelectCamera = useCallback((preset: CameraPreset) => {
    setCameraPreset(preset);
    engineRef.current?.setCameraPreset(preset);
  }, []);

  const handleToggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      soundEngine.setMuted(next);
      return next;
    });
  }, []);

  const handleScenarioEvent = useCallback((ev: ScenarioEngineEvent) => {
    if (ev.type === 'sc1_boarded') {
      soundEngine.playSafeNfc();
      setActiveAlert(null);
      setTelemetry((prev) => ({
        ...prev,
        geofenceStatus: 'SEGURA',
        securityLevel: 'ÓPTIMO',
      }));
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'sofia' ? { ...p, status: 'A bordo' } : p))
      );
      setLogs((prev) => [
        {
          id: nextId('log'),
          timestamp: '07:12 AM',
          tagId: 'NFC-ESC-104',
          passengerName: 'Sofía M. (Escolar)',
          stopName: 'Parada 1 · Escuela / Residencial',
          event: 'Abordaje NFC validado dentro de geocerca autorizada.',
          severity: 'safe',
        },
        ...prev,
      ]);
      setNotifications((prev) => [
        {
          id: nextId('push'),
          timestamp: '07:12 AM',
          title: 'Abordaje Seguro Confirmado',
          body: 'Sofía abordó la Unidad 04 en Parada 1 (07:12 AM) - En ruta.',
          recipientLabel: 'Mamá de Sofía · Familiar',
          variant: 'safe',
          badge: 'NFC Verificado',
        },
        ...prev,
      ]);
    } else if (ev.type === 'sc2_tutor_verified') {
      soundEngine.playTutorVerified();
      setActiveAlert(null);
      setTelemetry((prev) => ({
        ...prev,
        geofenceStatus: 'SEGURA',
        securityLevel: 'ÓPTIMO',
      }));
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'sofia' ? { ...p, status: 'Entregado' } : p))
      );
      setLogs((prev) => [
        {
          id: nextId('log'),
          timestamp: '07:38 AM',
          tagId: 'NFC-TUT-882',
          passengerName: 'Sofía M. + Tutor Carlos M.',
          stopName: 'Parada 2 · Parque Industrial / Destino',
          event: 'Doble validación NFC (alumna + tutor autorizado). Entrega segura.',
          severity: 'safe',
        },
        ...prev,
      ]);
      setNotifications((prev) => [
        {
          id: nextId('push'),
          timestamp: '07:38 AM',
          title: 'Entrega Confirmada con Tutor',
          body: 'Entrega confirmada: Sofía descendió en Parada Autorizada con Tutor Verificado (Carlos M.).',
          recipientLabel: 'Mamá de Sofía · Familiar',
          variant: 'safe',
          badge: 'Tutor Verificado ✓',
        },
        ...prev,
      ]);
    } else if (ev.type === 'sc3_unauthorized_alert') {
      soundEngine.playUnauthorizedAlert();
      setTelemetry((prev) => ({
        ...prev,
        geofenceStatus: 'RIESGO',
        securityLevel: 'ALERTA CRÍTICA',
      }));
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'mateo' ? { ...p, status: 'Alerta' } : p))
      );
      setActiveAlert({
        type: 'unauthorized',
        title: '¡ALERTA! Descenso fuera de zona autorizada',
        subtitle: 'Aviso crítico en cabina de chofer y centro de monitoreo',
        details:
          'Mateo R. (NFC-ESC-208) intentó descender en Parada 3 (Zona Aislada) fuera de su geocerca asignada. Puerta en retención preventiva.',
        cabinAudioState: 'Alerta sonora enviada al operador',
        timestamp: '07:51 AM',
      });
      setLogs((prev) => [
        {
          id: nextId('log'),
          timestamp: '07:51 AM',
          tagId: 'NFC-ESC-208',
          passengerName: 'Mateo R. (Escolar)',
          stopName: 'Parada 3 · Zona Aislada',
          event: '¡ALERTA CRÍTICA! Intento de descenso fuera de geocerca autorizada.',
          severity: 'danger',
        },
        ...prev,
      ]);
      setNotifications((prev) => [
        {
          id: nextId('push'),
          timestamp: '07:51 AM',
          title: '¡ALERTA! Descenso fuera de zona autorizada',
          body: 'Mateo R. registró lectura NFC en Parada 3 (Zona Aislada / Riesgo). El chofer y monitoreo ya fueron alertados.',
          recipientLabel: 'Papá de Mateo · Urgente',
          variant: 'danger',
          badge: 'Alerta Crítica',
          gpsCoords: '19.4402° N, 99.1248° O',
          actions: {
            callDriver: true,
            viewGps: true,
          },
        },
        ...prev,
      ]);
    } else if (ev.type === 'sc4_silent_violet') {
      // STRICTLY SILENT IN CABIN — Perspectiva de Género
      soundEngine.playSilentProtocol();
      setTelemetry((prev) => ({
        ...prev,
        geofenceStatus: 'RIESGO',
        securityLevel: 'PROTOCOLO VIOLETA',
      }));
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'ana' ? { ...p, status: 'Protocolo Violeta' } : p))
      );
      setActiveAlert({
        type: 'violet',
        title: 'Protocolo Violeta Activo · Prioridad Máxima',
        subtitle: 'Alerta silenciosa de perspectiva de género',
        details:
          'Protocolo Violeta Activo - Sin alerta sonora en cabina - Grabación ambiental encriptada y GPS en vivo enviados a C4 y contactos de confianza.',
        cabinAudioState: 'SILENCIOSO EN CABINA (Protección activa)',
        timestamp: '22:45 hrs',
      });
      setLogs((prev) => [
        {
          id: nextId('log'),
          timestamp: '22:45 hrs',
          tagId: 'NFC-2X-VIOLETA',
          passengerName: 'Ana L. (Turno Nocturno)',
          stopName: 'Tramo Nocturno · Av. Norte',
          event: 'Doble toque discreto NFC detectado. Protocolo Violeta silencioso enviado a C4.',
          severity: 'violet',
        },
        ...prev,
      ]);
      setNotifications((prev) => [
        {
          id: nextId('push'),
          timestamp: '22:45 hrs',
          title: 'ALERTA SILENCIOSA · Protocolo Violeta',
          body: 'Ana L. activó código discreto NFC en Unidad 04 (Turno Nocturno). Sin alarma en cabina. Ubicación en vivo y audio enviados a C4.',
          recipientLabel: 'Red de Confianza · C4',
          variant: 'violet',
          badge: 'Protocolo Violeta',
          gpsCoords: '19.4368° N, 99.1281° O',
          actions: {
            viewC4: true,
            callDriver: true,
          },
        },
        ...prev,
      ]);
    }
  }, []);

  const engineCallbacks = useMemo<EngineCallbacks>(
    () => ({
      onSpeedChange: (speedKmh: number, busX: number) => {
        const progress = Math.max(0, Math.min(1, (busX - STOP_POSITIONS.stop1.busX) / 27));
        setTelemetry((prev) => ({
          ...prev,
          speedKmh,
          busProgress: progress,
          coordinates: {
            lat: 19.4326 + progress * 0.0076,
            lng: -99.1332 + progress * 0.0084,
          },
        }));
      },
      onNfcStateChange: (nfcState: NfcState, nfcStatusText: string) => {
        setTelemetry((prev) => ({ ...prev, nfcState, nfcStatusText }));
      },
      onDoorChange: (doorOpen: boolean) => {
        setTelemetry((prev) => ({ ...prev, doorOpen }));
      },
      onStopChange: (currentStopLabel: string, geofenceStatus: GeofenceStatus) => {
        setTelemetry((prev) => ({ ...prev, currentStopLabel, geofenceStatus }));
      },
      onScenarioEvent: handleScenarioEvent,
      onScenarioComplete: () => {
        setRunningScenario(null);
      },
    }),
    [handleScenarioEvent]
  );

  const handleRunScenario = useCallback((id: ScenarioId) => {
    setActiveScenario(id);
    setRunningScenario(id);

    if (id === 1) {
      setActiveAlert(null);
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'sofia' ? { ...p, status: 'Esperando' } : p))
      );
    } else if (id === 2) {
      setActiveAlert(null);
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'sofia' ? { ...p, status: 'A bordo' } : p))
      );
    } else if (id === 3) {
      setActiveAlert(null);
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'mateo' ? { ...p, status: 'A bordo' } : p))
      );
    } else if (id === 4) {
      setActiveAlert(null);
      setLightingMode('night');
      engineRef.current?.setLightingMode('night');
      setPassengers((prev) =>
        prev.map((p) => (p.id === 'ana' ? { ...p, status: 'A bordo' } : p))
      );
    }

    void engineRef.current?.runScenario(id);
  }, []);

  const handleResetSimulation = useCallback(() => {
    setActiveScenario(null);
    setRunningScenario(null);
    setActiveAlert(null);
    setLightingMode('day');
    setCameraPreset('panoramic');
    setTelemetry(INITIAL_TELEMETRY);
    setPassengers(INITIAL_PASSENGERS);
    setLogs(INITIAL_LOGS);
    setNotifications(INITIAL_NOTIFICATIONS);
    engineRef.current?.setLightingMode('day');
    engineRef.current?.resetSimulation();
  }, []);

  return (
    <main className="app-shell">
      {/* ZONA 1 (60%): ESCENA 3D INTERACTIVA EN TIEMPO REAL */}
      <SceneViewport
        lightingMode={lightingMode}
        onToggleLighting={handleToggleLighting}
        cameraPreset={cameraPreset}
        onSelectCamera={handleSelectCamera}
        muted={muted}
        onToggleMute={handleToggleMute}
        telemetry={telemetry}
        activeAlert={activeAlert}
        engineCallbacks={engineCallbacks}
        onEngineReady={handleEngineReady}
      />

      {/* COLUMNA DERECHA (40%): CONTROL + TELEMETRÍA (ARRIBA) Y TELÉFONO MÓVIL (ABAJO) */}
      <div className="zone-right-column">
        <ControlDashboard
          telemetry={telemetry}
          passengers={passengers}
          logs={logs}
          activeScenario={activeScenario}
          runningScenario={runningScenario}
          activeAlert={activeAlert}
          onRunScenario={handleRunScenario}
          onReset={handleResetSimulation}
        />

        <PhoneMockup
          notifications={notifications}
          telemetry={telemetry}
          lightingMode={lightingMode}
        />
      </div>
    </main>
  );
};

export default App;
