import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Topbar2 from "./Topbar2";
export default function Header() {
  return (
    <>
      <Topbar2 />

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <div className="icon-holder me-5">
                    <div className="icon">
                      <i className="icofont-home" />
                    </div>
                    <span> home </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookTest">
                  <div className="icon-holder me-5">
                    <div className="icon">
                      <i className="icofont-laboratory" />
                    </div>
                    <span> Book Test </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/uploadPrescription">
                  <div className="icon-holder me-5">
                    <div className="icon">
                      <i className="icofont-upload-alt" />
                    </div>
                    <span> Upload Prescription </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/downloadReport">
                  <div className="icon-holder me-5">
                    <div className="icon">
                      <i className="icofont-download" />
                    </div>
                    <span> Download report </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <div className="icon-holder me-5">
                    <div className="icon">
                      <i className="icofont-ui-call" />
                    </div>
                    <span className="menu-item"> Contact </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
