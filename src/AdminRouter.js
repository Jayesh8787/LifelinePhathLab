import { createBrowserRouter } from "react-router-dom";
import App from "./Admin/AdminApp.js";
import Dashboard from "./Admin/Dashboard";
import Appointments from "./Admin/Appointments/Appointments.js";
import TestBook from "./Admin/TestBook";
import Patients from "./Admin/Users/Patients";
import Doctors from "./Admin/Users/Doctors";
import Admin from "./Admin/Users/Admin";
import AddTest from "./Admin/Tests/AddTest";
import AllTest from "./Admin/Tests/AllTest";
import AddDoctor from "./Admin/Users/AddDoctor";
import Feedback from "./Admin/Feedback";
import Enquiry from "./Admin/Enquiry";
import AppointmentDetails from "./Admin/Appointments/AppointmentDetails.js";

const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "appointmentsDetails/:id",
        element: <AppointmentDetails />,
      },
      {
        path: "testBookings",
        element: <TestBook />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "admins",
        element: <Admin />,
      },
      {
        path: "addtest",
        element: <AddTest />,
      },
      {
        path: "allTest",
        element: <AllTest />,
      },
      {
        path: "addDoctor",
        element: <AddDoctor />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "enquiry",
        element: <Enquiry />,
      },
    ],
  },
]);

export default adminRouter;
