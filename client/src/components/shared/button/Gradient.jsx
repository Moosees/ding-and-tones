import React from 'react';
import { GradientButton } from './button.styles';

const BtnGradient = ({ disabled, label, onClick }) => (
  <GradientButton as="button" disabled={disabled} onClick={onClick}>
    {label}
  </GradientButton>
);

export default BtnGradient;
