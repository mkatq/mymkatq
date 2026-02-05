import React from "react";
import "../App.css"; // Ensure this links to your stylesheet

const Copyright = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="copyright-footer">
      <p>© {currentYear} Developed by Meshari Altawfiq</p>
    </footer>
  );
};

export default Copyright;
