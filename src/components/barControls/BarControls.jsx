import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  deleteBar,
  duplicateBar,
  setBarSubdivision,
} from '../../redux/bars/bars.actions';
import BtnGradient from '../button/Gradient';
import MetreControls from '../metreControls/MetreControls';
import { ControlsContainer, DragHandle } from './barControls.styles';

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

const BarControls = ({
  barId,
  bars,
  beats,
  deleteBar,
  dragRef,
  duplicateBar,
  isDragging,
  isSongPlaying,
  setBarSubdivision,
}) => {
  const { metre, subdivision } = bars[barId];

  return (
    <ControlsContainer>
      <DragHandle
        disabled={isSongPlaying}
        ref={dragRef}
        isDragging={isDragging}
      >
        <i className="material-icons">drag_indicator</i>
      </DragHandle>
      <BtnGradient
        disabled={isSongPlaying}
        label="Copy"
        onClick={() => duplicateBar(copyBar(barId, bars, beats))}
      />
      <BtnGradient
        disabled={isSongPlaying}
        label="Delete"
        onClick={() => deleteBar(barId)}
      />
      <MetreControls
        disabled={isSongPlaying}
        small
        metre={metre}
        subdivision={subdivision}
        setSubdivision={(subdivision) => setBarSubdivision(barId, subdivision)}
      />
    </ControlsContainer>
  );
};

const mapStateToProps = ({ bars, ui }) => ({
  bars: bars.bars,
  beats: bars.beats,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, {
  deleteBar,
  duplicateBar,
  setBarSubdivision,
})(BarControls);
