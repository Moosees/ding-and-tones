import React from 'react';
import styled from 'styled-components';

const ParagraphWrapper = styled.p`
  margin: 1rem 0;
`;

const Paragraph = ({ children }) => {
  return <ParagraphWrapper>{children}</ParagraphWrapper>;
};

export default Paragraph;
