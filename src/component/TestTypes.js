import React, { useEffect, useState } from "react";
import Services from "../Services/Services";
import { useDispatch } from "react-redux";
import { sendTestCategoryData } from "../redux/reducers/categoryReducer";
export default function TestTypes() {
  const [testTypes, setTestTypes] = useState([]);
  const dispatch = useDispatch();
  const dispatchTestTypes = (data) => {
    dispatch(sendTestCategoryData(data));
  };

  useEffect(() => {
    Services.getAllTestType()
      .then((res) => {
        setTestTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h5 className="filters">Fillter</h5>
      <div className="filter-items">
        <div className="ms-4 mt-2">
          <div
            onClick={() => {
              dispatchTestTypes("");
            }}
          >
            All
          </div>
          {testTypes &&
            testTypes.map((testType) => (
              <div
                onClick={() => {
                  dispatchTestTypes(testType);
                }}
              >
                {testType}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
