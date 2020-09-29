import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ALERT_TIMEOUT } from '../../assets/constants';
import { setAlert } from '../../redux/alert/alert.actions';
import BtnPrimary from '../shared/button/Primary';

const AlertContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: 20px;
  bottom: 5rem;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  left: 50%;
  opacity: 0.95;
  transform: translateX(-50%);
  padding: 1rem;
  position: absolute;

  ${({ theme }) => theme.mqMedium`
    bottom: 3rem;
  `}

  ${({ theme }) => theme.mqSmaller`
    background-color: ${theme.colorBox};
    bottom: 2rem;
    border-radius: 10px;
    border: ${theme.borderMedium};
    padding: 0.7rem;
  `}
`;

const AlertText = styled.span`
  font-size: ${({ theme }) => theme.fzMedium};
  margin: 0 1rem;

  ${({ theme }) => theme.mqSmaller`
    font-size: ${({ theme }) => theme.fzSmall};
  `}
`;

export const AlertHandler = ({ msg, setAlert }) => {
  useEffect(() => {
    if (msg) {
      const timeout = setTimeout(() => setAlert(''), ALERT_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [msg, setAlert]);

  return (
    <>
      {msg && (
        <AlertContainer>
          <AlertText>{msg}</AlertText>
          <BtnPrimary light label="Ok!" onClick={() => setAlert(null)} />
        </AlertContainer>
      )}
    </>
  );
};

const mapStateToProps = ({ alert }) => ({
  msg: alert.msg,
});

export default connect(mapStateToProps, { setAlert })(AlertHandler);
