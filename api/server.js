'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const { PORT } = require('./utils/constants');

// Create main express instance
const router = express();

// Require routes
const jobRoutes = require('./routes/jobs/jobRoutes');

// Utilize routes
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use('/api/jobs', jobRoutes); 

// Create a server from express instance
const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});