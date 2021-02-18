import React from 'react';
import styled from 'styled-components';

const ScrollDiv = styled.div`
  max-height: 100%;
  overflow-y: auto;
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollBox = ({ children }) => {
  return (
    <ScrollDiv>
      <ContentDiv>{children}</ContentDiv>
    </ScrollDiv>
  );
};

export default ScrollBox;
