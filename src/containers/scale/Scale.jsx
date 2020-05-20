import React from 'react';
import styled from 'styled-components';
import DividerLine from '../../components/dividerLine/DividerLine';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';

const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 3rem;
`;

const Scale = () => {
  return (
    <ScaleContainer>
      <ScaleInfo />
      <DividerLine />
      <ScaleEdit />
    </ScaleContainer>
  );
};

export default Scale;
