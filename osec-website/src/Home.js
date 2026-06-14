import React, {useEffect, useState} from 'react';
import LoadingScreen from './LoadingScreen';
import './Home.css';
import './OspreyWelcome.css';
import osprey0 from './pixel-bird-0.png';
import osprey1 from './pixel-bird-1.png';
import osprey2 from './pixel-bird-2.png';
import osprey3 from './pixel-bird-3.png';
import osprey4 from './pixel-bird-4.png';

  const OspreyWelcome = () => {
  const [frameIndex, setFrameIndex] = useState(0);    
  const frames = [osprey0, osprey1, osprey2, osprey3, osprey4];

  useEffect(() => {
    const flapInterval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 100);
    return () => clearInterval(flapInterval); 
  }, [frames.length]);

  return (
    <div className="osec-intro-container">
      <img src={frames[frameIndex]} alt="Flapping Osprey" className="osprey-sprite-flying" />
    </div>
  );
};

function Home() {
  /*
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
 */

  return (
    <div className="home-wrapper">
      <OspreyWelcome />
      <header class="site-header">
        <nav class="nav-bar">
        <div class="nav-logo">
          <a href="index.html"><img src="images/OSEC_plain.png" alt=""></img>
          </a>
        </div>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="About.html" class="nav-link">About Us</a>
          <a href="Resources.html" class="nav-link">Resources</a>
        </div>

        <a href="https://discord.gg/McZz3KtDp4" target="_blank" class="nav-discord-button">Join Discord</a>        
      </nav>
        </header>

        <main>
      <section id="Content">
        <h1>Welcome to Osprey Security!</h1>
        <img src="images/OSECLogoFullNoBG1.png" alt="" class="osec-logo"></img>
          <p>We are the leading cybersecurity club at University of North Florida (UNF). We bring in industry speakers to discuss trending topics in the field, compete in national competitions, and have opportunities for hands on learning with our research lab.</p>
    </section>

    <section id="Story">
      <h1>Our Story</h1>
      <p>Osprey Security (OSEC) started as Association for Information Technology Professionals (AITP). Since then we have grown dramatically! We are a group of highly motivated, aspiring technology professionals, looking to improve everyday. We compete in cybersecurity competitions including CCDC, CPTC, and NCAE. In Spring 2023 our CCDC team made school history by reaching nationals! We are committed to helping UNF students from any background or major gain experience in IT. Go Ospreys!</p>
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

    </div>
  );

}

export default Home;