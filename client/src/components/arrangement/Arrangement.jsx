import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { moveBarInArrangement } from '../../redux/song/song.actions';
import { setSoundOptions } from '../../redux/ui/ui.actions';
import { Bars } from './arrangement.styles';
import { createOptions } from './arrangement.utils';
import Bar from './bar/Bar';

const SongArrangement = ({
  arrangement,
  scale,
  setSoundOptions,
  moveBarInArrangement,
}) => {
  useEffect(() => {
    setSoundOptions(createOptions(scale));
  }, [scale, setSoundOptions]);

  return (
    <DndProvider backend={HTML5Backend}>
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
})(SongArrangement);
