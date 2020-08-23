import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteScaleById, loadScale } from '../../redux/scale/scale.actions';
import BtnIcon from '../button/Icon';
import Loading from '../loading/Loading';
import Confirmation from '../popup/Confirmation';
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
  const { push } = useHistory();

  const getScales = () =>
    scales.map((scale, i) => {
      const {
        scaleId,
        isOwner,
        info: { name, label, rootName },
      } = scale;

      const handleLoadScale = () => {
        loadScale(scale);
        push('/scale');
      };

      return (
        <ScaleContainer key={i}>
          {isOwner && isSignedIn && (
            <Confirmation
              onConfirm={() => deleteScaleById(scaleId)}
              label={`Are you sure you want to delete "${rootName} ${name}"`}
            >
              <BtnIcon
                disabled={isDeleting || isSearching}
                icon="delete"
                label={`delete ${rootName} ${name}`}
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
