// LoginForm/Login.jsx

import React, { useState } from 'react';
import './Login.css'; 

// 1. Define the default credentials here
const VALID_EMAIL = "test@quizapp.com";
const VALID_PASSWORD = "quiz123";

function Login({ onFormSwitch, onLoginSuccess }) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setError('');
    
    // 2. Check if the entered email and password match the default values
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        console.log('Login successful!');
        
        // 3. If correct, call the success handler to switch to the dashboard
        if (onLoginSuccess) {
            onLoginSuccess(); 
        }
    } else {
        // 4. If incorrect, display an error
        console.error('Login failed: Invalid credentials');
        setError(`Invalid email or password. Try ${VALID_EMAIL} / ${VALID_PASSWORD}`);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        {/* Display Error Message if present */}
        {error && <p className="error-message">{error}</p>}
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <button 
        className="link-button" 
        onClick={() => onFormSwitch('register')}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
}

export default Login;