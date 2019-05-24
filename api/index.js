import express from 'express';
import bodyParser from 'body-parser';

const {defaultPort} = require('../config/env');
const dir = require('./routes');

const port = process.env.PORT || defaultPort;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api/dir', dir);

app.listen(port, () => console.log(`Server started on port ${port}`));
