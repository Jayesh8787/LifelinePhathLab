import React, { useState } from "react";
import Services from "../../Services/Services";
export default function AddTest() {
  const [previewSrc, setPreviewSrc] = useState("");
  const previewImage = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setPreviewSrc(e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    previewImage(e.target);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;
    previewImage(droppedFiles[0]);
  };

  // ======================================================
  const [formData, setFormData] = useState({
    testName: "",
    testType: "",
    testDescription: "",
    actualPrice: 0,
    discount: 0,
    finalPrice: 0,
    photoFile: null,
  });

  // const calculateFinalPrice = () => {
  //   const actualPrice = Number(formData.actualPrice);
  //   const discount = Number(formData.discount);

  //   // Check if both actualPrice and discount are valid numbers
  //   if (!isNaN(actualPrice) && !isNaN(discount)) {
  //     // Calculate final price with 2 decimal places
  //     const discountedAmount = (actualPrice * discount) / 100;
  //     const finalPrice = actualPrice - discountedAmount;

  //     // Update the state
  //     setFormData((prevData) => ({ ...prevData, finalPrice }));
  //   } else {
  //     // Handle invalid input (non-numeric values)
  //     setFormData((prevData) => ({ ...prevData, finalPrice: "" }));
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

  //   // If the changed field is actualPrice or discount, recalculate finalPrice
  //   if (name == "actualPrice" || name == "discount") {
  //     calculateFinalPrice();
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // If the changed field is actualPrice or discount, recalculate finalPrice
    if (name === "actualPrice" || name === "discount") {
      calculateFinalPrice();
    }
  };

  const calculateFinalPrice = () => {
    setFormData((prevData) => {
      const actualPrice = Number(prevData.actualPrice);
      const discount = Number(prevData.discount);

      // Check if both actualPrice and discount are valid numbers
      if (!isNaN(actualPrice) && !isNaN(discount)) {
        // Calculate final price with 2 decimal places
        const discountedAmount = (actualPrice * discount) / 100;
        const finalPrice = actualPrice - discountedAmount;

        // Return the updated state
        return { ...prevData, finalPrice };
      } else {
        // Handle invalid input (non-numeric values)
        return { ...prevData, finalPrice: 0 };
      }
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photoFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        testName,
        testType,
        testDescription,
        actualPrice,
        discount,
        finalPrice,
        photoFile,
      } = formData;
      const formDataToSend = new FormData();
      formDataToSend.append("testName", testName);
      formDataToSend.append("testType", testType);
      formDataToSend.append("testDescription", testDescription);
      formDataToSend.append("actualPrice", actualPrice);
      formDataToSend.append("discount", discount);
      formDataToSend.append("finalPrice", finalPrice);
      formDataToSend.append("photoFile", photoFile);

      await Services.addTest(formDataToSend)
        .then((res) => {
          alert("Test registered successfully!");
        })
        .catch((err) => {
          console.log(err);
        });

      setFormData({
        testName: "",
        testType: "",
        testDescription: "",
        actualPrice: 0,
        discount: 0,
        finalPrice: 0,
        photoFile: null,
      });
    } catch (error) {
      console.error("Error registering test:", error);
      alert("Failed to register test. Please try again later.");
    }
  };
  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Add Test</h3>
      </div>
      <div className="container mt-5 mb-3 pb-3 bg-white pt-3">
        <div className="text-center">
          <h2 className="mb-4">Upload Photo</h2>
          <label
            htmlFor="photo-input"
            id="preview-container"
            className="form-group"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <p>Click here to upload photo</p>
            <input
              type="file"
              className="form-control-file d-none"
              id="photo-input"
              accept="image/*"
              onChange={(e) => {
                handleFileInputChange(e); // Call the first function
                handleFileChange(e); // Call the second function
              }}
            />
            {previewSrc && (
              <img id="preview-image" src={previewSrc} alt="Preview" />
            )}
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputName1">Test Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            name="testName"
            value={formData.testName}
            onChange={handleChange}
            placeholder="Enter name or the test or package"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Test type</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            name="testType"
            value={formData.testType}
            onChange={handleChange}
            placeholder="Enter type of the test or package eg. blood, liver, allergies etc."
          />
        </div>
        <div class="form-group">
          <label for="exampleTextarea1">Test Description</label>
          <textarea
            class="form-control"
            id="exampleTextarea1"
            name="testDescription"
            value={formData.testDescription}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <div className="form-group row">
          <div className="col">
            <label>Actual Price</label>
            <div id="the-basics">
              <input
                className="typeahead"
                type="text"
                name="actualPrice"
                onChange={handleChange}
                value={formData.actualPrice}
                placeholder="Enter Actual price"
              />
            </div>
          </div>
          <div className="col">
            <label>Discount %</label>
            <div id="bloodhound">
              <input
                className="typeahead"
                type="text"
                name="discount"
                onChange={handleChange}
                value={formData.discount}
                placeholder="Enter Discount in %"
              />
            </div>
          </div>
          <div className="col">
            <label>Final price</label>
            <div id="bloodhound">
              <input
                className="typeahead"
                type="text"
                name="finalPrice"
                value={formData.finalPrice}
                placeholder="Final price"
                readOnly
              />
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          Add Test
        </button>
      </div>
    </>
  );
}
