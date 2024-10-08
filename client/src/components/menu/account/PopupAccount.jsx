import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useValidate from '../../../hooks/useValidate';
import { useSaveUserInfoMutation } from '../../../redux/api/api.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoInput from '../../shared/input/InfoInput';
import InfoBox from '../../shared/layout/InfoBox';
import Popup from '../../shared/popup/Popup';

const PopupAccount = ({ onClose }) => {
  const anonymous = useSelector(({ user }) => user.anonymous);
  const name = useSelector(({ user }) => user.name);
  const [saveUserInfo] = useSaveUserInfoMutation();

  const [anon, setAnon] = useState(anonymous);

  const [username, setUsername, usernameErrors, usernameValid] = useValidate(
    'username',
    name,
  );

  const handleSave = () => {
    if (!usernameValid) return;
    if (username !== name || anon !== anonymous) {
      saveUserInfo({
        name: username,
        anonymous: anon,
      });
    }

    onClose();
  };

  return (
    <Popup header="Account" onClose={onClose}>
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
        <BtnPrimary light label="Cancel" onClick={onClose} />
      </Popup.Flex>
    </Popup>
  );
};

export default PopupAccount;
