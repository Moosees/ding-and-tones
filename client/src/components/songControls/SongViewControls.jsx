import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  toggleCountOpen,
  toggleHandsOpen,
  toggleHeadersOpen,
} from '../../redux/ui/ui.actions';
import Checkbox from '../shared/checkbox/Checkbox';
import EditButton from './editButton/EditButton';
import PlayButton from './playButton/PlayButton';

const ControlsContainer = styled.div`
  bottom: -2px;
  display: flex;
  position: relative;

  ${({ headersOpen }) =>
    !headersOpen &&
    `
    align-self: center;
    margin-bottom: 2px;
    `}

  button {
    margin: 0 2px;
  }
`;

const SongViewControls = ({
  countOpen,
  handsOpen,
  headersOpen,
  isSongPlaying,
  toggleCountOpen,
  toggleHandsOpen,
  toggleHeadersOpen,
}) => {
  return (
    <ControlsContainer headersOpen={headersOpen}>
      <PlayButton light />
      <Checkbox
        asBtn
        light
        checked={handsOpen}
        label="Hands"
        disabled={isSongPlaying}
        onChange={toggleHandsOpen}
      />
      <Checkbox
        asBtn
        light
        checked={countOpen}
        label="Count"
        disabled={isSongPlaying}
        onChange={toggleCountOpen}
      />
      <Checkbox
        asBtn
        light
        checked={headersOpen}
        label="Headers"
        disabled={isSongPlaying}
        onChange={toggleHeadersOpen}
      />
      <EditButton light />
    </ControlsContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  countOpen: ui.countOpen,
  handsOpen: ui.handsOpen,
  headersOpen: ui.headersOpen,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  toggleCountOpen,
  toggleHandsOpen,
  toggleHeadersOpen,
})(SongViewControls);
