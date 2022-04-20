require = require('esm')(module /*, options*/);

// Configuration
require('dotenv').config();

module.exports = require('./app.js');
