const express = require('express');
const { getSongs, saveSong } = require('../controllers/song');

const router = express.Router();

// Public
router.get('/song', getSongs);
// router.get('/song/id/:songId', getSongById);
// router.get('/song/random', getRandomSong);

// Authorized only
// router.get('/song/favorites')
router.post('/song', saveSong);

module.exports = router;
