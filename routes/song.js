const express = require('express');
const {
  getSongById,
  getSongs,
  saveSong,
  songSearch,
  deleteSong,
  getMySongs,
} = require('../controllers/song');
const { checkAuth, getUserId } = require('../middleware/auth');
const { checkNumVsMaxSongs } = require('../middleware/user');

const router = express.Router();

// Public
router.get('/song', getUserId, getSongs);
router.get('/song/a/:searchTerm', getUserId, songSearch);
router.get('/song/id/:songId', getUserId, getSongById);
// router.get('/song/random', getRandomSong);

// Authorized only
// router.get('/song/favorites')
router.get('/song/me', checkAuth, getMySongs);
router.post('/song', checkAuth, checkNumVsMaxSongs, saveSong);
router.delete('/song/id/:songId', checkAuth, deleteSong);

module.exports = router;
