import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useDimensions from '../../hooks/useDimensions';
import { startSearch } from '../../redux/search/search.actions';
import searchOptions from '../../redux/search/search.options';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Edit from './edit/Edit';
import Info from './info/Info';
import Results from './results/Results';
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = () => {
  const dispatch = useDispatch();
  const { scaleUi, isSearching, scalesFetchTried } = useSelector(
    ({ scale, search }) => ({
      scaleUi: scale.ui,
      isSearching: search.isSearching,
      scalesFetchTried: search.scalesFetchTried,
    })
  );

  const { scaleId } = useParams();
  const navigate = useNavigate();
  const { isMobile } = useDimensions();

  const { hasChanges, isDeleting, isFetching, isSaving } = scaleUi;
  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (isWorking || !hasChanges) return;

    navigate('/scale', { replace: true });
  }, [hasChanges, isWorking, navigate]);

  useEffect(() => {
    if (isWorking || hasChanges) return;

    if (!scaleId && scaleUi.scaleId) {
      navigate(`/scale/${scaleUi.scaleId}`, { replace: true });
    }
  }, [hasChanges, isWorking, navigate, scaleId, scaleUi.scaleId]);

  useEffect(() => {
    if (scalesFetchTried || isSearching || isWorking) return;

    dispatch(startSearch(searchOptions.scales.latest));
  }, [dispatch, isSearching, isWorking, scalesFetchTried]);

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
      {!isMobile && <DividerLine vertical />}
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

export default Scale;
