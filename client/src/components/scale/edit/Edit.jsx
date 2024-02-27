import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleExtraNotes,
  toggleExtraPosEdit,
} from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import Checkbox from '../../shared/checkbox/Checkbox';
import Move from '../move/Move';
import Notes from '../notes/Notes';
import { EditContainer, EditContent, TextLabel } from './edit.styles';

const Edit = () => {
  const dispatch = useDispatch();
  const extra = useSelector(({ scale }) => scale.notes.extra);
  const isAddingExtraNotes = useSelector(({ ui }) => ui.isAddingExtraNotes);
  const isEditingExtraPos = useSelector(({ ui }) => ui.isEditingExtraPos);

  return (
    <EditContainer>
      <EditContent>{isEditingExtraPos ? <Move /> : <Notes />}</EditContent>
      <Buttons>
        <Checkbox
          asBtn
          light
          label="Add"
          checked={isAddingExtraNotes}
          onChange={() => dispatch(toggleExtraNotes())}
        />
        <Checkbox
          asBtn
          light
          label="Move"
          disabled={!extra.length}
          checked={isEditingExtraPos}
          onChange={() => dispatch(toggleExtraPosEdit())}
        />
      </Buttons>
      <TextLabel>Extra/Bottom Notes</TextLabel>
    </EditContainer>
  );
};

export default Edit;
