import React, { useEffect, useMemo, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import BeatDropdown from '../beatDropdown/BeatDropdown';
import { BeatAnchor, BeatCircle, BeatContainer, BeatText } from './beat.styles';
import { getNonScaleNotes } from './beat.utils';

const Beat = ({
  beatId,
  beats,
  count,
  countOpen,
  currentBeat,
  handsOpen,
  isMuted,
  isSongPlaying,
  scaleFull,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const dropdownPosRef = useRef(null);
  const { value, sound, hand } = beats[beatId];
  const isBeatPlaying = beatId === currentBeat;

  useEffect(() => {
    if (isSongPlaying) setIsOpen(false);
  }, [setIsOpen, isSongPlaying]);

  const nonScaleNotes = useMemo(
    () => getNonScaleNotes(sound, scaleFull),
    [sound, scaleFull]
  );

  const handleOpen = () => {
    if (!isSongPlaying) setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <BeatContainer ref={dropdownPosRef} value={value}>
      <>
        {countOpen && <BeatText>{count}</BeatText>}
        <BeatAnchor>
          <BeatCircle
            tabIndex={0}
            ref={btnRef}
            hasNonScaleNote={!!nonScaleNotes.length}
            isLocked={isSongPlaying}
            isBeatPlaying={isBeatPlaying}
            isSongPlaying={isSongPlaying}
            isMuted={isMuted}
            value={value}
            onClick={handleOpen}
            onKeyDown={handleKeyDown}
          >
            <BeatText isBeatPlaying={isBeatPlaying} value={value}>
              {sound.join('+')}
            </BeatText>
          </BeatCircle>
          {isOpen && (
            <BeatDropdown
              dropdownPosRef={dropdownPosRef}
              btnRef={btnRef}
              beatId={beatId}
              nonScaleNotes={nonScaleNotes}
              isOpenCb={setIsOpen}
            />
          )}
        </BeatAnchor>
        {handsOpen && <BeatText>{handShortByValue[hand] || ' '}</BeatText>}
      </>
    </BeatContainer>
  );
};

const mapStateToProps = ({ scale, song, ui }) => ({
  scaleFull: scale.notes.scaleFull,
  beats: song.beats,
  countOpen: ui.countOpen,
  currentBeat: ui.currentBeat,
  handsOpen: ui.handsOpen,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(Beat);
