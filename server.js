const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());
// If some providers send form-encoded:
// app.use(express.urlencoded({ extended: true }));

// This is YOUR webhook endpoint:
// e.g. https://your-app.onrender.com/webhook
app.post('/webhook', (req, res) => {
  console.log('Received webhook headers:', req.headers);
  console.log('Received webhook body:', req.body);

  // TODO: push to frontend via WebSocket/SSE, save to DB, etc.
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook receiver listening on port ${PORT}`);
});
