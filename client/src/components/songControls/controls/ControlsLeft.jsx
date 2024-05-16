import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import { useSaveSongMutation } from '../../../redux/song/song.api';
import { updateSongInfo } from '../../../redux/song/song.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import InfoText from '../../shared/input/InfoText';
import Select from '../../shared/select/Select';
import PopupNewSong from '../popups/PopupNewSong';
import PopupSaveSong from '../popups/PopupSaveSong';
import { ControlsContainer } from './controls.styles';
import { parseSongForSaving } from './controls.utils';

const ControlsLeft = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying
  );
  const arrangement = useSelector(({ song }) => song.arrangement);
  const savedTitle = useSelector(({ song }) => song.info.title);
  const difficulty = useSelector(({ song }) => song.info.difficulty);
  const savedScaleId = useSelector(({ song }) => song.refs.scaleId);
  const isOwner = useSelector(({ song }) => song.refs.isOwner);

  const [saveSong, { isLoading: isSaving }] = useSaveSongMutation();

  const [newSongOpen, setNewSongOpen] = useState(false);
  const [saveSongOpen, setSaveSongOpen] = useState(false);
  const navigate = useNavigate();

  const [title, handleTitleChange, titleErrors, isTitleValid, resetTitle] =
    useValidate('songTitle', savedTitle);

  const isArrangementValid =
    arrangement.length >= 1 && arrangement.length <= 100;
  const disableSaveSong =
    !isSignedIn ||
    isSongPlaying ||
    isSaving ||
    !isTitleValid ||
    !isArrangementValid;

  const saveSongCb = async (scaleId, saveAs) => {
    const parsedSong = parseSongForSaving(saveAs, title, scaleId);
    const res = await saveSong({ song: parsedSong }).unwrap();

    if (!res.song?.songId) return;

    setSaveSongOpen(false);
    navigate(`/song/${res.song.songId}`, { replace: true });
  };

  return (
    <>
      <ControlsContainer>
        <InfoText
          handleChange={handleTitleChange}
          handleClose={resetTitle}
          handleSave={() => dispatch(updateSongInfo({ songInfo: { title } }))}
          isValid={isTitleValid}
          label={titleErrors.length ? titleErrors[0] : 'Song title:'}
          value={title}
        >
          {savedTitle}
        </InfoText>
        <Select
          value={difficulty}
          handleChange={(value) =>
            dispatch(updateSongInfo({ songInfo: { difficulty: value } }))
          }
          options={optionsDifficulty}
          label="Difficulty: "
        />
        <Buttons>
          <BtnPrimary
            disabled={disableSaveSong}
            label="Save As"
            onClick={() => setSaveSongOpen(true)}
          />
          <BtnPrimary
            disabled={!isOwner || disableSaveSong}
            label="Save"
            onClick={() => saveSongCb(savedScaleId, false)}
          />
          <BtnPrimary
            disabled={isSongPlaying || isSaving || !isTitleValid}
            label="New Song"
            onClick={() => setNewSongOpen(true)}
          />
        </Buttons>
      </ControlsContainer>
      {newSongOpen && <PopupNewSong onClose={() => setNewSongOpen(false)} />}
      {saveSongOpen && (
        <PopupSaveSong
          onClose={() => setSaveSongOpen(false)}
          onSave={saveSongCb}
          title={title}
        />
      )}
    </>
  );
};

export default ControlsLeft;
