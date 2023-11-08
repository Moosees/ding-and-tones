import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
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

const Results = () => {
  const dispatch = useDispatch();
  const { isDeleting, scales, isSearching, isSignedIn } = useSelector(
    ({ scale, search, user }) => ({
      isDeleting: scale.ui.isDeleting,
      scales: search.scales,
      isSearching: search.isSearching,
      isSignedIn: user.isSignedIn,
    })
  );

  const navigate = useNavigate();

  const getScales = () =>
    scales.map((scale, i) => {
      const {
        scaleId,
        isOwner,
        info: { name, label, rootName },
      } = scale;

      const handleDeleteScale = () => {
        dispatch(deleteScaleById(scaleId));
        navigate('/scale');
      };

      const handleLoadScale = () => {
        dispatch(loadScale(scale));
        navigate('/scale');
      };

      const handleKeyDown = (e) => {
        if (
          e.code === beatOptionToKeyCode['enter'] ||
          e.code === beatOptionToKeyCode['space']
        ) {
          e.preventDefault();
          handleLoadScale();
        }
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
          <TextContainer
            tabIndex={0}
            onClick={handleLoadScale}
            onKeyDown={handleKeyDown}
          >
            <ScaleLabel>{`${rootName} ${name}`}</ScaleLabel>
            <ScaleNotes>{label}</ScaleNotes>
          </TextContainer>
        </ScaleContainer>
      );
    });

  return (
    <ScrollBox>
      <ScaleList>{scales && getScales()}</ScaleList>
    </ScrollBox>
  );
};

export default Results;
