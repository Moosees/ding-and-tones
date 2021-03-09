const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const redis = require('redis');
const session = require('express-session');
const connectRedis = require('connect-redis');

const app = express();
const port = 5000;

// Session
const RedisStore = connectRedis(session);
const redisClient = redis.createClient();
redisClient.on('connect', () => console.log('connected to redis'));
redisClient.on('error', (error) => console.error(error));
const sess = {
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, maxAge: 8640000 },
};
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}

// Database
mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error('Database connection failed: ', error));

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(session(sess));

// Routes
const scaleRoutes = require('./routes/scale');
const songRoutes = require('./routes/song');
const userRoutes = require('./routes/user');

app.use('/api/', scaleRoutes);
app.use('/api/', songRoutes);
app.use('/api/', userRoutes);

// Front-end
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Run server
app.listen(port, (error) => {
  if (error) console.error('Errors starting server: ' + error);
  console.log('Running server on port: ' + port);
});
