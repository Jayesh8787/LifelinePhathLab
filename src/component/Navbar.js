import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
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
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  me-auto ms-lg-5 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookTest">
                  Book Test
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/uploadPrescription">
                  Upload Prescription
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/downloadReport">
                  Download Prescription
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctor">
                  Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="search-bar bg-white">
        <form className="d-flex col" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
        <div className="cart-sign col">
          <Link to="/cart">
            <div className="cart">
              <i className="icofont-cart" />
              <div className="secondary-text">cart</div>
            </div>
          </Link>
          <Link to="/login">
            <div className="cart">
              <i className="icofont-user" />
              <div className="secondary-text">Sign in</div>
            </div>
          </Link>
        </div>
      </div> */}
    </>
  );
}
