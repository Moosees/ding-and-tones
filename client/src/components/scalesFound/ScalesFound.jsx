import React from 'react';
import { connect } from 'react-redux';
import { deleteScaleById, loadScale } from '../../redux/scale/scale.actions';
import Loading from '../loading/Loading';
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
      const {
        scaleId,
        isOwner,
        info: { name, label },
      } = scale;

      return (
        <ScaleContainer key={i}>
          {isOwner && isSignedIn && (
            <DeleteIcon
              className="material-icons"
              onClick={() => deleteScaleById(scaleId)}
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
    <Loading />
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