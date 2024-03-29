import React from 'react';
import { PrimaryButton } from './button.styles';

const BtnPrimary = ({ disabled, label, light, onClick }) => (
  <PrimaryButton disabled={disabled} onClick={onClick} $light={light}>
    {label}
  </PrimaryButton>
);

export default BtnPrimary;
