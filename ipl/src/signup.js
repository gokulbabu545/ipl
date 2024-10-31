import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Basic validation
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Simple registration in localStorage (for demonstration purposes)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Signup successful!'); // Feedback to user
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <input 
        type="text" 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
