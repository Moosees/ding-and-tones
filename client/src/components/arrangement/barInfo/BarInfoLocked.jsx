import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { BarInfoContainer } from './barInfo.styles';

const getBarNumber = (index) => (index % 4 === 0 ? `${index + 1}` : '');

const BarInfoLocked = ({ barId, bars, beats, index }) => {
  const { metre } = bars[barId];

  return (
    <BarInfoContainer>
      <span>{metreList[metre].nameShort}</span>
      <span>{getBarNumber(index)}</span>
    </BarInfoContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
});

export default connect(mapStateToProps)(BarInfoLocked);
