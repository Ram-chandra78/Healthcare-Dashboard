import React from 'react';
import '../../styles/SidebarToggle.css';

const SidebarToggle = ({ isOpen, toggleSidebar, isMobile }) => {
  return (
    <button 
      className={`sidebar-toggle ${isOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`} 
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      <span className="toggle-line"></span>
      <span className="toggle-line"></span>
      <span className="toggle-line"></span>
    </button>
  );
};

export default SidebarToggle;
