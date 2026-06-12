import React, { useState } from 'react';
import { authService } from '../../services/authService';
import '../../styles/auth.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // The legacy email auth forms are wrapped below so they can be easily deleted later

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await authService.login(email, password);
      console.log('Login successful:', response);
      // For now, we'll just show an alert or let the console log show success.
      alert('Login Successful!');
      // TODO: Save token to localStorage or state, and redirect to dashboard
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error && <div className="auth-error-message">{error}</div>}
      
      <div className="input-group">
        <label className="input-label" htmlFor="email">Email</label>
        <input 
          id="email"
          type="email" 
          className="input-field" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="password">Password</label>
        <input 
          id="password"
          type="password" 
          className="input-field" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="auth-submit-btn" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
