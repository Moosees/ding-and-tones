import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Dropdown } from './toneInput.styles';

//disabled if song is playing
const ToneInput = ({ handleChange, isSongPlaying, options, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(true)}>
      <span>{selected}</span>
      {isOpen && <Dropdown>dropdown</Dropdown>}
    </div>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
  options: ui.options,
});

export default connect(mapStateToProps)(ToneInput);
