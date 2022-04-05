const express = require('express');
const testRouter = require('./routes/testfile');
const pantryRouter = require('./routes/pantry')

var cors = require('cors');

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use('/', testRouter);
app.use('/pantry', pantryRouter);

module.exports = app;
