export const getSongIdFromLocation = (location) => {
  const [, route, id] = location.pathname.split('/');

  if (route === 'song' && id) {
    return id;
  }

  return null;
};
