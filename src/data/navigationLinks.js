export const navigationLinks = [
  { id: 1, name: 'Dashboard', icon: 'dashboard', path: '/', active: true },
  { id: 2, name: 'History', icon: 'history', path: '/history' },
  { id: 3, name: 'Calendar', icon: 'calendar', path: '/calendar' },
  { id: 4, name: 'Appointments', icon: 'appointments', path: '/appointments' },
  { id: 5, name: 'Statistics', icon: 'statistics', path: '/statistics' },
  { id: 6, name: 'Chat', icon: 'chat', path: '/chat' },
  { id: 7, name: 'Support', icon: 'support', path: '/support' },
  { id: 8, name: 'Setting', icon: 'setting', path: '/setting' },
];

export const categories = [
  { id: 1, name: 'General', links: [1, 2, 3, 4, 5] },
  { id: 2, name: 'Tests', links: [6] },
  { id: 3, name: 'Other', links: [7, 8] },
];
