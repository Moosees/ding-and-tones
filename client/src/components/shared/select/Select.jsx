import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { GradientLayout, InfoLayout } from '../layout/layout.styles';
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
  gradient,
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

  const Layout = gradient ? GradientLayout : InfoLayout;

  return (
    <Layout disabled={isSongPlaying}>
      <SelectLabel
        hasLabel={hasLabel}
        gradient={gradient}
        disabled={isSongPlaying}
      >
        <span ref={labelRef}>{children}</span>
        <SelectDropdown
          gradient={gradient}
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
    </Layout>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(Select);
