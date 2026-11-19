import React from 'react';
import { linearTiming, TransitionSeries } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { SceneIntro } from './scenes/SceneIntro';
import { SceneDevices } from './scenes/SceneDevices';
import { SceneBusNfcFlow } from './scenes/SceneBusNfcFlow';
import { SceneAppZoom3D } from './scenes/SceneAppZoom3D';
import { SceneVioletProtocol } from './scenes/SceneVioletProtocol';
import { SceneOutro } from './scenes/SceneOutro';

/**
 * Total Duration Math (30 fps — ritmo pausado ideal para narración en vivo):
 * Intro: 180 (6s) + Devices: 330 (11s) + BusNfcFlow: 300 (10s)
 * + AppZoom3D: 360 (12s) + VioletProtocol: 360 (12s) + Outro: 180 (6s)
 * = 1710 frames minus 5 transitions x 20 frames (100 frames) = 1610 frames (~53.7 segundos)
 */
export const TOTAL_DURATION_FRAMES = 1610;

export const RutaPulsoPromo: React.FC = () => {
  const t = linearTiming({ durationInFrames: 20 });

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={180}>
        <SceneIntro />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({ direction: 'from-right' })} timing={t} />

      <TransitionSeries.Sequence durationInFrames={330}>
        <SceneDevices />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={t} />

      <TransitionSeries.Sequence durationInFrames={300}>
        <SceneBusNfcFlow />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={wipe({ direction: 'from-left' })} timing={t} />

      <TransitionSeries.Sequence durationInFrames={360}>
        <SceneAppZoom3D />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={t} />

      <TransitionSeries.Sequence durationInFrames={360}>
        <SceneVioletProtocol />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({ direction: 'from-bottom' })} timing={t} />

      <TransitionSeries.Sequence durationInFrames={180}>
        <SceneOutro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
