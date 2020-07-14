import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../assets/metre';
import { InfoContainer } from './barInfo.styles';

const BarControls = ({ barId, bars, beats }) => {
  const { metre } = bars[barId];

  return <InfoContainer>{metreList[metre].name}</InfoContainer>;
};

const mapStateToProps = ({ song }) => ({
  bars: song.bars,
});

export default connect(mapStateToProps)(BarControls);
