// src/components/CertificationsCard.js
import React from "react";
import "../App.css";

const CertificationsCard = ({ title, issuer, date, images }) => {
  return (
    <div className="cert-card">
      <h3>{title}</h3>
      <p>
        <strong>{issuer}</strong> — {date}
      </p>
      {(
        <a href={""} target="_blank" rel="noopener noreferrer">
          <img
            src={images}
            alt={`${title} certificate`}
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              marginTop: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
            }}
          />
        </a>
      )}
    </div>
  );
};

export default CertificationsCard;
