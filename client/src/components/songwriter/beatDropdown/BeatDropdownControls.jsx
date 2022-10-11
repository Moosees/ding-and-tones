import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { helpTopics } from '../../../assets/help';
import { toggleMultiSelect } from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import Help from '../../shared/button/Help';
import Checkbox from '../../shared/checkbox/Checkbox';

const BeatDropdownControls = () => {
  const dispatch = useDispatch();
  const { multiSelect } = useSelector(({ ui }) => ({
    multiSelect: ui.multiSelect,
  }));

  return (
    <Buttons position="space-around">
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

export default BeatDropdownControls;
