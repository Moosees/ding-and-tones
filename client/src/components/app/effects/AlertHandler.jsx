import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ALERT_TIMEOUT } from '../../../assets/constants';
import { clearAlert } from '../../../redux/alert/alert.actions';
import BtnPrimary from '../../shared/button/Primary';

const AlertContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: 20px;
  bottom: 15%;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  left: 50%;
  opacity: 0.95;
  transform: translateX(-50%);
  padding: 1rem;
  position: absolute;
  z-index: 2000;

  ${({ theme }) => theme.mqW1200`
    background-color: ${theme.colorBox};
    border-radius: 10px;
    border: ${theme.borderMedium};
    padding: 0.7rem;

    @media screen and (orientation: landscape) {
    bottom: 2rem;
  }
  `}
`;

const AlertText = styled.span`
  margin: 0 1rem;
`;

export const AlertHandler = ({ msg, privacyOpen, clearAlert }) => {
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

export default connect(mapStateToProps, { clearAlert })(AlertHandler);
