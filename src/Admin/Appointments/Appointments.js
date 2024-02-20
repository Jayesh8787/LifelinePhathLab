import React, { useEffect, useState } from "react";
import Services from "../../Services/Services";
import { Link } from "react-router-dom";
import AppointmentTypes from "./AppointmentTypes";
import { useSelector } from "react-redux";

export default function Appointments() {
  const appointmentTypes = useSelector(
    (state) => state.appointmentStatus.value
  );
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    Services.getAppointmentByStatus(appointmentTypes)
      .then((res) => {
        setAppointments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [appointmentTypes]);

  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Appointments</h3>
      </div>
      <div class="dropdown mb-4 ms-4 mt-4">
        <AppointmentTypes />
      </div>
      <div className="card mt-2 p-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Patient Name</th>
              <th>Contact</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>status</th>
              <th>show Details</th>
            </tr>
          </thead>
          <tbody>
            {appointments &&
              appointments.map((appoitment) => (
                <tr key={appoitment.appointmentId}>
                  <td>{appoitment.appointmentId}</td>
                  <td>{appoitment.patientName}</td>
                  <td>{appoitment.patientContactNo}</td>
                  <td>{appoitment.scheduledTime}</td>
                  {appoitment.doctor ? (
                    <p>{appoitment.doctor.doctorName}</p>
                  ) : (
                    <p>"null"</p>
                  )}
                  <td>{appoitment.status}</td>
                  <td>
                    {appoitment.status != "CANCELLED" ? (
                      <Link
                        className="text-primary"
                        to={"/appointmentsDetails/" + appoitment.appointmentId}
                      >
                        upload report
                      </Link>
                    ) : (
                      <p>NA</p>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
