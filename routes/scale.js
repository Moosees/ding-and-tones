const express = require('express');
const { getScaleById, getScales, saveScale } = require('../controllers/scale');

const router = express.Router();

// Public
router.get('/scale', getScales);
router.get('/scale/id/:scaleId', getScaleById);
// router.get('/scale/random', getRandomScale);

// Authorized only
// router.get('/scale/favorites')
router.post('/scale', saveScale);

module.exports = router;
