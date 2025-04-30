const express = require("express");
const fetch = require("node-fetch"); // npm install node-fetch
const bodyParser = require("body-parser"); // Middleware to parse incoming XML data
const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = "YOUR_YOUTUBE_API_KEY";
const CHANNEL_ID = "UCw_SZuRMPAFSxWFGr3IhAZQ"; // Replace with actual channel ID
const CALLBACK_URL = "https://yourdomain.com/notify"; // Replace with your server URL

app.use(bodyParser.text({ type: "application/atom+xml" }));

// 📌 ✅ Subscribe to YouTube PubSubHubbub
app.get("/subscribe", async (req, res) => {
  const hubUrl = "https://pubsubhubbub.appspot.com/subscribe";
  const topicUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  const response = await fetch(hubUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "hub.mode": "subscribe",
      "hub.topic": topicUrl,
      "hub.callback": CALLBACK_URL,
      "hub.verify": "async",
    }),
  });

  if (response.ok) res.send("Subscribed to YouTube feed successfully!");
  else res.status(500).send("Subscription failed.");
});

// 📌 ✅ Handle Incoming Notifications
app.post("/notify", async (req, res) => {
  console.log("🔔 New YouTube video notification received!");
  console.log(req.body); // Contains video update details
  res.sendStatus(200); // Respond to Google to confirm receipt
});

// 📌 ✅ Search YouTube (Existing Feature)
app.get("/search", async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).send('Query parameter "q" is required.');

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(q)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching from YouTube API.");
  }
});

// 🔧 Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
