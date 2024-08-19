import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpTopics } from '../../../assets/help';
import {
  setCurrentDropdown,
  toggleMultiSelect,
} from '../../../redux/song/song.slice';
import BtnHelp from '../../shared/button/BtnHelp';
import BtnIcon from '../../shared/button/BtnIcon';
import Buttons from '../../shared/button/Buttons';
import Checkbox from '../../shared/checkbox/Checkbox';

const DropdownControls = () => {
  const dispatch = useDispatch();
  const multiSelect = useSelector(({ song }) => song.ui.multiSelect);

  return (
    <Buttons position="space-between">
      <BtnIcon
        icon="highlight_off_outlined"
        onClick={() => dispatch(setCurrentDropdown({ beatId: null }))}
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
