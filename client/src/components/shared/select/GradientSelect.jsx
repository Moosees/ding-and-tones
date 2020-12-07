import React from 'react';
import { GradientButton } from '../button/button.styles';
import Select from './Select';

const GradientSelect = (props) => {
  return (
    <GradientButton as="div">
      <Select {...props} />
    </GradientButton>
  );
};

export default GradientSelect;
