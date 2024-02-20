import React, { useState } from "react";
import axios from "axios";
import style from "../assests/style/style.css";

export default function DoctorRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    address: "",
    email: "",
    contact: "",
    password: "",
    specialization: "",
    experience: "",
    licenseFile: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, licenseFile: e.target.files[0] });
  };

  const registerDoctor = async () => {
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("clinicName", formData.clinicName);
    formDataObj.append("address", formData.address);
    formDataObj.append("email", formData.email);
    formDataObj.append("contact", formData.contact);
    formDataObj.append("password", formData.password);
    formDataObj.append("specialization", formData.specialization);
    formDataObj.append("experience", formData.experience);
    formDataObj.append("licenseFile", formData.licenseFile);

    try {
      await axios.post(
        "http://localhost:8083/api/doctors/register",
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Doctor registered successfully!");
    } catch (error) {
      console.error("Error registering doctor:", error);
      alert("Failed to register doctor. Please try again.");
    }
  };

  return (
    <div className=" container mt-2">
      <div className="form-control p-3">
        <h1>Please Enter Your details</h1>
        <br />
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="text"
                name="clinicName"
                placeholder="Clinic Name"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="E-mail Address"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="text"
                name="contact"
                placeholder="Contact Number"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 vl">
            <div className="input-icons ">
              <input
                className="input-field"
                type="text"
                name="specialization"
                placeholder="Your Specialization"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="number"
                name="experience"
                placeholder="Total Experience"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons ">
              <i className="fa fa-user icon" />
              <input
                className="input-field"
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-icons">
              <label className="doctor-licence-label">
                Upload Your Licence*
              </label>
              <i className="fa fa-user icon" />
              <input
                className="input-field file-upload"
                type="file"
                id="myfile"
                name="licenseFile"
                accept=".jpg, .jpeg, .png, .doc, .pdf "
                required=""
                onChange={handleFileChange}
              />
            </div>
            <p className="file-upload-format">
              should be in .doc, .pdf, .jpeg, .jpg, .png format *
            </p>
            <button
              className="button"
              type="submit"
              value="submit"
              onClick={registerDoctor}
            >
              <b>Register</b>
            </button>
            <p className="redirect">
              Already Have An Account<a href="#"> Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
