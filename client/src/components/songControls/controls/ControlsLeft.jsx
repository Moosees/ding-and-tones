import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import {
  saveSong,
  updateSongInfo
} from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoText from '../../shared/input/InfoText';
import Select from '../../shared/select/Select';
import PopupNewSong from '../popups/PopupNewSong';
import PopupSaveSong from '../popups/PopupSaveSong';
import { ControlsContainer } from './controls.styles';

const ControlsLeft = ({
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
  const [saveSongOpen, setSaveSongOpen] = useState(false);
  const { replace } = useHistory();

  const [title, handleTitleChange, titleErrors, isTitleValid, resetTitle] =
    useValidate('title', songInfo.title);

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

  return (
    <>
      <ControlsContainer>
        <InfoText
          handleChange={handleTitleChange}
          handleClose={resetTitle}
          handleSave={() => updateSongInfo({ title })}
          isValid={isTitleValid}
          label={titleErrors.length ? titleErrors[0] : 'Song title:'}
          value={title}
        >
          {songInfo.title}
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
        </Buttons>
      </ControlsContainer>
      {newSongOpen && <PopupNewSong onClose={() => setNewSongOpen(false)} />}
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
  saveSong,
  updateSongInfo,
})(ControlsLeft);
