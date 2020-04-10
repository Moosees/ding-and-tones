import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Bar from '../bar/Bar';
import SongControls from '../songControls/SongControls';
import { Bars } from './song.styles';

const createOptions = (scale) => {
  const options = [];
  for (let i = 0; i < scale.length; ++i) {
    options.push(
      <option key={i} value={i}>
        {`${i}-${scale[i]}`}
      </option>
    );
  }
  return options;
};

const Song = ({ bars, scale }) => {
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    setOptions(createOptions(scale));
  }, [scale]);

  return (
    <div>
      <SongControls />
      <Bars>
        {bars.map((bar) => (
          <Bar key={bar.id} bar={bar} options={options} />
        ))}
      </Bars>
    </div>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  scale: scale.scaleSimple,
  bars: song.bars,
});

export default connect(mapStateToProps)(Song);
