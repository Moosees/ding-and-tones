import React from 'react';
import BtnIcon from '../button/BtnIcon';
import { InfoLayout } from './layout.styles';

const InfoBox = ({ children, label, large, reverse, onEdit }) => (
  <InfoLayout reverse={reverse} large={large}>
    {label && <span>{label}</span>}
    {children}
    {onEdit && <BtnIcon title="Edit" icon="edit" onClick={onEdit} />}
  </InfoLayout>
);

export default InfoBox;
