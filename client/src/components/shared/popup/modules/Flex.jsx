import React from 'react';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Flex = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};

export default Flex;
