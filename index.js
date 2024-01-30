const express = require('express');
const request = require('request-promise');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Function to generate Scraper API URL with API key
const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// Middleware to parse JSON requests
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.');
});

// Route to get product details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        // Make a request to Scraper API for product details
        const response = await request(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/dp/${productId}`);
        // Parse the response and send it back
        res.json(JSON.parse(response));
    } catch(error) {
        // Send error response if request fails
        res.json(error);
    }
});

// Route to get product reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        // Make a request to Scraper API for product reviews
        const response = await request(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/product-reviews/${productId}`);
        // Parse the response and send it back
        res.json(JSON.parse(response));
    } catch(error) {
        // Send error response if request fails
        res.json(error);
    }
});

// Route to get product offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        // Make a request to Scraper API for product offers
        const response = await request(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        // Parse the response and send it back
        res.json(JSON.parse(response));
    } catch(error) {
        // Send error response if request fails
        res.json(error);
    }
});

// Route to get search results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;

    try {
        // Make a request to Scraper API for search results
        const response = await request(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        // Parse the response and send it back
        res.json(JSON.parse(response));
    } catch(error) {
        // Send error response if request fails
        res.json(error);
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
