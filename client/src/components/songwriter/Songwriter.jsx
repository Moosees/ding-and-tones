import React, { useRef } from 'react';
import { connect } from 'react-redux';
import AddBar from './addBar/AddBar';
import Bar from './bar/Bar';
import DropdownHandler from './dropdownHandler/DropdownHandler';
import { Bars } from './songwriter.styles';

const Songwriter = ({ arrangement, borderRef }) => {
  const listRef = useRef(null);
  console.log('SONGWRITER')

  return (
    <Bars ref={listRef}>
      <DropdownHandler borderRef={borderRef} listRef={listRef}>
        {arrangement.map((barId, i) => (
          <Bar key={barId} barId={barId} barIndex={i} />
        ))}
        <AddBar key="addBar" />
      </DropdownHandler>
    </Bars>
  );
};

const mapStateToProps = ({ drum, scale, song }) => ({
  arrangement: song.arrangement,
});

export default connect(mapStateToProps)(Songwriter);
