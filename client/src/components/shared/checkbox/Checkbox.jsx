import React from 'react';
import { CheckboxInput, CheckboxLabel } from './checkbox.styles';

const Checkbox = ({ label, id, isSelected, handleChange }) => {
  return (
    <CheckboxLabel>
      <input
        type="checkbox"
        name={id}
        checked={isSelected}
        onChange={handleChange}
      />
      <CheckboxInput />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
