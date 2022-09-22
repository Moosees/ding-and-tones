import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class SongView extends Component {
  render() {
    const { arrangement, bpm, composer, headersOpen, title } = this.props;

    const bars = arrangement.map((bar, i) => {
      return <Bar key={bar} barId={bar} prevBar={arrangement[i - 1] || null} />;
    });

    return (
      <SongLayout>
        {headersOpen ? (
          <>
            <Header headersOpen={headersOpen}>
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
          <Header headersOpen={headersOpen}>
            <SongViewControls />
          </Header>
        )}
        <Bars>{bars}</Bars>
      </SongLayout>
    );
  }
}

const mapStateToProps = ({ song, ui }) => ({
  arrangement: song.arrangement,
  bpm: song.info.bpm,
  composer: song.ui.composer,
  title: song.info.title,
  headersOpen: ui.headersOpen,
});

export default connect(mapStateToProps)(SongView);
