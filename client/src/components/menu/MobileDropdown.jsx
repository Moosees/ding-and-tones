import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPrivacyOpen } from '../../redux/ui/ui.actions';
import BtnMenu from '../shared/button/Menu';
import DividerLine from '../shared/dividerLine/DividerLine';
import Account from './account/Account';
import { MenuDropdown } from './menu.styles';
import Print from './print/Print';
import SignIn from './signIn/SignIn';

const MobileDropdown = ({ scaleId, setPrivacyOpen, songId }) => {
  const { push } = useHistory();
  // const { pathname } = useLocation();

  return (
    <MenuDropdown>
      <BtnMenu
        label="Drum"
        // isActive={'/drum' === pathname}
        onClick={() => push('/drum')}
      />
      <BtnMenu
        label="Scale"
        // isActive={`/scale${scaleId ? '/' + scaleId : ''}` === pathname}
        onClick={() => push(`/scale${scaleId ? '/' + scaleId : ''}`)}
      />
      <BtnMenu
        label="Song"
        // isActive={`/song${songId ? '/' + songId : ''}` === pathname}
        onClick={() => push(`/song${songId ? '/' + songId : ''}`)}
      />
      <BtnMenu
        label="Find Songs"
        // isActive={'/find' === pathname}
        onClick={() => push('/find')}
      />
      <DividerLine />
      {/* <Sound /> */}
      {/* <BtnMenu label="Support me" icon="support" /> */}
      {/* <BtnMenu label="Help" icon="help_outline" /> */}
      <Print />
      <Account />
      <SignIn />
      <BtnMenu label="Privacy" onClick={() => setPrivacyOpen(true)} />
    </MenuDropdown>
  );
};

const mapStateToProps = ({ scale, song }) => ({
  scaleId: scale.ui.scaleId,
  songId: song.ui.songId,
});

export default connect(mapStateToProps, { setPrivacyOpen })(MobileDropdown);
