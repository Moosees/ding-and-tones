import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useValidate from '../../../hooks/useValidate';
import { saveScale, setScaleName } from '../../../redux/scale/scale.actions';
import { toggleMutant } from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import InfoText from '../../shared/input/InfoText';
import InfoBox from '../../shared/layout/InfoBox';
import { ScaleInfoContainer, ScaleLabel } from './info.styles';

const Info = ({
  addMutant,
  isDeleting,
  isFetching,
  isSaving,
  isSignedIn,
  saveScale,
  scale,
  scaleInfo,
  setScaleName,
  toggleMutant,
}) => {
  const { replace } = useHistory();

  const [
    name,
    handleNameChange,
    nameErrors,
    isNameValid,
    resetName,
  ] = useValidate('title', scaleInfo.name);

  const handleScaleSave = () => {
    saveScale({ name });
    replace('/scale');
  };

  const handleNameSave = () => {
    if (isNameValid) setScaleName(name);
  };

  return (
    <ScaleInfoContainer>
      <InfoText
        handleChange={handleNameChange}
        handleClose={resetName}
        handleSave={handleNameSave}
        isValid={isNameValid}
        placeholder={nameErrors.length ? nameErrors[0] : 'Scale name:'}
        value={name}
      >
        {`Scale: ${scaleInfo.rootName} ${scaleInfo.name}`}
      </InfoText>
      <InfoBox>
        <ScaleLabel>{scaleInfo.label}</ScaleLabel>
      </InfoBox>
      <Buttons>
        <Checkbox
          asBtn
          label="Mutant notes"
          checked={addMutant}
          onChange={toggleMutant}
        />
        <BtnPrimary
          disabled={
            !isSignedIn || isDeleting || isFetching || isSaving || !isNameValid
          }
          label="Save Scale"
          onClick={handleScaleSave}
        />
      </Buttons>
    </ScaleInfoContainer>
  );
};

const mapStateToProps = ({ scale, search, ui, user }) => ({
  isDeleting: scale.ui.isDeleting,
  isFetching: scale.ui.isFetching,
  isSaving: scale.ui.isSaving,
  scale: scale.notes.round,
  scaleInfo: scale.info,
  addMutant: ui.addMutant,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  saveScale,
  setScaleName,
  toggleMutant,
})(Info);
