import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faHeart, faBrain } from '@fortawesome/free-solid-svg-icons';
import '../../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon, color }) => {
  
  const iconMap = {
    'checkup': faCheckCircle,
    'eye': faEye,
    'heart': faHeart,
    'brain': faBrain
  };
  return (
    <div className={`simple-appointment-card ${color}`}>
      <div className="appointment-info">
        <h3 className="appointment-title">{title}</h3>
        <p className="appointment-time">{time}</p>
      </div>
      <div className="appointment-icon">
        <FontAwesomeIcon icon={iconMap[icon]} />
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
