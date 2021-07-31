import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useDimensions from '../../../hooks/useDimensions';
import { startSearch } from '../../../redux/search/search.actions';
import { InfoLayout } from '../layout/layout.styles';
import Spinner from '../spinner/Spinner';
import { TextInput } from './input.styles';

const InfoSearch = ({
  isSearching,
  placeholder,
  searchOption,
  setValue,
  startSearch,
  value,
}) => {
  const { isMobile } = useDimensions();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value.length > 2) startSearch(searchOption, value);
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchOption, startSearch, value]);

  return (
    <InfoLayout>
      <TextInput
        autoFocus={!isMobile}
        aria-label={placeholder}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
        onKeyDown={(e) => e.stopPropagation()}
      />
      <Spinner isSpinning={isSearching} />
    </InfoLayout>
  );
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
});

export default connect(mapStateToProps, { startSearch })(InfoSearch);
