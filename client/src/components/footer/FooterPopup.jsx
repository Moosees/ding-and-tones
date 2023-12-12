import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrivacyOpen } from '../../redux/ui/ui.actions';
import BtnPrimary from '../shared/button/BtnPrimary';
import Popup from '../shared/popup/Popup';
import PrivacyText from './FooterText';

const FooterPopup = () => {
  const dispatch = useDispatch();
  const privacyOpen = useSelector(({ ui }) => ui.privacyOpen);

  return (
    <>
      {privacyOpen && (
        <Popup
          header={'Terms and Privacy'}
          onClose={() => dispatch(setPrivacyOpen(false))}
        >
          <PrivacyText />
          <Popup.Flex>
            <BtnPrimary
              light
              label="Close"
              onClick={() => dispatch(setPrivacyOpen(false))}
            />
          </Popup.Flex>
        </Popup>
      )}
    </>
  );
};

export default FooterPopup;
