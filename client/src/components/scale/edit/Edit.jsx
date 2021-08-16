import React from 'react';
import { connect } from 'react-redux';
import {
  toggleExtraNotes,
  toggleExtraPosEdit,
} from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import Checkbox from '../../shared/checkbox/Checkbox';
import Move from '../move/Move';
import Notes from '../notes/Notes';
import { EditContainer, EditContent, TextLabel } from './edit.styles';

const Edit = ({
  addExtraNotes,
  extra,
  isEditingExtraPos,
  isSongPlaying,
  toggleExtraNotes,
  toggleExtraPosEdit,
}) => {
  return (
    <EditContainer>
      <EditContent>{isEditingExtraPos ? <Move /> : <Notes />}</EditContent>
      <Buttons position="center">
        <Checkbox
          asBtn
          light
          label="Add"
          checked={addExtraNotes}
          onChange={toggleExtraNotes}
        />
        <Checkbox
          asBtn
          light
          label="Move"
          disabled={!extra.length}
          checked={isEditingExtraPos}
          onChange={toggleExtraPosEdit}
        />
      </Buttons>
      <TextLabel>Extra/Bottom Notes</TextLabel>
    </EditContainer>
  );
};

const mapStateToProps = ({ scale, ui }) => ({
  extra: scale.notes.extra,
  addExtraNotes: ui.addExtraNotes,
  isEditingExtraPos: ui.isEditingExtraPos,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  toggleExtraNotes,
  toggleExtraPosEdit,
})(Edit);
