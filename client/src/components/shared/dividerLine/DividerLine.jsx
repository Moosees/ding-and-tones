import React from 'react';
import styled from 'styled-components';

const VerticalLine = styled.div`
  align-self: center;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  height: 75%;
  margin: ${({ small }) => (small ? '0.5rem' : '3rem')};
  width: 1px;

  ${({ small, theme }) => theme.mqW1300`
    margin: ${small ? '2px' : '1rem'};
  `}

  ${({ theme }) => theme.mqW850`
    margin: 0.5rem;
  `}
`;

const HorizontalLine = styled.div`
  align-self: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 1px;
  margin: ${({ small }) => (small ? '0.5rem' : '3rem')};
  width: 75%;

  ${({ theme }) => theme.mqW1300`
    margin: 0.5rem;
  `}

  ${({ theme }) => theme.mqW850`
    margin: 1px;
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
