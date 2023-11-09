import React from 'react';
import useCloseOnEsc from '../../../hooks/useCloseOnEsc';
import useCloseOutside from '../../../hooks/useCloseOutside';
import Account from '../account/Account';
import SignIn from '../signIn/SignIn';
import Sound from '../sound/Sound';
import { DropdownContainer } from './dropdown.styles';
// import BtnMenu from '../shared/button/BtnMenu';

const Dropdown = ({ btnRef, isOpenCb }) => {
  useCloseOnEsc(() => isOpenCb(false));
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);

  return (
    <DropdownContainer ref={insideRef}>
      <Sound />
      {/* <BtnMenu label="Support me" icon="support" /> */}
      {/* <BtnMenu label="Help" icon="help_outline" /> */}
      <Account />
      <SignIn />
    </DropdownContainer>
  );
};

export default Dropdown;
