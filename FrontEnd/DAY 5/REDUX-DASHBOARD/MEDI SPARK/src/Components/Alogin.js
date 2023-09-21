import React, { useState } from 'react';
import '../Styles/Alogin.css';
import { Link, useNavigate } from 'react-router-dom';

function Alogin() {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here, you can add your authentication logic.
    // For simplicity, let's assume authentication is successful.
    // Replace this with your actual authentication logic.
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Redirect to the admin page upon successful login
      navigate('/admin');
    } else {
      // Handle authentication failure (show error message, etc.)
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="body">
      <div>
        <form className="signup">
          <h1>Admin Login</h1>

          <div className="signup__field">
            <input
              className="signup__input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div className="signup__field">
            <input
              className="signup__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button className="bt" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Alogin;
