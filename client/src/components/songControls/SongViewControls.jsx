import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  toggleCountOpen,
  toggleHandsOpen,
  toggleHeadersOpen,
} from '../../redux/ui/ui.actions';
import Buttons from '../shared/button/Buttons';
import Checkbox from '../shared/checkbox/Checkbox';
import EditButton from './editButton/EditButton';
import PlayButton from './playButton/PlayButton';
import Print from './print/Print';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 10px;
  top: 5px;

  button {
    margin: 1px;
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
    <ControlsContainer>
      <Buttons>
        <PlayButton light />
        <Print />
        <EditButton light />
      </Buttons>
      <Buttons>
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
      </Buttons>
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
