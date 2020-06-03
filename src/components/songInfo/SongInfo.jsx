import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleEditSong } from '../../redux/ui/ui.actions';
import ButtonMain from '../button/ButtonMain';
import InfoField from '../infoField/InfoField';
import PlayButton from '../playButton/PlayButton';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  width: 100%;
`;

const Buttons = styled.div`
  align-self: flex-end;
  display: flex;
`;

const SongInfo = ({ name, isEditingSong, toggleEditSong }) => {
  return (
    <InfoContainer>
      <InfoField label={'Title: ' + name} />
      <InfoField label="Difficulty: Beginner" />
      <Buttons>
        <PlayButton />
        <ButtonMain
          label={isEditingSong ? 'Lock' : 'Unlock'}
          onClick={toggleEditSong}
        />
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  name: song.name,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, { toggleEditSong })(SongInfo);
