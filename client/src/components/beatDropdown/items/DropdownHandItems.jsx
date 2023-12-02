import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import { updateHandForBeat } from '../../../redux/song/song.actions';
import { DropdownItem, HandIcon } from './dropdownItems.styles';

const DropdownHandItems = ({ beatId, stopTimeout }) => {
  const dispatch = useDispatch();
  const { hand } = useSelector(({ song }) => ({
    hand: song.beats[beatId].hand,
  }));

  const handItems = hands.map(({ name, value }) => {
    const handleClick = () => {
      stopTimeout();
      dispatch(updateHandForBeat(beatId, value));
    };

    const handleKeyDown = (e) => {
      if (
        e.code === beatOptionToKeyCode['enter'] ||
        e.code === beatOptionToKeyCode['space']
      ) {
        e.preventDefault();
        handleClick();
      }
    };

    return (
      <DropdownItem
        tabIndex={0}
        key={value}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        $selected={value === hand}
      >
        <span>{name}</span>
        <HandIcon className="material-icons">pan_tool</HandIcon>
      </DropdownItem>
    );
  });

  return <>{handItems}</>;
};

export default DropdownHandItems;
