import React, { useEffect, useRef } from 'react';
import waveStyles from '../styles/waveform.module.css';
import Wave from '../builder/Wave';
import WaveBuilder from '../builder/WaveBuilder';
import { select } from 'd3-selection';

function Waveform({ amplitude, frequency, height, width }) {

  const svgDOM = useRef(null);

  useEffect(() => {
    transformWave(svgDOM)
  }, [svgDOM])

  const transformWave = (svgDOM) => {
    let svg = select(svgDOM.current).select('svg');
    svg.style("width", width + 'px').style("height", height + 'px');

    let waves = [];
    for (let idx=0; idx<amplitude.length; idx++) {
      let wave = new Wave("sine", amplitude[idx], frequency[idx]).setSize(height, width);
      waves.push(wave);
    }
    console.log(waves);

    // let wave2 = new Wave("sine", 0.5, 5).setSize(height, width);
    // let wb = new WaveBuilder([wave, wave2]).setSize(height, width).animate(0.5);
    let wb = new WaveBuilder(waves).setSize(height, width).animate(0.5);
    svg.call(wb);
  }

  return (
    <div className={waveStyles.wave} ref={svgDOM}>
      <svg />
    </div>
  );
}

export default Waveform;
