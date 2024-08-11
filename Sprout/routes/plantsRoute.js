import express from 'express';
import { getAllPlants, getPlantById, createPlant, updatePlant, deletePlant } from '../controllers/plantController.js';

const router = express.Router();

// GET /plants - Returns a list of all plants
router.get('/', getAllPlants);

// GET /plants/:id - Retrieves a plant by ID
router.get('/:id', getPlantById);

// POST /plants - Creates a new plant
router.post('/', createPlant);

// PUT /plants/:id - Updates a plant by ID
router.put('/:id', updatePlant);

// DELETE /plants/:id - Deletes a plant by ID
router.delete('/:id', deletePlant);

export default router;

