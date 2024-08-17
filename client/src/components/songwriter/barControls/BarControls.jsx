import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsBarMuted } from '../../../redux/song/song.selectors';
import {
  deleteBar,
  duplicateBar,
  toggleMuteBar,
  updateBarSubdivisions,
} from '../../../redux/song/song.slice';
import BtnIcon from '../../shared/button/BtnIcon';
import Subdivision from '../../shared/metreControls/Subdivision';
import { ControlsContainer } from './barControls.styles';
import { copyBar } from './barControls.utils';

const BarControls = ({ barId, toggleEditSubdivisions }) => {
  const dispatch = useDispatch();
  const metre = useSelector(({ song }) => song.bars[barId].metre);
  const subdivisions = useSelector(({ song }) => song.bars[barId].subdivisions);
  const isMuted = useSelector((state) => selectIsBarMuted(state, barId));

  const handleSetSubdivision = (subdivisionString) => {
    const newSubdivisions = subdivisionString
      .split('-')
      .map((s) => parseInt(s));
    dispatch(updateBarSubdivisions({ barId, newSubdivisions }));
  };

  const handleCopy = () => {
    dispatch(duplicateBar(copyBar(barId)));
  };

  return (
    <ControlsContainer>
      <BtnIcon
        small
        title="Duplicate bar"
        icon="content_copy"
        onClick={handleCopy}
      />
      <BtnIcon
        title="Delete bar"
        icon="delete_outline"
        onClick={() => dispatch(deleteBar({ barId }))}
      />
      <BtnIcon
        title={isMuted ? 'Unmute bar' : 'Mute bar'}
        icon={isMuted ? 'music_off' : 'music_note'}
        onClick={() => dispatch(toggleMuteBar({ barId, solo: false }))}
      />
      <BtnIcon
        title="Solo bar"
        icon="priority_high"
        onClick={() => dispatch(toggleMuteBar({ barId, solo: true }))}
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
