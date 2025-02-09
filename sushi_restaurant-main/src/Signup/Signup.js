import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

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
    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/admin-login');
      } else {
        setMessage('Failed to sign up, please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setMessage('An error occurred, please try again later.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              border: errors.username ? '1px solid red' : '1px solid #ccc',
              display: 'block',
              width: '100%',
              padding: '0.5rem'
            }}
          />
          {errors.username && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.username}</span>
          )}
        </div>
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
              padding: '0.5rem'
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.email}</span>
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
              padding: '0.5rem'
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.password}</span>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/admin-login">Log in here</Link>
      </p>
    </div>
  );
};

export default SignUp;
