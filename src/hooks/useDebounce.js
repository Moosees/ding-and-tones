import { useState, useEffect } from 'react';

const useDebounce = (value) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(value);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [value]);

  return debounce;
};

export default useDebounce;
