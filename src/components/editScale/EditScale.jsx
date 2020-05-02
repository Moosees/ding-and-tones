import React from 'react';
import { connect } from 'react-redux';
import {
  addNoteToScale,
  removeNoteFromScale,
} from '../../redux/scale/scale.actions';

const EditScale = ({ scale, addNoteToScale, removeNoteFromScale }) => {
  return (
    <div>
      <button onClick={() => addNoteToScale('D4')}>Add note</button>
      <button onClick={() => removeNoteFromScale('D4')}>Remove note</button>
    </div>
  );
};

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleSimple,
});

export default connect(mapStateToProps, {
  addNoteToScale,
  removeNoteFromScale,
})(EditScale);
