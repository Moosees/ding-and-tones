import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { moveBarInArrangement } from '../../redux/bars/bars.actions';
import { setOptions } from '../../redux/ui/ui.actions';
import Bar from '../bar/Bar';
import { Bars } from './songArrangement.styles';
import { createOptions } from './songArrangement.utils';

const SongArrangement = ({
  arrangement,
  scale,
  setOptions,
  moveBarInArrangement,
}) => {
  useEffect(() => {
    setOptions(createOptions(scale));
  }, [scale, setOptions]);

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

const mapStateToProps = ({ scale, bars }) => ({
  scale: scale.scaleSimple,
  arrangement: bars.arrangement,
});

export default connect(mapStateToProps, { setOptions, moveBarInArrangement })(
  SongArrangement
);
