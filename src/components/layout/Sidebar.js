import React, { useState, useEffect } from 'react';
import { navigationLinks, categories } from '../../data/navigationLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faCalendarAlt, faCalendarCheck, faChartBar, faComment, faQuestionCircle, faCog } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Sidebar.css';

const Sidebar = ({ isOpen, isMobile }) => {
 
  const iconMap = {
    'dashboard': faHome,
    'history': faHistory,
    'calendar': faCalendarAlt,
    'appointments': faCalendarCheck,
    'statistics': faChartBar,
    'chat': faComment,
    'support': faQuestionCircle,
    'setting': faCog
  };
  
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  
  // Initialize activeId from navigationLinks
  useEffect(() => {
    const active = navigationLinks.find(link => link.active);
    if (active) {
      setActiveId(active.id);
    }
  }, []);
  
  // Handle item click
  const handleItemClick = (id) => {
    setActiveId(id);
    
    localStorage.setItem('activeNavItem', id);
  };
  
  // Check for active ID in localStorage on component mount
  useEffect(() => {
    const storedActiveId = localStorage.getItem('activeNavItem');
    if (storedActiveId) {
      setActiveId(parseInt(storedActiveId, 10));
    }
  }, []);
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
      <div className="logo">
        <h2><span className="health-text ">Health</span><span className="care-text">care</span><span className="dot">.</span></h2>
      </div>
      
      <div className="sidebar-content">
        {categories.map(category => (
          <div key={category.id} className="category">
            <h3 className="category-title">{category.name}</h3>
            <ul className="nav-links">
              {navigationLinks
                .filter(link => category.links.includes(link.id))
                .map(link => {
                  // Determine if this item should show as active
                  const isActive = hoveredId ? link.id === hoveredId : link.id === activeId;
                  
                  return (
                    <li 
                      key={link.id} 
                      className={`nav-item ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredId(link.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <a 
                        href={link.path} 
                        className="nav-link"
                        onClick={() => handleItemClick(link.id)}
                      >
                        <span className="nav-icon"><FontAwesomeIcon icon={iconMap[link.icon]} /></span>
                        <span className="nav-text">{link.name}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
