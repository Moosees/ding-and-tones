import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Bar from '../bar/Bar';
import { Bars } from './songArrangement.styles';
import { createOptions } from './songArrangement.utils';

const SongArrangement = ({ arrangement, scale }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(createOptions(scale));
  }, [scale]);

  return (
    <Bars>
      {arrangement.map((bar) => (
        <Bar key={bar.arrangementId} bar={bar} options={options} />
      ))}
    </Bars>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  scale: scale.scaleSimple,
  arrangement: song.arrangement,
});

export default connect(mapStateToProps)(SongArrangement);
