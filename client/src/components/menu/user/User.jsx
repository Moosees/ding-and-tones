import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { checkSession } from '../../../redux/user/user.actions';
import BtnNav from '../../shared/button/Nav';
import Dropdown from '../dropdown/Dropdown';
import { MenuAnchor } from '../nav.styles';
// import Sound from './sound/Sound';
// import BtnMenu from '../shared/button/Menu';

const User = ({ checkSession }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <div>
      <MenuAnchor>
        {isOpen && <Dropdown btnRef={btnRef} isOpenCb={setIsOpen} />}
      </MenuAnchor>
      <BtnNav
        ariaLabel={'User'}
        disabled={false}
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        ref={btnRef}
        label="User"
      />
    </div>
  );
};

export default connect(null, { checkSession })(User);
