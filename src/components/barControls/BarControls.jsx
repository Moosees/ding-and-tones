import React from 'react';
import { connect } from 'react-redux';
import { setBarMetre, setBarSubdivision } from '../../redux/bars/bars.actions';
import {
  copyBarToEnd,
  copyBarToNext,
  deleteBarFromSong,
} from '../../redux/song/song.actions';
import { unlinkBar } from './barControls.utils';

const BarControls = ({
  bar,
  copyBarToEnd,
  copyBarToNext,
  deleteBarFromSong,
}) => {
  const { barId, arrangementId } = bar;

  return (
    <div>
      <button onClick={() => copyBarToNext(barId, arrangementId)}>
        Copy to next
      </button>
      <button onClick={() => copyBarToEnd(barId)}>Copy to end</button>
      {/* disable if bar is not linked */}
      <button disabled={false} onClick={() => unlinkBar(barId, arrangementId)}>
        Unlink bar
      </button>
      <button onClick={() => deleteBarFromSong(arrangementId)}>
        Delete bar
      </button>
    </div>
  );
};
const mapStateToProps = ({ bars }) => ({
  bars,
});

export default connect(mapStateToProps, {
  setBarSubdivision,
  setBarMetre,
  copyBarToEnd,
  copyBarToNext,
  deleteBarFromSong,
})(BarControls);
