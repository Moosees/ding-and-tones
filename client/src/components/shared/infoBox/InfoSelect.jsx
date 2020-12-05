import React from 'react';
import Select from '../select/Select';
import { InfoContainer } from './infoBox.styles';

const InfoSelect = (props) => {
  return (
    <InfoContainer>
      <Select {...props} />
    </InfoContainer>
  );
};

export default InfoSelect;
