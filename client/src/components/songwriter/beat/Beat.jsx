import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { BeatAnchor, BeatContainer, BeatText } from './beat.styles';
import BeatDropdown from './BeatDropdown';

const Beat = ({
  beatId,
  beats,
  count,
  countOpen,
  currentBeat,
  handsOpen,
  isSongPlaying,
  soundOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);
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
    <BeatAnchor ref={anchorRef}>
      <>
        {countOpen && <div>{count}</div>}
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
        {handsOpen && <div>{handShortByValue[hand]}</div>}
      </>
      {isOpen && (
        <BeatDropdown
          anchorRef={anchorRef}
          btnRef={btnRef}
          beatId={beatId}
          hand={hand}
          sound={sound}
          hasNonScaleNote={hasNonScaleNote}
          isOpenCb={setIsOpen}
          value={value}
        />
      )}
    </BeatAnchor>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  beats: song.beats,
  countOpen: ui.countOpen,
  currentBeat: ui.currentBeat,
  handsOpen: ui.handsOpen,
  isSongPlaying: ui.isSongPlaying,
  soundOptions: ui.soundOptions,
});

export default connect(mapStateToProps)(Beat);
