import React from 'react';
import { CheckboxInput, CheckboxLabel } from './checkbox.styles';

const Checkbox = ({
  checked,
  disabled,
  label,
  name,
  onChange,
  reverse,
  small,
}) => {
  return (
    <CheckboxLabel checked={checked} reverse={reverse} small={small}>
      <input
        disabled={disabled}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <CheckboxInput reverse={reverse} small={small} />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
