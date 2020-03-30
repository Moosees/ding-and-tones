import React from 'react';
import { connect } from 'react-redux';
import Bar from '../bar/Bar';
import SongControls from '../songControls/SongControls';
import { Bars } from './song.styles';

const Song = ({ bars }) => {
  return (
    <div>
      <SongControls />
      <Bars>
        {bars.map((bar, i) => (
          <Bar key={i} bar={bar} />
        ))}
      </Bars>
    </div>
  );
};

const mapStateToProps = ({ song }) => ({
  bars: song.bars
});

export default connect(mapStateToProps)(Song);
