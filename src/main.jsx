import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { UserProviderLogin } from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProviderLogin>
    <Router />
  </UserProviderLogin>
);
