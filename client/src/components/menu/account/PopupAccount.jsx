import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { toggleAccount } from '../../../redux/user/user.actions';
import { useSaveUserInfoMutation } from '../../../redux/user/userSlice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoInput from '../../shared/input/InfoInput';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';

const PopupAccount = () => {
  const dispatch = useDispatch();
  const isAnonymous = useSelector(({ user }) => user.isAnonymous);
  const name = useSelector(({ user }) => user.name);
  const [saveUserInfo] = useSaveUserInfoMutation();

  const [anon, setAnon] = useState(isAnonymous);

  const [username, setUsername, usernameErrors, usernameValid] = useValidate(
    'username',
    name
  );

  const handleToggleAccount = () => {
    dispatch(toggleAccount());
  };

  const handleSave = () => {
    if (!usernameValid) return;
    if (username === name && anon === isAnonymous) {
      return handleToggleAccount();
    }

    saveUserInfo({
      name: username,
      anonymous: anon,
    });
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
          onChange={() => setAnon((anon) => !anon)}
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
