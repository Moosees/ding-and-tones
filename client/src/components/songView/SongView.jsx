import React from 'react';
import { useSelector } from 'react-redux';
import { getTempoText } from '../../assets/tempo';
import SongViewControls from '../songControls/SongViewControls';
import Bar from './bar/Bar';
import {
  Bars,
  Composer,
  Header,
  SongLayout,
  Tempo,
  Title,
} from './songView.styles';

const SongView = () => {
  const { arrangement, bpm, composer, title, headersOpen } = useSelector(
    ({ song, ui }) => ({
      arrangement: song.arrangement,
      bpm: song.info.bpm,
      composer: song.ui.composer,
      title: song.info.title,
      headersOpen: ui.headersOpen,
    })
  );

  const bars = arrangement.map((bar, i) => {
    return <Bar key={bar} barId={bar} prevBar={arrangement[i - 1] || null} />;
  });

  return (
    <SongLayout>
      {headersOpen ? (
        <>
          <Header $headersOpen={headersOpen}>
            <div>
              <Title>{title}</Title>
              {composer && composer !== 'Anonymous' && (
                <Composer>Composer: {composer}</Composer>
              )}
            </div>
            <SongViewControls />
          </Header>
          <Tempo>{getTempoText(bpm)}</Tempo>
        </>
      ) : (
        <Header $headersOpen={headersOpen}>
          <SongViewControls />
        </Header>
      )}
      <Bars>{bars}</Bars>
    </SongLayout>
  );
};

export default SongView;
