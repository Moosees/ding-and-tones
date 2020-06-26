import React from 'react';
import BtnControls from '../../components/button/Controls';
import DividerLine from '../../components/dividerLine/DividerLine';
import {
  ButtonGroup,
  ControlButtons,
  Logo,
  LogoContainer,
  UserContainer,
} from './user.styles';

const User = () => {
  return (
    <UserContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ControlButtons>
        <ButtonGroup reverse>
          {/* PlayButton component?? */}
          <BtnControls label="Play" icon="play_arrow" />
          {/* <BtnControls label="Play" icon="pause" /> */}
          <BtnControls label="Sound" icon="hearing" />
          <BtnControls label="Print" icon="print" />
        </ButtonGroup>
        <DividerLine vertical small />
        <ButtonGroup>
          <BtnControls reverse label="Help" icon="help_outline" />
          <BtnControls reverse label="Account" icon="person_outline" />
          <BtnControls reverse label="Sign Out" icon="directions_run" />
        </ButtonGroup>
      </ControlButtons>
    </UserContainer>
  );
};

export default User;
