import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setOptions } from '../../redux/ui/ui.actions';
import Bar from '../bar/Bar';
import { Bars } from './songArrangement.styles';
import { createOptions } from './songArrangement.utils';

const SongArrangement = ({ arrangement, scale, setOptions }) => {
  useEffect(() => {
    setOptions(createOptions(scale));
  }, [scale, setOptions]);

  return (
    <Bars>
      {arrangement.map((bar) => (
        <Bar key={bar} barId={bar} />
      ))}
    </Bars>
  );
};

const mapStateToProps = ({ scale, bars }) => ({
  scale: scale.scaleSimple,
  arrangement: bars.arrangement,
});

export default connect(mapStateToProps, { setOptions })(SongArrangement);
