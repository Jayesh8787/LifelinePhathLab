import React, { useEffect, useState } from "react";
import Services from "../../Services/Services";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    Services.getAllDoctors()
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const handleDelete = (doctorId) => {
    Services.deleteDoctorRecord(doctorId)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Doctors</h3>
      </div>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Enter Doctor Name"
          aria-label="Search"
        />
        <button class="btn btn-primary" type="submit">
          Search
        </button>
      </form>

      <div className="card mt-2 p-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Doctor Id</th>
              <th>Doctor Name</th>
              <th>Clinic Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Specialization</th>
              <th>Request Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((doctor) => (
                <tr>
                  <td>{doctor.doctorId}</td>
                  <td>{doctor.doctorName}</td>
                  <td>{doctor.clinicName}</td>
                  <td>{doctor.emailId}</td>
                  <td>{doctor.contactNo}</td>
                  <td>{doctor.address}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.requestStatus}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(doctor.doctorId)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
