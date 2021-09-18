import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSoundOptions } from '../../../redux/ui/ui.actions';

const SoundOptions = ({ audioPath, notes, setSoundOptions }) => {
  useEffect(() => {
    setSoundOptions(notes.round, notes.extra);
  }, [audioPath, notes.round, notes.extra, setSoundOptions]);

  return null;
};

const mapStateToProps = ({ drum, scale }) => ({
  audioPath: drum.audioPath,
  notes: scale.notes,
});

export default connect(mapStateToProps, { setSoundOptions })(SoundOptions);
