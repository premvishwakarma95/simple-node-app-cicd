const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running, CI/CD added' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});
