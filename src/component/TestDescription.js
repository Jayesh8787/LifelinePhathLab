import React from "react";

export default function TestDescription() {
  function closeModel() {
    document.querySelector(".overlay").classList.remove("showOverlay");
  }
  return (
    <div className="overlay">
      <div className="container rounded testDescription">
        <div className="test-desc-head">
          <span className="head-title">Test Details</span>
          <span onClick={closeModel} className="headIcon">
            &times;
          </span>
        </div>
        <div className="testImage">
          <img src="./assests/image/download.jpg" alt="Default" />
        </div>
        <hr></hr>
        <div class="test-desc mt-3">
          <div className="title mt-3 text-center">
            <h4>Allergy Package</h4>
          </div>
          <div className="desc-text">
            Feedback: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Feedback: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.mdnjh Feedback: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.mdnjh
          </div>
          <div className="test-price mt-3">
            <span className="price-off">45% off</span>
            <span className="dis-price">
              ₹900 <del className="actual-price">₹1000</del>
            </span>
          </div>
          <div className="row act-btn mt-4">
            <div className="test-cart-btn">
              <button className="card-btn">Add to cart</button>
            </div>
            <div className="test-buy-btn">
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
