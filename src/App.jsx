// App.jsx (Corrected Imports)

import React, { useState } from 'react';

// 1. Update Login import path
import Login from './LoginForm/Login';         

// 2. Update Register import path
import Register from './RegisterForm/Register';   

// 3. Update QuizDashboard import path
import QuizDashboard from './QuizDashboard/QuizDashboard'; 

import './index.css'; // Assuming App.css is in the src directory

function App() {
  // Use 'dashboard' to test the quiz immediately, or 'login' for the auth flow
  const [currentView, setCurrentView] = useState('login'); 
  
  // ... rest of the logic remains the same ...

  const setView = (viewName) => {
    setCurrentView(viewName);
  }

  const renderView = () => {
    switch (currentView) {
      case 'login':
        // Ensure Login receives the onLoginSuccess prop
        return <Login onFormSwitch={setView} onLoginSuccess={() => setView('dashboard')} />;
      case 'register':
        return <Register onFormSwitch={setView} />; 
      case 'dashboard':
        return <QuizDashboard onLogout={() => setView('login')} />; 
      default:
        return <Login onFormSwitch={setView} onLoginSuccess={() => setView('dashboard')} />;
    }
  };

  return (
    <div className="Auth-Wrapper">
      {renderView()}
    </div>
  );
}

export default App;