import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  deleteBar,
  duplicateBar,
  updateBarSubdivision,
} from '../../../redux/song/song.actions';
import { toggleMuteBar } from '../../../redux/ui/ui.actions';
import BtnIcon from '../../shared/button/Icon';
import Subdivision from '../../shared/metreControls/Subdivision';
import { ControlsContainer } from './barControls.styles';

const copyBar = (barId, bars, beats) => {
  const newBarId = uuid();
  const newBeats = {};
  const newMeasure = [];

  bars[barId].measure.forEach(({ beatId, count, value }) => {
    let newBeatId = null;

    if (beatId) {
      newBeatId = uuid();
      newBeats[newBeatId] = {
        ...beats[beatId],
        sound: [...beats[beatId].sound],
      };
    }
    newMeasure.push({ beatId: newBeatId, count, value });
  });
  return { oldBarId: barId, newBarId, newMeasure, newBeats };
};

const BarControls = ({
  barId,
  bars,
  beats,
  deleteBar,
  duplicateBar,
  isSongPlaying,
  mutedBars,
  toggleMuteBar,
  updateBarSubdivision,
}) => {
  const { metre, subdivision } = bars[barId];
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
      <Subdivision
        small
        isBar
        metre={metre}
        subdivision={subdivision.join('-')}
        setSubdivision={(newSubdivision) =>
          updateBarSubdivision(barId, newSubdivision.split('-'))
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
  updateBarSubdivision,
})(BarControls);
