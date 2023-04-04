import React from 'react';
import StarryNight from './StarryNight';

const Wrapper = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      <StarryNight />
      <div className="relative">{children}</div>
    </div>
  );
};

export default Wrapper;