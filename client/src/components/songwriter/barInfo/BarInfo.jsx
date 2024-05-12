import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { metreList } from '../../../assets/metre';
import { moveBarToIndex } from '../../../redux/song/song.slice';
import BtnIcon from '../../shared/button/BtnIcon';
import { BarInfoContainer, DragGradient } from './barInfo.styles';

const BarInfo = ({ barId, barIndex }) => {
  const dispatch = useDispatch();
  const arrangement = useSelector(({ song }) => song.arrangement);
  const metre = useSelector(({ song }) => song.bars[barId].metre);

  return (
    <BarInfoContainer>
      <BtnIcon
        icon="navigate_before"
        disabled={barIndex === 0}
        onClick={() =>
          dispatch(moveBarToIndex({ barIndex, targetIndex: barIndex - 1 }))
        }
      />
      <DragGradient>
        Metre: {metreList[metre].nameShort} - Bar: {barIndex + 1}/
        {arrangement.length}
      </DragGradient>
      <BtnIcon
        icon="navigate_next"
        disabled={barIndex === arrangement.length - 1}
        onClick={() =>
          dispatch(moveBarToIndex({ barIndex, targetIndex: barIndex + 1 }))
        }
      />
    </BarInfoContainer>
  );
};

export default BarInfo;
