import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useDimensions from '../../hooks/useDimensions';
import { useLazyGetScaleByIdQuery } from '../../redux/scale/scale.api';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Edit from './edit/Edit';
import Info from './info/Info';
import { ScaleContainer, Section } from './scale.styles';
import Search from './search/Search';

const Scale = () => {
  const localScaleId = useSelector(({ scale }) => scale.ui.scaleId);
  const hasChanges = useSelector(({ scale }) => scale.ui.hasChanges);
  const fetchSessionTried = useSelector(({ user }) => user.fetchSessionTried);

  const { scaleId } = useParams();
  const navigate = useNavigate();
  const { isMobile } = useDimensions();

  const [getScaleById, { isLoading }] = useLazyGetScaleByIdQuery();

  useEffect(() => {
    if (scaleId && !localScaleId && !isLoading && !fetchSessionTried) {
      console.log('FIRST SCALE FETCH');
      getScaleById({ scaleId });
    } else if (!isLoading && scaleId && hasChanges) {
      console.log('CLEARING SCALE URL');
      navigate('/scale', { replace: true });
    } else if (!hasChanges && localScaleId && localScaleId !== scaleId) {
      console.log('UPDATING SCALE URL', { localScaleId, scaleId });
      navigate(`/scale/${localScaleId}`, { replace: true });
    }
  }, [
    fetchSessionTried,
    getScaleById,
    hasChanges,
    isLoading,
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
