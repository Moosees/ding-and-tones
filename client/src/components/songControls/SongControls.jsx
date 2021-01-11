import React from 'react';
import DividerLine from '../shared/dividerLine/DividerLine';
import Controls from './controls/Controls';
import Info from './info/Info';
import styled from 'styled-components';

export const TopColumn = styled.div`
  width: 100%;
`;

const SongControls = () => {
  return (
    <>
      <TopColumn>
        <Info />
      </TopColumn>
      <DividerLine vertical small />
      <TopColumn>
        <Controls />
      </TopColumn>
    </>
  );
};

export default SongControls;
