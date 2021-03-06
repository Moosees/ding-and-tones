import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleCountOpen, toggleHandsOpen } from '../../redux/ui/ui.actions';
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

const SongViewControls = ({
  countOpen,
  handsOpen,
  isSongPlaying,
  toggleCountOpen,
  toggleHandsOpen,
}) => {
  return (
    <ControlsContainer>
      <PlayButton light />
      <BtnPrimary
        light
        checkbox
        checked={handsOpen}
        label="Hands"
        disabled={isSongPlaying}
        onClick={toggleHandsOpen}
      />
      <BtnPrimary
        light
        checkbox
        checked={countOpen}
        label="Count"
        disabled={isSongPlaying}
        onClick={toggleCountOpen}
      />
      <EditButton light />
    </ControlsContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  countOpen: ui.countOpen,
  handsOpen: ui.handsOpen,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { toggleCountOpen, toggleHandsOpen })(
  SongViewControls
);
