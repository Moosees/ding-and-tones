import React from 'react';
import BtnIcon from '../button/Icon';
import { InfoLayout } from './layout.styles';

const InfoBox = ({ children, reverse, onEdit }) => (
  <InfoLayout reverse={reverse}>
    {children}
    {onEdit && <BtnIcon title="Edit" icon="edit" onClick={onEdit} />}
  </InfoLayout>
);

export default InfoBox;
