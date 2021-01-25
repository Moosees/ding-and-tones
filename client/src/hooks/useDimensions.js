import { useContext } from 'react';
import { DimensionsContext } from '../components/app/DimensionsProvider';

const useDimensions = () => useContext(DimensionsContext);

export default useDimensions;
