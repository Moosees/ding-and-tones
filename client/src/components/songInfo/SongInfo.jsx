import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { optionsDifficulty } from '../../assets/constants';
import { updateSongInfo } from '../../redux/song/song.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoSelect from '../infoBox/InfoSelect';
import InfoText from '../infoBox/InfoText';
import PlayButton from '../playButton/PlayButton';
import PopupNewSong from './PopupNewSong';
import SaveSong from './SaveSong';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SongInfo = ({
  difficulty,
  isOwner,
  isSignedIn,
  isSongPlaying,
  title,
  updateSongInfo,
}) => {
  const [newOpen, setNewOpen] = useState(false);

  return (
    <>
      <InfoContainer>
        <InfoBox>
          <InfoText
            placeholder="Song title"
            type="title"
            value={title}
            handleChange={(value) => updateSongInfo({ title: value })}
          >
            {'Title: ' + title}
          </InfoText>
        </InfoBox>
        <InfoBox>
          <InfoSelect
            value={difficulty}
            handleChange={(value) => updateSongInfo({ difficulty: value })}
            options={optionsDifficulty}
          >
            {'Difficulty: '}
          </InfoSelect>
        </InfoBox>
        <Buttons>
          {isSignedIn && isOwner && <SaveSong />}
          {isSignedIn && <SaveSong saveAs />}
          <BtnPrimary
            disabled={isSongPlaying}
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
  difficulty: song.info.difficulty,
  title: song.info.title,
  isOwner: song.info.isOwner,
  isSongPlaying: ui.isSongPlaying,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { updateSongInfo })(SongInfo);
