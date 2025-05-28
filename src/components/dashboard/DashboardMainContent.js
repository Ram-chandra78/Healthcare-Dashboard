import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../../styles/DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="date-filter">
          <span className="filter-text">This Week</span>
          <span className="dropdown-arrow">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="grid-section anatomy-container">
          <AnatomySection />
          <HealthStatusCards />
        </div>

        <div className="grid-section calendar-container">
          <CalendarView />
        </div>

        <div className="grid-section schedule-container">
          <UpcomingSchedule />
        </div>

        <div className="grid-section activity-container">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
