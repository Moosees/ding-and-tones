import React, { useState } from 'react';
import { connect } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { saveUser, toggleAccount } from '../../../redux/user/user.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoInput from '../../shared/input/InfoInput';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';

const PopupAccount = ({
  clearNewUser,
  isAnonymous,
  name,
  toggleAccount,
  saveUser,
}) => {
  const [anon, setAnon] = useState(isAnonymous);

  const [username, setUsername, usernameErrors, usernameValid] = useValidate(
    'username',
    name
  );

  const handleSave = () => {
    if (usernameValid) saveUser(username, anon);
  };

  return (
    <Popup header="Account" onClose={toggleAccount}>
      <InfoInput
        autoFocus
        large
        editOnly
        handleChange={setUsername}
        isValid={usernameValid}
        label={usernameErrors.length ? usernameErrors[0] : 'Username:'}
        value={username}
      />
      <InfoBox reverse>
        <Checkbox
          reverse
          small
          label="Hide name in searches?"
          checked={anon}
          onChange={() => setAnon(!anon)}
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
