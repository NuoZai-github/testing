import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">Volt<span className="accent">Test</span></div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Experience Speed Like <br/><span className="gradient-text">Never Before</span></h1>
          <p>The ultimate platform for next-generation website testing. Fast, reliable, and beautifully designed.</p>
          <div className="cta-group">
            <button className="btn-primary large">Start Testing Now</button>
            <button className="btn-secondary large">View Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glowing-orb"></div>
          <div className="code-card">
             <pre>
               <code>
                 $ npm run test --fast
                 <br/>
                 <span style={{color: '#4ade80'}}>✔ Tests Passed: 452</span>
                 <br/>
                 Time: 0.34s
               </code>
             </pre>
          </div>
        </div>
      </header>

      <section className="features" id="features">
        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Optimized for performance with zero overhead.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>Secure by Default</h3>
          <p>Enterprise-grade security built into every layer.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🎨</div>
          <h3>Beautiful UI</h3>
          <p>Designed to be intuitive and easy to use.</p>
        </div>
      </section>
    </div>
  )
}

export default App
