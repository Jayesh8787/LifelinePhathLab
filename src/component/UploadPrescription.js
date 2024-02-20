import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UploadPrescription() {
  const [patientName, setPatientName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    // Fetch doctors data from the backend when the component mounts
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8083/api/doctors/approved"
        );
        setDoctors(response.data);
        console.log(doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", prescriptionFile);
    formData.append("patientName", patientName);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("doctorName", doctorName);
    formData.append("appointmentDate", appointmentDate);

    console.log(formData.files);
    try {
      await axios.post(
        "http://localhost:8083/api/appointments/schedule",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Appointment scheduled successfully, you can add any success message or redirection logic here
      console.log("Appointment scheduled successfully");
    } catch (error) {
      // Error handling, you can display error messages or handle errors as needed
      console.error("Error scheduling appointment:", error);
    }
  };

  return (
    <div>
      <div className="container uploadPresc-container bg-white">
        <div className="row">
          <div className="col-lg-4 col-12">
            <h3>Upload The Prescription</h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="input-icons">
                <i className="mdi mdi-account" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Your Name"
                  required=""
                  id="patientName"
                  name="patientName"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div className="input-icons">
                <i className="mdi mdi-cellphone" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Contact Number"
                  required=""
                  id="contactNo"
                  name="contactNo"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="input-icons">
                <i className="mdi mdi-plus-circle" />
                <select
                  className="input-field"
                  name="SelectDoctors"
                  id="language"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                >
                  <option value="">Select Doctor</option>
                  {doctors &&
                    doctors.map((doctor) => (
                      <option key={doctor.doctorId} value={doctor.doctorId}>
                        {doctor.doctorName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="input-icons">
                <i className="icofont-location-pin" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Your Address"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input-icons ">
                <input
                  className="input-field"
                  type="date"
                  placeholder="Schedule Appointment"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
              <div className="input-icons">
                <i className="fa fa-user icon" />
                <input
                  className="input-field file-upload"
                  type="file"
                  id="myfile "
                  name="file"
                  accept=".jpg, .jpeg, .png, .doc, .pdf "
                  required=""
                  onChange={(e) => setPrescriptionFile(e.target.files[0])}
                />
              </div>
              <p className="file-upload-format">
                should be in .doc, .pdf, .jpeg, .jpg, .png format *
              </p>
              <button className="button" type="submit" value="submit">
                Submit
              </button>
            </form>
            <br />
          </div>
          <div className="col-lg-8 col-12 vl">
            <div className="container">
              <br />
              <br />
              <h4>Receive Your Test Resale in 3 Easy Steps</h4>
              <br />
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="upload-steps-circle">1</div>
                  <br />
                  <div>
                    <h5>Upload Prescription</h5>
                    <p>
                      Upload the prescription get call from us and Schedule your
                      appointment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="upload-steps-circle">2</div>
                  <br />
                  <div>
                    <h5>Prepare For Test</h5>
                    <p>
                      Discuss the necessary directions with your physician
                      before any medical diagnostic test.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <div className="upload-steps-circle">3</div>
                  <br />
                  <div>
                    <h5>Get The Report</h5>
                    <p>Your test results will upload within 2-3 days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
