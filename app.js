const express = require('express');
const testRouter = require('./routes/test');
const pantryRouter = require('./routes/pantry')

const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors({ origin: true, credentials: true }));

app.use('/', testRouter);
app.use('/pantry', pantryRouter);

module.exports = app;
