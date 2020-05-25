import React from 'react';
import styled from 'styled-components';
import DividerLine from '../../components/dividerLine/DividerLine';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';
import ScaleSearch from '../../components/scaleSearch/ScaleSearch';

const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  width: 100%;
`;

const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 3rem;
  overflow: auto;
`;

const Scale = () => {
  return (
    <ScaleContainer>
      <TopSection>
        <ScaleInfo />
        <ScaleSearch />
      </TopSection>
      <DividerLine />
      <ScaleEdit />
    </ScaleContainer>
  );
};

export default Scale;
