import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { helpTopics } from '../../../assets/help';
import useValidate from '../../../hooks/useValidate';
import {
  newScale,
  saveScale,
  setScaleName,
} from '../../../redux/scale/scale.actions';
import Buttons from '../../shared/button/Buttons';
import Help from '../../shared/button/Help';
import BtnPrimary from '../../shared/button/Primary';
import InfoText from '../../shared/input/InfoText';
import InfoBox from '../../shared/layout/InfoBox';
import Rotation from '../rotation/Rotation';
import { ScaleInfoContainer, ScaleNotes } from './info.styles';

const Info = ({
  hasChanges,
  isDeleting,
  isFetching,
  isSaving,
  isSignedIn,
  newScale,
  saveScale,
  scaleInfo,
  setScaleName,
}) => {
  const navigate = useNavigate();

  const [name, handleNameChange, nameErrors, isNameValid, resetName] =
    useValidate('scaleName', scaleInfo.name);

  const handleScaleSave = () => {
    saveScale(name);
    navigate('/scale', { replace: true });
  };

  const handleNameSave = () => {
    if (isNameValid) setScaleName(name);
  };

  const handleNewScale = () => {
    newScale();
    navigate('/scale', { replace: true });
  };

  return (
    <ScaleInfoContainer>
      <Buttons>
        <BtnPrimary
          disabled={isDeleting || isFetching || isSaving}
          label="New Scale"
          onClick={handleNewScale}
          light
        />
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
        <Help topic={helpTopics.SCALE} />
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
      <ScaleNotes>
        <span>Notes:</span>
        {scaleInfo.label}
      </ScaleNotes>
      <InfoBox label="Rotation:">
        <Rotation />
      </InfoBox>
    </ScaleInfoContainer>
  );
};

const mapStateToProps = ({ scale, search, ui, user }) => ({
  hasChanges: scale.ui.hasChanges,
  isDeleting: scale.ui.isDeleting,
  isFetching: scale.ui.isFetching,
  isSaving: scale.ui.isSaving,
  scaleInfo: scale.info,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, {
  newScale,
  saveScale,
  setScaleName,
})(Info);
