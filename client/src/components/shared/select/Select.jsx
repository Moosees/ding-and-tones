import React from 'react';
import { useSelector } from 'react-redux';
import { SelectDropdown, SelectLabel } from './select.styles';
import { parseOptions } from './select.utils';

const Select = ({ label, large, handleChange, options, value }) => {
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

  return (
    <SelectLabel as="label" large={large} disabled={isSongPlaying}>
      <span>{label}</span>
      <SelectDropdown
        disabled={isSongPlaying}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {parseOptions(options)}
      </SelectDropdown>
      <i className="material-icons">keyboard_arrow_down</i>
    </SelectLabel>
  );
};

export default Select;
