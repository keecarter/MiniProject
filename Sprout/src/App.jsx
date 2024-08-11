// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import PlantInfo from './Components/PlantInfo';
import Account from './Components/Account';

const App = () => {
  return (
    <div className="app-container">
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route exact path="/LandingPage" element={<LandingPage />} />
        <Route path="/PlantInfo" element={<PlantInfo />} />
        <Route path="/Account" element={<Account />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;



