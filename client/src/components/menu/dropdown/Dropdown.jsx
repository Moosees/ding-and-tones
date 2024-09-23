import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCloseOnEsc from '../../../hooks/useCloseOnEsc';
import useCloseOutside from '../../../hooks/useCloseOutside';
import BtnMenu from '../../shared/button/BtnMenu';
import Account from '../account/Account';
import SignIn from '../signIn/SignIn';
import Sound from '../sound/Sound';
import { DropdownContainer } from './dropdown.styles';

const Dropdown = ({ btnRef, isOpenCb }) => {
  useCloseOnEsc(() => isOpenCb(false));
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);
  const navigate = useNavigate();

  return (
    <DropdownContainer ref={insideRef}>
      <BtnMenu label="Home" icon="help_outline" onClick={() => navigate('/')} />
      <Sound />
      <Account />
      <SignIn />
    </DropdownContainer>
  );
};

export default Dropdown;
