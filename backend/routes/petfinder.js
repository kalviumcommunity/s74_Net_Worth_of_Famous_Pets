// /backend/routes/petfinder.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
const { petfinderApiKey, petfinderSecret } = require('../config/keys');

let token = null;

// Function to get Petfinder API token
const getToken = async () => {
  const response = await axios.post('https://api.petfinder.com/v2/auth2/token', {
    grant_type: 'client_credentials',
    client_id: petfinderApiKey,
    client_secret: petfinderSecret,
  });
  return response.data.access_token;
};

// Middleware to set token
router.use(async (req, res, next) => {
  if (!token) {
    token = await getToken();
  }
  next();
});

// Route to search pets
router.get('/search', async (req, res) => {
  try {
    const { type, breed } = req.query;
    const response = await axios.get('https://api.petfinder.com/v2/animals', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        type,
        breed,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Petfinder API' });
  }
});

module.exports = router;
