import React, { useState } from 'react';
import { connect } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { saveUserInfo, toggleAccount } from '../../../redux/user/user.actions';
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
  saveUserInfo,
}) => {
  const [anon, setAnon] = useState(isAnonymous);

  const [username, setUsername, usernameErrors, usernameValid] = useValidate(
    'username',
    name
  );

  const handleSave = () => {
    if (usernameValid) saveUserInfo(username, anon);
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
      <Popup.Flex>
        <BtnPrimary label="Save" onClick={handleSave} />
        <BtnPrimary light label="Cancel" onClick={toggleAccount} />
      </Popup.Flex>
    </Popup>
  );
};

const mapStateToProps = ({ user }) => ({
  isAnonymous: user.isAnonymous,
  name: user.name,
});

export default connect(mapStateToProps, { saveUserInfo, toggleAccount })(
  PopupAccount
);
