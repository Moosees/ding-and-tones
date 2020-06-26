import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { optionsDifficulty } from '../../constants';
import { updateSongInfo } from '../../redux/song/song.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoSelect from '../infoBox/InfoSelect';
import InfoText from '../infoBox/InfoText';
import PlayButton from '../playButton/PlayButton';
import PopupNewSong from './PopupNewSong';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SongInfo = ({ difficulty, isSongPlaying, title, updateSongInfo }) => {
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
          <PlayButton />
          <BtnPrimary
            disabled={isSongPlaying}
            label="New Song"
            onClick={() => setNewOpen(true)}
          />
          <BtnPrimary disabled={isSongPlaying} label="Save Song" />
        </Buttons>
      </InfoContainer>
      {newOpen && <PopupNewSong onClose={() => setNewOpen(false)} />}
    </>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  difficulty: song.difficulty,
  title: song.title,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { updateSongInfo })(SongInfo);
