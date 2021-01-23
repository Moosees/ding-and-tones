import React from 'react';
import styled from 'styled-components';

const ScrollDiv = styled.div`
  max-height: 100%;
  max-width: 100%;
  overflow-y: auto;
`;

const ContentDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ScrollBox = ({ children }) => {
  return (
    <ScrollDiv>
      <ContentDiv>{children}</ContentDiv>
    </ScrollDiv>
  );
};

export default ScrollBox;
