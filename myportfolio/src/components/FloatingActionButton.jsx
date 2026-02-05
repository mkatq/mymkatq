import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../App.css"; // Your styling file

const FloatingActionButton = () => {
  // Default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Get the theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // If no theme is saved, default to dark mode
    if (!savedTheme || savedTheme === "dark") {
      applyDarkTheme(true);
    } else if (savedTheme === "light") {
      applyDarkTheme(false);
    }
  }, []);

  // Helper function to toggle theme and store preference
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    applyDarkTheme(newTheme);
  };

  // Apply theme to body and other elements
  const applyDarkTheme = (isDark) => {
    const elementsToToggle = [
      document.body,
      document.querySelector(".navbar"),
      ...document.querySelectorAll(".project-card"),
      ...document.querySelectorAll(".education-card"),
      ...document.querySelectorAll(".skill-card"),
      ...document.querySelectorAll(".cert-card"),
      document.querySelector(".contact-form"),
    ];

    elementsToToggle.forEach((element) => {
      if (element) {
        if (isDark) {
          element.classList.add("dark-theme");
        } else {
          element.classList.remove("dark-theme");
        }
      }
    });

    // Set theme in localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <div className="fab" onClick={toggleTheme} aria-label="Toggle Dark Mode">
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default FloatingActionButton;
