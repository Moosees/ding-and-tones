import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useDimensions from '../../hooks/useDimensions';
import { useLazyGetScaleByIdQuery } from '../../redux/api/api.slice';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Edit from './edit/Edit';
import Info from './info/Info';
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = () => {
  const localScaleId = useSelector(({ scale }) => scale.ui.scaleId);
  const hasChanges = useSelector(({ scale }) => scale.ui.hasChanges);

  const { scaleId } = useParams();
  const navigate = useNavigate();
  const { isMobile } = useDimensions();

  const [getScaleById, { isLoading, isFetching, isUninitialized, isError }] =
    useLazyGetScaleByIdQuery();

  useEffect(() => {
    if (isLoading || isFetching) return;
    if (localScaleId && scaleId && localScaleId === scaleId) return;

    if (isUninitialized && scaleId && !localScaleId) {
      getScaleById({ scaleId });
    } else if (scaleId && (hasChanges || isError)) {
      navigate('/scale', { replace: true });
    } else if (localScaleId && !hasChanges) {
      navigate(`/scale/${localScaleId}`, { replace: true });
    }
  }, [
    getScaleById,
    hasChanges,
    isError,
    isFetching,
    isLoading,
    isUninitialized,
    localScaleId,
    navigate,
    scaleId,
  ]);

  return (
    <ScaleContainer>
      <Section>
        {isLoading ? (
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
        <Search />
      </Section>
    </ScaleContainer>
  );
};

export default Scale;
