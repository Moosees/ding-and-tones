import React from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

const TouchHandler = ({ children }) => {
  return <DndProvider backend={TouchBackend}>{children}</DndProvider>;
};

export default TouchHandler;
