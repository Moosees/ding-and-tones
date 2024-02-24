export const filterState = (state, filter, excludeFilterItems) => {
  const predicate = excludeFilterItems
    ? (key) => !filter.includes(key)
    : (key) => filter.includes(key);

  const filteredKeys = Object.keys(state).filter(predicate);
  return filteredKeys.reduce((acc, key) => {
    acc[key] = state[key];
    return acc;
  }, {});
};
