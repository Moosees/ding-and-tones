import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ALERT_TIMEOUT } from '../../../assets/constants';
import { setAlert } from '../../../redux/alert/alert.actions';
import BtnPrimary from '../../shared/button/Primary';

const AlertContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: 20px;
  bottom: 20%;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  left: 50%;
  opacity: 0.95;
  transform: translateX(-50%);
  padding: 1rem;
  position: absolute;
  z-index: 9999;

  ${({ theme }) => theme.mqW1000`
    background-color: ${theme.colorBox};
    border-radius: 10px;
    border: ${theme.borderMedium};
    bottom: 3.5rem;
    padding: 0.7rem;
  `}
`;

const AlertText = styled.span`
  margin: 0 1rem;
`;

export const AlertHandler = ({ msg, privacyOpen, setAlert }) => {
  useEffect(() => {
    if (msg) {
      const timeout = setTimeout(() => setAlert(''), ALERT_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [msg, setAlert]);

  return (
    <>
      {msg && !privacyOpen && (
        <AlertContainer>
          <AlertText>{msg}</AlertText>
          <BtnPrimary light label="Ok!" onClick={() => setAlert(null)} />
        </AlertContainer>
      )}
    </>
  );
};

const mapStateToProps = ({ alert, ui }) => ({
  msg: alert.msg,
  privacyOpen: ui.privacyOpen,
});

export default connect(mapStateToProps, { setAlert })(AlertHandler);
