import React from "react";
import "../App.css";

const EducationCard = ({
  degree,
  university,
  date,
  gpa,
  coursework,
  project,
  awards,
  clubs,
  image,
}) => {
  return (
    <div className="education-card">
      <img src={image} alt={university} className="university-image" />
      <center>
        <h3>
          <strong> {university}</strong>
        </h3>
      </center>

      <p> <strong>-  {degree}</strong></p>

      <p>
        <strong>-  {date}</strong>
      </p>
      {gpa && (
        <p>
          <strong>-  {gpa}</strong> 
        </p>
      )}

      <h4> Relevant Coursework:</h4>
      <p>{coursework}</p>

      {project && (
        <>
          <h4>
            Graduation Project: <u>{project.title}</u>
          </h4>
          <p>{project.description}</p>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>
            <em>{project.tech}</em>
          </p>
        </>
      )}
    </div>
  );
};

export default EducationCard;
