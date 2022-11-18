import React from "react";
import ReactDOM from "react-dom/client";
import Git from "./gitSearch/Git";
import App from "./App";
import Router from "./router/Router";
import Footer from "./Footer";
import HeaderLogin from "./Login/components/HeaderLogin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
