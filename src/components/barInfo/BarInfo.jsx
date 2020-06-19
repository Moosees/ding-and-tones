import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../metre.data';
import { InfoContainer } from './barInfo.styles';

const BarControls = ({ barId, bars, beats }) => {
  const { metre } = bars[barId];

  return <InfoContainer>{metreList[metre].name}</InfoContainer>;
};

const mapStateToProps = ({ bars }) => ({
  bars: bars.bars,
});

export default connect(mapStateToProps)(BarControls);
