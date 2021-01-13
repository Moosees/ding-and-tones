import React from 'react';
import EditButton from './editButton/EditButton';
import PlayButton from './playButton/PlayButton';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  bottom: -2px;
  display: flex;
  position: relative;

  button {
    margin: 0 2px;
  }
`;

const SongViewControls = () => {
  return (
    <ControlsContainer>
      <PlayButton light />
      <EditButton light />
    </ControlsContainer>
  );
};

export default SongViewControls;
