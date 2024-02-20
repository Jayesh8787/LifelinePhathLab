import React, { useEffect, useState } from "react";
import Services from "../Services/Services";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function BestOffers() {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    Services.getBestOffers()
      .then((res) => {
        setOffers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const NavigationHandler = (testName) => {
    navigate("/testDetails/" + testName);
  };

  const cartHandler = (id) => {
    const storedUserId = Cookies.get("userId");
    const booking = { user: { userId: storedUserId }, tests: { testId: id } };

    // console.log(booking);
    Services.bookOrder(booking)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container mt-3 rounded Test">
      <h3 className="text-center">Best Offers</h3>
      <div className="row">
        {/* ===================================== */}
        {offers &&
          offers.map((offer) => (
            <div className="product-cart rounded bk-test col-md-3 col-xs-6 mt-3">
              <div onClick={() => NavigationHandler(offer.testName)}>
                <div className="img">
                  <img
                    className="img-fluid"
                    src={`Files/TestImage/${offer.testImagePath}`}
                    alt=""
                  />
                </div>
                <div className="title mt-3 text-center">
                  <h6>{offer.testType}</h6>
                </div>
                <div className="price">
                  <span className="off">{offer.discount}% off</span>
                  <span className="dis-price">
                    ₹{offer.finalPrice}{" "}
                    <del className="actual-price">₹{offer.actualPrice}</del>
                  </span>
                </div>
              </div>
              <div className="action-btn mt-3 ">
                <button
                  className="card"
                  onClick={(e) => cartHandler(offer.testId)}
                >
                  Add to cart
                </button>
                <button className="buy">Buy Now</button>
              </div>
            </div>
          ))}
        {/* ======================================= */}
      </div>
    </div>
  );
}
