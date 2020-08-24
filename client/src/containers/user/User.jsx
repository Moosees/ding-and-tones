import React from 'react';
import BtnControls from '../../components/button/Controls';
import DividerLine from '../../components/dividerLine/DividerLine';
import UserAccount from '../../components/userAccount/UserAccount';
import UserSignInOut from '../../components/userSignInOut/UserSignInOut';
import UserSound from '../../components/userSound/UserSound';
import {
  ButtonColumn,
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
      <ButtonColumn reverse>
        <UserSound />
        <BtnControls label="Print/Save" icon="print" />
        <BtnControls label="Support me" icon="support" />
      </ButtonColumn>
      <DividerLine vertical small />
      <ButtonColumn>
        <BtnControls reverse label="Help" icon="help_outline" />
        <UserAccount reverse />
        <UserSignInOut reverse />
      </ButtonColumn>
    </ControlButtons>
  </UserContainer>
);

export default User;
