import React from 'react';
import BtnIcon from '../button/Icon';
import { InfoLayout } from './layout.styles';

const InfoBox = ({ children, large, reverse, onEdit }) => (
  <InfoLayout reverse={reverse} large={large}>
    {children}
    {onEdit && <BtnIcon title="Edit" icon="edit" onClick={onEdit} />}
  </InfoLayout>
);

export default InfoBox;
