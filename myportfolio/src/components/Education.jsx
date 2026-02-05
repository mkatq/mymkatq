// src/components/Education.js
import React from "react";
import EducationCard from "./EducationCard";
import { useEducations } from "../hooks/useeducations";
import "../App.css";

const Education = () => {
  const { educations, loading, error } = useEducations();

  if (loading) return <p>Loading education...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="education">
      <h2>Education</h2>
      {educations.length === 0 && <p>No education data found.</p>}
      {educations.map((edu) => (
        <EducationCard
          key={edu._id}
          degree={edu.degree}
          university={edu.university}
          date={edu.graduationDate}
          gpa={edu.gpa}
          project={{
            title: edu.project?.title || "",
            description: edu.project?.description || "",
            features: edu.project?.features || [],
          }}
          coursework={Array.isArray(edu.coursework) ? edu.coursework.join(", ") : ""}
          awards={Array.isArray(edu.awards) ? edu.awards.join(", ") : ""}
          clubs={Array.isArray(edu.clubs) ? edu.clubs.join(", ") : ""}
          image={edu.image}
        />
      ))}
    </section>
  );
};

export default Education;
