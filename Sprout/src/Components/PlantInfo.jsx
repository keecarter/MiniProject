import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container, Modal, Button } from 'react-bootstrap';
import Navbar from './Navbar'; // Adjust the path as needed
import { Helmet } from 'react-helmet';
import './PlantInfo.scss'; // Import your custom styles

const PlantInfo = () => {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null); // State to store selected plant details
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://perenual.com/api/species-list?key=sk-dw4q668301f97498a6117');
        const data = await response.json();
        setPlants(data.data); // Assuming `data.data` contains the array of plants
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  const fetchPlantDetails = async (id) => {
    try {
      const response = await fetch(`https://perenual.com/api/species/details/${id}?key=sk-dw4q668301f97498a6117`);
      const data = await response.json();
      setSelectedPlant(data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching plant details:', error);
    }
  };

  const handleCardClick = (id) => {
    fetchPlantDetails(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlant(null);
  };

  const filteredPlants = plants.filter(plant =>
    plant.common_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="plant-info-page">
        <Helmet>
          <title>Sprout</title>
          <link 
            href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" 
            rel="stylesheet" 
          />
        </Helmet>

        <h1 className="title" style={{ fontFamily: 'Shadows Into Light, Brush Script MT', fontSize: '5rem', color: 'black'}}>Plant Info</h1>
        <Navbar withSearch setSearchQuery={setSearchQuery} />
        {filteredPlants.length === 0 && (
            <p className="no-results">we don't have that plant yet! 😱</p>
          )}
       
        <Container>
          <div className={`card-grid ${filteredPlants.length === 1 ? 'single-card' : ''}`} style={{ marginTop: '2rem' }}>
            <Row xs={1} md={2} lg={3} className="g-4">
              {filteredPlants.map((plant) => (
                <Col key={plant.id}>
                  <Card onClick={() => handleCardClick(plant.id)} style={{ cursor: 'pointer' }}>
                    <Card.Img 
                      variant="top" 
                      src={plant.default_image ? plant.default_image.thumbnail : 'path/to/placeholder_image.jpg'} 
                      className="card-img"
                    />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontFamily: 'Shadows Into Light, Brush Script MT', fontSize: '1.8rem', textDecoration: 'underline' }}>
                        {plant.common_name}
                      </Card.Title>
                      <div>
                        <Row>
                          <Col sm={6}><strong>Scientific Name:</strong></Col>
                          <Col sm={6}>{plant.scientific_name}</Col>
                        </Row>
                        <Row>
                          <Col sm={6}><strong>Family:</strong></Col>
                          <Col sm={6}>{plant.family}</Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>

        {/* Modal to display plant details */}
        {selectedPlant && (
          <Modal show={showModal} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedPlant.common_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedPlant.default_image ? selectedPlant.default_image.original : 'path/to/placeholder_image.jpg'}
                alt={selectedPlant.common_name}
                className="modal-img"
              />
              <h5>Scientific Name: {selectedPlant.scientific_name}</h5>
              <p><strong>Family:</strong> {selectedPlant.family}</p>
              <p><strong>Origin:</strong> {selectedPlant.origin}</p>
              <p><strong>Watering:</strong> {selectedPlant.watering}</p>
              <p><strong>Sunlight:</strong> {selectedPlant.sunlight}</p>
              {/* Add any other relevant details you want to display */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </>
  );
};

export default PlantInfo;

