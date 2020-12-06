import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { SelectDropdown, SelectLabel } from './select.styles';

const parseOptions = (options) =>
  options.map((option, i) => {
    if (option.group)
      return (
        <optgroup label={option.group} key={i}>
          {parseOptions(option.options)}
        </optgroup>
      );
    else
      return (
        <option
          disabled={option.disabled}
          value={option.value}
          key={option.value}
        >
          {option.label}
        </option>
      );
  });

const Select = ({
  children,
  handleChange,
  hasLabel,
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
    <SelectLabel hasLabel={hasLabel}>
      <span ref={labelRef}>{children}</span>
      <SelectDropdown
        hasLabel={hasLabel}
        disabled={isSongPlaying}
        value={value}
        labelWidth={labelWidth}
        onChange={(e) => handleChange(e.target.value)}
      >
        {parseOptions(options)}
      </SelectDropdown>
      <i className="material-icons">keyboard_arrow_down</i>
    </SelectLabel>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(Select);
