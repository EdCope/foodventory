const express = require('express');
const testRouter = require('./routes/test');
const pantryRouter = require('./routes/pantry')

const app = express();

app.use('/', testRouter);
app.use('/pantry', pantryRouter);

module.exports = app;
