import React, { useState } from "react";
import Services from "../Services/Services";

export default function Contact() {
  const [name1, setName1] = useState("");
  const [contactNo1, setContactNo1] = useState("");
  const [email1, setEmail1] = useState("");
  const [message1, setMessage1] = useState("");

  const handleEnquiry = () => {
    const enquiry = {
      name: name1,
      contactNO: contactNo1,
      email: email1,
      message: message1,
    };

    Services.addEnquiry(enquiry)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="container mt-2 pb-2 pt-2 bg-white rounded">
        <h3 className="ms-2 mt-2">Contact Details</h3>
        <div className="contact-details px-3 py-2">
          <div>
            <h4>Phone</h4>
            <p>123-456-7890</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>info@example.com</p>
          </div>
          <div>
            <h4>Address</h4>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6243181802884!2d74.48560637372113!3d18.545871568403825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc33d38b36523b3%3A0x5d34a898e1be43ba!2sSAI%20COMPUTERS%20%26%20LIFELINE%20CLINICAL%20LABORATORY!5e0!3m2!1sen!2sin!4v1707980584148!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div class="container rounded bg-white p-5">
        <div class="row">
          <div className="col-sm-6">
            <h1>Post Your Query Here</h1>
            <br />
            <div className="input-icons ">
              <i className="mdi mdi-account" />
              <input
                className="input-field"
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName1(e.target.value)}
              />
            </div>
            <div className="input-icons ">
              <i className="mdi mdi-cellphone" />
              <input
                className="input-field"
                type="text"
                placeholder="Enter Mobile Number"
                required
                onChange={(e) => setContactNo1(e.target.value)}
              />
            </div>
            <div className="input-icons ">
              <i className="mdi mdi-email" />
              <input
                className="input-field"
                type="email"
                placeholder="Enter Your E-mail Id"
                required
                onChange={(e) => setEmail1(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6 vl">
            <label>Write Your Query Here:</label>
            <br />
            <textarea
              class="text-box"
              onChange={(e) => setMessage1(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <p className="ms-2">We will get back to you soon*</p>
          <button
            className="button login-btn"
            type="submit"
            value="submit"
            onClick={handleEnquiry}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
