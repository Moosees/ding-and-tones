import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTempoText } from '../../assets/tempo';
import Bar from './bar/Bar';
import {
  Bars,
  Composer,
  Footer,
  SongLayout,
  Tempo,
  Title,
} from './songView.styles';

class PrintView extends Component {
  render() {
    const { arrangement, bpm, composer, headersOpen, title } = this.props;

    const bars = arrangement.map((bar, i) => {
      return <Bar key={bar} barId={bar} prevBar={arrangement[i - 1] || null} />;
    });

    return (
      <SongLayout>
        {headersOpen && (
          <>
            <Title>{title}</Title>
            {composer && composer !== 'Anonymous' && (
              <Composer>Composer: {composer}</Composer>
            )}
            <Tempo>{getTempoText(bpm)}</Tempo>
          </>
        )}
        <Bars>{bars}</Bars>
        <Footer>Drum tab created with DingAndTones.com</Footer>
      </SongLayout>
    );
  }
}

const mapStateToProps = ({ song }) => ({
  arrangement: song.arrangement,
  bpm: song.info.bpm,
  composer: song.refs.composer,
  title: song.info.title,
  headersOpen: song.ui.headersOpen,
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(
  PrintView
);
