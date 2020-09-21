import { useEffect, useRef, useState } from 'react';

const useCloseOutside = (defaultIsOpen) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const insideRef = useRef(null);
  const btnRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      insideRef.current &&
      !insideRef.current.contains(e.target) &&
      !btnRef.current.contains(e.target)
    )
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return [isOpen, setIsOpen, insideRef, btnRef];
};

export default useCloseOutside;
