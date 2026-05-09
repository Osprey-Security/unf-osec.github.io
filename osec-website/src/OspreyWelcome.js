import React from 'react';
import './OspreyWelcome.css';
import ospreyImg from './pixel-bird-0.png';

  const OspreyWelcome = () => {
    const [frameIndex, setFrameIndex] = useState(0);    
    const frames = [osprey0, osprey1, osprey2, osprey3, osprey4];

    useEffect(() => {
      const flapInterval = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % frames.length);
      }, 100);

      return () => clearInterval(flapInterval); 
    }, [frames.length]);
  };

export default OspreyWelcome;