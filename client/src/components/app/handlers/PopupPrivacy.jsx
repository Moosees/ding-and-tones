import React from 'react';
import { connect } from 'react-redux';
import { setPrivacyOpen } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';
import Popup from '../../shared/popup/Popup';
import Privacy from '../../shared/privacy/Privacy';

const PopupPrivacy = ({ privacyOpen, setPrivacyOpen }) => (
  <>
    {privacyOpen && (
      <Popup header={'Terms and Privacy'} onClose={() => setPrivacyOpen(false)}>
        <Privacy />
        <BtnPrimary light label="Close" onClick={() => setPrivacyOpen(false)} />
      </Popup>
    )}
  </>
);

const mapStateToProps = ({ ui }) => ({
  privacyOpen: ui.privacyOpen,
});

export default connect(mapStateToProps, { setPrivacyOpen })(PopupPrivacy);
