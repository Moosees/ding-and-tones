import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import { saveSong, updateSongInfo } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoText from '../../shared/input/InfoText';
import Select from '../../shared/select/Select';
import PopupNewSong from '../popups/PopupNewSong';
import PopupSaveSong from '../popups/PopupSaveSong';
import { ControlsContainer } from './controls.styles';

const ControlsLeft = ({
  arrangement,
  isOwner,
  isSaving,
  isSignedIn,
  isSongPlaying,
  saveSong,
  songScaleId,
  songInfo,
  updateSongInfo,
}) => {
  const [newSongOpen, setNewSongOpen] = useState(false);
  const [saveSongOpen, setSaveSongOpen] = useState(false);
  const { replace } = useHistory();

  const [title, handleTitleChange, titleErrors, isTitleValid, resetTitle] =
    useValidate('title', songInfo.title);

  const isArrangementValid =
    arrangement.length >= 1 && arrangement.length <= 100;
  const disableSaveSong =
    !isSignedIn ||
    isSongPlaying ||
    isSaving ||
    !isTitleValid ||
    !isArrangementValid;

  const saveSongCb = (scaleId, saveAs) => {
    saveSong({ saveAs, title, scaleId }).then((res) => {
      setSaveSongOpen(false);
      if (res) replace(res);
    });
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
            disabled={disableSaveSong}
            label="Save As"
            onClick={() => setSaveSongOpen(true)}
          />
          <BtnPrimary
            disabled={!isOwner || disableSaveSong}
            label="Save"
            onClick={() => saveSongCb(songScaleId, false)}
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

const mapStateToProps = ({ scale, song, ui, user }) => ({
  songScaleId: song.ui.scaleId,
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
