const express = require('express');
const {
  saveUser,
  getGoogleToken,
  getGoogleURL,
  signIn,
} = require('../controllers/user');
const { checkAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/googleURL', getGoogleURL);
router.post('/user', checkAuth, saveUser);
router.post('/signIn', signIn);

module.exports = router;
