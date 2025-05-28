import React from 'react';
import { anatomyData } from '../../data/healthData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungs, faTooth, faBone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/HealthStatusCards.css';

const HealthStatusCards = () => {
  // Filter out the heart as it's displayed differently
  const displayData = anatomyData.filter(item => item.name !== 'Heart');
  
  // Map icon names to FontAwesome icons
  const iconMap = {
    'lungs': faLungs,
    'teeth': faTooth,
    'bone': faBone
  };
  
  return (
    <div className="health-status-cards">
      {displayData.map((item) => (
        <div key={item.id} className={`health-card ${item.statusColor}`}>
          <div className="card-icon">
            <FontAwesomeIcon icon={iconMap[item.icon]} />
          </div>
          
          <div className="card-content">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-date">{item.date}</p>
          </div>
          
          <div className="status-bar">
            <div 
              className="status-indicator" 
              style={{ 
                width: item.statusColor === 'green' ? '80%' : '40%',
                backgroundColor: item.statusColor === 'green' ? '#62e0a3' : '#ff6b6b' 
              }}
            ></div>
          </div>
        </div>
      ))}
      
      <div className="details-link">
        <span>Details</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default HealthStatusCards;
