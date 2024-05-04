export const filterObjectByKeyArray = (target, keys, removeKeysFromTarget) => {
  const predicate = removeKeysFromTarget
    ? (key) => !keys.includes(key)
    : (key) => keys.includes(key);

  const filteredKeys = Object.keys(target).filter(predicate);
  return filteredKeys.reduce((acc, key) => {
    acc[key] = target[key];
    return acc;
  }, {});
};
