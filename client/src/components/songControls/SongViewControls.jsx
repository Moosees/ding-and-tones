import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  toggleCount,
  toggleHands,
  toggleHeaders,
} from '../../redux/song/song.slice';
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
  const countOpen = useSelector(({ song }) => song.ui.countOpen);
  const handsOpen = useSelector(({ song }) => song.ui.handsOpen);
  const headersOpen = useSelector(({ song }) => song.ui.headersOpen);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying
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
          onChange={() => dispatch(toggleHands())}
        />
        <Checkbox
          asBtn
          light
          checked={countOpen}
          label="Count"
          disabled={isSongPlaying}
          onChange={() => dispatch(toggleCount())}
        />
        <Checkbox
          asBtn
          light
          checked={headersOpen}
          label="Headers"
          disabled={isSongPlaying}
          onChange={() => dispatch(toggleHeaders())}
        />
      </Buttons>
    </ControlsContainer>
  );
};

export default SongViewControls;
