import { useEffect, useRef } from 'react';

const useCloseOutside = (isOpenCb, btnRef) => {
  const insideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnRef?.current?.contains(e.target)) return;

      if (insideRef.current && !insideRef.current.contains(e.target))
        isOpenCb(false);
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpenCb, btnRef]);

  return { insideRef };
};

export default useCloseOutside;
