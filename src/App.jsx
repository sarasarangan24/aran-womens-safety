import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AranChatbot from "./components/AranChatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import SafetyTips from "./pages/SafetyTips";
import Contact from "./pages/Contact";

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("aran-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "aran-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* Website Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      {/* Website Pages */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/safety-tips" element={<SafetyTips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Floating ARAN AI Chatbot on Every Page */}
      <AranChatbot />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}