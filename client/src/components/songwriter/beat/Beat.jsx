import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import {
  BeatAnchor,
  BeatContainer,
  BeatText,
  HandContainer,
} from './beat.styles';
import BeatDropdown from './BeatDropdown';

const Beat = ({
  beatId,
  beats,
  currentBeat,
  handsOpen,
  isSongPlaying,
  soundOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const { value, sound, hand } = beats[beatId];
  const isBeatPlaying = beatId === currentBeat;

  useEffect(() => {
    if (isSongPlaying) setIsOpen(false);
  }, [setIsOpen, isSongPlaying]);

  const hasNonScaleNote = !sound.every((hit) => {
    const numericHit = Number(hit);
    return isNaN(numericHit) || numericHit < soundOptions.numNotesInScale;
  });

  const handleOpen = () => {
    if (!isSongPlaying) setIsOpen(!isOpen);
  };

  return (
    <BeatAnchor>
      <>
        <BeatContainer
          ref={btnRef}
          hasNonScaleNote={hasNonScaleNote}
          isLocked={isSongPlaying}
          isBeatPlaying={isBeatPlaying}
          isSongPlaying={isSongPlaying}
          value={value}
          onClick={handleOpen}
        >
          <BeatText isBeatPlaying={isBeatPlaying} value={value}>
            {sound.join('+')}
          </BeatText>
        </BeatContainer>
        {handsOpen && <HandContainer>{handShortByValue[hand]}</HandContainer>}
      </>
      {isOpen && (
        <BeatDropdown
          btnRef={btnRef}
          beatId={beatId}
          sound={sound}
          hasNonScaleNote={hasNonScaleNote}
          isOpenCb={setIsOpen}
        />
      )}
    </BeatAnchor>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  beats: song.beats,
  currentBeat: ui.currentBeat,
  handsOpen: ui.handsOpen,
  isSongPlaying: ui.isSongPlaying,
  soundOptions: ui.soundOptions,
});

export default connect(mapStateToProps)(Beat);
