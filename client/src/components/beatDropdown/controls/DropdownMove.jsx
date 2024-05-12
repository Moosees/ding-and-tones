import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentDropdown,
  toggleAutoMove,
} from '../../../redux/song/song.slice';
import BtnIcon from '../../shared/button/BtnIcon';
import Buttons from '../../shared/button/Buttons';
import Checkbox from '../../shared/checkbox/Checkbox';

const DropdownMove = ({ beatId }) => {
  const dispatch = useDispatch();
  const autoMoveOrder = useSelector(({ song }) => song.autoMoveOrder);
  const autoMove = useSelector(({ song }) => song.ui.autoMove);

  return (
    <Buttons position="space-between">
      <BtnIcon
        icon="navigate_before"
        disabled={autoMoveOrder[beatId].prevBeatId === null}
        onClick={() =>
          dispatch(
            setCurrentDropdown({ beatId: autoMoveOrder[beatId].prevBeatId })
          )
        }
      />
      <Checkbox
        small
        checked={autoMove}
        label="Auto"
        onChange={() => dispatch(toggleAutoMove())}
      />
      <BtnIcon
        icon="navigate_next"
        disabled={autoMoveOrder[beatId].nextBeatId === null}
        onClick={() =>
          dispatch(
            setCurrentDropdown({ beatId: autoMoveOrder[beatId].nextBeatId })
          )
        }
      />
    </Buttons>
  );
};

export default DropdownMove;
