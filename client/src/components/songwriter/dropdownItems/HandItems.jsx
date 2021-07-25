import React from 'react';
import { connect } from 'react-redux';
import { hands } from '../../../assets/constants';
import { updateHandForBeat } from '../../../redux/song/song.actions';
import { DropdownItem, HandIcon } from './dropdownItems.styles';

const HandItems = ({ beatId, hand, updateHandForBeat }) => {
  const handItems = hands.map(({ name, value }) => {
    const handleClick = () => {
      updateHandForBeat(beatId, value);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        handleClick();
      }
    };

    return (
      <DropdownItem
        tabIndex={0}
        selected={value === hand}
        key={value}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <span>{name}</span>
        <HandIcon className="material-icons">pan_tool</HandIcon>
      </DropdownItem>
    );
  });

  return <>{handItems}</>;
};

export default connect(null, { updateHandForBeat })(HandItems);
