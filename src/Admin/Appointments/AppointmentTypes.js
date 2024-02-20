import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendAppointmentStatusData } from "../../redux/reducers/appointmenStatusReducer";

export default function AppointmentTypes() {
  const dispatch = useDispatch();
  const dispatchAappointmentTypes = (data) => {
    dispatch(sendAppointmentStatusData(data));
  };

  return (
    <>
      <button
        class="btn btn-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter
      </button>
      <ul class="dropdown-menu">
        <li
          onClick={() => {
            dispatchAappointmentTypes("");
          }}
        >
          All
        </li>
        <li
          onClick={() => {
            dispatchAappointmentTypes("SCHEDULED");
          }}
        >
          Scheduled
        </li>
        <li
          onClick={() => {
            dispatchAappointmentTypes("CANCELLED");
          }}
        >
          Cancelled
        </li>
        <li
          onClick={() => {
            dispatchAappointmentTypes("COMPLETED");
          }}
        >
          Completed
        </li>
      </ul>
    </>
  );
}
