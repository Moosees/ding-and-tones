import React, { useEffect, lazy } from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../hooks/useDimensions';
import { moveBarInArrangement } from '../../redux/song/song.actions';
import { setSoundOptions } from '../../redux/ui/ui.actions';
import Bar from './bar/Bar';
import { Bars } from './songwriter.styles';

const MouseHandler = lazy(() => import('./dndHandlers/MouseHandler'));
const TouchHandler = lazy(() => import('./dndHandlers/TouchHandler'));

const Songwriter = ({
  arrangement,
  scale,
  setSoundOptions,
  moveBarInArrangement,
}) => {
  const { isTouch } = useDimensions();

  useEffect(() => {
    setSoundOptions(scale);
  }, [scale, setSoundOptions]);

  const DndProvider = isTouch ? TouchHandler : MouseHandler;

  return (
    <DndProvider>
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
