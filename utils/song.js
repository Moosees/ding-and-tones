const parseScaleForSongFetch = (scale, userId) => {
  const { _id, author, info, notes, scaleName } = scale;
  const { dings = [], round = [], extra = [] } = notes;

  const extraParsed = extra.map(({ note, pos }) => ({ note, pos }));

  const isOwner = userId && author ? userId.equals(author) : false;

  return {
    info,
    notes: { dings, round, extra: extraParsed },
    scaleId: _id,
    isOwner,
    scaleName,
    scaleLabel: info.label,
  };
};

const determineIsOwner = (userId, composer) => {
  if (!userId || !composer || !composer._id) {
    return false;
  }

  return userId.equals(composer._id);
};

exports.parseGetResponse = (songObject, userId) => {
  const { _id, arrangement, bars, beats, composer, info, isPrivate, scale } =
    songObject;
  const anonymousComposer = !composer || composer.anonymous || !composer.name;

  return {
    alert: `"${info.title}" loaded`,
    song: {
      isOwner: determineIsOwner(userId, composer),
      songId: _id,
      composer: anonymousComposer ? 'Anonymous' : composer.name,
      arrangement,
      bars,
      beats,
      info,
      isPrivate,
    },
    scale: scale ? parseScaleForSongFetch(scale, userId) : null,
  };
};

// exports.parseSearchResponse = (songObject, userId, scaleName, scaleLabel) => {
//   const {
//     _id,
//     composer,
//     scale,
//     info: { title, metre, difficulty },
//   } = songObject;
//
//   const isOwner = userId && composer ? userId.equals(composer._id) : false;
//
//   return {
//     isOwner,
//     scaleId: scale,
//     songId: _id,
//     scaleLabel: scale ? scaleLabel : '',
//     scaleName: scale ? scaleName : 'N/A',
//     composer:
//       isOwner || (composer && !composer.anonymous)
//         ? composer.name
//         : 'Anonymous',
//     title,
//     metre,
//     difficulty,
//   };
// };

// exports.parseSaveResponse = (songObject, userId) => {
//   const { _id, composer, info } = songObject;

//   return {
//     isOwner: userId ? userId.equals(composer._id) : false,
//     songId: _id,
//     title: info.title,
//   };
// };
