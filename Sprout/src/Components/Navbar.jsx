import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'; // Import necessary Bootstrap components
import './Navbar.scss';

const Navbar = ({ withSearch, setSearchQuery }) => {
  const searchButtonStyle = {
    padding: '0 20px',
    height: '40px',
    fontSize: '1em',
    fontWeight: '900',
    textTransform: 'uppercase',
    border: '3px solid green',
    borderRadius: '2px',
    background: 'transparent',
    cursor: 'pointer',
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="fixed">
      <Container>
        <BootstrapNavbar.Brand href="#home"></BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/LandingPage" className="nav-link" style={{ fontFamily: 'Shadows Into Light, Brush Script MT', fontSize: '1.8rem', color: 'black'}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/PlantInfo" className="nav-link" style={{ fontFamily: 'Shadows Into Light, Brush Script MT', fontSize: '1.8rem', color: 'black'}}>Learn</Nav.Link>
          <Nav.Link as={Link} to="/Account" className="nav-link" style={{ fontFamily: 'Shadows Into Light, Brush Script MT', fontSize: '1.8rem', color: 'black'}}>Account</Nav.Link>
        </Nav>
        {withSearch && (
          <Form className="form-inline d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <FormControl
              type="search"
              placeholder="Search the greenpage..."
              className="me-2"
              aria-label="Search"
              style={{ width: '800px', border: '3px solid green', borderRadius: '2px', }}
              onChange={handleSearchChange}
            />
          </Form>
        )}
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;





