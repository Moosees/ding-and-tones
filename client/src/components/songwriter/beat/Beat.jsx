import React, { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { setCurrentDropdown } from '../../../redux/ui/ui.actions';
import BeatDropdown from '../../beatDropdown/BeatDropdown';
import BeatText from './BeatText';
import {
  BeatAnchor,
  BeatCircle,
  BeatContainer,
  BeatTextHandCount,
} from './beat.styles';
import { getNonScaleNotes } from './beat.utils';

const Beat = ({ beatId, editSubdivisionsOpen, isMuted, template }) => {
  const dispatch = useDispatch();
  const {
    scale,
    beats,
    countOpen,
    currentBeat,
    handsOpen,
    isSongPlaying,
    isOpen,
  } = useSelector(({ scale, song, ui }) => ({
    scale: scale.parsed.pitched,
    beats: song.beats,
    countOpen: ui.countOpen,
    currentBeat: ui.currentBeat,
    handsOpen: ui.handsOpen,
    isSongPlaying: ui.isSongPlaying,
    isOpen: ui.currentDropdown === beatId,
  }));

  const dropdownPosRef = useRef(null);
  const { sound, hand } = beats[beatId];
  const { value, count, tripletStatus, beatStart } = template;
  const isBeatPlaying = beatId === currentBeat;

  const nonScaleNotes = useMemo(
    () => getNonScaleNotes(sound, scale),
    [sound, scale]
  );

  const handleOpen = () => {
    if (isSongPlaying) return;

    dispatch(setCurrentDropdown(beatId));
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
      editSubdivisionsOpen={editSubdivisionsOpen}
      beatStart={beatStart}
    >
      {countOpen && <BeatTextHandCount>{count}</BeatTextHandCount>}
      <BeatAnchor>
        <BeatCircle
          tabIndex={0}
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
            beatId={beatId}
            nonScaleNotes={nonScaleNotes}
          />
        )}
      </BeatAnchor>
      {handsOpen && (
        <BeatTextHandCount>{handShortByValue[hand] || ' '}</BeatTextHandCount>
      )}
    </BeatContainer>
  );
};

export default Beat;
