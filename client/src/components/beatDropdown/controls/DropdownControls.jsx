import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpTopics } from '../../../assets/help';
import {
  setCurrentDropdown,
  toggleMultiSelect,
} from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import Help from '../../shared/button/Help';
import BtnIcon from '../../shared/button/Icon';
import Checkbox from '../../shared/checkbox/Checkbox';

const DropdownControls = ({ beatId }) => {
  const dispatch = useDispatch();
  const { multiSelect } = useSelector(({ ui }) => ui);

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
      <Help topic={helpTopics.BEATS} />
    </Buttons>
  );
};

export default DropdownControls;
