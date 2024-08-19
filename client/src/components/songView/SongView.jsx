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
  const arrangement = useSelector(({ song }) => song.arrangement);
  const bpm = useSelector(({ song }) => song.info.bpm);
  const composer = useSelector(({ song }) => song.refs.composer);
  const title = useSelector(({ song }) => song.info.title);
  const headersOpen = useSelector(({ song }) => song.ui.headersOpen);

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
