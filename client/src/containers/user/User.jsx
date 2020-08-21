import React from 'react';
import BtnControls from '../../components/button/Controls';
import DividerLine from '../../components/dividerLine/DividerLine';
import UserSignInOut from '../../components/userSignInOut/UserSignInOut';
import UserAccount from '../../components/userAccount/UserAccount';
import {
  ButtonGroup,
  ControlButtons,
  Logo,
  LogoContainer,
  UserContainer,
} from './user.styles';

const User = () => (
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
        <UserAccount reverse />
        <UserSignInOut reverse />
      </ButtonGroup>
    </ControlButtons>
  </UserContainer>
);

export default User;
