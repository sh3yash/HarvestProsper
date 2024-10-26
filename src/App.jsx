import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LoginPage from "./pages/LoginPage";

import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import TradingPlatform from "./pages/TradingPlatform";
import "bootstrap/dist/css/bootstrap.min.css";
import Consultation from "./pages/Consultation";
import AIChat from "./pages/AIChat";
import ConsultPage from "./pages/ConsultPage";
import AdvisorChat from "./pages/AdvisorChat";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import Loans from "./pages/Loans";
import Finance from "./pages/Finance";
import SignupPage from "./pages/SignupPage";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-neutral-900">
        <ShootingStars />
        <StarsBackground />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/tradingplatform" element={<TradingPlatform />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/aichat" element={<AIChat />} />
            <Route path="/consultpage" element={<ConsultPage />} />
            <Route path="/advisorchat" element={<AdvisorChat />} />
            <Route path="/loan" element={<Loans/>} />
            <Route path="/finances" element={<Finance/>} />
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="resources" element={<Resources/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
