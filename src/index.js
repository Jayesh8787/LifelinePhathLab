import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./AppRouter";
import adminRouter from "./AdminRouter";
import App from "./App";
import RouterComponent from "./RouterComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <RouterComponent />
  </React.StrictMode>
);
