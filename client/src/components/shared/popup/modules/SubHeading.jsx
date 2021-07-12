import React from 'react';
import styled from 'styled-components';

const SubHeadingWrapper = styled.h4`
  margin: 0.5rem 0;
`;

const SubHeading = ({ children }) => {
  return <SubHeadingWrapper>{children}</SubHeadingWrapper>;
};

export default SubHeading;
