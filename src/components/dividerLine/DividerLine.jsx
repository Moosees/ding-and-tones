import React from 'react';
import styled from 'styled-components';

const VerticalLine = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  height: 75%;
  margin: 0.5rem 3rem;
  width: 1px;
`;

const HorizontalLine = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 1px;
  margin: 3rem 0.5rem;
  width: 75%;
`;

const DividerLine = ({ vertical = false }) => {
  return vertical ? <VerticalLine /> : <HorizontalLine />;
};

export default DividerLine;
