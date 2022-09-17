import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  deleteBar,
  duplicateBar,
  updateBarSubdivisions,
} from '../../../redux/song/song.actions';
import { toggleMuteBar } from '../../../redux/ui/ui.actions';
import BtnIcon from '../../shared/button/Icon';
import Subdivision from '../../shared/metreControls/Subdivision';
import { ControlsContainer } from './barControls.styles';

const copyBar = (barId, bars, beats) => {
  const { measure, subdivisions, metre, repeats } = bars[barId];
  const newBarId = uuid();
  const newBeats = {};
  const newBar = { metre, repeats };

  newBar.subdivisions = [...subdivisions];
  newBar.measure = measure.map((beatId) => {
    const newBeatId = uuid();
    newBeats[newBeatId] = {
      ...beats[beatId],
      sound: [...beats[beatId].sound],
    };

    return newBeatId;
  });

  return { newBarId, newBar, newBeats };
};

const BarControls = ({
  barId,
  bars,
  beats,
  deleteBar,
  duplicateBar,
  isSongPlaying,
  mutedBars,
  toggleEditSubdivisions,
  toggleMuteBar,
  updateBarSubdivisions,
}) => {
  const { metre, subdivisions } = bars[barId];
  const isMuted = mutedBars[barId];

  return (
    <ControlsContainer>
      <BtnIcon
        small
        title="Duplicate bar"
        icon="content_copy"
        onClick={() => duplicateBar(copyBar(barId, bars, beats))}
      />
      <BtnIcon
        title="Delete bar"
        icon="delete_outline"
        onClick={() => deleteBar(barId)}
      />
      <BtnIcon
        title={isMuted ? 'Unmute bar' : 'Mute bar'}
        icon={isMuted ? 'music_off' : 'music_note'}
        onClick={() => toggleMuteBar(barId, false)}
      />
      <BtnIcon
        title="Solo bar"
        icon="priority_high"
        onClick={() => toggleMuteBar(barId, true)}
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
        setSubdivision={(newSubdivision) =>
          updateBarSubdivisions(barId, newSubdivision.split('-'))
        }
      />
    </ControlsContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
  beats: song.beats,
  isSongPlaying: ui.isSongPlaying,
  mutedBars: ui.mutedBars,
});

export default connect(mapStateToProps, {
  deleteBar,
  duplicateBar,
  toggleMuteBar,
  updateBarSubdivisions,
})(BarControls);
