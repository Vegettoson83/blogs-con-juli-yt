// server.js
const express = require('express');
const fetch = require('node-fetch'); // npm install node-fetch
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Your provided API Key
const API_KEY = 'AIzaSyCT8bPyUWOnbUCs36rFucoPnAs3eX9xlUw';

app.get('/search', async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).send('Query parameter "q" is required.');

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(q)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching from YouTube API.');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
