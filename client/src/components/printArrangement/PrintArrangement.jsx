import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTempoText } from '../../assets/tempo';
import Bar from './bar/Bar';
import {
  Bars,
  Composer,
  Footer,
  PrintLayout,
  Tempo,
  Title,
} from './printArrangement.styles';

class PrintArrangement extends Component {
  render() {
    const { arrangement, bpm, composer, title } = this.props;

    const bars = arrangement.map((bar, i) => {
      return <Bar key={bar} barId={bar} prevBar={arrangement[i - 1] || null} />;
    });

    return (
      <PrintLayout>
        <Title>{title}</Title>
        {composer && composer !== 'Anonymous' && (
          <Composer>Composer: {composer}</Composer>
        )}
        <Tempo>{getTempoText(bpm)}</Tempo>
        <Bars>{bars}</Bars>
        <Footer>Drum tab created with DingAndTones.com</Footer>
      </PrintLayout>
    );
  }
}

const mapStateToProps = ({ song }) => ({
  arrangement: song.arrangement,
  bpm: song.info.bpm,
  composer: song.ui.composer,
  title: song.info.title,
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(
  PrintArrangement
);
