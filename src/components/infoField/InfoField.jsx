import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  flex: 1 0;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const InfoField = ({ label }) => <InfoContainer>{label}</InfoContainer>;

export default InfoField;
