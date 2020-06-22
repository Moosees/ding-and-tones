import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { optionsDifficulty } from '../../constants';
import { setSongDifficulty, setSongTitle } from '../../redux/song/song.actions';
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

const SongInfo = ({ difficulty, title, setSongDifficulty, setSongTitle }) => {
  const [newOpen, setNewOpen] = useState(false);

  return (
    <>
      <InfoContainer>
        <InfoBox>
          <InfoText
            placeholder="Song title"
            type="title"
            value={title}
            handleChange={setSongTitle}
          >
            {'Title: ' + title}
          </InfoText>
        </InfoBox>
        <InfoBox>
          <InfoSelect
            value={difficulty}
            handleChange={setSongDifficulty}
            options={optionsDifficulty}
          >
            {'Difficulty: '}
          </InfoSelect>
        </InfoBox>
        <Buttons>
          <PlayButton />
          <BtnPrimary label="New Song" onClick={() => setNewOpen(true)} />
          <BtnPrimary label="Save Song" />
        </Buttons>
      </InfoContainer>
      {newOpen && <PopupNewSong onClose={() => setNewOpen(false)} />}
    </>
  );
};

const mapStateToProps = ({ song }) => ({
  difficulty: song.difficulty,
  title: song.title,
});

export default connect(mapStateToProps, { setSongDifficulty, setSongTitle })(
  SongInfo
);
