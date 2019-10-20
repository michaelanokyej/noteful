import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Folders from "./store";
import { BrowserRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App store={Folders} />
  </BrowserRouter>,
  document.getElementById("root")
);
