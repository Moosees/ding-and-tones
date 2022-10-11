import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import DropdownHandler from '../beatDropdown/handler/DropdownHandler';
import AddBar from './addBar/AddBar';
import Bar from './bar/Bar';
import { Bars } from './songwriter.styles';

const Songwriter = ({ borderRef }) => {
  const listRef = useRef(null);
  const arrangement = useSelector(({ song }) => song.arrangement);

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

export default Songwriter;
