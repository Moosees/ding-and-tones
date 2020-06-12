import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setOptions } from '../../redux/ui/ui.actions';
import Bar from '../bar/Bar';
import { Bars } from './songArrangement.styles';
import { createOptions } from './songArrangement.utils';

const SongArrangement = ({ arrangement, bars, barData, scale, setOptions }) => {
  useEffect(() => {
    setOptions(createOptions(scale));
  }, [scale, setOptions]);

  return (
    <Bars>
      {arrangement.map((bar) => (
        <Bar
          key={bar}
          bar={bar}
          measure={bars[bar]}
          subdivision={barData[bar].subdivision}
        />
      ))}
    </Bars>
  );
};

const mapStateToProps = ({ scale, bars }) => ({
  scale: scale.scaleSimple,
  arrangement: bars.order,
  bars: bars.measure,
  barData: bars.data,
});

export default connect(mapStateToProps, { setOptions })(SongArrangement);
