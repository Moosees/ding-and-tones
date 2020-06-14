import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonMain from '../button/ButtonMain';
import InfoField from '../infoField/InfoField';
import PlayButton from '../playButton/PlayButton';
import PopupNewSong from './PopupNewSong';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Buttons = styled.div`
  align-self: flex-end;
  display: flex;
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
          <ButtonMain label="New Song" onClick={() => setNewOpen(true)} />
          <ButtonMain label="Save Song" />
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
