import React, { useState } from 'react';
import { supabase } from './supabase'; // Make sure to set up your Supabase client in supabase.js
import './App.css';
import logo from './workout logo.svg';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('subscribers')
      .insert([formData]);
    
    if (error) {
      setMessage('Error submitting form. Try again!');
    } else {
      setMessage('Successfully submitted!');
      setFormData({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div className="container">
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Everything Fitness</h1>
      </header>
      <div className="form-container">
        <h2>Join Us</h2>
        <p>Sign up to stay updated with Everything Fitness and 75% off when released</p>
        <form onSubmit={handleSubmit} className="form">
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Enter your phone number" 
            value={formData.phone} 
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
