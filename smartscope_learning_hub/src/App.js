import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app" style={{ background: 'var(--background)', color: 'var(--text-color)', minHeight: '100vh' }}>
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo" style={{ color: '#232323' }}>
              <span className="logo-symbol" aria-label="Sparkle" role="img">✦</span>
              Smart Scope
            </div>
            <button className="btn" style={{ background: 'linear-gradient(90deg, var(--secondary) 10%, var(--accent) 100%)', color: '#232323', fontWeight: 700 }}>
              Template Button
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle" style={{ color: '#232323' }}>Welcome to</div>
            <h1 className="title" style={{ WebkitTextFillColor: '#222', color: '#222', background: 'none', textShadow: 'none', fontWeight: 800 }}>
              Smart Scope
            </h1>
            <div className="description" style={{ color: '#232323' }}>
              Start building your application with a vibrant, light, and engaging experience! <br />
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Powered by Smart Scope</span>
            </div>
            <button className="btn btn-large">Get Started</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;