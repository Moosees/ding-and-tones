import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from './bar/Bar';
import {
  Composer,
  Footer,
  PrintLayout,
  Tempo,
  Title,
} from './printArrangement.styles';

class PrintArrangement extends Component {
  render() {
    const { arrangement, bpm, composer, title } = this.props;

    return (
      <PrintLayout>
        <Title>{title}</Title>
        {composer && <Composer>Composer: {composer}</Composer>}
        <Tempo>{bpm} bpm</Tempo>
        <div>
          {arrangement.map((bar, i) => (
            <Bar key={bar} barId={bar} />
          ))}
        </div>
        <Footer>Made with dingandtones.com</Footer>
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
