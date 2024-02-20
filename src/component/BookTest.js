import { useEffect, useState } from "react";
import TestDescription from "./TestDescription";
import Services from "../Services/Services";
import TestTypes from "./TestTypes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BookTest() {
  const navigate = useNavigate();
  const testCategory = useSelector((state) => state.testCategory.value);

  const [tests, setTests] = useState([]);
  useEffect(() => {
    console.log(testCategory);
    Services.getTestByTestType(testCategory)
      .then((res) => {
        setTests(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    // console.log(tests)
  }, [testCategory]);

  const NavigationHandler = (testName) => {
    navigate("/testDetails/" + testName);
  };

  return (
    <div className="container mt-2 rounded Test">
      <div className="row">
        <div className="col-2 border p-2">
          <TestTypes />
        </div>
        <div className="col-10 ">
          <div className="row">
            {tests &&
              tests.map((test) => (
                <div
                  className="product-cart  bk-test rounded col-3 mt-3"
                  key={test.testId}
                >
                  <div onClick={() => NavigationHandler(test.testName)}>
                    <div className="img">
                      <img
                        className="img-fluid"
                        src={`Files/TestImage/${test.testImagePath}`}
                        alt="default"
                      />
                    </div>
                    <div className="title mt-3 text-center">
                      <h4>{test.testName}</h4>
                    </div>
                    <div className="price">
                      <span className="off">{test.discount}% off</span>
                      <span className="dis-price">
                        {test.finalPrice}{" "}
                        <del className="actual-price">{test.actualPrice}</del>
                      </span>
                    </div>
                  </div>
                  <div className="action-btn mt-3 ">
                    <button className="card">Add to cart</button>
                    <button className="buy">Buy Now</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
