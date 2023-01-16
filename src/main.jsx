import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";

// css
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<BrowserRouter>
  <App />
</BrowserRouter>);
