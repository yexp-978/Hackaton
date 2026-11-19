export type LightingMode = 'day' | 'night';

export type CameraPreset = 'panoramic' | 'nfc' | 'follow';

export type NfcState = 'idle' | 'safe' | 'alert' | 'silent';

export type GeofenceStatus = 'SEGURA' | 'EN RUTA' | 'RIESGO';

export type SecurityLevel = 'ÓPTIMO' | 'PRECAUCIÓN' | 'ALERTA CRÍTICA' | 'PROTOCOLO VIOLETA';

export type ScenarioId = 1 | 2 | 3 | 4;

export type PassengerStatus =
  | 'Esperando'
  | 'A bordo'
  | 'Entregado'
  | 'Alerta'
  | 'Protocolo Violeta';

export interface Passenger {
  id: string;
  name: string;
  role: 'Escolar' | 'Turno Nocturno';
  tagId: string;
  status: PassengerStatus;
  assignedStop: string;
  lastEvent?: string;
}

export interface NfcLogEntry {
  id: string;
  timestamp: string;
  tagId: string;
  passengerName: string;
  stopName: string;
  event: string;
  severity: 'info' | 'safe' | 'warning' | 'danger' | 'violet';
}

export interface PhoneNotification {
  id: string;
  timestamp: string;
  title: string;
  body: string;
  recipientLabel: string;
  variant: 'safe' | 'info' | 'danger' | 'violet';
  badge: string;
  actions?: {
    callDriver?: boolean;
    viewGps?: boolean;
    viewC4?: boolean;
  };
  gpsCoords?: string;
  stopLabel?: string;
}

export interface ActiveAlert {
  type: 'unauthorized' | 'violet';
  title: string;
  subtitle: string;
  details: string;
  cabinAudioState: string;
  timestamp: string;
}

export interface TelemetryState {
  unitId: string;
  routeName: string;
  speedKmh: number;
  currentStopLabel: string;
  geofenceStatus: GeofenceStatus;
  securityLevel: SecurityLevel;
  nfcState: NfcState;
  nfcStatusText: string;
  doorOpen: boolean;
  busProgress: number; // 0..1 along route
  coordinates: { lat: number; lng: number };
}

export interface EngineCallbacks {
  onSpeedChange: (speedKmh: number, busX: number) => void;
  onNfcStateChange: (state: NfcState, statusText: string) => void;
  onDoorChange: (open: boolean) => void;
  onStopChange: (stopLabel: string, geofence: GeofenceStatus) => void;
  onScenarioEvent: (event: ScenarioEngineEvent) => void;
  onScenarioComplete: (scenario: ScenarioId) => void;
}

export type ScenarioEngineEvent =
  | { type: 'sc1_boarded' }
  | { type: 'sc2_tutor_verified' }
  | { type: 'sc3_unauthorized_alert' }
  | { type: 'sc4_silent_violet' };
