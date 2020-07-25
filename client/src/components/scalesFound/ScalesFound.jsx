import React from 'react';
import { connect } from 'react-redux';
import { deleteScaleById, loadScale } from '../../redux/scale/scale.actions';
import BtnIcon from '../button/Icon';
import Loading from '../loading/Loading';
import {
  ScaleContainer,
  ScaleLabel,
  ScaleList,
  ScaleNotes,
  TextContainer,
} from './scalesFound.styles';

const ScalesFound = ({
  deleteScaleById,
  isDeleting,
  isSearching,
  isSignedIn,
  loadScale,
  scales,
}) => {
  const getScales = () =>
    scales.map((scale, i) => {
      const {
        scaleId,
        isOwner,
        info: { name, label },
      } = scale;

      return (
        <ScaleContainer key={i}>
          {isOwner && isSignedIn && (
            <BtnIcon
              onClick={() => deleteScaleById(scaleId)}
              disabled={isDeleting || isSearching}
              icon="delete"
              label={`delete ${name}`}
            />
          )}
          <TextContainer onClick={() => loadScale(scale)}>
            <ScaleLabel>{name}</ScaleLabel>
            <ScaleNotes>{label}</ScaleNotes>
          </TextContainer>
        </ScaleContainer>
      );
    });

  return isSearching ? (
    <Loading />
  ) : (
    <ScaleList>{scales && getScales()}</ScaleList>
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
})(ScalesFound);
