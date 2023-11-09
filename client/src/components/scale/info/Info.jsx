import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { helpTopics } from '../../../assets/help';
import useValidate from '../../../hooks/useValidate';
import {
  newScale,
  saveScale,
  setScaleName,
} from '../../../redux/scale/scale.actions';
import BtnHelp from '../../shared/button/BtnHelp';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/BtnPrimary';
import InfoText from '../../shared/input/InfoText';
import Rotation from '../rotation/Rotation';
import { ScaleInfoContainer, ScaleNotes } from './info.styles';

const Info = () => {
  const dispatch = useDispatch();
  const {
    hasChanges,
    isDeleting,
    isFetching,
    isSaving,
    scaleInfo,
    isSignedIn,
  } = useSelector(({ scale, search, ui, user }) => ({
    hasChanges: scale.ui.hasChanges,
    isDeleting: scale.ui.isDeleting,
    isFetching: scale.ui.isFetching,
    isSaving: scale.ui.isSaving,
    scaleInfo: scale.info,
    isSignedIn: user.isSignedIn,
  }));

  const navigate = useNavigate();

  const [name, handleNameChange, nameErrors, isNameValid, resetName] =
    useValidate('scaleName', scaleInfo.name);

  const handleScaleSave = () => {
    dispatch(saveScale(name));
    navigate('/scale', { replace: true });
  };

  const handleNameSave = () => {
    if (isNameValid) dispatch(setScaleName(name));
  };

  const handleNewScale = () => {
    dispatch(newScale());
    navigate('/scale', { replace: true });
  };

  return (
    <ScaleInfoContainer>
      <Buttons>
        <Rotation />
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
        <BtnHelp topic={helpTopics.SCALE} />
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
    </ScaleInfoContainer>
  );
};

export default Info;
