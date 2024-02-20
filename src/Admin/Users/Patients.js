import React, { useEffect, useState } from "react";
import Services from "../../Services/Services";

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    Services.getAllPatients()
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const handleDelete = (userId) => {
    Services.deletePatientById(userId)
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
        <h3 class="font-weight-bold">Patients</h3>
      </div>

      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Enter Patinet Name"
          aria-label="Search"
        />
        <button class="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      <div className="card mt-2 p-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>PatientID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients &&
              patients.map((patient) => (
                <tr>
                  <td>{patient.userId}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.emailId}</td>
                  <td>{patient.contactNo}</td>
                  <td>{patient.address}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(patient.userId)}
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
