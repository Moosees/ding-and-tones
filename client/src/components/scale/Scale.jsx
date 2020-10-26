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

  const { isDeleting, isFetching, isSaving } = scaleUi;
  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (!scaleId && scaleUi.scaleId && !isWorking) {
      replace(`/scale/${scaleUi.scaleId}`);
    }
  }, [isWorking, replace, scaleId, scaleUi.scaleId]);

  useEffect(() => {
    if (scaleId && scaleUi.scaleId !== scaleId && !isWorking)
      getScaleById(scaleId);
  }, [isWorking, getScaleById, scaleId, scaleUi.scaleId]);

  useEffect(() => {
    if (!scalesFetchTried && !isWorking)
      startSearch(searchOptions.scales.latest);
  }, [isWorking, scalesFetchTried, startSearch]);

  return (
    <ScaleContainer>
      <Section>
        {isFetching ? (
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
