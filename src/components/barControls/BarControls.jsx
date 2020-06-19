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
  setBarSubdivision,
}) => {
  const { metre, subdivision } = bars[barId];

  return (
    <ControlsContainer>
      <DragHandle ref={dragRef} isDragging={isDragging}>
        <i className="material-icons">drag_indicator</i>
      </DragHandle>
      <BtnGradient
        label="Copy"
        onClick={() => duplicateBar(copyBar(barId, bars, beats))}
      />
      <BtnGradient label="Delete" onClick={() => deleteBar(barId)} />
      <MetreControls
        small
        metre={metre}
        subdivision={subdivision}
        setSubdivision={(subdivision) => setBarSubdivision(barId, subdivision)}
      />
    </ControlsContainer>
  );
};

const mapStateToProps = ({ bars }) => ({
  bars: bars.bars,
  beats: bars.beats,
});

export default connect(mapStateToProps, {
  deleteBar,
  duplicateBar,
  setBarSubdivision,
})(BarControls);
