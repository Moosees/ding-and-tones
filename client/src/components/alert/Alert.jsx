import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_TIMEOUT } from '../../assets/constants';
import { clearAlert } from '../../redux/alert/alert.actions';
import BtnPrimary from '../shared/button/Primary';
import { AlertContainer, AlertText } from './alert.styles';

export const Alert = () => {
  const dispatch = useDispatch();
  const { msg, privacyOpen } = useSelector(({ alert, ui }) => ({
    msg: alert.msg,
    privacyOpen: ui.privacyOpen,
  }));

  useEffect(() => {
    if (msg) {
      const timeout = setTimeout(() => dispatch(clearAlert()), ALERT_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [dispatch, msg]);

  return (
    <>
      {msg && !privacyOpen && (
        <AlertContainer>
          <AlertText>{msg}</AlertText>
          <BtnPrimary
            light
            label="Ok!"
            onClick={() => dispatch(clearAlert())}
          />
        </AlertContainer>
      )}
    </>
  );
};

export default Alert;
