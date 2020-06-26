import React from 'react';
import { EditIcon, InfoContainer } from './infoBox.styles';

const InfoBox = ({ children, reverse, onClick }) => (
  <InfoContainer reverse={reverse}>
    {children}
    {onClick && (
      <EditIcon className="material-icons" onClick={onClick}>
        edit
      </EditIcon>
    )}
  </InfoContainer>
);

export default InfoBox;
