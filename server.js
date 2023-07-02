'use strict';
const express = require('express');

const app = express();
const errorHandler = require('./modules/error');
const stamper = require('./middleware/date');

app.get('/wat-up-internet' , stamper , (req,res) => {
  res.status(200).send(`What it is Dawg or Dawgdette Welcome to the internet it's currently ${res.timeStamp.time}`);
});


app.get('/peace', (_, res) => {
  res.status(200).send(`Safe surfing internet vagabond. Remember not to download or share any personal information from sites that are sketchy.`);
});


app.get('*', (_,__,next) => next({message: `You are not going anywhere my dude this route doesn't exist`}));


app.use(errorHandler);


module.exports = app;