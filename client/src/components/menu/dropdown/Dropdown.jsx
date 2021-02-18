import React from 'react';
import useCloseOutside from '../../../hooks/useCloseOutside';
import Account from '../account/Account';
import Print from '../print/Print';
import SignIn from '../signIn/SignIn';
import { DropdownContainer } from './dropdown.styles';
// import Sound from './sound/Sound';
// import BtnMenu from '../shared/button/Menu';

const Dropdown = ({ btnRef, isOpenCb }) => {
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);

  return (
    <DropdownContainer ref={insideRef}>
      {/* <Sound /> */}
      {/* <BtnMenu label="Support me" icon="support" /> */}
      {/* <BtnMenu label="Help" icon="help_outline" /> */}
      <Print />
      <Account />
      <SignIn />
    </DropdownContainer>
  );
};

export default Dropdown;
