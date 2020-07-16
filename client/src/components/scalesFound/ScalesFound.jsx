import React from 'react';
import { connect } from 'react-redux';
import { deleteScaleById, loadScale } from '../../redux/scale/scale.actions';
import {
  DeleteIcon,
  ScaleContainer,
  ScaleLabel,
  ScaleList,
  ScaleNotes,
  TextContainer,
} from './scalesFound.styles';

const ScalesFound = ({
  deleteScaleById,
  isSearching,
  isSignedIn,
  loadScale,
  scales,
}) => {
  const getScales = () =>
    scales.map((scale, i) => {
      const { name, label, scaleId, isOwner } = scale.info;

      return (
        <ScaleContainer key={i}>
          {isOwner && isSignedIn && (
            <DeleteIcon
              className="material-icons"
              onClick={() => deleteScaleById(scaleId, name)}
            >
              delete
            </DeleteIcon>
          )}
          <TextContainer onClick={() => loadScale(scale)}>
            <ScaleLabel>{name}</ScaleLabel>
            <ScaleNotes>{label}</ScaleNotes>
          </TextContainer>
        </ScaleContainer>
      );
    });

  return isSearching ? (
    <div>Loading...</div>
  ) : (
    <ScaleList>{scales && getScales()}</ScaleList>
  );
};

const mapStateToProps = ({ search, user }) => ({
  scales: search.scales,
  isSearching: search.isSearching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  deleteScaleById,
  loadScale,
})(ScalesFound);
