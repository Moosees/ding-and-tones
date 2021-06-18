import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { moveBarInArrangement } from '../../redux/song/song.actions';
import Bar from './bar/Bar';
import DropdownHandler from './dropdownHandler/DropdownHandler';
import { Bars } from './songwriter.styles';

const Songwriter = ({ arrangement, borderRef, moveBarInArrangement }) => {
  const listRef = useRef(null);

  return (
    <Bars ref={listRef}>
      <DropdownHandler borderRef={borderRef} listRef={listRef}>
        {arrangement.map((bar, i) => (
          <Bar key={bar} barId={bar} index={i} moveBar={moveBarInArrangement} />
        ))}
      </DropdownHandler>
    </Bars>
  );
};

const mapStateToProps = ({ drum, scale, song }) => ({
  arrangement: song.arrangement,
});

export default connect(mapStateToProps, {
  moveBarInArrangement,
})(Songwriter);
