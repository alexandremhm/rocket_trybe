const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes.login);

app.use('/api', routes.currency);

app.use((_req, res) => {
  res.status(404).send('Endpoint não encontrado');
});

module.exports = { app };
