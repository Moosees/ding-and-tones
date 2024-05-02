import { createDefaultSong } from '../../assets/defaultData';

const defaultSong = createDefaultSong();

export const autoMoveOrderState = defaultSong.autoMoveOrder;

export const arrangementState = defaultSong.arrangement;

export const barsState = defaultSong.bars;

export const beatsState = defaultSong.beats;

export const infoState = defaultSong.info;

export const uiState = {
  composer: null,
  isDeleting: false,
  isFetching: false,
  isSaving: false,
  isOwner: false,
  isPrivate: false,
  songId: null,
  scaleId: null,
  scaleName: '',
  scaleLabel: '',
};
