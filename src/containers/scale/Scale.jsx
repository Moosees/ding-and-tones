import React from 'react';
import DividerLine from '../../components/dividerLine/DividerLine';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';
import ScaleSearch from '../../components/scaleSearch/ScaleSearch';
import { LeftSection, ScaleContainer } from './scale.styles';

const Scale = () => {
  return (
    <ScaleContainer>
      <LeftSection>
        <ScaleInfo />
        <DividerLine />
        <ScaleEdit />
      </LeftSection>
      <DividerLine vertical />
      <ScaleSearch />
    </ScaleContainer>
  );
};

export default Scale;
