// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { apiFetch } from "../config/api";
import "../App.css";

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const data = await apiFetch("/about");
        setAbout(data);
      } catch (err) {
        setError(err.message || "Failed to load About info");
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  if (loading) return <p>Loading About info...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!about) return <p>No About info found.</p>;

  return (
    <section id="about" style={{ paddingTop: "100px", textAlign: "center" }}>
      <div className="about1">
        <h1>{about.description}</h1>
        {/* You can uncomment these if needed */}
        {/* <p>Email: {about.email}</p>
        <p>Phone: {about.phone}</p> */}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <a
          href={about.github}
          target="_blank"
          rel="noopener noreferrer"
          className="elevated-button"
          style={{ backgroundColor: "#eeeeee", color: "black" }}
        >
          GitHub
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub Logo"
            style={{ width: "20px", height: "20px", marginLeft: "8px" }}
          />
        </a>

        <a
          href={about.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="elevated-button"
        >
          LinkedIn
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Logo"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "8px",
              filter: "grayscale(100%) brightness(150%)",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default About;
