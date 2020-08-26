import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ALERT_TIMEOUT } from '../../assets/constants';
import { setAlert } from '../../redux/alert/alert.actions';
import BtnPrimary from '../button/Primary';

const AlertContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 10px;
  bottom: 5rem;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  left: 50%;
  opacity: 0.8;
  padding: 0.7rem;
  position: absolute;
`;

const AlertText = styled.span`
  font-size: ${({ theme }) => theme.fzSmall};
  /* text-transform: uppercase; */
  margin: 0 1rem;
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
