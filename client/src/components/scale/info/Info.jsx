import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { helpTopics } from '../../../assets/help';
import useValidate from '../../../hooks/useValidate';
import { createAlert } from '../../../redux/alert/alert.slice';
import { useSaveScaleMutation } from '../../../redux/api/api.slice';
import {
  selectScaleLength,
  selectScaleName,
} from '../../../redux/scale/scale.selectors';
import { newScale, setScaleName } from '../../../redux/scale/scale.slice';
import BtnHelp from '../../shared/button/BtnHelp';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import InfoText from '../../shared/input/InfoText';
import Rotation from '../rotation/Rotation';
import { ScaleInfoContainer, ScaleNotes } from './info.styles';

const Info = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ scale }) => scale.notes);
  const scaleLength = useSelector(selectScaleLength);
  const info = useSelector(({ scale }) => scale.info);
  const scaleLabel = useSelector(({ scale }) => scale.info.label);
  const scaleNameShort = useSelector(({ scale }) => scale.info.name);
  const scaleName = useSelector(selectScaleName);
  const hasChanges = useSelector(({ scale }) => scale.ui.hasChanges);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);

  const [saveScale, { isLoading: isSaving }] = useSaveScaleMutation();

  const navigate = useNavigate();

  const [name, handleNameChange, nameErrors, isNameValid, resetName] =
    useValidate('scaleName', scaleNameShort);

  const handleScaleSave = async () => {
    if (scaleLength < 5) {
      return dispatch(
        createAlert({ alert: 'Scale needs at least five notes' }),
      );
    }

    const scaleUpdate = {
      info: { ...info },
      notes,
    };

    if (isNameValid && name) {
      scaleUpdate.info.name = name;
    }
    const res = await saveScale({ scaleUpdate }).unwrap();
    if (!res.scale?.scaleId) return;

    navigate(`/scale/${res.scale.scaleId}`, { replace: true });
  };

  const handleNameSave = () => {
    if (isNameValid) dispatch(setScaleName({ name }));
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
          disabled={isSaving}
          label="New Scale"
          onClick={handleNewScale}
          light
        />
        <BtnPrimary
          disabled={!isSignedIn || isSaving || !isNameValid || !hasChanges}
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
        {scaleName}
      </InfoText>
      <ScaleNotes>
        <span>Notes:</span>
        {scaleLabel}
      </ScaleNotes>
    </ScaleInfoContainer>
  );
};

export default Info;
