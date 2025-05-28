import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTooth,
  faBone,
  faLungs,
  faSearch,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/AnatomySection.css";

const AnatomySection = () => {
  // Define health statuses with their colors
  const healthStatuses = {
    heart: { status: "Healthy", color: "green" },
    lungs: { status: "Healthy", color: "green" },
    teeth: { status: "Attention Needed", color: "yellow" },
    bone: { status: "Healthy", color: "green" },
  };

  const [activeIndicator, setActiveIndicator] = useState(null);

  const handleMouseEnter = (part) => {
    setActiveIndicator(part);
  };

  const handleMouseLeave = () => {
    setActiveIndicator(null);
  };

  return (
    <div className="anatomy-section">
      <div className="human-container">
        <div className="static-health-indicators">
          {/* Heart indicator */}
          <div
            className={`static-indicator heart-indicator ${
              activeIndicator === "heart" ? "active" : ""
            }`}
            style={{ top: "28%", left: "61%" }}
            onMouseEnter={() => handleMouseEnter("heart")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`indicator-dot ${healthStatuses.heart.color}`}
            ></div>
            {activeIndicator === "heart" && (
              <div className="indicator-tooltip">
                <div className="indicator-name">Heart</div>
                <div
                  className={`indicator-status ${healthStatuses.heart.color}`}
                >
                  {healthStatuses.heart.status}
                </div>
              </div>
            )}
          </div>

          {/* Lungs indicator */}
          <div
            className={`static-indicator lungs-indicator ${
              activeIndicator === "lungs" ? "active" : ""
            }`}
            style={{ top: "31%", left: "58%" }}
            onMouseEnter={() => handleMouseEnter("lungs")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`indicator-dot ${healthStatuses.lungs.color}`}
            ></div>
            {activeIndicator === "lungs" && (
              <div className="indicator-tooltip">
                <div className="indicator-name">Lungs</div>
                <div
                  className={`indicator-status ${healthStatuses.lungs.color}`}
                >
                  {healthStatuses.lungs.status}
                </div>
              </div>
            )}
          </div>

          {/* Teeth indicator */}
          <div
            className={`static-indicator teeth-indicator ${
              activeIndicator === "teeth" ? "active" : ""
            }`}
            style={{ top: "18%", left: "51%" }}
            onMouseEnter={() => handleMouseEnter("teeth")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`indicator-dot ${healthStatuses.teeth.color}`}
            ></div>
            {activeIndicator === "teeth" && (
              <div className="indicator-tooltip">
                <div className="indicator-name">Teeth</div>
                <div
                  className={`indicator-status ${healthStatuses.teeth.color}`}
                >
                  {healthStatuses.teeth.status}
                </div>
              </div>
            )}
          </div>

          {/* Bone indicator */}
          <div
            className={`static-indicator bone-indicator ${
              activeIndicator === "bone" ? "active" : ""
            }`}
            style={{ top: "69%", left: "43%" }}
            onMouseEnter={() => handleMouseEnter("bone")}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`indicator-dot ${healthStatuses.bone.color}`}></div>
            {activeIndicator === "bone" && (
              <div className="indicator-tooltip">
                <div className="indicator-name">Bone</div>
                <div
                  className={`indicator-status ${healthStatuses.bone.color}`}
                >
                  {healthStatuses.bone.status}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="body-model-container">
          <img
            src="https://images.vexels.com/content/141930/preview/muscular-system-anatomy-human-body-71cfc9.png"
            alt="Human Anatomy"
            className="static-anatomy-image"
          />
        </div>

      
      </div>
    </div>
  );
};

export default AnatomySection;
