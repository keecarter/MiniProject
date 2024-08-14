// fetchData.js
import { MongoClient } from 'mongodb';
import fetch from 'node-fetch';

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plantDatabase';
const collectionName = 'plants';

// Function to fetch plant data and insert into MongoDB
async function fetchAndInsertData() {
  try {
    // Fetch plant data from the API
    const response = await fetch('https://perenual.com/api/species-list?key=sk-dw4q668301f97498a6117');
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    const plants = data.data; // Adjust based on the actual API response structure

    if (!Array.isArray(plants)) {
      throw new Error('Unexpected data format from API');
    }

    // Create a new MongoClient
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
      // Connect to the MongoDB server
      await client.connect();
      console.log('Connected to MongoDB');

      // Get the database and collection
      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      // Clear existing data (optional, if needed)
      // await collection.deleteMany({});

      // Insert plant data into the collection
      const result = await collection.insertMany(plants);
      console.log(`${result.insertedCount} documents were inserted`);
    } finally {
      // Close the MongoDB connection
      await client.close();
      console.log('MongoDB connection closed');
    }
  } catch (error) {
    console.error('Error fetching or inserting data:', error);
  }
}

// Export the function to be used elsewhere
export default fetchAndInsertData;
