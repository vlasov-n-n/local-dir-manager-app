const express = require('express');
const bodyParser = require('body-parser');

const dir = require('./api/dir');

const port = process.env.PORT || 5000;

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
