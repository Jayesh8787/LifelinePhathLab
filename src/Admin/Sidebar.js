import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">
            <i class="icon-grid menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/testBookings">
            <i class="mdi mdi-cash-usd menu-icon"></i>
            <span class="menu-title">Test Bookings</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/appointments">
            <i class="mdi mdi-av-timer menu-icon"></i>
            <span class="menu-title">Appointments</span>
          </Link>
        </li>
        <li class="nav-item">
          <div
            class="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <i class="mdi mdi-account menu-icon"></i>
            <span class="menu-title">Users</span>
            <i class="menu-arrow"></i>
          </div>
          <div class="collapse" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <Link class="nav-link" to="/patients">
                  Patients
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/doctors">
                  Doctors
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admins">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link"
            data-toggle="collapse"
            href="#form-elements"
            aria-expanded="false"
            aria-controls="form-elements"
          >
            <i class="mdi mdi-test-tube menu-icon"></i>
            <span class="menu-title">Tests</span>
            <i class="menu-arrow"></i>
          </div>
          <div class="collapse" id="form-elements">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <Link class="nav-link" to="allTest">
                  All Test
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/addtest">
                  Add Test
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="addDoctor">
            <i class="mdi mdi-file-document-box"></i>
            <span class="menu-title">Doctors Register</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="enquiry">
            <i class="mdi mdi-comment-question-outline"></i>
            <span class="menu-title">User Enquiry </span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="feedback">
            <i class="mdi mdi-message-draw"></i>
            <span class="menu-title">Feedback</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
