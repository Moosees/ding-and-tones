import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import { useDeleteScaleByIdMutation } from '../../../redux/api/api.slice';
import { loadScale } from '../../../redux/scale/scale.slice';
import BtnIcon from '../../shared/button/BtnIcon';
import Confirmation from '../../shared/popup/Confirmation';
import ScrollBox from '../../shared/scrollBox/ScrollBox';
import {
  ScaleContainer,
  ScaleLabel,
  ScaleList,
  ScaleNotes,
  TextContainer,
} from './results.styles';

const Results = ({ scales }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying,
  );

  const navigate = useNavigate();
  const [deleteScaleById, { isLoading: isDeleting }] =
    useDeleteScaleByIdMutation();

  const getScales = () =>
    scales.map((scale, i) => {
      const {
        scaleId,
        isOwner,
        info: { name, label, rootName },
      } = scale;

      const handleLoadScale = () => {
        if (isSongPlaying) return;

        dispatch(loadScale({ scale }));
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
        <ScaleContainer key={i} $isOwner={isOwner && isSignedIn}>
          {isOwner && isSignedIn && (
            <Confirmation
              onConfirm={() => deleteScaleById({ scaleId })}
              label={`Are you sure you want to delete "${rootName} ${name}"`}
            >
              <BtnIcon
                disabled={isDeleting || isSongPlaying}
                icon="delete"
                title={`Delete "${rootName} ${name}"`}
                position="right"
              />
            </Confirmation>
          )}
          <TextContainer
            $disabled={isSongPlaying}
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
