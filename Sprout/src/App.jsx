// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import PlantInfo from './Components/PlantInfo';

const App = () => {
  return (
    <div className="app-container">
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route exact path="/LandingPage" element={<LandingPage />} />
        <Route path="/PlantInfo" element={<PlantInfo />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;



