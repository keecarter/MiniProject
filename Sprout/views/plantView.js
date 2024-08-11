export const renderPlants = (res, plants) => {
    res.json(plants);
  };
  
  export const renderPlantDetails = (res, plant) => {
    res.json(plant);
  };
  
  export const renderError = (res, error) => {
    res.status(500).json({ error: error.message });
  };
  