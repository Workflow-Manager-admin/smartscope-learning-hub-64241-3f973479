import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

/**
 * PUBLIC_INTERFACE
 * App - Root component for Smart Scope Learning Hub.
 * Includes branded navigation, vibrant modern hero section, and layout for main features.
 */
function App() {
  return (
    <div className="app">
      {/* --- Navigation Bar --- */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <div className="logo smartscope-logo" tabIndex={0} aria-label="Smart Scope Home">
              {/* Logo visual: a vibrant multi-color scope icon built from styled circles */}
              <span className="logo-symbol" role="img" aria-label="Smart Scope Icon" style={{
                display: 'inline-block',
                width: 38, height: 38, borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 35%, #ffd700 60%, #ff69b4 120%)',
                boxShadow: '0 0 0 5px #ff7f5019',
                marginRight: 7, verticalAlign: 'middle'
              }}>
                <svg viewBox="0 0 38 38" width={28} height={28}>
                  <circle cx="19" cy="19" r="14" fill="#fff" opacity="0.5" />
                  <circle cx="19" cy="19" r="10.5" fill="#ff7f50" />
                  <circle cx="23" cy="15" r="4" fill="#ffd700" />
                  <circle cx="16" cy="23.5" r="3" fill="#ff69b4" />
                  <circle cx="22" cy="23" r="2" fill="#fff" opacity="0.5" />
                </svg>
              </span>
              <span className="logo-title">
                <span style={{ color: 'var(--primary)' }}>Smart</span>
                <span style={{ color: 'var(--accent)', marginLeft: 2 }}>Scope</span>
              </span>
            </div>
            {/* Navigation/CTAs could be added here */}
            <a
              href="#features"
              className="btn nav-btn"
              style={{
                background: 'linear-gradient(90deg, var(--accent) 0%, var(--primary) 60%)',
                color: '#fff',
                fontWeight: 700,
                border: 'none',
                boxShadow: '0px 2px 16px 0 #ffd70011, 0 1.5px 2.5px 0 #ff69b43c'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Features
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero/Landing Section --- */}
      <main>
        <div className="container">
          <section className="hero" style={{ boxShadow: '0 8px 32px 0 rgba(255, 127, 80, 0.10)' }}>
            <div className="subtitle" style={{
              color: 'var(--accent)',
              fontWeight: 800,
              letterSpacing: '1.2px',
              textShadow: '0px 1px 3px #ffd6f0',
              fontSize: '1.13rem'
            }}>
              Unlock Your Brilliance!
            </div>
            <h1 className="title" style={{
              background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 65%, var(--accent) 100%)',
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900
            }}>
              Smart Scope
            </h1>
            <div className="app-tagline" style={{
              color: 'var(--primary)',
              fontWeight: 700,
              fontSize: '1.29rem',
              marginBottom: '6px',
              letterSpacing: '0.04em'
            }}>
              The Interactive Hub for Modern Learning
            </div>
            <div className="description" style={{
              color: 'var(--text-secondary)',
              fontWeight: 500,
              fontSize: '1.08rem',
              padding: '9px 0 7px 10px',
              background: '#fffae0c9',
              marginBottom: 23,
              borderLeft: '3px solid var(--accent)',
              borderRadius: '7px',
              maxWidth: 540,
              marginInline: 'auto',
              lineHeight: 1.58
            }}>
              Visualize, analyze, and <b style={{ color: 'var(--accent)' }}>truly understand</b><span style={{ color: 'var(--secondary)' }}> academic concepts</span>—all in one playful, vibrant place.<br />
              Supercharged by Kavia AI and real-time data, <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Smart Scope</span> transforms tough theory into engaging journeys. <span style={{ color: 'var(--accent)' }}>Be curious, be brilliant!</span>
            </div>
            <a href="#features" className="btn btn-large hero-btn" style={{ fontWeight: 900, fontSize: '1.17rem', letterSpacing: '.01em', background: 'linear-gradient(90deg, var(--primary) 80%, var(--accent) 100%)' }}>
              Start Exploring
            </a>
          </section>
        </div>
        {/* Main Feature Areas */}
        {/* <span id="features" tabIndex={-1} aria-hidden="true" /> */}
        {/* <MainContainer /> */}
      </main>
    </div>
  );
}

export default App;