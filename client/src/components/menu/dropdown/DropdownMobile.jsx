import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useCloseOutside from '../../../hooks/useCloseOutside';
import { setPrivacyOpen } from '../../../redux/user/user.slice';
import BtnMenu from '../../shared/button/BtnMenu';
import DividerLine from '../../shared/dividerLine/DividerLine';
import Account from '../account/Account';
import SignIn from '../signIn/SignIn';
import Sound from '../sound/Sound';
import { DropdownContainer } from './dropdown.styles';

const DropdownMobile = ({ btnRef, isOpenCb }) => {
  const dispatch = useDispatch();
  const scaleId = useSelector(({ scale }) => scale.ui.scaleId);
  const songId = useSelector(({ song }) => song.refs.songId);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);

  const goTo = (url) => {
    navigate(url);
    isOpenCb();
  };

  return (
    <DropdownContainer ref={insideRef}>
      <BtnMenu
        label="Drum"
        isActive={'/chords' === pathname}
        onClick={() => goTo('/chords')}
      />
      <BtnMenu
        label="Scale"
        isActive={pathname.startsWith('/scale')}
        onClick={() => goTo(`/scale${scaleId ? '/' + scaleId : ''}`)}
      />
      <BtnMenu
        label="Song"
        isActive={pathname.startsWith('/song')}
        onClick={() => goTo(`/song${songId ? '/' + songId : ''}`)}
      />
      <BtnMenu
        label="Find Songs"
        isActive={'/find' === pathname}
        onClick={() => goTo('/find')}
      />
      <DividerLine />
      <BtnMenu
        label="Home"
        icon="help_outline"
        onClick={() => navigate('/')}
        isActive={pathname === '/'}
      />
      <Sound />
      <Account />
      <SignIn />
      <BtnMenu
        label="Privacy"
        onClick={() => dispatch(setPrivacyOpen({ privacyOpen: true }))}
      />
    </DropdownContainer>
  );
};

export default DropdownMobile;
