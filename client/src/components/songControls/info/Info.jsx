import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import { saveSong, updateSongInfo } from '../../../redux/song/song.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoText from '../../shared/input/InfoText';
import Select from '../../shared/select/Select';
import EditButton from '../editButton/EditButton';
import PlayButton from '../playButton/PlayButton';
import PopupNewSong from './PopupNewSong';

const SongInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Info = ({
  arrangement,
  isOwner,
  isSaving,
  isSignedIn,
  isSongPlaying,
  saveSong,
  songInfo,
  updateSongInfo,
}) => {
  const [newOpen, setNewOpen] = useState(false);
  const { replace } = useHistory();

  const [
    title,
    handleTitleChange,
    titleErrors,
    isTitleValid,
    resetTitle,
    setTitle,
  ] = useValidate('title', songInfo.title);

  const isSongSavable = arrangement.length >= 1 && arrangement.length <= 100;

  const handleSave = () => {
    saveSong({ saveAs: !isOwner, title }).then((res) => {
      if (res) replace(res);
    });
  };

  return (
    <>
      <SongInfoContainer>
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
        >
          {'Difficulty: '}
        </Select>
        <Buttons>
          <BtnPrimary
            disabled={
              !isSignedIn ||
              isSongPlaying ||
              isSaving ||
              !isTitleValid ||
              !isSongSavable
            }
            label={isOwner ? 'Save Changes' : 'Save'}
            onClick={handleSave}
          />
          <BtnPrimary
            disabled={isSongPlaying || isSaving || !isTitleValid}
            label="New Song"
            onClick={() => setNewOpen(true)}
          />
          <EditButton />
          <PlayButton />
        </Buttons>
      </SongInfoContainer>
      {newOpen && (
        <PopupNewSong
          onClose={() => setNewOpen(false)}
          updateValidation={setTitle}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ song, ui, user }) => ({
  arrangement: song.arrangement,
  songInfo: song.info,
  isOwner: song.ui.isOwner,
  isSaving: song.ui.isSaving,
  isSongPlaying: ui.isSongPlaying,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { saveSong, updateSongInfo })(Info);
