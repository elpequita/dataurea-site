// Styled & Enhanced React Starter for Dataurea
// Includes dark mode toggle, basic animations, and meta SEO tags

import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <head>
        <title>Dataurea | Business Intelligence Puerto Rico</title>
        <meta name="description" content="Dataurea empowers Puerto Rico healthcare and business leaders with BI, dashboards, and insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.png" type="image/png" />
      </head>

      <header className="navbar">
        <img src={logo} alt="Dataurea" className="logo" onClick={() => scrollTo('hero')} />
        <nav>
          <a onClick={() => scrollTo('about')}>About</a>
          <a onClick={() => scrollTo('services')}>Services</a>
          <a onClick={() => scrollTo('contact')}>Contact</a>
        </nav>
        <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <section id="hero" className="section hero fade-in">
        <h1>Transform Data into Strategic Action</h1>
        <p>We empower healthcare and business leaders with smart reporting, dashboards, and insights.</p>
        <button onClick={() => scrollTo('contact')}>Get in Touch</button>
      </section>

      <section id="about" className="section about fade-in">
        <h2>Who We Are</h2>
        <p>DATAUREA is a Puerto Rico-based Business Intelligence firm specializing in transforming raw data into actionable strategies.</p>
      </section>

      <section id="services" className="section services fade-in">
        <h2>Services</h2>
        <ul>
          <li>📊 Dashboards & Analytics</li>
          <li>🧠 Healthcare Metrics & Compliance</li>
          <li>🔁 Automated Reporting</li>
          <li>📁 Data Integration & Cleaning</li>
        </ul>
      </section>

      <section id="contact" className="section contact fade-in">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:carlos.perez@dataurea.com">carlos.perez@dataurea.com</a></p>
      </section>

      <section id="cta" className="section cta fade-in">
        <h3>Ready to turn data into results?</h3>
        <button onClick={() => window.location.href = 'mailto:carlos.perez@dataurea.com'}>Schedule a Free Consultation</button>
      </section>
    </div>
  );
}

export default App;

