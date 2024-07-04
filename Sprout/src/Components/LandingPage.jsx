import React from 'react';
import { Helmet } from 'react-helmet';
import './LandingPage.scss';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const LandingPage = () => {
  const { width, height } = useWindowSize();
  
  return (
    <div className="page-container">
      <Helmet>
        <title>Sprout</title>
        <link 
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" 
          rel="stylesheet" 
        />
      </Helmet>
      <div className="centered-container">
        <h1 style={{ fontFamily: 'Shadows Into Light, Brush Script MT', fontSize: '5rem', color: 'black'}}>Sprout</h1>
        <iframe
          title="Sprout Giphy"
          src="https://giphy.com/embed/edhECBHLH7W7ZCWhqu"
          width="360"
          height="280"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <Navbar className="navbar" />
      <div className='footer'>
      <footer>
        <ul>
          <li>Site by Keidra Carter</li>
          <li>
            <a href="https://www.linkedin.com/in/keidracarter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                icon={faLinkedin} 
                size="2xl" 
                style={{ color: "#438e4c" }}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/keecarter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                icon={faSquareGithub} 
                size="2xl" 
                style={{ color: "#438e4c" }} 
              />
            </a>
          </li>
          <li>I do not claim the rights to any media content used.</li>
        </ul>
      </footer>
      <Confetti
        width={width}
        height={height}
        drawShape={ctx => {
          ctx.beginPath();
          for (let i = 0; i < 22; i++) {
            const angle = 0.35 * i;
            const x = (0.2 + (1.5 * angle)) * Math.cos(angle);
            const y = (0.2 + (1.5 * angle)) * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'darkgreen';
          ctx.stroke();
          ctx.closePath();
        }}
      />
      </div>
    </div>
  );
};

export default LandingPage;
