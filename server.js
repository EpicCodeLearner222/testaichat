const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chatbotRoutes = require('./routes/chatbot');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/chatbot', chatbotRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Chatbot backend is running on http://localhost:${PORT}`);
});
