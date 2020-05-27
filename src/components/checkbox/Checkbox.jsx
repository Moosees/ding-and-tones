import React from 'react';
import { CheckboxLabel, CheckboxInput } from './checkbox.styles';

const Checkbox = ({ label }) => {
  return (
    <CheckboxLabel>
      <input type="checkbox" />
      <CheckboxInput />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
