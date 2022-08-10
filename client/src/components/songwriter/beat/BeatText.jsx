import { BeatTextBig, BeatTextSmall } from './beat.styles';

const BeatText = ({ isBeatPlaying, sound, value }) => {
  return sound.length < 3 ? (
    <BeatTextSmall value={value}>{sound.join('+')}</BeatTextSmall>
  ) : (
    <BeatTextBig value={value}>
      {sound.map((note) => (
        <span>{note}</span>
      ))}
    </BeatTextBig>
  );
};

export default BeatText;
