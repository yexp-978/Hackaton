import React from 'react';
import { linearTiming, TransitionSeries } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { SceneIntro } from './scenes/SceneIntro';
import { SceneDevices } from './scenes/SceneDevices';
import { Scene3DBoarding } from './scenes/Scene3DBoarding';
import { Scene3DTutor } from './scenes/Scene3DTutor';
import { Scene3DUnauthorized } from './scenes/Scene3DUnauthorized';
import { Scene3DViolet } from './scenes/Scene3DViolet';
import { SceneOutro } from './scenes/SceneOutro';

/**
 * Total Duration Math (30 fps — ritmo pausado para narrar cada escena en vivo):
 * Intro: 150 (5s) + Devices: 270 (9s) + Boarding 3D: 330 (11s) + Tutor 3D: 330 (11s)
 * + Unauthorized 3D: 300 (10s) + Violet 3D: 360 (12s) + Outro: 150 (5s)
 * = 1890 frames minus 6 transitions x 18 frames (108 frames) = 1782 frames (~59.4 segundos)
 */
export const TOTAL_DURATION_FRAMES = 1782;

export const RutaPulsoPromo: React.FC = () => {
  const t = linearTiming({ durationInFrames: 18 });

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={150}>
        <SceneIntro />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({ direction: 'from-right' })} timing={t} />

      <TransitionSeries.Sequence durationInFrames={270}>
        <SceneDevices />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={t} />

      <TransitionSeries.Sequence durationInFrames={330}>
        <Scene3DBoarding />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={wipe({ direction: 'from-left' })} timing={t} />

      <TransitionSeries.Sequence durationInFrames={330}>
        <Scene3DTutor />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={t} />

      <TransitionSeries.Sequence durationInFrames={300}>
        <Scene3DUnauthorized />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={t} />

      <TransitionSeries.Sequence durationInFrames={360}>
        <Scene3DViolet />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({ direction: 'from-bottom' })} timing={t} />

      <TransitionSeries.Sequence durationInFrames={150}>
        <SceneOutro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
