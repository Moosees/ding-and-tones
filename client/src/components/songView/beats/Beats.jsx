import React from 'react';
import { handShortByValue } from '../../../assets/constants';
import {
  BeatCircle,
  BeatCircleWrapper,
  BeatContainer,
  BeatText,
  BeatTextSpacer,
} from './beats.styles';

const Beats = () => {
  // const filteredBeats = measure.reduce((acc, beatId, i) => {
  //   const { count, value, tripletStatus } = barTemplate[i];
  //   const { sound, hand } = beats[beatId];
  //   const isBeatPlaying = beatId === currentBeat;

  //   acc.push(
  //     <BeatContainer key={beatId} value={value}>
  //       {countOpen && <BeatText>{count}</BeatText>}
  //       <BeatCircleWrapper>
  //         <BeatCircle
  //           isBeatPlaying={isBeatPlaying}
  //           value={value}
  //           tripletStatus={tripletStatus}
  //         >
  //           {sound.map((note, i) => (
  //             <Fragment key={i}>
  //               <BeatText length={sound.length}>
  //                 {note !== '-' && note}
  //               </BeatText>
  //               {sound[i + 1] ? <BeatTextSpacer>∘</BeatTextSpacer> : null}
  //             </Fragment>
  //           ))}
  //         </BeatCircle>
  //       </BeatCircleWrapper>
  //       {handsOpen && <BeatText>{handShortByValue[hand] || ' '}</BeatText>}
  //     </BeatContainer>
  //   );

  //   return acc;
  // }, []);

  return <div>Beats</div>;
};

export default Beats;
