import React from 'react';
import { connect } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { saveUser, toggleAccount } from '../../../redux/user/user.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/infoBox/InfoBox';
import InfoTextEdit from '../../shared/infoBox/InfoTextEdit';
import Popup from '../../shared/popup/Popup';

const PopupAccount = ({ clearNewUser, name, toggleAccount, saveUser }) => {
  const [username, setUsername, errors, usernameValid] = useValidate(
    'username',
    name
  );

  const handleSave = () => {
    if (usernameValid) saveUser(username);
  };

  return (
    <Popup header="Account" onClose={toggleAccount}>
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
    </Popup>
  );
};

const mapStateToProps = ({ user }) => ({
  name: user.name,
});

export default connect(mapStateToProps, { saveUser, toggleAccount })(
  PopupAccount
);
