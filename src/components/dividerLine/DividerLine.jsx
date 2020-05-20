import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 1px;
  width: 75%;
`;

const DividerLine = () => <Line />;

export default DividerLine;
