import { useEffect, useRef, useState } from 'react';

const useCloseOutside = (defaultIsOpen, isOpenCallback, btnRef) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const insideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnRef && btnRef.current && btnRef.current.contains(e.target)) return;

      if (insideRef.current && !insideRef.current.contains(e.target)) {
        setIsOpen(false);
        isOpenCallback && isOpenCallback(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpenCallback, btnRef]);

  return { insideRef, isOpen, setIsOpen };
};

export default useCloseOutside;
