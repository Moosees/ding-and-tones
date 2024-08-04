export const getIdFromLocation = (location) => {
  const [, route, id] = location.pathname.split('/');

  const ids = { urlSongId: null, urlScaleId: null };
  console.log('Before route', { route, id });

  if (route === 'song' && id) {
    console.log('Song route', { route, id });
    ids.urlSongId = id;
  }

  if (route === 'scale' && id) {
    console.log('Scale route', { route, id });
    ids.urlScaleId = id;
  }

  return ids;
};
