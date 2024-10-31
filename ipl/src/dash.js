import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="dashboard">
      <h1>IPL Management Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* Rest of your dashboard code */}
    </div>
  );
};

export default Dashboard;
