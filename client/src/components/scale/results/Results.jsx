import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteScaleById, loadScale } from '../../../redux/scale/scale.actions';
import BtnIcon from '../../shared/button/Icon';
import Confirmation from '../../shared/popup/Confirmation';
import ScrollBox from '../../shared/scrollBox/ScrollBox';
import {
  ScaleContainer,
  ScaleLabel,
  ScaleList,
  ScaleNotes,
  TextContainer,
} from './results.styles';

const Results = ({
  deleteScaleById,
  isDeleting,
  isSearching,
  isSignedIn,
  loadScale,
  scales,
}) => {
  const { push } = useHistory();

  const getScales = () =>
    scales.map((scale, i) => {
      const {
        scaleId,
        isOwner,
        info: { name, label, rootName },
      } = scale;

      const handleDeleteScale = () => {
        deleteScaleById(scaleId);
        push('/scale');
      };

      const handleLoadScale = () => {
        loadScale(scale);
        push('/scale');
      };

      return (
        <ScaleContainer key={i} isOwner={isOwner && isSignedIn}>
          {isOwner && isSignedIn && (
            <Confirmation
              onConfirm={handleDeleteScale}
              label={`Are you sure you want to delete "${rootName} ${name}"`}
            >
              <BtnIcon
                disabled={isDeleting || isSearching}
                icon="delete"
                title={`Delete "${rootName} ${name}"`}
                position="right"
              />
            </Confirmation>
          )}
          <TextContainer onClick={handleLoadScale}>
            <ScaleLabel>{`${rootName} ${name}`}</ScaleLabel>
            <ScaleNotes>{label}</ScaleNotes>
          </TextContainer>
        </ScaleContainer>
      );
    });

  return (
    <ScaleList>
      <ScrollBox>{scales && getScales()}</ScrollBox>
    </ScaleList>
  );
};

const mapStateToProps = ({ scale, search, user }) => ({
  isDeleting: scale.ui.isDeleting,
  scales: search.scales,
  isSearching: search.isSearching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  deleteScaleById,
  loadScale,
})(Results);
