import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faNotesMedical, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/CalendarView.css';

const CalendarView = () => {
  const [selectedDay, setSelectedDay] = useState(28); // Default to the 28th (Thursday)
  
  
  const monthYear = "October 2021";
  
  // Calendar days exactly as in the image
  const calendarDays = [
    { day: 'Mon', date: 25 },
    { day: 'Tues', date: 26 },
    { day: 'Wed', date: 27 },
    { day: 'Thurs', date: 28 },
    { day: 'Fri', date: 29 },
    { day: 'Sat', date: 30 },
    { day: 'Sun', date: 31 }
  ];

 
  const appointmentData = {
    25: { // Monday
      available: ['10:00', '11:00', '12:00'],
      booked: []
    },
    26: { // Tuesday
      available: ['08:00', '10:00'],
      booked: ['09:00']
    },
    27: { // Wednesday
      available: ['12:00', '13:00'],
      booked: []
    },
    28: { // Thursday
      available: [],
      booked: ['10:00', '11:00']
    },
    29: { // Friday
      available: ['14:00', '16:00'],
      booked: []
    },
    30: { // Saturday
      available: ['14:00', '15:00'],
      booked: ['12:00', '09:00']
    },
    31: { // Sunday
      available: ['10:00', '11:00'],
      booked: []
    }
  };

 
  const specialAppointments = [
    {
      day: 28, // Thursday
      time: '11:00-12:00',
      title: 'Physiotherapy Appointment',
      doctor: 'Dr. Kevin Dipnes',
      icon: 'physiotherapy'
    },
    {
      day: 28, // Thursday
      time: '09:00-11:00',
      title: 'Dentist',
      doctor: 'Dr. Cameron Williamson',
      icon: 'dentist'
    }
  ];

  // Returns appropriate classes and content for each time slot
  const getTimeSlotContent = (day, time) => {
    const dayData = appointmentData[day.date];
    if (!dayData) return { type: 'empty', content: '—' };
    
    if (dayData.booked.includes(time)) {
      return { type: 'booked', content: time };
    } else if (dayData.available.includes(time)) {
      return { type: 'available', content: time };
    } else {
      return { type: 'empty', content: '—' };
    }
  };

  
  const displayedTimeSlots = [
    '10:00', '08:00', '12:00', '10:00', '', '12:00', '09:00',
    '11:00', '09:00', '', '11:00', '14:00', '14:00', '10:00',
    '12:00', '10:00', '13:00', '', '16:00', '15:00', '11:00'
  ];

 
  const visibleAppointments = specialAppointments.filter(apt => apt.day === selectedDay);
  
  const handlePreviousMonth = () => {
    // In a real app, this would change the month displayed
    console.log('Navigate to previous month');
  };

  const handleNextMonth = () => {
    // In a real app, this would change the month displayed
    console.log('Navigate to next month');
  };

  return (
    <div className="calendar-view">
      <div className="month-navigation">
        <div className="month-label">{monthYear}</div>
        <div className="nav-buttons">
          <button className="nav-button prev" onClick={handlePreviousMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="nav-button next" onClick={handleNextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      
      <div className="new-calendar-grid">
        {/* Day headers */}
        <div className="calendar-days-row">
          {calendarDays.map((day) => (
            <div 
              key={day.date} 
              className={`calendar-day-cell ${day.date === selectedDay ? 'selected' : ''}`}
              onClick={() => setSelectedDay(day.date)}
            >
              <div className="day-name">{day.day}</div>
              <div className="day-date">{day.date}</div>
            </div>
          ))}
        </div>

        {/* Time slots rows - exactly as in the image */}
        <div className="calendar-time-slots">
          <div className="time-row">
            {/* First row: 10:00, 08:00, 12:00, 10:00, —, 12:00, 09:00 */}
            <div className="time-cell">10:00</div>
            <div className="time-cell">08:00</div>
            <div className="time-cell">12:00</div>
            <div className="time-cell booked">10:00</div>
            <div className="time-cell empty">—</div>
            <div className="time-cell special">12:00</div>
            <div className="time-cell">09:00</div>
          </div>
          <div className="time-row">
            {/* Second row: 11:00, 09:00, —, 11:00, 14:00, 14:00, 10:00 */}
            <div className="time-cell">11:00</div>
            <div className="time-cell booked">09:00</div>
            <div className="time-cell empty">—</div>
            <div className="time-cell booked special">11:00</div>
            <div className="time-cell">14:00</div>
            <div className="time-cell">14:00</div>
            <div className="time-cell">10:00</div>
          </div>
          <div className="time-row">
            {/* Third row: 12:00, 10:00, 13:00, —, 16:00, 15:00, 11:00 */}
            <div className="time-cell">12:00</div>
            <div className="time-cell">10:00</div>
            <div className="time-cell">13:00</div>
            <div className="time-cell empty">—</div>
            <div className="time-cell">16:00</div>
            <div className="time-cell">15:00</div>
            <div className="time-cell">11:00</div>
          </div>
        </div>
      </div>

      {/* Special appointment cards - only shown for selected day */}
      {visibleAppointments.length > 0 && (
        <div className="special-appointments">
          {visibleAppointments.map((apt, index) => (
            <div key={index} className={`appointment-card ${apt.icon}`}>
              <div className="appointment-icon">
                {apt.icon === 'dentist' && <FontAwesomeIcon icon={faTooth} className="tooth-icon" />}
                {apt.icon === 'physiotherapy' && <FontAwesomeIcon icon={faNotesMedical} className="physio-icon" />}
              </div>
              <div className="appointment-details">
                <h3 className="appointment-title">{apt.title}</h3>
                <p className="appointment-time">{apt.time}</p>
                <p className="appointment-doctor">{apt.doctor}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarView;
