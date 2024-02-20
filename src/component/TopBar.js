import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="contact">
        <div className="contact-info">
          <i className="icofont-ui-call" />
          <div className="info">
            <div className="primary-text">9921410715</div>
            <div className="secondary-text">lifelinepath@gmail.com</div>
          </div>
        </div>
        <div className="contact-info">
          <i className="icofont-location-pin" />
          <div className="info">
            <div className="primary-text">Lifeline clinical lab</div>
            <div className="secondary-text">
              A/p Mandavagan Pharata Pune 412211
            </div>
          </div>
        </div>
        <div className="contact-info">
          <i className="icofont-clock-time" />
          <div className="info">
            <div className="primary-text">9:00-18:00</div>
            <div className="secondary-text">Sunday - Saturday</div>
          </div>
        </div>
      </div>
    </div>
  );
}
