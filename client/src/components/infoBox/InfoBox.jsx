import React from 'react';
import { InfoContainer } from './infoBox.styles';

const InfoBox = ({ children, reverse }) => (
  <InfoContainer reverse={reverse}>{children}</InfoContainer>
);

export default InfoBox;
