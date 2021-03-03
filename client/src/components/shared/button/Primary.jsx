import React from 'react';
import Checkbox from '../checkbox/Checkbox';
import { PrimaryButton } from './button.styles';

const BtnPrimary = ({ checkbox, checked, disabled, label, light, onClick }) => (
  <PrimaryButton disabled={disabled} light={light} onClick={onClick}>
    {checkbox ? (
      <Checkbox small label={label} checked={checked} onChange={onClick} />
    ) : (
      label
    )}
  </PrimaryButton>
);

export default BtnPrimary;
