import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import DividerLine from '../../components/dividerLine/DividerLine';
import Loading from '../../components/loading/Loading';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';
import ScaleSearch from '../../components/scaleSearch/ScaleSearch';
import ScalesFound from '../../components/scalesFound/ScalesFound';
import { getScaleById } from '../../redux/scale/scale.actions';
import { ScaleContainer, Section } from './scale.styles';

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
            <ScaleInfo />
            <DividerLine />
            <ScaleEdit />
          </>
        )}
      </Section>
      <DividerLine vertical />
      <Section>
        <ScaleSearch />
        <ScalesFound />
      </Section>
    </ScaleContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  scaleUi: scale.ui,
});

export default connect(mapStateToProps, { getScaleById })(Scale);
