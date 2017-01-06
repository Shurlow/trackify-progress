'use strict'

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

const artists = require('./routes/artists');
const tracks = require('./routes/tracks');
const users = require('./routes/users');

const app = express();

app.disable('x-powered-by');

app.use(morgan('short'));
app.use(bodyParser.json());

app.use(express.static(path.join('public')));

app.use(artists);
app.use(tracks);
app.use(users);

app.use((_req, res) => {
  res.sendStatus(404);
})

app.use((err, _req, res, _next) => {
  console.log(err);
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }
})

app.listen(port, () => {
  console.log('Listening on port', port);
})

module.exports = app;
