import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  flex: 1 0 3rem;
  margin: 0.5rem;
  min-height: 3.5rem;
  padding: 0 0.5rem;
`;

const InfoField = ({ label }) => <InfoContainer>{label}</InfoContainer>;

export default InfoField;
