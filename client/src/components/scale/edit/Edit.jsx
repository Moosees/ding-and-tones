import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Buttons from '../../shared/button/Buttons';
import Checkbox from '../../shared/checkbox/Checkbox';
import Move from '../move/Move';
import Notes from '../notes/Notes';
import { EditContainer, EditContent, TextLabel } from './edit.styles';

const Edit = () => {
  const extraLength = useSelector(({ scale }) => scale.notes.extra.length);

  const [isAddingExtraNotes, setIsAddingExtraNotes] = useState(false);
  const [isEditingExtraPos, setIsEditingExtraPos] = useState(false);

  useEffect(() => {
    if (!isEditingExtraPos || extraLength > 0) return;

    setIsEditingExtraPos(false);
  }, [isEditingExtraPos, extraLength]);

  return (
    <EditContainer>
      <EditContent>
        {isEditingExtraPos ? (
          <Move />
        ) : (
          <Notes isAddingExtraNotes={isAddingExtraNotes} />
        )}
      </EditContent>
      <Buttons>
        <Checkbox
          asBtn
          light
          label="Add"
          checked={isAddingExtraNotes}
          onChange={() => setIsAddingExtraNotes((isAdding) => !isAdding)}
        />
        <Checkbox
          asBtn
          light
          label="Move"
          disabled={extraLength === 0}
          checked={isEditingExtraPos}
          onChange={() => setIsEditingExtraPos((isEditing) => !isEditing)}
        />
      </Buttons>
      <TextLabel>Extra/Bottom Notes</TextLabel>
    </EditContainer>
  );
};

export default Edit;
