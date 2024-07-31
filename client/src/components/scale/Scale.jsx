import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useDimensions from '../../hooks/useDimensions';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Edit from './edit/Edit';
import Info from './info/Info';
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = () => {
  const {
    scaleIdLocal,
    hasChanges,
    isDeleting,
    isFetching,
    isSaving,
    scalesFetchTried,
  } = useSelector(({ scale, search }) => ({
    scaleIdLocal: scale.ui.scaleId,
    hasChanges: scale.ui.hasChanges,
    isDeleting: scale.ui.isDeleting,
    isFetching: scale.ui.isFetching,
    isSaving: scale.ui.isSaving,
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
      <Section>{!scalesFetchTried ? <Loading /> : <Search />}</Section>
    </ScaleContainer>
  );
};

export default Scale;
