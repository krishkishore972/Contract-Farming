import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Landing/Footer.jsx";
import Navbar from "./Landing/Navbar.jsx";
import HomePage from "./Landing/Home/HomePage.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<HomePage />} />
      <Route path="/farmer" element={<HomePage />} />
      <Route path="/company" element={<HomePage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
