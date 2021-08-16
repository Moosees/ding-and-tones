import React from 'react';
import styled from 'styled-components';

const ScrollDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
`;

const ScrollBox = ({ children }) => {
  return <ScrollDiv>{children}</ScrollDiv>;
};

export default ScrollBox;
