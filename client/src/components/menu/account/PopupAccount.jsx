import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { saveUserInfo, toggleAccount } from '../../../redux/user/user.actions';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoInput from '../../shared/input/InfoInput';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';

const PopupAccount = ({ clearNewUser }) => {
  const dispatch = useDispatch();
  const { isAnonymous, name } = useSelector(({ user }) => ({
    isAnonymous: user.isAnonymous,
    name: user.name,
  }));

  const [anon, setAnon] = useState(isAnonymous);

  const [username, setUsername, usernameErrors, usernameValid] = useValidate(
    'username',
    name
  );

  const handleSave = () => {
    if (usernameValid) dispatch(saveUserInfo(username, anon));
  };

  const handleToggleAccount = () => {
    dispatch(toggleAccount());
  };

  return (
    <Popup header="Account" onClose={handleToggleAccount}>
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
          label="Show name as composer?"
          checked={!anon}
          onChange={() => setAnon((val) => !val)}
        />
      </InfoBox>
      <Popup.Flex>
        <BtnPrimary label="Save" onClick={handleSave} />
        <BtnPrimary light label="Cancel" onClick={handleToggleAccount} />
      </Popup.Flex>
    </Popup>
  );
};

export default PopupAccount;
