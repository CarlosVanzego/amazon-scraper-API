# Amazon Scraper API
The Amazon Scraper API is a RESTful API built with Node.js and Express that allows you to scrape various information from Amazon, such as product details, reviews, offers, and search results. It utilizes the Scraper API to retrieve data from Amazon's website.

Features
Retrieve product details
Get product reviews
Fetch product offers
Search for products and get search results
Getting Started
To get started with the Amazon Scraper API, follow these steps:

Clone this repository to your local machine.
Install dependencies by running npm install.
Run the server using npm start.
Access the API endpoints using your preferred HTTP client.
Usage
Available Endpoints
GET /products/:productId: Retrieve product details by providing the product ID.
GET /products/:productId/reviews: Get product reviews by providing the product ID.
GET /products/:productId/offers: Fetch product offers by providing the product ID.
GET /search/:searchQuery: Search for products and get search results by providing the search query.
Request Parameters
:productId: The unique identifier of the product.
:searchQuery: The search query to search for products.
Query Parameters
api_key: Your Scraper API key (required for all requests).
