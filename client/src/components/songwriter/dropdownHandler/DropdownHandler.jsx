import { createContext, useEffect, useState } from 'react';

export const DropdownContext = createContext();

const DropdownHandler = ({ children, borderRef, listRef }) => {
  const [borderHeight, setBorderHeight] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [listHeight, setListHeight] = useState(0);
  const [listScroll, setListScroll] = useState(0);

  useEffect(() => {
    if (
      window &&
      borderRef.current &&
      borderRef.current.children[0] &&
      listRef.current
    ) {
      const scrollEl = borderRef.current.children[0];
      let timeout;

      const onScroll = () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          setListScroll(scrollEl.scrollTop);
        }, 50);
      };

      const onResize = () => {
        if (!borderRef.current || !listRef.current) return;

        setBorderHeight(borderRef.current.clientHeight);
        setBorderWidth(borderRef.current.clientWidth);
        setListHeight(listRef.current.scrollHeight);
      };

      scrollEl.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onResize);
      onScroll();
      onResize();

      return () => {
        scrollEl.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
      };
    }
  }, [borderRef, listRef]);

  return (
    <DropdownContext.Provider
      value={{ borderHeight, borderWidth, listHeight, listScroll }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownHandler;
