const socket = new WebSocket('wss://your-backend/ws');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // e.g. append text to a transcript div
  document.getElementById('transcript').textContent += data.text + '\n';
};
