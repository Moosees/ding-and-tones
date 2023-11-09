import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const SongViewControls = () => {
  const dispatch = useDispatch();
  const { countOpen, handsOpen, headersOpen, isSongPlaying } = useSelector(
    ({ ui }) => ({
      countOpen: ui.countOpen,
      handsOpen: ui.handsOpen,
      headersOpen: ui.headersOpen,
      isSongPlaying: ui.isSongPlaying,
    })
  );

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
          onChange={() => dispatch(toggleHandsOpen())}
        />
        <Checkbox
          asBtn
          light
          checked={countOpen}
          label="Count"
          disabled={isSongPlaying}
          onChange={() => dispatch(toggleCountOpen())}
        />
        <Checkbox
          asBtn
          light
          checked={headersOpen}
          label="Headers"
          disabled={isSongPlaying}
          onChange={() => dispatch(toggleHeadersOpen())}
        />
      </Buttons>
    </ControlsContainer>
  );
};

export default SongViewControls;
