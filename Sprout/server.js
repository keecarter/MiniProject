import express from 'express';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import plantsRouter from './routes/plantsRoute.js';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import fetchAndInsertData from './fetchData.js'; // Import the fetch function

// Compute __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an express application
const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Logging middleware
app.use(morgan('dev'));

// Connect to MongoDB and fetch data at start-up
const mongoURI = 'mongodb://localhost:27017/plantDatabase';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Adjust as needed
})
  .then(() => {
    console.log('MongoDB Connected');
    return fetchAndInsertData(); // Fetch and populate data
  })
  .then(() => {
    // Middleware to parse JSON
    app.use(express.json());

    // Serve static files from Vite's build output directory
    app.use(express.static(join(__dirname, 'dist')));

    // Routes
    app.use('/plants', plantsRouter);

    // Catch-all route for SPA handling
    app.get('*', (req, res) => {
      res.sendFile(resolve(__dirname, 'dist', 'index.html'));
    });

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error('Server error:', err.stack);
      res.status(500).send('Something broke!');
    });

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
