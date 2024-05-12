import React, { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import { setCurrentDropdown } from '../../../redux/song/song.slice';
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
  const scale = useSelector(({ scale }) => scale.parsed.pitched);
  const sound = useSelector(({ song }) => song.beats[beatId].sound);
  const hand = useSelector(({ song }) => song.beats[beatId].hand);
  const countOpen = useSelector(({ song }) => song.ui.countOpen);
  const handsOpen = useSelector(({ song }) => song.ui.handsOpen);
  const currentDropdown = useSelector(({ song }) => song.ui.currentDropdown);
  const currentBeat = useSelector(({ song }) => song.songPlayer.currentBeat);
  const isSongPlaying = useSelector(
    ({ song }) => song.songPlayer.isSongPlaying
  );

  const isBeatPlaying = currentBeat === beatId;
  const isOpen = currentDropdown === beatId;
  const dropdownPosRef = useRef(null);
  const { value, count, tripletStatus, beatStart } = template;

  const nonScaleNotes = useMemo(
    () => getNonScaleNotes(sound, scale),
    [sound, scale]
  );

  const handleOpen = () => {
    if (isSongPlaying) return;

    if (isOpen) {
      dispatch(setCurrentDropdown({ beatId: null }));
      return;
    }

    dispatch(setCurrentDropdown({ beatId: beatId }));
  };

  const handleKeyDown = (e) => {
    if (
      e.code === beatOptionToKeyCode['enter'] ||
      e.code === beatOptionToKeyCode['space']
    ) {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <BeatContainer
      ref={dropdownPosRef}
      $beatStart={beatStart}
      $editSubdivisionsOpen={editSubdivisionsOpen}
    >
      {countOpen && <BeatTextHandCount>{count}</BeatTextHandCount>}
      <BeatAnchor>
        <BeatCircle
          tabIndex={0}
          onClick={handleOpen}
          onKeyDown={handleKeyDown}
          $hasNonScaleNote={!!nonScaleNotes.length}
          $isBeatPlaying={isBeatPlaying}
          $isSongPlaying={isSongPlaying}
          $isMuted={isMuted}
          $value={value}
          $tripletStatus={tripletStatus}
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
