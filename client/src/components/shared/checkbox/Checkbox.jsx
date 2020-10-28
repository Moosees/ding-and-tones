import React from 'react';
import { CheckboxInput, CheckboxLabel } from './checkbox.styles';

const Checkbox = ({ onChange, name, checked, label, reverse }) => {
  return (
    <CheckboxLabel checked={checked} reverse={reverse}>
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
