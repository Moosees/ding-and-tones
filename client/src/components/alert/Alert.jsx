import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ALERT_TIMEOUT } from '../../assets/constants';
import { clearAlert } from '../../redux/alert/alert.actions';
import BtnPrimary from '../shared/button/Primary';
import { AlertContainer, AlertText } from './alert.styles';

export const Alert = ({ msg, privacyOpen, clearAlert }) => {
  useEffect(() => {
    if (msg) {
      const timeout = setTimeout(() => clearAlert(), ALERT_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [msg, clearAlert]);

  return (
    <>
      {msg && !privacyOpen && (
        <AlertContainer>
          <AlertText>{msg}</AlertText>
          <BtnPrimary light label="Ok!" onClick={clearAlert} />
        </AlertContainer>
      )}
    </>
  );
};

const mapStateToProps = ({ alert, ui }) => ({
  msg: alert.msg,
  privacyOpen: ui.privacyOpen,
});

export default connect(mapStateToProps, { clearAlert })(Alert);
