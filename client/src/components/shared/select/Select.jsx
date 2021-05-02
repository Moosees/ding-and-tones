import React from 'react';
import { connect } from 'react-redux';
import { InfoLayout } from '../layout/layout.styles';
import { SelectDropdown, SelectLabel, SelectSmall } from './select.styles';

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
  large,
  options,
  small,
  value,
}) => {
  // const labelRef = useRef();
  // const [labelWidth, _setLabelWidth] = useState(52);

  // useEffect(() => {
  //   if (labelRef.current) {
  //     setLabelWidth(labelRef.current.offsetWidth);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window && labelRef.current) {
  //     const updateLabel = () => setLabelWidth(labelRef.current.offsetWidth);

  //     window.addEventListener('resize', updateLabel);
  //     return () => window.removeEventListener('resize', updateLabel);
  //   }
  // }, []);

  const Layout = small ? SelectSmall : InfoLayout;

  return (
    <Layout tabIndex={0} disabled={isSongPlaying} large={large}>
      <SelectLabel hasLabel={hasLabel} small={small} disabled={isSongPlaying}>
        <span>{children}</span>
        <SelectDropdown
          tabIndex={-1}
          small={small}
          hasLabel={hasLabel}
          disabled={isSongPlaying}
          value={value}
          labelWidth={small ? 20 : 52}
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
