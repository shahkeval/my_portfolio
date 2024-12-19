const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// In-memory database for demonstration
const likesDatabase = {
  likeCount: 0,
  ipAddresses: new Set(),
};

// Middleware to get client IP
const getClientIP = (req) => {
  const ip = (
    req.headers["x-forwarded-for"]?.split(",")[0] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.ip || 
    null
  );
  return ip === "::1" ? "127.0.0.1" : ip;
};

// Like Button API
app.post("/api/like", (req, res) => {
  const clientIP = getClientIP(req);

  if (likesDatabase.ipAddresses.has(clientIP)) {
    return res.status(400).json({ message: "You have already liked!" });
  }

  likesDatabase.likeCount += 1;
  likesDatabase.ipAddresses.add(clientIP);

  res.status(200).json({ message: "Thank you for liking!", likeCount: likesDatabase.likeCount });
});

// Unlike Button API
app.delete("/api/like", (req, res) => {
  const clientIP = getClientIP(req);

  if (!likesDatabase.ipAddresses.has(clientIP)) {
    return res.status(400).json({ message: "You haven't liked yet!" });
  }

  likesDatabase.likeCount -= 1;
  likesDatabase.ipAddresses.delete(clientIP);

  res.status(200).json({ message: "Your like has been removed!", likeCount: likesDatabase.likeCount });
});

// Get Like Count API
app.get("/api/like", (req, res) => {
  res.status(200).json({ likeCount: likesDatabase.likeCount });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
