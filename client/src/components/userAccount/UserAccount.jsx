import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import useValidate from '../../hooks/useValidate';
import Buttons from '../button/Buttons';
import BtnControls from '../button/Controls';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoTextEdit from '../infoBox/InfoTextEdit';
import Popup from '../popup/Popup';

const AccountContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fzMedium};
  justify-content: center;
`;

const AccountHeader = styled.h2`
  font-size: ${({ theme }) => theme.fzHeader};
  padding: 1rem;
`;

const UserAccount = ({ newUser }) => {
  const [accountOpen, setAccountOpen] = useState(true);

  const [userName, setUserName, errors, isUserNameValid] = useValidate('title');

  const handleClose = () => {
    setAccountOpen(false);
  };

  const handleSave = () => {
    if (isUserNameValid) console.log('valid username');
  };

  return (
    <>
      <BtnControls
        reverse
        label="Account"
        icon="person_outline"
        onClick={() => setAccountOpen(true)}
      />
      {(accountOpen || newUser) && (
        <Popup onClose={handleClose}>
          <AccountContainer>
            <AccountHeader>Account</AccountHeader>
            <InfoBox>
              <InfoTextEdit
                editOnly
                errors={errors}
                placeholder={'Username'}
                value={userName}
                handleChange={setUserName}
                isValid={isUserNameValid}
              />
            </InfoBox>
            <Buttons position="center">
              <BtnPrimary label="Save" onClick={handleSave} />
              <BtnPrimary light label="Cancel" onClick={handleClose} />
            </Buttons>
          </AccountContainer>
        </Popup>
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  newUser: user.newUser,
});

export default connect(mapStateToProps)(UserAccount);
