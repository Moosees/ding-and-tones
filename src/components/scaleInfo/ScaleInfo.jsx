import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setScaleName } from '../../redux/scale/scale.actions';
import ButtonMain from '../button/ButtonMain';
import InfoField from '../infoField/InfoField';
import TextInput from '../textInput/TextInput';
import { Buttons, InfoContainer } from './scaleInfo.styles';

const ScaleInfo = ({ name, layout, scale }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <InfoContainer>
        <InfoField label={'Name: ' + name} />
        <InfoField label={scale.join(', ')} />
        <InfoField label={'Layout: ' + layout} />
        <Buttons>
          <ButtonMain label="Edit Info" onClick={() => setIsEditing(true)} />
          <ButtonMain label="Save Scale" />
        </Buttons>
      </InfoContainer>
      {isEditing && (
        <div>
          <TextInput value={name} setValue={setScaleName} />
          <TextInput value={scale} disabled />
          <TextInput value={layout} disabled />
          <ButtonMain label="Confirm" onClick={() => setIsEditing(false)} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ scale }) => ({
  name: scale.name,
  scale: scale.scaleSimple,
  layout: scale.layout,
});

export default connect(mapStateToProps)(ScaleInfo);
