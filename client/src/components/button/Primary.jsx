import React from 'react';
import { PrimaryButton } from './button.styles';

const BtnPrimary = ({ disabled, label, light, onClick }) => (
  <PrimaryButton disabled={disabled} light={light} onClick={onClick}>
    {label}
  </PrimaryButton>
);

export default BtnPrimary;
