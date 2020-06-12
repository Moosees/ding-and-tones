import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dropdown, InputContainer } from './toneInput.styles';

//disabled if song is playing
const ToneInput = ({ isSongPlaying, options, sound, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <>
      <InputContainer
        isOpen={isOpen}
        onClick={() => (isSongPlaying ? null : setIsOpen(true))}
      >
        <span>{sound}</span>
      </InputContainer>
      {isOpen && !isSongPlaying && (
        <Dropdown>
          {options.single &&
            options.single.map(({ label, value }, i) => (
              <div key={i} onClick={() => handleClick(value)}>
                {label}
              </div>
            ))}
        </Dropdown>
      )}
    </>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
  options: ui.options,
});

export default connect(mapStateToProps)(ToneInput);
