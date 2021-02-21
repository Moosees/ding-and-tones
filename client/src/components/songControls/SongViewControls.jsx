import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleHandsOpen } from '../../redux/ui/ui.actions';
import BtnPrimary from '../shared/button/Primary';
import EditButton from './editButton/EditButton';
import PlayButton from './playButton/PlayButton';

const ControlsContainer = styled.div`
  bottom: -2px;
  display: flex;
  position: relative;

  button {
    margin: 0 2px;
  }
`;

const SongViewControls = ({ isSongPlaying, toggleHandsOpen }) => {
  return (
    <ControlsContainer>
      <PlayButton light />
      <BtnPrimary
        light
        label="Toggle Hands"
        disabled={isSongPlaying}
        onClick={toggleHandsOpen}
      />
      <EditButton light />
    </ControlsContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { toggleHandsOpen })(SongViewControls);
