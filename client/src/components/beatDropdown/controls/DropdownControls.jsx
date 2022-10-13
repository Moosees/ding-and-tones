import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpTopics } from '../../../assets/help';
import {
  toggleAutoMove,
  toggleMultiSelect,
} from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import Help from '../../shared/button/Help';
import BtnIcon from '../../shared/button/Icon';
import Checkbox from '../../shared/checkbox/Checkbox';

const DropdownControls = () => {
  const dispatch = useDispatch();
  const { autoMove, multiSelect } = useSelector(({ ui }) => ({
    autoMove: ui.autoMove,
    multiSelect: ui.multiSelect,
  }));

  return (
    <>
      <Buttons position="space-between">
        <BtnIcon icon="navigate_before" disabled={false} onClick={() => {}} />
        <Checkbox
          small
          checked={autoMove}
          label="Auto"
          onChange={() => dispatch(toggleAutoMove())}
        />
        <BtnIcon icon="navigate_next" disabled={false} onClick={() => {}} />
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
