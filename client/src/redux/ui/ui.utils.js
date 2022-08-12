export const getBarMetreOffset = ({ countOpen, handsOpen }) => {
  let offset = 0;

  if (countOpen) offset += 7;
  if (handsOpen) offset -= 7;

  return offset;
};
