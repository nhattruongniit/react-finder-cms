import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import App from "./App";
import Login from "./pages/Login";
import ListJob from "./pages/Jobs/ListJob";
import NewJob from "./pages/Jobs/NewJob";
import DetailJob from "./pages/Jobs/DetailJob";
import Register from "./pages/Register";

// components
import Layout from "./components/Layout/Layout";

// css
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route
        path="/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      <Route
        path="/job"
        element={
          <Layout>
            <ListJob />
          </Layout>
        }
      />
      <Route
        path="/job/new"
        element={
          <Layout>
            <NewJob />
          </Layout>
        }
      />
      <Route
        path="/job/:id"
        element={
          <Layout>
            <DetailJob />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);
