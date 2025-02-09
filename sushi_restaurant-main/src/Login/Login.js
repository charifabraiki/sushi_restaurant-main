import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('authToken');
    if (isLoggedIn) {
      navigate('/admin-panel');
    }
  }, [navigate]);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@]).{6,}$/.test(password)) {
      newErrors.password = 'Password must be at least 6 characters long and include at least one uppercase letter, one number, and one special character (@)';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem('authToken', user.id);
        setMessage('Login successful!');
        navigate('/admin-panel');
      } else {
        setMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred, please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              border: errors.email ? '1px solid red' : '1px solid #ccc',
              display: 'block',
              width: '100%',
              padding: '0.5rem',
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>
              {errors.email}
            </span>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              border: errors.password ? '1px solid red' : '1px solid #ccc',
              display: 'block',
              width: '100%',
              padding: '0.5rem',
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>
              {errors.password}
            </span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
              Don't you have an account?{' '}
              <Link to="/admin-signup">Sign up here</Link>
            </p>
    </div>
  );
};

export default Login;
