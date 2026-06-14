import React, {useEffect, useState} from 'react';
import LoadingScreen from './LoadingScreen';
import './About.css';

function About() {
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
    <body>
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
            <section id="about-section">
            <h1>About Us</h1>
            <img src="images/OSECLogoFullNoBG1.png" alt="" class="osec-logo"></img>
            <h2>Meet the Officers!</h2> 
                <h3>Current Officers for Spring 2026:</h3>
                    <p>Faculty Advisor: Larry Snedden </p>
                    <p>President: Alex Ramudo </p>
                    <p>Vice President: Amanda Olyer </p>
                    <p>Treasurer: Danielle Graham </p>
                    <p>Team Captain: Frances Dolembo </p>
                    <p>Secretary: Madison McCann </p> 
                    <p>Event Coordinator: Jonathan Tabet </p>
            
            <hr></hr>
            
                <h3>Previous Officers for Fall 2025:</h3>
                    <p>Faculty Advisor: Larry Snedden </p>
                    <p>President: Alex Ramudo </p>
                    <p>Vice President: Cody Copple </p>
                    <p>Treasurer: Anthony Le </p>
                    <p>Team Captain: Evan Lauer </p>
                    <p>Secretary: Danielle Graham </p> 
                    <p>Event Coordinator: Amanda Olyer </p>
          
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


export default About;