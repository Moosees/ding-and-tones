import { useEffect } from 'react';
import { connect } from 'react-redux';
import useKeysPlayDrum from '../../../hooks/useKeysPlayDrum';
import { setSoundOptions } from '../../../redux/ui/ui.actions';

const SoundHandler = ({ audioPath, notes, setSoundOptions }) => {
  useKeysPlayDrum();

  useEffect(() => {
    setSoundOptions(notes.round, notes.extra);
  }, [audioPath, notes.round, notes.extra, setSoundOptions]);

  return null;
};

const mapStateToProps = ({ drum, scale }) => ({
  audioPath: drum.audioPath,
  notes: scale.notes,
});

export default connect(mapStateToProps, { setSoundOptions })(SoundHandler);
