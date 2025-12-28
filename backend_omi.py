// Node + Express + ws (simplified pseudo-code)
app.post('/webhook', (req, res) => {
  const payload = req.body;        // JSON or form data
  broadcastToWebSocketClients(payload);
  res.sendStatus(200);
});
