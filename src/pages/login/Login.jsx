import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

// 1. Define the default credentials here
const VALID_EMAIL = "test@quizapp.com";
const VALID_PASSWORD = "quiz123";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      console.log("Login successful!");
      navigate("/dashboard");
    } else {
      console.error("Login failed: Invalid credentials");
      setError(
        `Invalid email or password. Try ${VALID_EMAIL} / ${VALID_PASSWORD}`
      );
    }
  };

  const handleRegister = (e) => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

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

        {/* Display Error Message if present */}
        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <button className="link-button" onClick={handleRegister}>
        Don't have an account? Register here.
      </button>
    </div>
  );
}

export default Login;
