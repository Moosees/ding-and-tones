import React from 'react';
import DividerLine from '../../components/dividerLine/DividerLine';
import styled from 'styled-components';
import ControlsButton from '../../components/button/ControlsButton';

const UserContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 0.5rem;
`;

const Buttons = styled.div`
  align-items: center;
  display: flex;
`;

const ButtonGroup = styled.div`
  align-items: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const User = () => {
  return (
    <UserContainer>
      Avatar
      <Buttons>
        <ButtonGroup flexEnd>
          {/* PlayButton component?? */}
          <ControlsButton label="Play" icon="play_arrow" />
          {/* <ControlsButton label="Play" icon="pause" /> */}
          <ControlsButton label="Sound" icon="hearing" />
          <ControlsButton label="Print" icon="print" />
        </ButtonGroup>
        <DividerLine vertical />
        <ButtonGroup>
          <ControlsButton reverse label="Help" icon="help_outline" />
          <ControlsButton reverse label="Account" icon="person_outline" />
          <ControlsButton reverse label="Sign Out" icon="directions_run" />
        </ButtonGroup>
      </Buttons>
    </UserContainer>
  );
};

export default User;
