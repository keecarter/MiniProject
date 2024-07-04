import React, { useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Navbar from './Navbar'; // Adjust the path as needed
import { Helmet } from 'react-helmet';
import './PlantInfo.scss'; // Import your custom styles

const PlantInfo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const plants = [
    { id: 1, name: 'Plant 1', image_url: 'https://via.placeholder.com/150', description: 'Description of Plant 1' },
    { id: 2, name: 'Plant 2', image_url: 'https://via.placeholder.com/150', description: 'Description of Plant 2' },
    { id: 3, name: 'Plant 3', image_url: 'https://via.placeholder.com/150', description: 'Description of Plant 3' },
    { id: 4, name: 'Plant 4', image_url: 'https://via.placeholder.com/150', description: 'Description of Plant 4' },
    { id: 5, name: 'Plant 5', image_url: 'https://via.placeholder.com/150', description: 'Description of Plant 5' },
    { id: 6, name: 'Plant 6', image_url: 'https://via.placeholder.com/150', description: 'Description of Plant 6' },
  ];

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchQuery.toLowerCase()));

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
       
        <Container>
          <div className="card-grid" style={{marginTop: '2rem'}}>
            <Row xs={1} md={2} lg={3} className="g-4">
              {filteredPlants.map((plant) => (
                <Col key={plant.id}>
                  <Card>
                    <Card.Img variant="top" src={plant.image_url} />
                    <Card.Body>
                      <Card.Title>{plant.name}</Card.Title>
                      <Card.Text>
                        {plant.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PlantInfo;


