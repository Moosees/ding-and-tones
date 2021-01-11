import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { connect } from 'react-redux';
import { moveBarInArrangement } from '../../redux/song/song.actions';
import { setSoundOptions } from '../../redux/ui/ui.actions';
import { Bars } from './songwriter.styles';
import Bar from './bar/Bar';

const Songwriter = ({
  arrangement,
  scale,
  setSoundOptions,
  moveBarInArrangement,
}) => {
  useEffect(() => {
    setSoundOptions(scale);
  }, [scale, setSoundOptions]);

  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  return (
    <DndProvider backend={isTouch ? TouchBackend : HTML5Backend}>
      <Bars>
        {arrangement.map((bar, i) => (
          <Bar key={bar} barId={bar} index={i} moveBar={moveBarInArrangement} />
        ))}
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
