import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonMain from '../button/ButtonMain';
import InfoField from '../infoField/InfoField';
import PlayButton from '../playButton/PlayButton';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Buttons = styled.div`
  align-self: flex-end;
  display: flex;
`;

const SongInfo = ({ name }) => {
  return (
    <InfoContainer>
      <InfoField label={'Title: ' + name} onEdit={true} />
      <InfoField label="Difficulty: Beginner" onEdit={true} />
      <Buttons>
        <PlayButton />
        <ButtonMain label="Save" />
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  name: song.name,
});

export default connect(mapStateToProps)(SongInfo);
