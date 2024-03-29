import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { moveBarInArrangement } from '../../../redux/song/song.actions';
import BtnIcon from '../../shared/button/BtnIcon';
import { BarInfoContainer, DragGradient } from './barInfo.styles';

const BarInfo = ({ barId, barIndex }) => {
  const dispatch = useDispatch();
  const { arrangement, metre } = useSelector(({ song }) => ({
    arrangement: song.arrangement,
    metre: song.bars[barId].metre,
  }));

  return (
    <BarInfoContainer>
      <BtnIcon
        icon="navigate_before"
        disabled={barIndex === 0}
        onClick={() => dispatch(moveBarInArrangement(barIndex, barIndex - 1))}
      />
      <DragGradient>
        Metre: {metreList[metre].nameShort} - Bar: {barIndex + 1}/
        {arrangement.length}
      </DragGradient>
      <BtnIcon
        icon="navigate_next"
        disabled={barIndex === arrangement.length - 1}
        onClick={() => dispatch(moveBarInArrangement(barIndex, barIndex + 1))}
      />
    </BarInfoContainer>
  );
};

export default BarInfo;
