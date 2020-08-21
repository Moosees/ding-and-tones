import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import useValidate from '../../hooks/useValidate';
import { saveUser, toggleAccount } from '../../redux/user/user.actions';
import Buttons from '../button/Buttons';
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

const PopupAccount = ({ clearNewUser, name, toggleAccount, saveUser }) => {
  const [username, setUsername, errors, usernameValid] = useValidate(
    'username',
    name
  );

  const handleSave = () => {
    if (usernameValid) saveUser(username);
  };

  return (
    <Popup onClose={toggleAccount}>
      <AccountContainer>
        <AccountHeader>Account</AccountHeader>
        <InfoBox>
          <InfoTextEdit
            editOnly
            errors={errors}
            handleChange={setUsername}
            isValid={usernameValid}
            placeholder={'Username'}
            size={22}
            value={username}
          />
        </InfoBox>
        <Buttons position="center">
          <BtnPrimary label="Save" onClick={handleSave} />
          <BtnPrimary light label="Cancel" onClick={toggleAccount} />
        </Buttons>
      </AccountContainer>
    </Popup>
  );
};

const mapStateToProps = ({ user }) => ({
  name: user.name,
});

export default connect(mapStateToProps, { saveUser, toggleAccount })(
  PopupAccount
);
