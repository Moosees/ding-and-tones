import React from 'react';
import styled from 'styled-components';
import DividerLine from '../../components/dividerLine/DividerLine';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';
import ScaleSearch from '../../components/scaleSearch/ScaleSearch';

const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 3rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
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
