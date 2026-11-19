import React, { useEffect, useRef } from 'react';
import {
  Bus,
  Camera,
  Eye,
  Moon,
  Radio,
  ShieldAlert,
  ShieldCheck,
  Sun,
  Volume2,
  VolumeX,
  Wifi,
} from 'lucide-react';
import { DigitalTwinEngine } from '../scene/DigitalTwinEngine';
import {
  ActiveAlert,
  CameraPreset,
  EngineCallbacks,
  LightingMode,
  TelemetryState,
} from '../types/simulation';

interface SceneViewportProps {
  lightingMode: LightingMode;
  onToggleLighting: () => void;
  cameraPreset: CameraPreset;
  onSelectCamera: (preset: CameraPreset) => void;
  muted: boolean;
  onToggleMute: () => void;
  telemetry: TelemetryState;
  activeAlert: ActiveAlert | null;
  engineCallbacks: EngineCallbacks;
  onEngineReady: (engine: DigitalTwinEngine | null) => void;
}

export const SceneViewport: React.FC<SceneViewportProps> = ({
  lightingMode,
  onToggleLighting,
  cameraPreset,
  onSelectCamera,
  muted,
  onToggleMute,
  telemetry,
  activeAlert,
  engineCallbacks,
  onEngineReady,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const callbacksRef = useRef(engineCallbacks);
  callbacksRef.current = engineCallbacks;

  useEffect(() => {
    if (!mountRef.current) return;

    const stableCallbacks: EngineCallbacks = {
      onSpeedChange: (speed, busX) => callbacksRef.current.onSpeedChange(speed, busX),
      onNfcStateChange: (state, text) => callbacksRef.current.onNfcStateChange(state, text),
      onDoorChange: (open) => callbacksRef.current.onDoorChange(open),
      onStopChange: (label, geo) => callbacksRef.current.onStopChange(label, geo),
      onScenarioEvent: (ev) => callbacksRef.current.onScenarioEvent(ev),
      onScenarioComplete: (sc) => callbacksRef.current.onScenarioComplete(sc),
    };

    const engine = new DigitalTwinEngine(mountRef.current, stableCallbacks, lightingMode);
    onEngineReady(engine);

    return () => {
      onEngineReady(null);
      engine.dispose();
    };
    // Mount 3D engine once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="zone-scene" aria-label="Gemelo Digital 3D Ruta Pulso NFC">
      <div ref={mountRef} className="canvas-mount" />

      <div className="hud-overlay">
        {/* TOP HUD ROW */}
        <div className="hud-row">
          {/* Brand & Live Status */}
          <div className="hud-glass brand-card">
            <div className="brand-icon">
              <Radio size={18} />
            </div>
            <div>
              <div className="brand-title">
                <span>RUTA PULSO NFC</span>
                <span className="live-pill">
                  <span className="pulse-dot" />
                  GEMELO DIGITAL 3D
                </span>
              </div>
              <div className="brand-sub">
                Transporte Escolar y Laboral Nocturno · Perspectiva de Género
              </div>
            </div>
          </div>

          {/* 3D Controls: Day/Night + Camera Presets + Audio */}
          <div className="scene-controls">
            <div className="hud-glass control-strip">
              <button
                type="button"
                className={`hud-btn ${lightingMode === 'night' ? 'night-active' : 'day-active'}`}
                onClick={onToggleLighting}
                title="Alternar entre Modo Día y Modo Turno Nocturno"
              >
                {lightingMode === 'night' ? <Moon size={13} /> : <Sun size={13} />}
                <span>{lightingMode === 'night' ? 'Modo Turno Nocturno' : 'Modo Día'}</span>
              </button>

              <button
                type="button"
                className="hud-btn"
                onClick={onToggleMute}
                title={muted ? 'Activar sonido NFC' : 'Silenciar sonido NFC'}
              >
                {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                <span>{muted ? 'Silenciado' : 'Audio'}</span>
              </button>
            </div>

            <div className="hud-glass control-strip">
              <button
                type="button"
                className={`hud-btn ${cameraPreset === 'panoramic' ? 'active' : ''}`}
                onClick={() => onSelectCamera('panoramic')}
              >
                <Eye size={13} />
                <span>Vista Panorámica</span>
              </button>
              <button
                type="button"
                className={`hud-btn ${cameraPreset === 'nfc' ? 'active' : ''}`}
                onClick={() => onSelectCamera('nfc')}
              >
                <Wifi size={13} />
                <span>Zoom al Lector NFC</span>
              </button>
              <button
                type="button"
                className={`hud-btn ${cameraPreset === 'follow' ? 'active' : ''}`}
                onClick={() => onSelectCamera('follow')}
              >
                <Bus size={13} />
                <span>Seguir Autobús</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM HUD ROW */}
        <div className="hud-bottom-bar">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', alignItems: 'flex-start' }}>
            {activeAlert?.type === 'violet' && (
              <div className="cabin-silent-note">
                <ShieldAlert size={14} color="#E879F9" />
                <span>
                  En cabina 3D: <strong>SIN sirena ni luces escandalosas</strong> · Protección activa a la pasajera
                </span>
              </div>
            )}

            <div className={`hud-glass nfc-status-pill state-${telemetry.nfcState}`}>
              {telemetry.nfcState === 'alert' ? (
                <ShieldAlert size={15} />
              ) : telemetry.nfcState === 'safe' ? (
                <ShieldCheck size={15} />
              ) : (
                <Wifi size={15} />
              )}
              <span>
                <strong>Lector NFC 3D:</strong> {telemetry.nfcStatusText}
              </span>
            </div>
          </div>

          {/* Geofence Legend & OrbitControls Hint */}
          <div className="hud-glass orbit-hint">
            <span className="legend-dot">
              <i style={{ background: '#10B981' }} /> P1 Abordaje
            </span>
            <span className="legend-dot">
              <i style={{ background: '#38BDF8' }} /> P2 Destino
            </span>
            <span className="legend-dot">
              <i style={{ background: '#EF4444' }} /> P3 Riesgo
            </span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Camera size={11} /> Arrastra para rotar · Rueda para zoom
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
