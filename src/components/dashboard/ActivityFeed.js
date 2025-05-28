import React from 'react';
import { activityData } from '../../data/healthData';
import '../../styles/ActivityFeed.css';

const ActivityFeed = () => {
  
  const maxValue = Math.max(...activityData.map(item => item.value));
  
  return (
    <div className="activity-feed">
      <h2 className="section-title">Activity</h2>
      <p className="activity-summary">3 appointment on this week</p>
      
      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="chart-column">
            <div className="bar-container">
              <div 
                className="activity-bar"
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: index % 2 === 0 ? '#62e0a3' : '#5b6acf'
                }}
              ></div>
            </div>
            <p className="day-label">{item.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
