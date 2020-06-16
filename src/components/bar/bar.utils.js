import React from 'react';
import { v4 as uuid } from 'uuid';
import { metreList } from '../../metre.data';
import { updateMeasureAndBeats } from '../../redux/bars/bars.actions';
import { store } from '../../redux/store';
import Beat from '../beat/Beat';

export const displayBeats = (measure, beats, barSubdivision) => {
  const filteredBeats = [];

  measure.forEach((beat) => {
    const { value } = beats[beat];

    if (value <= barSubdivision)
      filteredBeats.push(<Beat key={beat} beatId={beat} />);
  });

  return filteredBeats;
};

const updateBeats = (barId, measure, beats, barSubdivision, barMetre) => {
  let beatIndex = 0;
  const newMeasure = [];
  const newBeats = {};

  metreList[barMetre].template.forEach((metreValue) => {
    const barBeat = measure[beatIndex];

    if (barBeat && beats[barBeat].value === metreValue) {
      newMeasure.push(barBeat);
      ++beatIndex;
    } else {
      const newId = uuid();
      newMeasure.push(newId);
      newBeats[newId] = { sound: 'P', value: metreValue };
    }
  });

  store.dispatch(updateMeasureAndBeats(barId, newMeasure, newBeats));
};

export const checkMeasureVsMetre = (
  barId,
  measure,
  beats,
  barSubdivision,
  barMetre
) => {
  if (measure.length < metreList[barMetre].subdivisionCount[barSubdivision]) {
    updateBeats(barId, measure, beats, barSubdivision, barMetre);
  }
};
