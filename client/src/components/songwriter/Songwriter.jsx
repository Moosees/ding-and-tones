import React, { lazy, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../hooks/useDimensions';
import { moveBarInArrangement } from '../../redux/song/song.actions';
import { setSoundOptions } from '../../redux/ui/ui.actions';
import Bar from './bar/Bar';
import DropdownHandler from './dropdownHandler/DropdownHandler';
import { Bars } from './songwriter.styles';

const MouseHandler = lazy(() => import('./dndHandlers/MouseHandler'));
const TouchHandler = lazy(() => import('./dndHandlers/TouchHandler'));

const Songwriter = ({
  arrangement,
  borderRef,
  moveBarInArrangement,
  scale,
  setSoundOptions,
}) => {
  const listRef = useRef(null);
  const { isTouch } = useDimensions();

  useEffect(() => {
    setSoundOptions(scale);
  }, [scale, setSoundOptions]);

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

const mapStateToProps = ({ scale, song }) => ({
  scale: scale.notes.round,
  arrangement: song.arrangement,
});

export default connect(mapStateToProps, {
  setSoundOptions,
  moveBarInArrangement,
})(Songwriter);
