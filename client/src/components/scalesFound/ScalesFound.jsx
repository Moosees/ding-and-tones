import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { loadScale } from '../../redux/scale/scale.actions';
import { deleteFoundScale } from '../../redux/search/search.actions';
import {
  DeleteIcon,
  ScaleContainer,
  ScaleLabel,
  ScaleList,
  ScaleNotes,
  TextContainer,
} from './scalesFound.styles';

const ScalesFound = ({
  deleteFoundScale,
  isSignedIn,
  loadScale,
  scalesFound,
}) => {
  const handleDelete = (scaleId) => {
    axios
      .delete(`/scale/id/${scaleId}`)
      .then((res) => {
        if (res.status === 200) deleteFoundScale(scaleId);
      })
      .catch((error) => console.error(error));
  };

  const getScales = () =>
    scalesFound.map((result, i) => {
      const { name, label, layout, scale, scaleId, isOwner } = result;
      return (
        <ScaleContainer key={i}>
          {isOwner && isSignedIn && (
            <DeleteIcon
              className="material-icons"
              onClick={() => handleDelete(scaleId)}
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

  return <ScaleList>{scalesFound && getScales()}</ScaleList>;
};

const mapStateToProps = ({ search, user }) => ({
  scalesFound: search.scalesFound,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { deleteFoundScale, loadScale })(
  ScalesFound
);
