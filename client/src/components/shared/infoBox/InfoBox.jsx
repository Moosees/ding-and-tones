import React from 'react';
import BtnIcon from '../button/Icon';
import { InfoContainer } from './infoBox.styles';

const InfoBox = ({ children, reverse, onEdit }) => (
  <InfoContainer reverse={reverse}>
    {children}
    {onEdit && (
      <BtnIcon title="Edit" icon="edit" onClick={onEdit} />
    )}
  </InfoContainer>
);

export default InfoBox;
