// Dependancies
const express = require('express');
require("dotenv").config();
const cors = require('cors');
const morgan = require('morgan');

// Express
const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'))

// Routes
const routes = require('./routes');
app.use('/api', routes);

// App Startup
app.listen(process.env.PORT, () => {
    console.info(`BFF running on port ${process.env.PORT}`);
});