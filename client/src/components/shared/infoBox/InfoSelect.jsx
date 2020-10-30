import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { InfoContainer, Select, SelectLabel } from './infoBox.styles';

const InfoSelect = ({
  children,
  handleChange,
  isSongPlaying,
  options,
  value,
}) => {
  const labelRef = useRef();
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (window && labelRef.current) {
      const updateLabel = () => setLabelWidth(labelRef.current.offsetWidth);

      window.addEventListener('resize', updateLabel);
      return () => window.removeEventListener('resize', updateLabel);
    }
  }, []);

  return (
    <InfoContainer>
      <SelectLabel>
        <span ref={labelRef}>{children}</span>
        <Select
          disabled={isSongPlaying}
          value={value}
          labelWidth={labelWidth}
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </Select>
        <i className="material-icons">keyboard_arrow_down</i>
      </SelectLabel>
    </InfoContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(InfoSelect);
