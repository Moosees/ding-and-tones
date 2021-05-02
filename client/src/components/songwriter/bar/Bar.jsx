import React, { useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { connect } from 'react-redux';
import { ItemTypes } from '../../../assets/constants';
import BarControls from '../barControls/BarControls';
import BarInfo from '../barInfo/BarInfo';
import Beat from '../beat/Beat';
import { BarContainer, Beats } from './bar.styles';
import { checkMeasure, filterBeats } from './bar.utils';

const Bar = ({
  barId,
  bars,
  currentBar,
  index,
  isSongPlaying,
  moveBar,
  mutedBars,
}) => {
  const { measure, subdivision } = bars[barId];
  const isMuted = mutedBars[barId];

  useEffect(() => {
    checkMeasure(barId, measure, subdivision);
  }, [barId, measure, subdivision]);

  const filteredBeats = filterBeats(measure, subdivision);

  // react DnD
  const ref = useRef(null);
  const [, drop] = useDrop(() => ({
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
  }));

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    item: { type: ItemTypes.BAR, barId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  preview(drop(ref));

  return (
    <BarContainer isDragging={isDragging} ref={ref}>
      <BarInfo
        barId={barId}
        index={index}
        dragRef={drag}
        isDragging={isDragging}
      />
      {filteredBeats.length && (
        <Beats isMuted={isMuted} isPlaying={barId === currentBar}>
          {filteredBeats.map((beat) => (
            <Beat
              key={beat.beatId}
              isMuted={isMuted}
              beatId={beat.beatId}
              count={beat.count}
            />
          ))}
        </Beats>
      )}
      <BarControls barId={barId} />
    </BarContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
  currentBar: ui.currentBar,
  isSongPlaying: ui.isSongPlaying,
  mutedBars: ui.mutedBars,
});

export default connect(mapStateToProps)(Bar);
