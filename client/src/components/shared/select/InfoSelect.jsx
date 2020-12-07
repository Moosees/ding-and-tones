import React from 'react';
import Select from './Select';
import { InfoContainer } from '../infoBox/infoBox.styles';

const InfoSelect = (props) => {
  return (
    <InfoContainer>
      <Select {...props} />
    </InfoContainer>
  );
};

export default InfoSelect;
