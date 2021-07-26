import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import BeatDropdown from '../beatDropdown/BeatDropdown';
import { BeatAnchor, BeatCircle, BeatContainer, BeatText } from './beat.styles';

const Beat = ({
  beatId,
  beats,
  count,
  countOpen,
  currentBeat,
  handsOpen,
  isMuted,
  isSongPlaying,
  soundOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const dropdownPosRef = useRef(null);
  const { value, sound, hand } = beats[beatId];
  const isBeatPlaying = beatId === currentBeat;

  useEffect(() => {
    if (isSongPlaying) setIsOpen(false);
  }, [setIsOpen, isSongPlaying]);

  const hasNonScaleNote = !sound.every((hit) => {
    if (!soundOptions.nonScaleMap) return false;
    return !soundOptions.nonScaleMap[hit];
  });

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
            hasNonScaleNote={hasNonScaleNote}
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
              hasNonScaleNote={hasNonScaleNote}
              isOpenCb={setIsOpen}
            />
          )}
        </BeatAnchor>
        {handsOpen && <BeatText>{handShortByValue[hand] || ' '}</BeatText>}
      </>
    </BeatContainer>
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
