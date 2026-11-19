import React from 'react';
import { Composition } from 'remotion';
import { RutaPulsoPromo, TOTAL_DURATION_FRAMES } from './RutaPulsoPromo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RutaPulsoPromo"
        component={RutaPulsoPromo}
        durationInFrames={TOTAL_DURATION_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
