import React from 'react';
import { connect } from 'react-redux';
import { helpTopics } from '../../assets/help';
import useDimensions from '../../hooks/useDimensions';
import Buttons from '../shared/button/Buttons';
import BtnHelp from '../shared/button/Help';
import DividerLine from '../shared/dividerLine/DividerLine';
import ScrollBox from '../shared/scrollBox/ScrollBox';
import PlayButton from '../songControls/playButton/PlayButton';
import ChordInterval from './ChordInterval';
import DrumMode from './DrumMode';
import { IntervalList } from './intervals.styles';
import ScaleInterval from './ScaleInterval';

const Intervals = ({ displayedChord, displayedNote, scale, sharpNotes }) => {
  const { isMobile } = useDimensions();

  const getIntervals = () => {
    if (!scale.length) {
      return null;
    }

    return displayedChord
      ? displayedChord.intervals.map((interval, i) => (
          <ChordInterval
            key={i}
            interval={interval}
            note={displayedChord.notes[i]}
            sharpNotes={sharpNotes}
          />
        ))
      : scale[displayedNote].intervalMap.map((interval, i) => {
          const { option } = scale[i];

          return (
            <ScaleInterval
              key={i}
              scaleIndex={i}
              interval={interval}
              option={option}
              sharpNotes={sharpNotes}
            />
          );
        });
  };

  return (
    <IntervalList>
      <Buttons>
        {isMobile && <PlayButton light />}
        <BtnHelp topic={helpTopics.INTERVALS} />
      </Buttons>
      <DrumMode />
      <DividerLine small />
      <ScrollBox>{getIntervals()}</ScrollBox>
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  sharpNotes: scale.info.sharpNotes,
  scale: scale.parsed.pitched,
});

export default connect(mapStateToProps)(Intervals);
