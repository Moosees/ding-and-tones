const express = require('express');
const {
  getSongById,
  getSongs,
  saveSong,
  deleteSong,
} = require('../controllers/song');
const { checkAuth, getUserId } = require('../middleware/auth');

const router = express.Router();

// Public
router.get('/song', getUserId, getSongs);
router.get('/song/id/:songId', getUserId, getSongById);
// router.get('/song/random', getRandomSong);

// Authorized only
// router.get('/song/favorites')
// router.get('/song/me')
router.post('/song', checkAuth, saveSong);
router.delete('/song/id/:songId', checkAuth, deleteSong);

module.exports = router;
