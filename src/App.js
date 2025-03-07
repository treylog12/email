import React, { useState } from "react";
import { supabase } from "./supabase"; // Supabase client setup
import "./App.css"; // Import CSS file
import logo from "./workout logo.svg";
import homeImage from "./home.jpeg"; // Ensure images exist inside src/
import createImage from "./create.jpeg";
import goalImage from "./goal.jpeg";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("subscribers").insert([formData]);

    if (error) {
      setMessage("Error submitting form. Try again!");
    } else {
      setMessage("🎉 You’re on the list! Stay tuned for 75% off at launch.");
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero">
        <img src={logo} alt="Everything Fitness Logo" className="logo" />
        <h1>Everything Fitness</h1>
        <p className="subtext">Your ultimate fitness companion, designed to transform your goals into results.</p>
        <a href="#waitlist" className="cta-button">Get 75% Off – Join the Waitlist</a>
      </header>

      {/* Feature Sections - Alternating Screenshots */}
      <section className="feature-section">
        <div className="feature">
          <img src={homeImage} alt="App Home Screen" className="feature-image" />
          <div className="feature-text">
            <h2>Track & Dominate</h2>
            <p>Our AI-powered dashboard keeps you on top of your fitness journey, tracking your progress and making every step count.</p>
          </div>
        </div>

        <div className="feature reverse">
          <div className="feature-text">
            <h2>Personalized Just for You</h2>
            <p>From goal setting to workouts, Everything Fitness tailors your experience for <strong>maximum results</strong>.</p>
          </div>
          <img src={goalImage} alt="Goal Selection" className="feature-image" />
        </div>

        <div className="feature">
          <img src={createImage} alt="Account Creation" className="feature-image" />
          <div className="feature-text">
            <h2>Join the Revolution</h2>
            <p>Fitness shouldn’t be complicated. Sign up in seconds and get a plan built for <strong>your</strong> success.</p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="waitlist-section">
        <h2>🔥 Join the Waitlist & Get 75% Off!</h2>
        <p>Be the first to access <strong>Everything Fitness</strong> and get a massive discount when we launch.</p>
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
            placeholder="Enter your phone number (optional)" 
            value={formData.phone} 
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">Join the Waitlist</button>
        </form>
        {message && <p className="message">{message}</p>}
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Everything Fitness. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
