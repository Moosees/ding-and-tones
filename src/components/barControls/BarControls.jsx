import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { deleteBar, duplicateBar } from '../../redux/bars/bars.actions';

const copyBar = (barId, bars, beats) => {
  const newBarId = uuid();
  const newBeats = {};
  const newMeasure = [];

  bars[barId].measure.forEach((beat) => {
    const newBeatId = uuid();
    newBeats[newBeatId] = {
      sound: beats[beat].sound,
      value: beats[beat].value,
    };
    newMeasure.push(newBeatId);
  });
  return { oldBarId: barId, newBarId, newMeasure, newBeats };
};

const BarControls = ({ barId, bars, beats, duplicateBar, deleteBar }) => {
  return (
    <div>
      <button onClick={() => duplicateBar(copyBar(barId, bars, beats))}>
        Duplicate
      </button>
      <button onClick={() => deleteBar(barId)}>Delete</button>
    </div>
  );
};

const mapStateToProps = ({ bars }) => ({
  bars: bars.bars,
  beats: bars.beats,
});

export default connect(mapStateToProps, {
  deleteBar,
  duplicateBar,
})(BarControls);
