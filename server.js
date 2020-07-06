const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Database
mongoose.connect(process.env.MONGO_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) =>
  console.error(`Database connection failed: ${error}`)
);
db.once('open', () => console.log('Connected to database'));

// Routes
const scaleRoutes = require('./routes/scale');
const songRoutes = require('./routes/song');
const userRoutes = require('./routes/user');

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use('/', scaleRoutes);
app.use('/', songRoutes);
app.use('/', userRoutes);

// Frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

// Run server
app.listen(port, (error) => {
  if (error) console.error('Errors starting server: ' + error);
  console.log('Running server on port: ' + port);
});
