import React from 'react';
import { CheckboxInput, CheckboxLabel } from './checkbox.styles';

const Checkbox = ({ onChange, name, checked, label, reverse, style }) => {
  return (
    <CheckboxLabel reverse={reverse} style={style}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <CheckboxInput reverse={reverse} />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
