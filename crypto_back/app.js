const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', routes.login);

app.use('/helloworld', (_req, res) => {
  res.send('Hello World');
});

module.exports = { app };
