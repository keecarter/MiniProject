import Plant from '../models/plantModel.js';
import { renderPlants, renderPlantDetails, renderError } from '../views/plantView.js';

// GET /plants - Retrieve all plants
export const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /plants/:id - Retrieve a plant by ID
export const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.status(200).json(plant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /plants - Create a new plant
export const createPlant = async (req, res) => {
  try {
    const newPlant = new Plant(req.body);
    const savedPlant = await newPlant.save();
    res.status(201).json(savedPlant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /plants/:id - Update an existing plant by ID
export const updatePlant = async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedPlant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.status(200).json(updatedPlant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /plants/:id - Delete a plant by ID
export const deletePlant = async (req, res) => {
  try {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
    if (!deletedPlant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.status(204).send(); // 204 No Content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
