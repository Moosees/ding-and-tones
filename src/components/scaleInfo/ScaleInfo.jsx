import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setScaleName } from '../../redux/scale/scale.actions';
import TextInput from '../textInput/TextInput';
import { Button, Buttons, InfoContainer, InfoField } from './scaleInfo.styles';

const ScaleInfo = ({ name, layout, scale }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <InfoContainer>
        <InfoField>{name}</InfoField>
        <InfoField>{scale.join(', ')}</InfoField>
        <InfoField>{layout}</InfoField>
        <Buttons>
          <Button onClick={() => setIsEditing(true)}>Edit Info</Button>
          <Button>Save Scale</Button>
        </Buttons>
      </InfoContainer>
      {isEditing && (
        <div>
          <TextInput value={name} setValue={setScaleName} />
          <TextInput value={scale} disabled />
          <TextInput value={layout} disabled />
          <button onClick={() => setIsEditing(false)}>Confirm</button>
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
