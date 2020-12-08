import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { BarInfoContainer } from './barInfo.styles';

const BarControls = ({ barId, bars, beats }) => {
  const { metre } = bars[barId];

  return <BarInfoContainer>{metreList[metre].name}</BarInfoContainer>;
};

const mapStateToProps = ({ song }) => ({
  bars: song.bars,
});

export default connect(mapStateToProps)(BarControls);
