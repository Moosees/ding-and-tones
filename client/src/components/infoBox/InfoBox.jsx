import React from 'react';
import { EditIcon, InfoContainer } from './infoBox.styles';

const InfoBox = ({ children, reverse, onEdit }) => (
  <InfoContainer reverse={reverse}>
    {children}
    {onEdit && (
      <EditIcon className="material-icons" onClick={onEdit}>
        edit
      </EditIcon>
    )}
  </InfoContainer>
);

export default InfoBox;
