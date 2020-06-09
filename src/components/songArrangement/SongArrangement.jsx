import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setOptions } from '../../redux/ui/ui.actions';
import Bar from '../bar/Bar';
import { Bars } from './songArrangement.styles';
import { createOptions } from './songArrangement.utils';

const SongArrangement = ({ bars, scale, setOptions }) => {
  useEffect(() => {
    setOptions(createOptions(scale));
  }, [scale, setOptions]);

  return (
    <Bars>
      {bars.map((bar) => (
        <Bar key={bar.barId} bar={bar} />
      ))}
    </Bars>
  );
};

const mapStateToProps = ({ scale, bars }) => ({
  scale: scale.scaleSimple,
  bars,
});

export default connect(mapStateToProps, { setOptions })(SongArrangement);
