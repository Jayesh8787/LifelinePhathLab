import React from "react";
import "../mdi/css/materialdesignicons.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Services from "../Services/Services";

export default function Signup() {
  const [firstName1, setFirstName1] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [emailId1, setEmalId1] = useState("");
  const [contactNo1, setContactNo1] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirmPassword1, setConfirmPassword1] = useState("");
  const [dateOfBirth1, setDateOfBirth1] = useState("");
  const [gender1, setGender1] = useState("");
  const [bloodGroup1, setBloodGroup1] = useState("");
  const [address1, setAddress1] = useState("");
  const navigate = useNavigate();

  const registerUser = () => {
    const user = {
      firstName: firstName1,
      lastName: lastName1,
      emailId: emailId1,
      contactNo: contactNo1,
      dateOfBirth: dateOfBirth1,
      gender: gender1,
      bloodGroup: bloodGroup1,
      address: address1,
      password: password1,
    };

    Services.userRegistration(user)
      .then((res) => {
        // console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="container mt-2">
        <div className="form-control p-5">
          <h3>Please Enter Your details</h3>
          <br />
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="input-icons">
                <i className="mdi mdi-account" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={(e) => setFirstName1(e.target.value)}
                />
              </div>
              <div className="input-icons ">
                <i className="mdi mdi-account" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Last Name"
                  required
                  onChange={(e) => setLastName1(e.target.value)}
                />
              </div>
              <div className="input-icons ">
                <i className="mdi mdi-email-outline" />
                <input
                  className="input-field"
                  type="email"
                  placeholder="E-mail Address"
                  required
                  onChange={(e) => setEmalId1(e.target.value)}
                />
              </div>
              <div className="input-icons ">
                <i className="mdi mdi-cellphone" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Contact Number"
                  required
                  onChange={(e) => setContactNo1(e.target.value)}
                />
              </div>
              <div className="input-icons ">
                <i className="mdi mdi-lock-outline" />
                <input
                  className="input-field"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword1(e.target.value)}
                />
              </div>
              <div className="input-icons ">
                <i className="mdi mdi-lock-outline" />
                <input
                  className="input-field"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => setConfirmPassword1(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 vl">
              <div className="input-icons ">
                <input
                  className="input-field"
                  type="date"
                  placeholder="Date Of Birth"
                  onChange={(e) => setDateOfBirth1(e.target.value)}
                />
              </div>

              <div className="input-icons">
                <i className="mdi mdi-account-multiple" />
                <select
                  className="input-field"
                  onChange={(e) => setGender1(e.target.value)}
                >
                  <option value=" ">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Others</option>
                </select>
              </div>
              <div className="input-icons ">
                <i className="mdi mdi-water" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Blood Group"
                  onChange={(e) => setBloodGroup1(e.target.value)}
                />
              </div>
              <div className="input-icons ">
                <i className="icofont-location-pin" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
              <br />
              <button
                className="button"
                type="submit"
                value="submit"
                onClick={registerUser}
              >
                <b>Sign Up</b>
              </button>
              <p className="redirect">
                Already Have An Account
                <Link to="/login" style={{ color: "blue" }}>
                  Click Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
