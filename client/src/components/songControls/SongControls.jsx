import React from 'react';
import styled from 'styled-components';
import DividerLine from '../shared/dividerLine/DividerLine';
import ControlsLeft from './controls/ControlsLeft';
import ControlsRight from './controls/ControlsRight';

export const TopColumn = styled.div`
  width: 100%;
`;

const SongControls = () => {
  return (
    <>
      <TopColumn>
        <ControlsLeft />
      </TopColumn>
      <DividerLine vertical small />
      <TopColumn>
        <ControlsRight />
      </TopColumn>
    </>
  );
};

export default SongControls;
