import React from 'react';
import { Link } from 'react-router-dom';
import './land.css';

const LandingPage = () => (
  <div className="LandingPage">
    <h1>Welcome to the IPL Management System</h1>
    <p>Stay updated with IPL seasons, teams, and player statistics.</p>
    <div className="button-container">
      <Link to="/signup" className="button">Sign up</Link>
      <Link to="/login" className="button">Log in</Link>
    </div>
  </div>
);

export default LandingPage;
