import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import {
  addNewBar,
  saveSong,
  updateSongInfo,
} from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoText from '../../shared/input/InfoText';
import Select from '../../shared/select/Select';
import PopupNewBar from '../popups/PopupNewBar';
import PopupNewSong from '../popups/PopupNewSong';
import PopupSaveSong from '../popups/PopupSaveSong';
import { ControlsContainer } from './controls.styles';
import { createNewBar } from './controls.utils';

const ControlsLeft = ({
  addNewBar,
  arrangement,
  hasNewScale,
  isOwner,
  isSaving,
  isSignedIn,
  isSongPlaying,
  saveSong,
  songInfo,
  updateSongInfo,
}) => {
  const [newSongOpen, setNewSongOpen] = useState(false);
  const [newBarOpen, setNewBarOpen] = useState(false);
  const [saveSongOpen, setSaveSongOpen] = useState(false);
  const { replace } = useHistory();

  const [
    title,
    handleTitleChange,
    titleErrors,
    isTitleValid,
    resetTitle,
    setTitle,
  ] = useValidate('title', songInfo.title);

  const { metre, subdivision } = songInfo;
  const isSongSavable = arrangement.length >= 1 && arrangement.length <= 100;

  const saveSongCb = (scaleId) => {
    saveSong({ saveAs: !isOwner, title, scaleId }).then((res) => {
      setSaveSongOpen(false);
      if (res) replace(res);
    });
  };

  const handleSave = () => {
    if (isOwner && !hasNewScale) {
      return saveSongCb();
    }

    setSaveSongOpen(true);
  };

  const handleNewBar = (metre, subdivision) => {
    addNewBar(createNewBar(metre, subdivision));
  };

  return (
    <>
      <ControlsContainer>
        <InfoText
          handleChange={handleTitleChange}
          handleClose={resetTitle}
          handleSave={() => updateSongInfo({ title })}
          isValid={isTitleValid}
          placeholder={titleErrors.length ? titleErrors[0] : 'Song title:'}
          value={title}
        >
          {'Title: ' + songInfo.title}
        </InfoText>
        <Select
          value={songInfo.difficulty}
          handleChange={(value) => updateSongInfo({ difficulty: value })}
          options={optionsDifficulty}
          label="Difficulty: "
        />
        <Buttons>
          <BtnPrimary
            disabled={
              !isSignedIn ||
              isSongPlaying ||
              isSaving ||
              !isTitleValid ||
              !isSongSavable
            }
            label={isOwner ? 'Save' : 'Save New'}
            onClick={handleSave}
          />
          <BtnPrimary
            disabled={isSongPlaying || isSaving || !isTitleValid}
            label="New Song"
            onClick={() => setNewSongOpen(true)}
          />
          <BtnPrimary
            label="Add Bar"
            disabled={isSongPlaying}
            onClick={() => handleNewBar(metre, subdivision)}
          />
          <BtnPrimary
            label="Custom Bar"
            disabled={isSongPlaying}
            onClick={() => setNewBarOpen(true)}
            handleNewBar={handleNewBar}
          />
        </Buttons>
      </ControlsContainer>
      {newSongOpen && (
        <PopupNewSong
          onClose={() => setNewSongOpen(false)}
          updateValidation={setTitle}
        />
      )}
      {newBarOpen && (
        <PopupNewBar
          onClose={() => setNewBarOpen(false)}
          handleNewBar={handleNewBar}
        />
      )}
      {saveSongOpen && (
        <PopupSaveSong
          onClose={() => setSaveSongOpen(false)}
          onSave={saveSongCb}
          title={title}
          hasNewScale={hasNewScale}
          isFirstSave={!isOwner}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ scale, song, ui, user }) => ({
  hasNewScale: scale.ui.scaleId !== song.ui.scaleId,
  arrangement: song.arrangement,
  songInfo: song.info,
  isOwner: song.ui.isOwner,
  isSaving: song.ui.isSaving,
  isSongPlaying: ui.isSongPlaying,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  addNewBar,
  saveSong,
  updateSongInfo,
})(ControlsLeft);
