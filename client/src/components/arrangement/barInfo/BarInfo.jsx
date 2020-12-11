import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import BtnIcon from '../../shared/button/Icon';
import { BarInfoContainer, DragGradient } from './barInfo.styles';

const BarInfo = ({
  arrangement,
  barId,
  bars,
  beats,
  dragRef,
  index,
  isDragging,
  isEditingSong,
  isSongPlaying,
}) => {
  const { metre } = bars[barId];

  return (
    <BarInfoContainer>
      <BtnIcon icon="navigate_before" />
      <DragGradient
        disabled={isSongPlaying}
        ref={dragRef}
        isDragging={isDragging}
      >
        Metre: {metreList[metre].nameShort} - Bar: {index + 1}/
        {arrangement.length}
      </DragGradient>
      <BtnIcon icon="navigate_next" />
    </BarInfoContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  arrangement: song.arrangement,
  bars: song.bars,
  isEditingSong: ui.isEditingSong,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(BarInfo);
