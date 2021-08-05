import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { helpTopics } from '../../../assets/help';
import useValidate from '../../../hooks/useValidate';
import { saveScale, setScaleName } from '../../../redux/scale/scale.actions';
import Buttons from '../../shared/button/Buttons';
import Help from '../../shared/button/Help';
import BtnPrimary from '../../shared/button/Primary';
import InfoText from '../../shared/input/InfoText';
import { ScaleInfoContainer, ScaleLabel } from './info.styles';

const Info = ({
  hasChanges,
  isDeleting,
  isFetching,
  isSaving,
  isSignedIn,
  saveScale,
  scale,
  scaleInfo,
  setScaleName,
}) => {
  const { replace } = useHistory();

  const [name, handleNameChange, nameErrors, isNameValid, resetName] =
    useValidate('title', scaleInfo.name);

  const handleScaleSave = () => {
    saveScale(name);
    replace('/scale');
  };

  const handleNameSave = () => {
    if (isNameValid) setScaleName(name);
  };

  return (
    <ScaleInfoContainer>
      <Buttons>
        <Help topic={helpTopics.SCALE} />
        <BtnPrimary
          disabled={
            !isSignedIn ||
            isDeleting ||
            isFetching ||
            isSaving ||
            !isNameValid ||
            !hasChanges
          }
          label="Save Scale"
          onClick={handleScaleSave}
        />
      </Buttons>
      <InfoText
        handleChange={handleNameChange}
        handleClose={resetName}
        handleSave={handleNameSave}
        isValid={isNameValid}
        label={nameErrors.length ? nameErrors[0] : 'Scale name:'}
        value={name}
      >
        {`${scaleInfo.rootName} ${scaleInfo.name}`}
      </InfoText>
      <ScaleLabel>{scaleInfo.label}</ScaleLabel>
    </ScaleInfoContainer>
  );
};

const mapStateToProps = ({ scale, search, ui, user }) => ({
  hasChanges: scale.ui.hasChanges,
  isDeleting: scale.ui.isDeleting,
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
