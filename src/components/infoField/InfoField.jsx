import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  flex: 1 0 3rem;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  margin: 0.5rem;
  min-height: 3.5rem;
  padding: 0 0.5rem;
`;

const Edit = styled.span`
  border: 1px solid #000;
  border-radius: 100px;
  padding: 1rem;
`;

const InfoField = ({ label, reverse, onEdit }) => (
  <InfoContainer reverse={reverse}>
    {label}
    {onEdit && <Edit />}
  </InfoContainer>
);

export default InfoField;
