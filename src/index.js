import React from 'react';
import Waveform from './components/Waveform';

function Wave({ amplitude, frequency, height, width }) {
  return (
    <div>
      <Waveform amplitude={amplitude} frequency={frequency} height={height} width={width} />
    </div>
  );
}

export default Wave;