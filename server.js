'use strict'
const express = require('express');

// Constants
const PORT = 8080
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to An Example API')
});

app.get('/health-check', (req, res) => {
  res.send('Health Check Passed')
});

app.get('/bad-health', (req, res) => {
  res.status(500).send('Health Did not pass')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

