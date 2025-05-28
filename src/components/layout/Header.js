import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Header.css';

const Header = ({ isOpen, toggleSidebar, isMobile }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button 
          className={`header-sidebar-toggle ${isOpen ? 'open' : 'closed'}`}
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>

        <div className="search-container">
          <span className="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>
      
      <div className="header-actions">
        <div className="notification-icon">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-badge"></span>
        </div>
        
        <div className="user-profile">
          <div className="avatar">
            <img src="/avatar-placeholder.svg" alt="User profile" />
          </div>
        </div>
        
        <button className="add-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </header>
  );
};

export default Header;
