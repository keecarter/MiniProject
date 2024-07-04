import React, { useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Navbar from './Navbar'; // Adjust the path as needed
import { Helmet } from 'react-helmet';
import './PlantInfo.scss'; // Import your custom styles
import CaliforniaElephantEars from './Images/CaliforniaElephantEars.jpeg';
import HeartleafPhilodendron from './Images/HeartleafPhilodendron.jpeg';
import HotFlashCaladium from './Images/HotFlashCaladium.jpeg';
import LemonSpiderPlant from './Images/ElephantBush.jpeg';
import Mint from './Images/Mint.jpeg';
import PeaceLilly from './Images/PeaceLilly.jpeg';
import RubberPlant from './Images/RubberPlant.jpeg';
import RubberPlantTineke from './Images/RubberPlantTineke.jpeg';
import TradescantiaNanouk from './Images/TradescantiaNanouk.jpeg';
import VariegatedVinca from './Images/ElephantBush.jpeg';
import VariegatumSpiderPlant from './Images/VariegatumSpiderPlant.jpeg';
import WhiteBirdOfParadise from './Images/WhiteBirdOfParadise.jpeg';
import ElephantBush from './Images/ElephantBush.jpeg';

const PlantInfo = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const plants = [
    { 
      id: 1, 
      name: 'California Elephant Ears', 
      image_url: CaliforniaElephantEars, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ]
    },
    { id: 2, 
      name: 'Elephant Bush', 
      image_url: ElephantBush, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 3, 
      name: 'Heartleaf Philoden', 
      image_url: HeartleafPhilodendron, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 4, 
      name: 'Hot Flash Caladium', 
      image_url: HotFlashCaladium, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 5, 
      name: 'Lemon Spider Plant', 
      image_url: LemonSpiderPlant, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 6, 
      name: 'Mint', 
      image_url: Mint, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 7, 
      name: 'Peace Lilly', 
      image_url: PeaceLilly, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 8, 
      name: 'Rubber Plant', 
      image_url: RubberPlant, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 9, 
      name: 'Rubber Plant Tineke', 
      image_url: RubberPlantTineke, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 10, 
      name: 'Tradescantia Nanouk', 
      image_url: TradescantiaNanouk, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 11, 
      name: 'Variegated Vinca', 
      image_url: VariegatedVinca, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 12, 
      name: 'Variegatum Spider Plant', 
      image_url: VariegatumSpiderPlant, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
    { id: 13, 
      name: 'White Bird of Paradise', 
      image_url: WhiteBirdOfParadise, 
      description: [
        { label: 'Difficulty', value: 'Moderate' },
        { label: 'Soil', value: 'Well-drained' },
        { label: 'Sun', value: 'Partial shade' },
        { label: 'Pot', value: 'Large' },
        { label: 'Water', value: 'Moderate' },
        { label: 'Temperature', value: '18-25°C' },
        { label: 'Toxicity', value: 'Non-toxic' },
        { label: 'Fertilizer', value: 'Monthly' },
        { label: 'Humidity', value: 'High' },
        { label: 'Flowers', value: 'Yes' }
      ] 
    },
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
        {filteredPlants.length === 0 && (
            <p className="no-results">we don't have that plant yet! 😱</p>
          )}
       
        <Container>
          <div className={`card-grid ${filteredPlants.length === 1 ? 'single-card' : ''}`} style={{ marginTop: '2rem' }}>
            <Row xs={1} md={2} lg={3} className="g-4">
              {filteredPlants.map((plant) => (
                <Col key={plant.id}>
                  <Card>
                    <Card.Img variant="top" src={plant.image_url} />
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontFamily: 'Shadows Into Light, Brush Script MT',fontSize: '1.8rem', textDecoration: 'underline'}}>{plant.name}</Card.Title>
                      <Card.Text >
                        {Array.isArray(plant.description) ? (
                          plant.description.map((item, index) => (
                            <Row key={index}>
                              <Col sm={6}><strong>{item.label}:</strong></Col>
                              <Col sm={6}>{item.value}</Col>
                            </Row>
                          ))
                        ) : (
                          <span>{plant.description}</span>
                        )}
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
