import React, { useEffect, useMemo, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import BeatDropdown from '../beatDropdown/BeatDropdown';
import {
  BeatAnchor,
  BeatCircle,
  BeatContainer,
  BeatTextHandCount,
} from './beat.styles';
import { getNonScaleNotes } from './beat.utils';
import BeatText from './BeatText';

const Beat = ({
  beatId,
  beats,
  countOpen,
  currentBeat,
  editSubdivisionOpen,
  handsOpen,
  isMuted,
  isSongPlaying,
  scale,
  template,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const dropdownPosRef = useRef(null);
  const { sound, hand } = beats[beatId];
  const { value, count, tripletStatus, beatStart } = template;
  const isBeatPlaying = beatId === currentBeat;

  useEffect(() => {
    if (isSongPlaying) setIsOpen(false);
  }, [setIsOpen, isSongPlaying]);

  const nonScaleNotes = useMemo(
    () => getNonScaleNotes(sound, scale),
    [sound, scale]
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
    <BeatContainer
      ref={dropdownPosRef}
      editSubdivisionOpen={editSubdivisionOpen}
      beatStart={beatStart}
    >
      {countOpen && <BeatTextHandCount>{count}</BeatTextHandCount>}
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
          tripletStatus={tripletStatus}
        >
          <BeatText isBeatPlaying={isBeatPlaying} sound={sound} value={value} />
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
      {handsOpen && (
        <BeatTextHandCount>{handShortByValue[hand] || ' '}</BeatTextHandCount>
      )}
    </BeatContainer>
  );
};

const mapStateToProps = ({ scale, song, ui }) => ({
  scale: scale.parsed.pitched,
  beats: song.beats,
  countOpen: ui.countOpen,
  currentBeat: ui.currentBeat,
  handsOpen: ui.handsOpen,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(Beat);
