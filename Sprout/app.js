import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import plantRoute from './routes/plantsRoute.js';

const app = express();
const PORT = 5000;

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Plant API',
      version: '1.0.0',
      description: 'A simple API to manage plants'
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
        description: 'Local server'
      },
    ],
  },
  apis: ['./routes/*.js'], // path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/plantDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', plants);

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
