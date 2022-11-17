import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/Login/Login";
import AboutPage from "./pages/about-us";
import ProfilePage from "./pages/profile";
import Index from "./pages/index";
// import NavBarUpdate from "./components/Navbar/NavBarUpdate"

function App() {
  return (
    <div>
      <Navbar />
      {/* <NavBarUpdate/> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/roadmap" element={<h1>Roadmap page</h1>} />
        <Route path="/jobs" element={<h1>jobs page</h1>} />
        <Route path="/contact" element={<h1>contact us page</h1>} />
      </Routes>
      <ProfilePage/>
    </div>
  );
}

export default App;
