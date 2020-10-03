const express = require('express');
const {
  deleteScale,
  getScaleById,
  getScales,
  scaleSearch,
  saveScale,
  getMyScales,
} = require('../controllers/scale');
const { checkAuth, getUserId } = require('../middleware/auth');
const { checkNumVsMaxScales } = require('../middleware/user');

const router = express.Router();

// Public
router.get('/scale', getUserId, getScales);
router.get('/scale/a/:searchTerm', getUserId, scaleSearch);
router.get('/scale/id/:scaleId', getUserId, getScaleById);
// router.get('/scale/random', getRandomScale);

// Authorized only
// router.get('/scale/favorites')
router.get('/scale/me', checkAuth, getMyScales);
router.post('/scale', checkAuth, checkNumVsMaxScales, saveScale);
router.delete('/scale/id/:scaleId', checkAuth, deleteScale);

module.exports = router;
