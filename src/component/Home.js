import React, { useEffect } from "react";
import Feedback from "./Feedback";
import Review from "./Review";
import BestOffers from "./BestOffers";
export default function Home() {
  return (
    <>
      <div className="hero">
        <img
          src="assests/image/backgroudimg.jpg"
          alt="Snow"
          style={{ width: "100%" }}
        />
        <div className="heading">
          <h1>Reliable &amp; High-Quality Laboratory Services</h1>
          <p>We employ the latest technology and innovations</p>
        </div>
      </div>
      {/* End Hero */}

      {/* start Scroll bar */}
      <div className=" container mt-3 rounded scroll-container">
        <div className="text-center my-3 mt-3">
          <h3>Test by Health Risks</h3>
        </div>
        <div className="scroll-wrapper">
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          <div className="scroll-item">
            <div className="circle">
              <img src="assests/image/allergy.png" alt="Image 1" />
              <p>Allergy</p>
            </div>
          </div>
          {/* Add more scroll items as needed */}
        </div>
      </div>
      {/* Add more scroll items as needed */}
      {/* end scroll bar */}
      {/*  Start Offer Section */}
      <BestOffers />
      {/*  End Offer Section */}
      {/*Feedback Section starts here*/}
      <Feedback />
      {/*Feedback Section ends here*/}
      {/*review Section starts here*/}
      <Review />
      {/*review Section starts here*/}
    </>
  );
}
