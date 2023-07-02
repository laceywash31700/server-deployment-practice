'use strict';
const app = require('./server');
const {config} = require('dotenv');
config();
const PORT = process.env.PORT;

app.listen( PORT, () => console.log(`Yo I am alive in ${PORT}`, ));