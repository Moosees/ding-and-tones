import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getScaleById } from '../../redux/scale/scale.actions';
import { startSearch } from '../../redux/search/search.actions';
import searchOptions from '../../redux/search/search.options';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Edit from './edit/Edit';
import Info from './info/Info';
import Results from './results/Results';
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = ({ getScaleById, scalesFetchTried, scaleUi, startSearch }) => {
  const { scaleId } = useParams();
  const { replace } = useHistory();

  useEffect(() => {
    if (!scaleId && scaleUi.scaleId) replace(`/scale/${scaleUi.scaleId}`);
  }, [replace, scaleId, scaleUi.scaleId]);

  useEffect(() => {
    if (scaleId && scaleUi.scaleId !== scaleId && !scaleUi.isFetching)
      getScaleById(scaleId);
  }, [getScaleById, scaleId, scaleUi.isFetching, scaleUi.scaleId]);

  useEffect(() => {
    if (!scalesFetchTried) startSearch(searchOptions.scales.latest);
  }, [scalesFetchTried, startSearch]);

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
        {!scalesFetchTried ? (
          <Loading />
        ) : (
          <>
            <Search />
            <Results />
          </>
        )}
      </Section>
    </ScaleContainer>
  );
};

const mapStateToProps = ({ scale, search }) => ({
  scaleUi: scale.ui,
  scalesFetchTried: search.scalesFetchTried,
});

export default connect(mapStateToProps, { getScaleById, startSearch })(Scale);
