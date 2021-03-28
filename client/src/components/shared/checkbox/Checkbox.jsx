import React from 'react';
import {
  CheckboxContainer,
  CheckboxIcon,
  CheckboxLabel,
} from './checkbox.styles';

const Checkbox = ({ checked, disabled, label, onChange, reverse, small }) => {
  return (
    <CheckboxContainer disabled={disabled} onClick={onChange} reverse={reverse}>
      <CheckboxIcon checked={checked} small={small} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
