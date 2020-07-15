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
  isFetching,
  isSignedIn,
  loadScale,
  scales,
}) => {
  const getScales = () =>
    scales.map((result, i) => {
      const { name, label, layout, scale, scaleId, isOwner } = result;
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
          <TextContainer
            onClick={() =>
              loadScale({ name, label, layout, scaleSimple: scale.round })
            }
          >
            <ScaleLabel>{name}</ScaleLabel>
            <ScaleNotes>{label}</ScaleNotes>
          </TextContainer>
        </ScaleContainer>
      );
    });

  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <ScaleList>{scales && getScales()}</ScaleList>
  );
};

const mapStateToProps = ({ search, user }) => ({
  scales: search.scales,
  isFetching: search.isFetching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  deleteScaleById,
  loadScale,
})(ScalesFound);
