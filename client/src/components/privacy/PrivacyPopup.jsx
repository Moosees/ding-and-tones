import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrivacyOpen } from '../../redux/user/user.slice';
import BtnPrimary from '../shared/button/BtnPrimary';
import Popup from '../shared/popup/Popup';
import PrivacyText from './PrivacyText';

const PrivacyPopup = () => {
  const dispatch = useDispatch();
  const privacyOpen = useSelector(({ user }) => user.privacyOpen);

  return (
    <>
      {privacyOpen && (
        <Popup
          header={'Terms and Privacy'}
          onClose={() => dispatch(setPrivacyOpen({ privacyOpen: false }))}
        >
          <PrivacyText />
          <Popup.Flex>
            <BtnPrimary
              light
              label="Close"
              onClick={() => dispatch(setPrivacyOpen({ privacyOpen: false }))}
            />
          </Popup.Flex>
        </Popup>
      )}
    </>
  );
};

export default PrivacyPopup;
