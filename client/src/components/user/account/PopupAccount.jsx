import React, { useState } from 'react';
import { connect } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { saveUser, toggleAccount } from '../../../redux/user/user.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoBox from '../../shared/infoBox/InfoBox';
import InfoTextEdit from '../../shared/infoBox/InfoTextEdit';
import Popup from '../../shared/popup/Popup';

const PopupAccount = ({
  clearNewUser,
  isAnonymous,
  name,
  toggleAccount,
  saveUser,
}) => {
  const [anon, setAnon] = useState(isAnonymous);

  const [username, setUsername, errors, usernameValid] = useValidate(
    'username',
    name
  );

  const handleAnon = (e) => {
    setAnon(e.target.anon);
  };

  const handleSave = () => {
    if (usernameValid) saveUser(username);
  };

  return (
    <Popup header="Account" onClose={toggleAccount}>
      <InfoBox>
        <Checkbox
          reverse
          label="Hide name in searches"
          checked={anon}
          onChange={handleAnon}
          style={{ marginRight: '0.5rem' }}
        />
      </InfoBox>
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
  isAnonymous: user.isAnonymous,
  name: user.name,
});

export default connect(mapStateToProps, { saveUser, toggleAccount })(
  PopupAccount
);
