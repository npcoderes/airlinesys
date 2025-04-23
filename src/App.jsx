import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/login";  // Ensure correct case
import Signup from "./components/signup"; 
import Dashboard from "./components/Dashboard"; // Ensure Dashboard is imported

function App() {
   
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Ensure Dashboard is imported */}
      </Routes>
    </Router>
  );
}

export default App;
