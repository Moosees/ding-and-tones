import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Bar from '../bar/Bar';
import { Bars } from './song.styles';

// All possible sounds available on current scale
const createOptions = (scale) => {
  const options = [
    <option key={'X'} value={''}>
      Pause
    </option>,
    <option key={'T'} value={'T'}>
      Tak
    </option>,
  ];
  for (let i = 0; i < scale.length; ++i) {
    options.push(
      <option key={`${i}`} value={i}>
        {`${i}-${scale[i]}`}
      </option>
    );
  }
  return options;
};

const Song = ({ arrangement, scale }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(createOptions(scale));
  }, [scale]);

  return (
    <div>
      <Bars>
        {arrangement.map((bar) => (
          <Bar key={bar.arrangementId} bar={bar} options={options} />
        ))}
      </Bars>
    </div>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  scale: scale.scaleSimple,
  arrangement: song.arrangement,
});

export default connect(mapStateToProps)(Song);
