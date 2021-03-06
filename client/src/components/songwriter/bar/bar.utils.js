import React from 'react';
import { v4 as uuid } from 'uuid';
import { metreList } from '../../../assets/metre';
import { updateMeasure } from '../../../redux/song/song.actions';
import { store } from '../../../redux/store';
import Beat from '../beat/Beat';

export const displayBeats = (measure, beats, barSubdivision, metre) => {
  const filteredBeats = [];
  const { count } = metreList[metre];

  measure.forEach((beat, i) => {
    const { value } = beats[beat];

    if (value <= barSubdivision)
      filteredBeats.push(<Beat key={beat} beatId={beat} count={count[i]} />);
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
      newBeats[newId] = { sound: ['-'], value: metreValue, mode: 'c' };
    }
  });

  store.dispatch(updateMeasure(barId, newMeasure, newBeats));
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
