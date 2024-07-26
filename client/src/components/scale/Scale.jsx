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
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = () => {
  const dispatch = useDispatch();
  const {
    scaleIdLocal,
    hasChanges,
    isDeleting,
    isFetching,
    isSaving,
    isSearching,
    scalesFetchTried,
  } = useSelector(({ scale, search }) => ({
    scaleIdLocal: scale.ui.scaleId,
    hasChanges: scale.ui.hasChanges,
    isDeleting: scale.ui.isDeleting,
    isFetching: scale.ui.isFetching,
    isSaving: scale.ui.isSaving,
    isSearching: search.isSearching,
    scalesFetchTried: search.scalesFetchTried,
  }));

  const { scaleId } = useParams();
  const navigate = useNavigate();
  const { isMobile } = useDimensions();

  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (isWorking || !hasChanges) return;

    navigate('/scale', { replace: true });
  }, [hasChanges, isWorking, navigate]);

  useEffect(() => {
    if (isWorking || hasChanges) return;

    if (!scaleId && scaleIdLocal) {
      navigate(`/scale/${scaleIdLocal}`, { replace: true });
    }
  }, [hasChanges, isWorking, navigate, scaleId, scaleIdLocal]);

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
          <Search />
        )}
      </Section>
    </ScaleContainer>
  );
};

export default Scale;
