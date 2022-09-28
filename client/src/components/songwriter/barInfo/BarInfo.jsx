import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { moveBarInArrangement } from '../../../redux/song/song.actions';
import BtnIcon from '../../shared/button/Icon';
import { BarInfoContainer, DragGradient } from './barInfo.styles';

const BarInfo = ({
  arrangement,
  barId,
  barIndex,
  bars,
  beats,
  moveBarInArrangement,
  isSongPlaying,
}) => {
  const { metre } = bars[barId];

  return (
    <BarInfoContainer>
      <BtnIcon
        icon="navigate_before"
        disabled={barIndex === 0}
        onClick={() => moveBarInArrangement(barIndex, barIndex - 1)}
      />
      <DragGradient>
        Metre: {metreList[metre].nameShort} - Bar: {barIndex + 1}/
        {arrangement.length}
      </DragGradient>
      <BtnIcon
        icon="navigate_next"
        disabled={barIndex === arrangement.length - 1}
        onClick={() => moveBarInArrangement(barIndex, barIndex + 1)}
      />
    </BarInfoContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  arrangement: song.arrangement,
  bars: song.bars,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { moveBarInArrangement })(BarInfo);
