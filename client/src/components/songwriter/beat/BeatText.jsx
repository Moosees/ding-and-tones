import { Fragment } from 'react';
import { BeatTextNote, BeatTextSpacer } from './beat.styles';

const BeatText = ({ isBeatPlaying, sound, value }) => {
  return sound.map((note, i) => (
    <Fragment key={i}>
      <BeatTextNote value={value} length={sound.length}>
        {note}
      </BeatTextNote>
      {!sound[i + 1] ? null : (
        <BeatTextSpacer length={sound.length}>∘</BeatTextSpacer>
      )}
    </Fragment>
  ));
};

export default BeatText;
