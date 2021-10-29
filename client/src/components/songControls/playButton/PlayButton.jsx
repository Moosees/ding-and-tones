import React, { useState } from 'react';
import { connect } from 'react-redux';
import { areHowlsLoaded } from '../../../assets/sound/howler';
import { buildPatternFromSong } from '../../../assets/sound/patternBuilder';
import { playPattern } from '../../../assets/sound/patternPlayer';
import useHowls from '../../../hooks/useHowls';
import { setIsSongPlaying } from '../../../redux/ui/ui.actions';
import BtnPrimary from '../../shared/button/Primary';

const PlayButton = ({ isSongPlaying, light, setIsSongPlaying }) => {
  const [isPreparingSong, setIsPreparingSong] = useState(false);
  const { howlOptionCbs, howlList } = useHowls();

  const handlePlayPause = async () => {
    if (isSongPlaying) {
      setIsSongPlaying(false);
      setIsPreparingSong(false);
      return;
    }

    setIsPreparingSong(true);
    setIsSongPlaying(true);
    const songPattern = buildPatternFromSong(howlOptionCbs);
    await areHowlsLoaded(howlList);
    setIsPreparingSong(false);
    playPattern(songPattern);
  };

  return (
    <BtnPrimary
      light={light}
      onClick={handlePlayPause}
      label={isPreparingSong ? 'Preparing' : isSongPlaying ? 'Stop' : 'Play'}
    />
  );
};

const mapStateToProps = ({ drum, scale, song, ui }) => ({
  isSongPlaying: ui.isSongPlaying,
  allSounds: ui.soundOptions.allSounds,
});

export default connect(mapStateToProps, { setIsSongPlaying })(PlayButton);
