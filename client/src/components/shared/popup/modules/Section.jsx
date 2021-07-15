import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin: 1rem 0;
`;

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;
