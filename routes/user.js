const express = require('express');
const {
  saveUser,
  getGoogleToken,
  getGoogleURL,
} = require('../controllers/user');
const { checkAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/googleURL', getGoogleURL);
router.post('/user', checkAuth, saveUser);

module.exports = router;
