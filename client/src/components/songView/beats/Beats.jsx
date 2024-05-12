import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import {
  BeatCircle,
  BeatCircleWrapper,
  BeatContainer,
  BeatText,
  BeatTextSpacer,
} from './beats.styles';

const Beats = ({ group }) => {
  const beats = useSelector(({ song }) => song.beats);
  const currentBeat = useSelector(({ song }) => song.songPlayer.currentBeat);
  const countOpen = useSelector(({ song }) => song.ui.countOpen);
  const handsOpen = useSelector(({ song }) => song.ui.handsOpen);

  return (
    <>
      {group.map(
        ({ barStart, beatStart, count, value, tripletStatus, beatId }) => {
          const { sound, hand } = beats[beatId];
          const isBeatPlaying = beatId === currentBeat;

          return (
            <BeatContainer
              key={beatId}
              $barStart={barStart}
              $beatStart={beatStart}
            >
              {countOpen && <BeatText>{count}</BeatText>}
              <BeatCircleWrapper>
                <BeatCircle
                  $isBeatPlaying={isBeatPlaying}
                  $tripletStatus={tripletStatus}
                  $value={value}
                >
                  {sound.map((note, i) => (
                    <Fragment key={i}>
                      <BeatText $length={sound.length}>
                        {note !== '-' ? note : ' '}
                      </BeatText>
                      {sound[i + 1] ? <BeatTextSpacer>∘</BeatTextSpacer> : null}
                    </Fragment>
                  ))}
                </BeatCircle>
              </BeatCircleWrapper>
              {handsOpen && (
                <BeatText>{handShortByValue[hand] || ' '}</BeatText>
              )}
            </BeatContainer>
          );
        }
      )}
    </>
  );
};

export default Beats;
