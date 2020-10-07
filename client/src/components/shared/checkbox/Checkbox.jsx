import React from 'react';
import { CheckboxInput, CheckboxLabel } from './checkbox.styles';

const Checkbox = ({ handleChange, id, isSelected, label, reverse, style }) => {
  return (
    <CheckboxLabel reverse={reverse} style={style}>
      <input
        type="checkbox"
        name={id}
        checked={isSelected}
        onChange={handleChange}
      />
      <CheckboxInput reverse={reverse} />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
