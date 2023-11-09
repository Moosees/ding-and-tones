import React from 'react';
import { connect } from 'react-redux';
import { setPrivacyOpen } from '../../redux/ui/ui.actions';
import BtnPrimary from '../shared/button/BtnPrimary';
import Popup from '../shared/popup/Popup';
import PrivacyText from './PrivacyText';

const PrivacyPopup = ({ privacyOpen, setPrivacyOpen }) => (
  <>
    {privacyOpen && (
      <Popup header={'Terms and Privacy'} onClose={() => setPrivacyOpen(false)}>
        <PrivacyText />
        <Popup.Flex>
          <BtnPrimary
            light
            label="Close"
            onClick={() => setPrivacyOpen(false)}
          />
        </Popup.Flex>
      </Popup>
    )}
  </>
);

const mapStateToProps = ({ ui }) => ({
  privacyOpen: ui.privacyOpen,
});

export default connect(mapStateToProps, { setPrivacyOpen })(PrivacyPopup);
