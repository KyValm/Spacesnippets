import React, { useEffect, useRef } from 'react';

const StarryNight = () => {
  const starryNightRef = useRef(null);

  useEffect(() => {
    const stars = [];

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      stars.push(star);
    }

    const starryNightDiv = starryNightRef.current;
    stars.forEach((star) => starryNightDiv.appendChild(star));

    return () => {
      stars.forEach((star) => starryNightDiv.removeChild(star));
    };
  }, []);

  return <div className="starry-night" ref={starryNightRef}></div>;
};

export default StarryNight;
