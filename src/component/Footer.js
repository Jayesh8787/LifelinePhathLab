import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-sm-4">
          <h4 className="footer-heading">Services</h4>
          <div>
            <a href="#" className="footer-anchor">
              Home
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Book Test
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Upload Prescription
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Download Report
            </a>
            <br />
          </div>
        </div>
        <div className="col-sm-4">
          <h4 className="footer-heading">Social Media Handles</h4>
          <div>
            <a href="#" className="footer-anchor">
              Instagram
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Facebook
            </a>
            <br />
            <a href="#" className="footer-anchor">
              Twitter
            </a>
            <br />
          </div>
        </div>
        <div className="col-sm-4">
          <h4 className="footer-heading">Contact Details</h4>
          <div className="footer-contactDetails">
            <ul>
              <li>+91 9922410715</li>
              <li>+91 9828381713</li>
              <li>lifelineclinical@gmail.com</li>
              <li>A/p-Mandavagan Pharata, Pune-412211</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
