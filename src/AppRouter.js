import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./component/Home";
import BookTest from "./component/BookTest";
import UploadPrescription from "./component/UploadPrescription";
import DownloadReport from "./component/DownloadReport";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Login from "./LandingPage/Login";
import Signup from "./LandingPage/Signup";
import DisplayReports from "./component/DisplayReports";
import DoctorRegistration from "./component/DoctorRegistration";
import TestDetails from "./component/TestDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "bookTest",
        element: <BookTest />,
      },
      {
        path: "uploadPrescription",
        element: <UploadPrescription />,
      },
      {
        path: "downloadReport",
        element: <DownloadReport />,
      },
      {
        path: "doctor",
        element: <DoctorRegistration />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/test-details/:testId",
        element: <TestDetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default router;
