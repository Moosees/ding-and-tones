import React from 'react';
import DividerLine from '../../components/dividerLine/DividerLine';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';
import ScaleSearch from '../../components/scaleSearch/ScaleSearch';
import ScalesFound from '../../components/scalesFound/ScalesFound';
import { ScaleContainer, Section } from './scale.styles';

const Scale = () => {
  return (
    <ScaleContainer>
      <Section>
        <ScaleInfo />
        <DividerLine />
        <ScaleEdit />
      </Section>
      <DividerLine vertical />
      <Section>
        <ScaleSearch />
        <DividerLine />
        <ScalesFound />
      </Section>
    </ScaleContainer>
  );
};

export default Scale;
