import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardMainContent from './components/dashboard/DashboardMainContent';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (window.innerWidth > 992) {
        setIsSidebarOpen(true);
      } else {
        
        setIsSidebarOpen(false);
      }
    };

    
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} />
      <div className="main-container">
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
