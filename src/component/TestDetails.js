import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TestDetails() {
  const { testName } = useParams();
  const [testDetails, setTestDetails] = useState(null);

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        console.log("Fetching test details for testName:", testName);
        const response = await axios.get(
          `http://localhost:8083/api/tests/testName/${testName}`
        );
        setTestDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching test details:", error);
      }
    };
    fetchTestDetails();
  }, [testName]);

  return (
    <div className="container rounded bg-white mt-3 p-5 test-details">
      <div className="text-center fw-semibold mt-3 mb-3">
        <h3>Test Details</h3>
      </div>

      {testDetails && (
        <>
          <div className="row">
            <div className="col-xl-6 col-sm-6">
              <div className="p-3">
                <img
                  width={"100%"}
                  src={`../Files/TestImage/${testDetails.testImagePath}`}
                  alt="Default"
                />
              </div>
            </div>
            <div className="col-xl-6 col-sm-6 p-5">
              <div className="row mt-1">
                <div className="col-6 fw-semibold">
                  <div>Test Name:</div>
                </div>
                <div className="col-6">{testDetails.testName}</div>
              </div>
              <div className="row mt-1">
                <div className="col-6 fw-semibold">Description:</div>{" "}
                <div className="col-6"> {testDetails.testDescription}</div>
              </div>
              <div className="row mt-1">
                <div className="col-6 fw-semibold">Discount:</div>
                <div className="col-6 text-primary">
                  {testDetails.discount}% off{" "}
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-6 fw-semibold">Actual price:</div>
                <div className="col-6 text-danger fw-semibold">
                  <del>₹{testDetails.actualPrice}</del>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-6 fw-semibold">Actual price:</div>
                <div className="col-6 text-success fw-semibold">
                  ₹{testDetails.finalPrice}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <button className="container btn btn-primary">
                    Add to cart
                  </button>
                </div>
                <div className="col-6">
                  <button className="container btn btn-outline-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
