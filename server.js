const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Middleware configuration
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes Initialization
app.get('/', (req, res) => {
    res.send('Welcome to the Multi-vendor e-commerce platform!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
