import { useEffect } from 'react';

const useCloseOnEsc = (onCloseCb) => {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.keyCode === 27) onCloseCb();
    };

    document.addEventListener('keydown', closeOnEsc);

    return () => document.removeEventListener('keydown', closeOnEsc);
  });
};

export default useCloseOnEsc;
