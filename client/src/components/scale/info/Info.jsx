import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useValidate from '../../../hooks/useValidate';
import { saveScale, setScaleName } from '../../../redux/scale/scale.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoBox from '../../shared/infoBox/InfoBox';
import InfoText from '../../shared/infoBox/InfoText';
import { InfoContainer } from './info.styles';

const Info = ({
  isFetching,
  isSaving,
  isSignedIn,
  saveScale,
  scale,
  scaleInfo,
  setScaleName,
}) => {
  const { push } = useHistory();

  const [
    name,
    handleNameChange,
    nameErrors,
    isNameValid,
    resetName,
  ] = useValidate('title', scaleInfo.name);

  const handleScaleSave = () => {
    push('/scale');
    saveScale();
  };

  const handleNameSave = () => {
    if (isNameValid) setScaleName(name);
  };

  return (
    <InfoContainer>
      <InfoBox>
        <InfoText
          errors={nameErrors}
          handleChange={handleNameChange}
          handleClose={resetName}
          handleSave={handleNameSave}
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
            disabled={isSaving || isFetching || !isNameValid}
            label="Save Scale"
            onClick={handleScaleSave}
          />
        )}
      </Buttons>
    </InfoContainer>
  );
};

const mapStateToProps = ({ scale, search, user }) => ({
  isFetching: scale.ui.isFetching,
  isSaving: scale.ui.isSaving,
  scale: scale.notes.round,
  scaleInfo: scale.info,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  saveScale,
  setScaleName,
})(Info);
