import { useContext } from 'react';
import { HowlsContext } from '../components/app/providers/HowlsProvider';

const useHowls = () => useContext(HowlsContext);

export default useHowls;
