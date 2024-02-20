// AppRouter.js

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "./App";
import AdminApp from "./AdminApp";

const AppRouter = ({ userRole }) => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to={userRole === "admin" ? "/admin" : "/user"} />
      </Route>
      <Route path="/user">
        <App />
      </Route>
      <Route path="/admin">
        <AdminApp />
      </Route>
    </Router>
  );
};

export default AppRouter;
