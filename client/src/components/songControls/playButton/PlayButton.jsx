import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buildPatternFromSong } from '../../../assets/sound/patternBuilder';
import { playPattern } from '../../../assets/sound/patternPlayer';
import { createAlert } from '../../../redux/alert/alert.actions';
import { areHowlsLoaded } from '../../../redux/howls/howls.utils';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';

const PlayButton = ({
  createAlert,
  howls,
  howlOptionCbs,
  isSongPlaying,
  light,
  setIsSongPlaying,
}) => {
  const [isPreparingSong, setIsPreparingSong] = useState(false);

  const handlePlayPause = () => {
    if (isSongPlaying) {
      setIsSongPlaying(false);
      setIsPreparingSong(false);
      return;
    }

    setIsPreparingSong(true);
    setIsSongPlaying(true);
    const songPattern = buildPatternFromSong(howlOptionCbs);

    areHowlsLoaded(howls)
      .then(() => {
        setIsPreparingSong(false);
        playPattern(songPattern);
      })
      .catch((error) => {
        setIsPreparingSong(false);
        setIsSongPlaying(false);
        createAlert(error);
      });
  };

  return (
    <BtnPrimary
      light={light}
      onClick={handlePlayPause}
      label={isPreparingSong ? 'Preparing' : isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ howls, ui }) => ({
  howls: howls.all,
  howlOptionCbs: howls.optionCbs,
  isSongPlaying: ui.isSongPlaying,
  allSounds: ui.soundOptions.allSounds,
});

export default connect(mapStateToProps, { createAlert, setIsSongPlaying })(
  PlayButton
);
