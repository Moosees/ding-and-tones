import React from 'react';
import { useSelector } from 'react-redux';
import { SelectDropdown, SelectLabelSmall } from './select.styles';
import { parseOptions } from './select.utils';

const SelectSmall = ({ handleChange, options, value }) => {
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

  return (
    <SelectLabelSmall disabled={isSongPlaying}>
      <SelectDropdown
        disabled={isSongPlaying}
        value={value}
        // labelWidth={20}
        onChange={(e) => handleChange(e.target.value)}
      >
        {parseOptions(options)}
      </SelectDropdown>
      <i className="material-icons">keyboard_arrow_down</i>
    </SelectLabelSmall>
  );
};

export default SelectSmall;
