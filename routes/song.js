const express = require('express');
const { getSongs, saveSong } = require('../controllers/song');
const { checkAuth } = require('../middleware/auth');

const router = express.Router();

// Public
// router.get('/song', getSongs);
// router.get('/song/id/:songId', getSongById);
// router.get('/song/random', getRandomSong);

// Authorized only
// router.get('/song/favorites')
// router.get('/song/me')
router.post('/song', checkAuth, saveSong);

module.exports = router;
