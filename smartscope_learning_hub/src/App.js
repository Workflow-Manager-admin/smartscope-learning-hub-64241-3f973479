import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app" style={{ background: 'var(--background)', color: 'var(--text-color)', minHeight: '100vh' }}>
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" aria-label="Sparkle" role="img">✦</span> KAVIA AI
            </div>
            <button className="btn" style={{ background: 'linear-gradient(90deg, var(--secondary) 10%, var(--accent) 100%)', color: '#292929', fontWeight: 700 }}>
              Template Button
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">AI Workflow Manager Template</div>
            <h1 className="title">SmartScope Learning Hub</h1>
            <div className="description">
              Start building your application with a vibrant, light, and engaging experience! <br /> <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Powered by Kavia AI</span>
            </div>
            <button className="btn btn-large">Get Started</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;