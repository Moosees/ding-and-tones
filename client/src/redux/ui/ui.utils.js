export const getBarMetreOffset = ({ countOpen, handsOpen }) => {
  let offset = 0;

  if (countOpen) offset += 9;
  if (handsOpen) offset -= 9;

  return offset;
};
