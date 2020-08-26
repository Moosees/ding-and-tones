import React from 'react';
import { connect } from 'react-redux';
import Buttons from '../../../components/button/Buttons';
import BtnPrimary from '../../../components/button/Primary';
import InfoBox from '../../../components/infoBox/InfoBox';
import InfoText from '../../../components/infoBox/InfoText';
import useValidate from '../../../hooks/useValidate';
import { saveScale, setScaleName } from '../../../redux/scale/scale.actions';
import { InfoContainer } from './info.styles';

const Info = ({
  isSaving,
  isSignedIn,
  saveScale,
  scale,
  scaleInfo,
  setScaleName,
}) => {
  const [
    name,
    handleNameChange,
    nameErrors,
    isNameValid,
    resetName,
  ] = useValidate('title', scaleInfo.name);

  const handleSave = () => {
    if (isNameValid) setScaleName(name);
  };

  return (
    <InfoContainer>
      <InfoBox>
        <InfoText
          errors={nameErrors}
          handleChange={handleNameChange}
          handleClose={resetName}
          handleSave={handleSave}
          isValid={isNameValid}
          placeholder="Scale name"
          value={name}
        >
          {`Scale: ${scaleInfo.rootName} ${scaleInfo.name}`}
        </InfoText>
      </InfoBox>
      <InfoBox>{scaleInfo.label}</InfoBox>
      <Buttons>
        {isSignedIn && (
          <BtnPrimary
            disabled={isSaving || !isNameValid}
            label="Save Scale"
            onClick={saveScale}
          />
        )}
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ scale, search, user }) => ({
  isSaving: scale.ui.isSaving,
  scale: scale.notes.round,
  scaleInfo: scale.info,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  saveScale,
  setScaleName,
})(Info);
