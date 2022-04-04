const express = require('express');
const testRouter = require('./routes/test');

const app = express();

app.use('/', testRouter);

module.exports = app;
