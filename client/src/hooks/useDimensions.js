import { useContext } from 'react';
import { DimensionsContext } from '../components/app/providers/DimensionsProvider';

const useDimensions = () => useContext(DimensionsContext);

export default useDimensions;
