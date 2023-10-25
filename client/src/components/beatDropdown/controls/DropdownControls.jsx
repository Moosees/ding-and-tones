import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpTopics } from '../../../assets/help';
import {
  setCurrentDropdown,
  toggleAutoMove,
  toggleMultiSelect,
} from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import Help from '../../shared/button/Help';
import BtnIcon from '../../shared/button/Icon';
import Checkbox from '../../shared/checkbox/Checkbox';

const DropdownControls = ({ beatId }) => {
  const dispatch = useDispatch();
  const { allBeats, autoMove, multiSelect } = useSelector(({ ui }) => ui);

  return (
    <>
      <Buttons position="space-between">
        <BtnIcon
          icon="navigate_before"
          disabled={allBeats[beatId].prevBeatId === null}
          onClick={() =>
            dispatch(setCurrentDropdown(allBeats[beatId].prevBeatId))
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
          disabled={allBeats[beatId].nextBeatId === null}
          onClick={() =>
            dispatch(setCurrentDropdown(allBeats[beatId].nextBeatId))
          }
        />
      </Buttons>
      <Buttons position="space-around">
        <Checkbox
          small
          checked={multiSelect}
          label="Chord"
          onChange={() => dispatch(toggleMultiSelect())}
        />
        <Help topic={helpTopics.BEATS} />
      </Buttons>
    </>
  );
};

export default DropdownControls;
