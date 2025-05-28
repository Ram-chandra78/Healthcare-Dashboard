import React from 'react';
import { upcomingSchedule } from '../../data/appointmentsData';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      
      <div className="schedule-list">
        {upcomingSchedule.map(scheduleItem => (
          <div key={scheduleItem.id} className="schedule-day">
            <h3 className="day-title">On {scheduleItem.day}</h3>
            
            <div className="day-appointments">
              {scheduleItem.appointments.map(appointment => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon}
                  color={appointment.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
