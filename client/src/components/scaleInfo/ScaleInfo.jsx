import React from 'react';
import { connect } from 'react-redux';
import { saveScale, setScaleName } from '../../redux/scale/scale.actions';
import Buttons from '../button/Buttons';
import BtnPrimary from '../button/Primary';
import InfoBox from '../infoBox/InfoBox';
import InfoText from '../infoBox/InfoText';
import { InfoContainer } from './scaleInfo.styles';

const ScaleInfo = ({
  isSaving,
  isSaveable,
  isSignedIn,
  label,
  layout,
  name,
  saveScale,
  scale,
  setScaleName,
}) => {
  const handleSave = () => {
    saveScale({ name, label, layout, scale: { round: scale } });
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
        {isSignedIn && isSaveable && (
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

const mapStateToProps = ({ scale, search, ui, user }) => ({
  isSaving: scale.isSaving,
  label: scale.label,
  layout: scale.layout,
  name: scale.name,
  scale: scale.scale.round,
  isSaveable: ui.isSaveable,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  saveScale,
  setScaleName,
})(ScaleInfo);
