import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  height: 100%;
  justify-content: center;
`;

const Loading = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};

export default Loading;
