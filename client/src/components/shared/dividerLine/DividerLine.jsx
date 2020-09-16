import React from 'react';
import styled from 'styled-components';

const VerticalLine = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  height: 75%;
  margin: ${({ small }) => (small ? '0.5rem' : '3rem')};
  width: 1px;

  ${({ small, theme }) => theme.mqLarge`
    margin: ${small ? '2px' : '1rem'};
  `}

  ${({ theme }) => theme.mqSmaller`
    margin: 0.5rem;
  `}
`;

const HorizontalLine = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 1px;
  margin: ${({ small }) => (small ? '0.5rem' : '3rem')};
  width: 75%;

  ${({ theme }) => theme.mqLarge`
    margin: 0.5rem;
  `}
`;

const DividerLine = ({ vertical, small }) => {
  return vertical ? (
    <VerticalLine small={small} />
  ) : (
    <HorizontalLine small={small} />
  );
};

export default DividerLine;
