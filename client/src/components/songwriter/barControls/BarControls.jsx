import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteBar,
  duplicateBar,
  updateBarSubdivisions,
} from '../../../redux/song/song.actions';
import { toggleMuteBar } from '../../../redux/ui/ui.actions';
import BtnIcon from '../../shared/button/BtnIcon';
import Subdivision from '../../shared/metreControls/Subdivision';
import { ControlsContainer } from './barControls.styles';
import { copyBar } from './barControls.utils';

const BarControls = ({ barId, toggleEditSubdivisions }) => {
  const dispatch = useDispatch();
  const { bars, beats, mutedBars } = useSelector(({ song, ui }) => ({
    bars: song.bars,
    beats: song.beats,
    mutedBars: ui.mutedBars,
  }));

  const { metre, subdivisions } = bars[barId];
  const isMuted = mutedBars[barId];

  const handleSetSubdivision = (subdivisionString) => {
    const subdivisions = subdivisionString.split('-').map((s) => parseInt(s));
    dispatch(updateBarSubdivisions(barId, subdivisions));
  };

  return (
    <ControlsContainer>
      <BtnIcon
        small
        title="Duplicate bar"
        icon="content_copy"
        onClick={() => dispatch(duplicateBar(copyBar(barId, bars, beats)))}
      />
      <BtnIcon
        title="Delete bar"
        icon="delete_outline"
        onClick={() => dispatch(deleteBar(barId))}
      />
      <BtnIcon
        title={isMuted ? 'Unmute bar' : 'Mute bar'}
        icon={isMuted ? 'music_off' : 'music_note'}
        onClick={() => dispatch(toggleMuteBar(barId, false))}
      />
      <BtnIcon
        title="Solo bar"
        icon="priority_high"
        onClick={() => dispatch(toggleMuteBar(barId, true))}
      />
      <BtnIcon
        title="Edit subdivisions"
        icon="tune"
        onClick={toggleEditSubdivisions}
      />
      <Subdivision
        small
        type="bar"
        metre={metre}
        subdivision={subdivisions.join('-')}
        setSubdivision={handleSetSubdivision}
      />
    </ControlsContainer>
  );
};

export default BarControls;
