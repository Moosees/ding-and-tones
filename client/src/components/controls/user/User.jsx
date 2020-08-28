import React from 'react';
import BtnControls from '../../shared/button/Controls';
import DividerLine from '../../shared/dividerLine/DividerLine';
import Account from '../account/Account';
import SignIn from '../signIn/SignIn';
import Sound from '../sound/Sound';
import Logo from './Logo';
import {
  ButtonColumn,
  ControlButtons,
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
        <Sound />
        <BtnControls label="Print/Save" icon="print" />
        <BtnControls label="Support me" icon="support" />
      </ButtonColumn>
      <DividerLine vertical small />
      <ButtonColumn>
        <BtnControls reverse label="Help" icon="help_outline" />
        <Account reverse />
        <SignIn reverse />
      </ButtonColumn>
    </ControlButtons>
  </UserContainer>
);

export default User;