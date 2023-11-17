import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpTopics } from '../../../assets/help';
import {
  setCurrentDropdown,
  toggleMultiSelect,
} from '../../../redux/ui/ui.actions';
import BtnHelp from '../../shared/button/BtnHelp';
import Buttons from '../../shared/button/Buttons';
import BtnIcon from '../../shared/button/BtnIcon';
import Checkbox from '../../shared/checkbox/Checkbox';

const DropdownControls = ({ beatId }) => {
  const dispatch = useDispatch();
  const multiSelect = useSelector(({ ui }) => ui.multiSelect);

  return (
    <Buttons position="space-between">
      <BtnIcon
        icon="highlight_off_outlined"
        onClick={() => dispatch(setCurrentDropdown(null))}
      />
      <Checkbox
        small
        checked={multiSelect}
        label="Chord"
        onChange={() => dispatch(toggleMultiSelect())}
      />
      <BtnHelp topic={helpTopics.BEATS} />
    </Buttons>
  );
};

export default DropdownControls;
