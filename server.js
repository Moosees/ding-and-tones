const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Database
mongoose.connect('mongodb://localhost/ding', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(`Database connection failed: ${error}`));
db.once('open', () => console.log('Connected to database'));

// Routes
const scaleRoutes = require('./routes/scale');

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use('/', scaleRoutes);

// Frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

// Run server
app.listen(port, (error) => {
  if (error) throw error;
  console.log('Running server on port: ' + port);
});
