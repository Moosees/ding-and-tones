import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DividerLine from '../../components/dividerLine/DividerLine';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';
import ScaleSearch from '../../components/scaleSearch/ScaleSearch';
import ScalesFound from '../../components/scalesFound/ScalesFound';
import { loadScale } from '../../redux/scale/scale.actions';
import { ScaleContainer, Section } from './scale.styles';

const Scale = ({ loadScale }) => {
  const { scaleId } = useParams();

  if (scaleId) {
    axios
      .get(`/scale/id/${scaleId}`)
      .then((res) => {
        if (res.status === 200) {
          const { name, label, layout, scale } = res.data;
          loadScale({
            name,
            label,
            layout,
            scaleSimple: scale.round,
          });
        }
      })
      .catch((error) => console.error(error));
  }

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
        <ScalesFound />
      </Section>
    </ScaleContainer>
  );
};

export default connect(null, { loadScale })(Scale);
