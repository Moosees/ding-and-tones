import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { optionsDifficulty } from '../../../assets/constants';
import useValidate from '../../../hooks/useValidate';
import { saveSong, updateSongInfo } from '../../../redux/song/song.actions';
import Buttons from '../../button/Buttons';
import BtnPrimary from '../../button/Primary';
import InfoBox from '../../infoBox/InfoBox';
import InfoSelect from '../../infoBox/InfoSelect';
import InfoText from '../../infoBox/InfoText';
import PlayButton from '../../playButton/PlayButton';
import PopupNewSong from './PopupNewSong';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Info = ({
  isOwner,
  isSaving,
  isSignedIn,
  isSongPlaying,
  saveSong,
  songInfo,
  updateSongInfo,
}) => {
  const [newOpen, setNewOpen] = useState(false);

  const [
    title,
    handleTitleChange,
    titleErrors,
    isTitleValid,
    resetTitle,
  ] = useValidate('title', songInfo.title);

  return (
    <>
      <InfoContainer>
        <InfoBox>
          <InfoText
            errors={titleErrors}
            handleChange={handleTitleChange}
            handleClose={resetTitle}
            handleSave={() => updateSongInfo({ title })}
            isValid={isTitleValid}
            placeholder="Song title"
            value={title}
          >
            {'Title: ' + songInfo.title}
          </InfoText>
        </InfoBox>
        <InfoBox>
          <InfoSelect
            value={songInfo.difficulty}
            handleChange={(value) => updateSongInfo({ difficulty: value })}
            options={optionsDifficulty}
          >
            {'Difficulty: '}
          </InfoSelect>
        </InfoBox>
        <Buttons>
          {isSignedIn && isOwner && (
            <BtnPrimary
              disabled={isSongPlaying || isSaving || !isTitleValid}
              label="Save"
              onClick={saveSong}
            />
          )}
          {isSignedIn && (
            <BtnPrimary
              disabled={isSongPlaying || isSaving || !isTitleValid}
              label="Save as"
              onClick={() => saveSong({ saveAs: true })}
            />
          )}
          <BtnPrimary
            disabled={isSongPlaying || isSaving || !isTitleValid}
            label="New Song"
            onClick={() => setNewOpen(true)}
          />
          <PlayButton />
        </Buttons>
      </InfoContainer>
      {newOpen && <PopupNewSong onClose={() => setNewOpen(false)} />}
    </>
  );
};

const mapStateToProps = ({ song, ui, user }) => ({
  songInfo: song.info,
  isOwner: song.ui.isOwner,
  isSaving: song.ui.isSaving,
  isSongPlaying: ui.isSongPlaying,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { saveSong, updateSongInfo })(Info);
