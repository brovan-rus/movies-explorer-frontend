import React from 'react';

const Preloader = ({ isActive }) => {
  return (
    <div className={`preloader ${isActive ? 'preloader_active' : ''}`}>
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
};

export default Preloader;
