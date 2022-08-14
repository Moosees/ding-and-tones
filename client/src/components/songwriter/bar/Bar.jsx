import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBarTemplate } from '../../../assets/metre';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import { BarContainer, Beats } from './bar.styles';
import { checkMeasure, filterBeats } from './bar.utils';

const Bar = ({
  barId,
  bars,
  currentBar,
  index,
  isSongPlaying,
  moveBar,
  mutedBars,
}) => {
  const { measure, metre, subdivision } = bars[barId];
  const isMuted = mutedBars[barId];

  const bartemplate = createBarTemplate(metre, subdivision);

  return <div>'Bar'</div>;

  // useEffect(() => {
  //   checkMeasure(barId, measure, subdivision);
  // }, [barId, measure, subdivision]);

  // const filteredBeats = filterBeats(measure, subdivision);

  // return (
  //   <BarContainer>
  //     <BarInfo barId={barId} index={index} />
  //     {filteredBeats.length && (
  //       <Beats isMuted={isMuted} isPlaying={barId === currentBar}>
  //         {filteredBeats.map((beat) => (
  //           <Beat
  //             key={beat.beatId}
  //             isMuted={isMuted}
  //             beatId={beat.beatId}
  //             count={beat.count}
  //           />
  //         ))}
  //       </Beats>
  //     )}
  //     <BarControls barId={barId} />
  //   </BarContainer>
  // );
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
  currentBar: ui.currentBar,
  isSongPlaying: ui.isSongPlaying,
  mutedBars: ui.mutedBars,
});

export default connect(mapStateToProps)(Bar);
