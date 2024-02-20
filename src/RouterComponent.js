// Router.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import AdminApp from "./Admin/AdminApp";
import Cookies from "js-cookie";

// Function to determine user's role (user or admin)
const getUserRole = () => {
  // Replace this with your actual logic to get the user's role
  const role = Cookies.get("role");
  return role;
};

const RouterComponent = () => {
  const userRole = getUserRole();

  return (
    <Router>
      <Routes>
        {userRole === "ADMIN" ? (
          <Route path="/*" element={<AdminApp />} />
        ) : (
          <Route path="/*" element={<App />} />
        )}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
