import React from 'react';
import { PrimaryButton } from '../button/button.styles';
import {
  CheckboxContainer,
  CheckboxIcon,
  CheckboxLabel,
} from './checkbox.styles';

const Checkbox = ({
  asBtn,
  checked,
  disabled,
  label,
  light,
  onChange,
  reverse,
  small,
}) => {
  const Component = asBtn ? PrimaryButton : CheckboxContainer;

  return (
    <Component
      light={light}
      disabled={disabled}
      onClick={onChange}
      reverse={reverse}
    >
      <CheckboxIcon checked={checked} small={small || asBtn} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </Component>
  );
};

export default Checkbox;
