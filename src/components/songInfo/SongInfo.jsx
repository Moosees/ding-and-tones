import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { metreList } from '../../metre.data';
import { toggleEditSong } from '../../redux/ui/ui.actions';
import ButtonMain from '../button/ButtonMain';
import InfoField from '../infoField/InfoField';
import PlayButton from '../playButton/PlayButton';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  width: 100%;
`;

const Buttons = styled.div`
  align-self: flex-end;
  display: flex;
`;

const SongInfo = ({ name, metre, bpm, isEditingSong, toggleEditSong }) => {
  const metreAndBpm = `${metreList[metre].name} @ ${bpm} beats per minute`;

  return (
    <InfoContainer>
      <InfoField as="h2" label={name} />
      <InfoField label={metreAndBpm} />
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
  metre: song.metre,
  bpm: song.bpm,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, { toggleEditSong })(SongInfo);
