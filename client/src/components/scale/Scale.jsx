import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getScaleById } from '../../redux/scale/scale.actions';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Edit from './edit/Edit';
import Info from './info/Info';
import Results from './results/Results';
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = ({ getScaleById, scaleUi }) => {
  const { scaleId } = useParams();
  const { replace } = useHistory();

  useEffect(() => {
    if (!scaleId && scaleUi.scaleId) replace(`/scale/${scaleUi.scaleId}`);
  }, [replace, scaleId, scaleUi.scaleId]);

  useEffect(() => {
    if (scaleId && scaleUi.scaleId !== scaleId && !scaleUi.isFetching)
      getScaleById(scaleId);
  }, [getScaleById, scaleId, scaleUi.isFetching, scaleUi.scaleId]);

  return (
    <ScaleContainer>
      <Section>
        {scaleUi.isFetching ? (
          <Loading />
        ) : (
          <>
            <Info />
            <DividerLine />
            <Edit />
          </>
        )}
      </Section>
      <DividerLine vertical />
      <Section>
        <Search />
        <Results />
      </Section>
    </ScaleContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  scaleUi: scale.ui,
});

export default connect(mapStateToProps, { getScaleById })(Scale);
