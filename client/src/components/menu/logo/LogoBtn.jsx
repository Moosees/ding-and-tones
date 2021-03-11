import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { checkSession } from '../../../redux/user/user.actions';
import BtnNav from '../../shared/button/Nav';
import Dropdown from '../dropdown/Dropdown';
import { MenuAnchor } from '../nav.styles';
import Logo from './Logo';
// import Sound from './sound/Sound';
// import BtnMenu from '../shared/button/Menu';

const LogoBtn = ({ checkSession }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <MenuAnchor>
      <BtnNav
        ariaLabel={'Menu'}
        disabled={false}
        isActive={isOpen}
        label={<Logo />}
        onClick={() => setIsOpen(!isOpen)}
        ref={btnRef}
      />
      {isOpen && <Dropdown btnRef={btnRef} isOpenCb={setIsOpen} />}
    </MenuAnchor>
  );
};

export default connect(null, { checkSession })(LogoBtn);
