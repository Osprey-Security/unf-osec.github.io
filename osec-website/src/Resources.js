import React, {useEffect, useState} from 'react';
import LoadingScreen from './LoadingScreen';
import './resources.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const shownThisSession = sessionStorage.getItem('loadingShown');
    if (!shownThisSession) {
      setLoading(true);
      sessionStorage.setItem('loadingShown', 'true');
    }
  }, []);

  if (loading) {
    return <LoadingScreen onLoadComplete={() => setLoading(false)} />;
  }

  return (
    <body>
      <header class="site-header">
        
        <div class="nav-logo">
          <a href="index.html"><img src="images/OSEC_plain.png" alt=""></img>
          </a>
        </div>
        <div class="nav-links">
          <a href="/" class="nav-link-button">Home</a>
          <a href="/About" class="nav-link-button">About Us</a>
          <a href="/Resources" class="nav-link-button">Resources</a>
        </div>

        <a href="https://discord.gg/McZz3KtDp4" target="_blank" class="nav-discord-button">Join Discord</a>        
      
        </header>

    <main>
      <section id="Content">
        <h1>Develop Your Skills With These Resources</h1>
        <img src="/images/OSECLogoFullNoBG1.png" alt="" className="osec-logo" />
        <h2>Learning Platforms</h2>
        <section id="resources-list">
          <div className="resource-item">
            <a href="https://tryhackme.com/" target="_blank" rel="noreferrer" className="resource-button-1">TryHackMe</a>
            <span className="resource-description">  -  Hands-on cybersecurity training</span>
          </div>
          <div className="resource-item">
            <a href="https://www.hackthebox.com/" target="_blank" rel="noreferrer" className="resource-button-2">Hack The Box</a>
            <span className="resource-description">  -  Practice penetration testing</span>
          </div>
          <div className="resource-item">
            <a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noreferrer" className="resource-button-3">Over the wire</a>
            <span className="resource-description">  -  Gain experience with Linux</span>
          </div>
        </section>
      </section>
    </main>

    <footer>
      <h2>Connect With Us</h2>
      <p>Check out our socials to see what else we're up to!</p>
      <div className="social-icons-footer">
        <a href="https://www.instagram.com/unfcybersec/" target="_blank" title=""><img src="images/instagram.png" alt=""></img>
        </a>
        <a href="https://www.linkedin.com/company/unfcyber/" target="_blank"><img src="images/InBug-White.png" alt=""></img>
        </a>
        <a href="https://discord.gg/McZz3KtDp4" target="_blank" title=""><img src="images/Discord.png" alt=""></img>
        </a>
        <a href="https://x.com/clubosprey" target="_blank" title=""><img src="images/X.png" alt=""></img>
        </a>
      </div>
      <p>Sponsored by UNF Student Government</p>
      </footer>
    </body>
  );
}

export default App;