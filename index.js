const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
//const members = require('./Members');
//const moment = require('moment');
const logger = require('./middleware/logger');

// Initialize the variable called 'app' with express
const app = express();

// Simple GET route for static file
app.use(express.static(path.join(__dirname, 'public')));

// Init middleware
//app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));


// We want to look at environment variables called PORT
const PORT = process.env.PORT || 5000;

// Callback to let us know once the server is started 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 