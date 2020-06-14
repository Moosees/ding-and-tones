import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoField from '../infoField/InfoField';
import PlayButton from '../playButton/PlayButton';
import PopupNewSong from './PopupNewSong';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SongInfo = ({ title }) => {
  const [newOpen, setNewOpen] = useState(false);

  return (
    <>
      <InfoContainer>
        <InfoField label={'Title: ' + title} onEdit={true} />
        <InfoField label="Difficulty: Beginner" onEdit={true} />
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
  title: song.title,
});

export default connect(mapStateToProps)(SongInfo);
