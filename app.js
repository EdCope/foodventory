const express = require('express');
const testRouter = require('./routes/test');

var cors = require('cors');

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use('/', testRouter);

module.exports = app;
