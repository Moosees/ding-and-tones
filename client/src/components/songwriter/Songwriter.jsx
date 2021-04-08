import React, { lazy, useRef } from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../hooks/useDimensions';
import { moveBarInArrangement } from '../../redux/song/song.actions';
import Bar from './bar/Bar';
import DropdownHandler from './dropdownHandler/DropdownHandler';
import { Bars } from './songwriter.styles';

const MouseHandler = lazy(() => import('./dndHandlers/MouseHandler'));
const TouchHandler = lazy(() => import('./dndHandlers/TouchHandler'));

const Songwriter = ({ arrangement, borderRef, moveBarInArrangement }) => {
  const listRef = useRef(null);
  const { isTouch } = useDimensions();

  const DndProvider = isTouch ? TouchHandler : MouseHandler;

  return (
    <DndProvider>
      <Bars ref={listRef}>
        <DropdownHandler borderRef={borderRef} listRef={listRef}>
          {arrangement.map((bar, i) => (
            <Bar
              key={bar}
              barId={bar}
              index={i}
              moveBar={moveBarInArrangement}
            />
          ))}
        </DropdownHandler>
      </Bars>
    </DndProvider>
  );
};

const mapStateToProps = ({ drum, scale, song }) => ({
  arrangement: song.arrangement,
});

export default connect(mapStateToProps, {
  moveBarInArrangement,
})(Songwriter);
