const dotenv = require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const redis = require('redis');
const session = require('express-session');
const connectRedis = require('connect-redis');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();
const port = 5000;

// Session
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  password: process.env.REDIS_PASSWORD,
});
redisClient.on('connect', () => console.log('connected to redis'));
redisClient.on('error', (error) => console.error(error));
const sess = {
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true },
};
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}

// Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error('Database connection failed: ', error));

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(mongoSanitize({ replaceWith: '_' }));
app.use(cors({ credentials: true, origin: process.env.ORIGIN }));
app.use(session(sess));

// Routes
const scaleRoutes = require('./routes/scale');
const songRoutes = require('./routes/song');
const userRoutes = require('./routes/user');
const { getUserId } = require('./middleware/auth');

app.use('/api/', scaleRoutes);
app.use('/api/', songRoutes);
app.use('/api/', userRoutes);

// Front-end
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Run server
app.listen(port, (error) => {
  if (error) console.error('Errors starting server: ' + error);
  console.log('Running server on port: ' + port);
});
