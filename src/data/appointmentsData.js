export const calendarData = {
  month: 'October',
  year: 2021,
  days: [
    { date: 25, day: 'Mon', appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '12:00' }] },
    { date: 26, day: 'Tues', appointments: [{ time: '08:00' }, { time: '09:00' }, { time: '10:00' }] },
    { date: 27, day: 'Wed', appointments: [{ time: '12:00' }, { time: '13:00' }] },
    { date: 28, day: 'Thurs', appointments: [{ time: '10:00' }, { time: '11:00' }] },
    { date: 29, day: 'Fri', appointments: [{ time: '14:00' }, { time: '16:00' }] },
    { date: 30, day: 'Sat', appointments: [{ time: '12:00' }, { time: '14:00' }, { time: '15:00' }] },
    { date: 31, day: 'Sun', appointments: [{ time: '09:00' }, { time: '10:00' }, { time: '11:00' }] },
  ]
};

export const specialAppointments = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: 'tooth',
    color: 'blue',
    day: 'Today'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Dipnes',
    icon: 'physiotherapy',
    color: 'purple',
    day: 'Today'
  }
];

export const upcomingSchedule = [
  {
    id: 1,
    day: 'Thursday',
    appointments: [
      {
        id: 1,
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'checkup',
        color: 'purple'
      },
      {
        id: 2,
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: 'eye',
        color: 'blue'
      }
    ]
  },
  {
    id: 2,
    day: 'Saturday',
    appointments: [
      {
        id: 1,
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: 'heart',
        color: 'pink'
      },
      {
        id: 2,
        title: 'Neurologist',
        time: '16:00 PM',
        icon: 'brain',
        color: 'blue'
      }
    ]
  }
];
