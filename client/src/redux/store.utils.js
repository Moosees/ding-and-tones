export const filterState = (state, filter) => {
  const filteredKeys = Object.keys(state).filter(
    (key) => !filter.includes(key)
  );
  return filteredKeys.reduce((acc, key) => {
    acc[key] = state[key];
    return acc;
  }, {});
};
