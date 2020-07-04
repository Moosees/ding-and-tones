import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alert/alert.actions';
import { setScaleName } from '../../redux/scale/scale.actions';
import { setScalesFound } from '../../redux/search/search.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoText from '../infoBox/InfoText';
import { InfoContainer } from './scaleInfo.styles';

const ScaleInfo = ({
  isSignedIn,
  label,
  layout,
  name,
  scale,
  scalesFound,
  setAlert,
  setScaleName,
  setScalesFound,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);

    axios
      .post('/scale', { name, label, layout, scale: { round: scale } })
      .then((res) => {
        if (res.status !== 201) throw new Error('Could not save scale');
        //do something to show that scale is saved
        setScalesFound([res.data, ...scalesFound]);
        setIsSaving(false);
        setAlert(`${name} saved`);
      })
      .catch((error) => {
        setIsSaving(false);
        setAlert('Save failed');
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
            disabled={isSaving}
            label="Save Scale"
            onClick={handleSave}
          />
        )}
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ scale, search, user }) => ({
  label: scale.label,
  layout: scale.layout,
  name: scale.name,
  scale: scale.scaleSimple,
  scalesFound: search.scalesFound,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  setAlert,
  setScaleName,
  setScalesFound,
})(ScaleInfo);
