import React, { useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { connect } from 'react-redux';
import { ItemTypes } from '../../constants';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import { BarContainer, Beats } from './bar.styles';
import { checkMeasureVsMetre, displayBeats } from './bar.utils';

const Bar = ({
  barId,
  bars,
  beats,
  currentBar,
  index,
  isEditingSong,
  isSongPlaying,
  moveBar,
}) => {
  const { measure, subdivision, metre } = bars[barId];

  useEffect(() => {
    checkMeasureVsMetre(barId, measure, beats, subdivision, metre);
  }, [barId, measure, beats, subdivision, metre]);

  const filteredBeats = displayBeats(measure, beats, subdivision);

  // react DnD
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.BAR,
    hover(item, monitor) {
      if (!ref.current || isSongPlaying) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) return;

      moveBar(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BAR, barId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  preview(drop(ref));

  return (
    <BarContainer isDragging={isDragging} ref={ref}>
      {isEditingSong ? (
        <BarControls barId={barId} dragRef={drag} isDragging={isDragging} />
      ) : (
        <BarInfo barId={barId} />
      )}
      {filteredBeats && (
        <Beats isPlaying={barId === currentBar}>{filteredBeats}</Beats>
      )}
    </BarContainer>
  );
};

const mapStateToProps = ({ bars, ui }) => ({
  bars: bars.bars,
  beats: bars.beats,
  currentBar: ui.currentBar,
  isEditingSong: ui.isEditingSong,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(Bar);
