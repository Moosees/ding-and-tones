import React from 'react';
import { connect } from 'react-redux';
import { transposeScale } from '../../../redux/scale/scale.actions';
import {
  toggleExtraNotes,
  toggleExtraPosEdit,
} from '../../../redux/ui/ui.actions';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import Checkbox from '../../shared/checkbox/Checkbox';
import DividerLine from '../../shared/dividerLine/DividerLine';
import Move from '../move/Move';
import Notes from '../notes/Notes';
import { EditContainer, TextLabel } from './edit.styles';

const Edit = ({
  addExtraNotes,
  extra,
  isEditingExtraPos,
  isSongPlaying,
  toggleExtraNotes,
  toggleExtraPosEdit,
  transposeScale,
}) => {
  return (
    <EditContainer>
      {isEditingExtraPos ? (
        <Move />
      ) : (
        <>
          <TextLabel>Transpose Scale</TextLabel>
          <Buttons position="center">
            <BtnPrimary
              disabled={isSongPlaying}
              label="- 8va"
              light
              onClick={() => transposeScale(-12)}
            />
            <BtnPrimary
              disabled={isSongPlaying}
              label="Down"
              light
              onClick={() => transposeScale(-1)}
            />
            <BtnPrimary
              disabled={isSongPlaying}
              label="Up"
              light
              onClick={() => transposeScale(1)}
            />
            <BtnPrimary
              disabled={isSongPlaying}
              label="+ 8va"
              light
              onClick={() => transposeScale(12)}
            />
          </Buttons>
          <DividerLine small />
          <Notes />
        </>
      )}
      <DividerLine small />
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
  transposeScale,
})(Edit);
