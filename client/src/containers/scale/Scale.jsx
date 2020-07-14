import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DividerLine from '../../components/dividerLine/DividerLine';
import ScaleEdit from '../../components/scaleEdit/ScaleEdit';
import ScaleInfo from '../../components/scaleInfo/ScaleInfo';
import ScaleSearch from '../../components/scaleSearch/ScaleSearch';
import ScalesFound from '../../components/scalesFound/ScalesFound';
import { getScaleById } from '../../redux/scale/scale.actions';
import { ScaleContainer, Section } from './scale.styles';

const Scale = ({ getScaleById, isFetching }) => {
  const { scaleId } = useParams();

  useEffect(() => {
    if (scaleId) getScaleById(scaleId);
  }, [getScaleById, scaleId]);

  return (
    <ScaleContainer>
      <Section>
        {isFetching ? (
          <div>Loading...</div>
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
  isFetching: scale.isFetching,
});

export default connect(mapStateToProps, { getScaleById })(Scale);
