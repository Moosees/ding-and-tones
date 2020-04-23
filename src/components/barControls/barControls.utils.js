import { v4 as uuid } from 'uuid';
import { addNewBar } from '../../redux/bars/bars.actions';
import { changeBarInPlace } from '../../redux/song/song.actions';
import { store } from '../../redux/store';

const updateBeatIds = (measure) => {
  return measure.map((beat) =>
    beat.map((part) => ({ ...part, beatId: uuid() }))
  );
};

export const unlinkBar = (barId, arrangementId) => {
  const { bars } = store.getState();

  const newBarId = uuid();
  const barCopy = {
    ...bars[barId],
    measure: updateBeatIds(bars[barId].measure),
  };

  store.dispatch(addNewBar({ [newBarId]: barCopy }));
  store.dispatch(changeBarInPlace(arrangementId, newBarId));
};
