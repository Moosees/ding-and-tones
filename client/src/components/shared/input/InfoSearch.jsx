import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import { InfoLayout } from '../layout/layout.styles';
import Spinner from '../spinner/Spinner';
import { TextInput } from './input.styles';

const InfoSearch = ({ placeholder, searchOption, setValue, value }) => {
  const dispatch = useDispatch();
  const isSearching = useSelector(({ search }) => search.isSearching);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value.length > 2) dispatch(startSearch(searchOption, value));
    }, 600);

    return () => clearTimeout(timeout);
  }, [dispatch, searchOption, value]);

  return (
    <InfoLayout as="label">
      <TextInput
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

export default InfoSearch;
