import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  common_name: {
    type: String,
    required: [true, 'Common name is required'],
    trim: true
  },
  scientific_name: {
    type: String,
    required: [true, 'Scientific name is required'],
    trim: true
  },
  family: {
    type: String,
    required: true,
    trim: true
  },
  origin: String,
  watering: {
    type: String,
    default: 'Unknown'
  },
  sunlight: {
    type: String,
    default: 'Unknown'
  },
  default_image: {
    thumbnail: {
      type: String,
      default: 'path/to/default_thumbnail.jpg'
    },
    original: {
    type: String,
    default: 'path/to/default_original.jpg'
    },
  },
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Indexes
plantSchema.index({ scientific_name: 1 }); // Create an index on the scientific name

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;
