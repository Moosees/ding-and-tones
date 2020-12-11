import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {
  deleteBar,
  duplicateBar,
  updateBarSubdivision
} from '../../../redux/song/song.actions';
import { toggleMuteBar } from '../../../redux/ui/ui.actions';
import BtnGradient from '../../shared/button/Gradient';
import BtnIcon from '../../shared/button/Icon';
import Subdivision from '../../shared/metreControls/Subdivision';
import { ControlsContainer } from './barControls.styles';

const copyBar = (barId, bars, beats) => {
  const newBarId = uuid();
  const newBeats = {};
  const newMeasure = [];

  bars[barId].measure.forEach((beat) => {
    const newBeatId = uuid();
    newBeats[newBeatId] = {
      sound: beats[beat].sound,
      value: beats[beat].value,
      mode: beats[beat].mode,
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
      <BtnGradient
        disabled={isSongPlaying}
        label="Copy"
        onClick={() => duplicateBar(copyBar(barId, bars, beats))}
      />
      <BtnGradient
        disabled={isSongPlaying}
        label="Delete"
        onClick={() => deleteBar(barId)}
      />
      <Subdivision
        gradient
        metre={metre}
        subdivision={subdivision}
        setSubdivision={(subdivision) =>
          updateBarSubdivision(barId, subdivision)
        }
      />
      <BtnIcon
        title={isMuted ? 'Unmute bar' : 'Mute bar'}
        icon={isMuted ? 'music_off' : 'music_note'}
        onClick={() => toggleMuteBar(barId)}
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
