const express = require('express');
const path = require('path');
const app = express();

// Serve static files from Vite's build output directory (e.g., 'dist')
app.use(express.static(path.join(__dirname, 'dist')));

// Other routes and middleware setup
// ...

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

