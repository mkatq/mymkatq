// src/components/Certifications.js
import React from "react";
import "../App.css";
import CertificationsCard from "./CertificationsCard";
import { usecertifications } from "../hooks/usecertifications";

const Certifications = () => {
  const { certifications, loading, error } = usecertifications();

  if (loading) return <p>Loading Certifications...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="Certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <CertificationsCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
