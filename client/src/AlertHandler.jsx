import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BtnPrimary from './components/button/Primary';
import { ALERT_TIMEOUT } from './constants';
import { setAlert } from './redux/alert/alert.actions';

const AlertContainer = styled.div`
  border: 1px solid #000;
  bottom: 5rem;
  left: 5rem;
  position: absolute;
`;

export const AlertHandler = ({ msg, setAlert }) => {
  useEffect(() => {
    if (msg) {
      const timeout = setTimeout(() => setAlert(null), ALERT_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [msg, setAlert]);

  return (
    <>
      {msg && (
        <AlertContainer>
          {msg}
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
