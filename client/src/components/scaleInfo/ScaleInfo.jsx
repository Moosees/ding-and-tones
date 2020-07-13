import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alert/alert.actions';
import { setScaleName } from '../../redux/scale/scale.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoText from '../infoBox/InfoText';
import { InfoContainer } from './scaleInfo.styles';

const ScaleInfo = ({
  isSaveable,
  isSignedIn,
  label,
  layout,
  name,
  scale,
  setAlert,
  setScaleName,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    axios
      .post('/scale', { name, label, layout, scale: { round: scale } })
      .then((res) => {
        if (res.status === 200) {
          setAlert(`"${res.data.name}" saved`);
          setIsSaving(false);
        }
      })
      .catch((error) => {
        setAlert('Save failed');
        setIsSaving(false);
      });
  };

  return (
    <InfoContainer>
      <InfoBox>
        <InfoText
          placeholder="Scale name"
          type="title"
          value={name}
          handleChange={setScaleName}
        >
          {'Scale: ' + name}
        </InfoText>
      </InfoBox>
      <InfoBox>{label}</InfoBox>
      <Buttons>
        {isSignedIn && (
          <BtnPrimary
            disabled={!isSaveable || isSaving}
            label="Save Scale"
            onClick={handleSave}
          />
        )}
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ scale, search, ui, user }) => ({
  label: scale.label,
  layout: scale.layout,
  name: scale.name,
  scale: scale.scaleSimple,
  isSaveable: ui.isSaveable,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  setAlert,
  setScaleName,
})(ScaleInfo);
