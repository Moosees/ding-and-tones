// import { v4 as uuid } from 'uuid';
// import { updateMeasure } from '../../../redux/song/song.actions';
// import { store } from '../../../redux/store';

// export const checkMeasure = (barId, measure, subdivision) => {
//   let updateState = false;
//   const newBeats = {};
//   const newMeasure = measure.map((beat) => {
//     if (beat.beatId || beat.value > subdivision) return beat;

//     updateState = true;
//     const newId = uuid();
//     newBeats[newId] = { sound: ['-'], value: beat.value, mode: 'c' };

//     return { ...beat, beatId: newId };
//   });

//   updateState && store.dispatch(updateMeasure(barId, newMeasure, newBeats));
// };
