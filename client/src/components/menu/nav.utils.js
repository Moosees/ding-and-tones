export const getIdFromLocation = (location) => {
  const [, route, id] = location.pathname.split('/');

  const ids = { urlSongId: null, urlScaleId: null };

  if (route === 'song' && id) {
    ids.urlSongId = id;
  }

  if (route === 'scale' && id) {
    ids.urlScaleId = id;
  }

  return ids;
};
