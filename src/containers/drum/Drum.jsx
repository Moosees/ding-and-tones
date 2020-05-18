import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Tonefield from '../../components/tonefield/Tonefield';
import { DrumContainer, DrumSvg } from './drum.styles';
import {
  getChordColor,
  getChordText,
  getNoteColor,
  getNoteText,
  getPositionMap,
} from './drum.utils';

const Drum = ({
  layout,
  scale,
  displayedChord,
  displayedNote,
  showIntervals,
}) => {
  const positionMap = useMemo(() => getPositionMap(layout, scale.length), [
    layout,
    scale,
  ]);

  const tonefields = scale.map((note, i) => (
    <Tonefield
      key={`${note.note}${i}`}
      noteIndex={i}
      isDing={i === 0}
      position={positionMap[i]}
      hasFocus={!displayedChord && i === displayedNote}
      text={
        displayedChord
          ? getChordText(note, displayedChord)
          : getNoteText(i, scale[displayedNote].intervalMap, showIntervals)
      }
      color={
        displayedChord
          ? getChordColor(note, displayedChord)
          : getNoteColor(i, scale[displayedNote].intervalMap)
      }
    />
  ));

  return (
    <DrumContainer>
      <DrumSvg viewBox="-10 -10 20 20" transform="rotate(90)">
        <defs>
          <radialGradient id="drumGradient">
            <stop offset="0%" stop-color="#8998aa" />
            <stop offset="98%" stop-color="#626280" />
            <stop offset="100%" stop-color="#222" />
          </radialGradient>
        </defs>
        <circle r="10" cx="0" cy="0" fill="url(#drumGradient)" />
        {tonefields}
      </DrumSvg>
    </DrumContainer>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  showIntervals: drum.showIntervals,
  layout: scale.layout,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Drum);
