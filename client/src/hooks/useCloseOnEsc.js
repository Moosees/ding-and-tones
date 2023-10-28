import { useEffect } from 'react';
import { beatOptionToKeyCode } from '../assets/keyCodes';

const useCloseOnEsc = (onCloseCb) => {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.code === beatOptionToKeyCode['escape']) onCloseCb();
    };

    document.addEventListener('keydown', closeOnEsc);

    return () => document.removeEventListener('keydown', closeOnEsc);
  });
};

export default useCloseOnEsc;
