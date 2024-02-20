import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
function Navbar() {
  const handleLogout = () => {
    // Clear all cookies
    Cookies.remove("jwtToken");
    Cookies.remove("username");
    Cookies.remove("firstName");
    Cookies.remove("userId");
    Cookies.remove("role");
    Cookies.remove("isLoggedIn");
    // Dispatch logout action

    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <div className="brand">
            <div className="logo">
              <img src="assests/icon/logo.png" />
            </div>
            <div className="brand-name">
              <h2>Lifeline</h2>
              <p>Clinical Laboratory</p>
            </div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testBookings">
                Test Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appointments">
                Appointments
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Users
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/patients">
                    Patinets
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/doctors">
                    Doctors
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/admins">
                    Admins
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tests
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/addtest">
                    Add Test
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/allTest">
                    All Tests
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/addDoctor">
                Doctor Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/feedback">
                Feedbacks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/enquiry">
                User Enquiries
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link text-danger" onClick={handleLogout}>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
