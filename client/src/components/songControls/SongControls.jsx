import React from 'react';
import useDimensions from '../../hooks/useDimensions';
import DividerLine from '../shared/dividerLine/DividerLine';
import ControlsLeft from './controls/ControlsLeft';
import ControlsRight from './controls/ControlsRight';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  width: 100%;

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

const SongControls = () => {
  const { isMobile } = useDimensions();

  return (
    <ControlsContainer>
      <ControlsLeft />
      {!isMobile && <DividerLine vertical small />}
      <ControlsRight />
    </ControlsContainer>
  );
};

export default SongControls;
