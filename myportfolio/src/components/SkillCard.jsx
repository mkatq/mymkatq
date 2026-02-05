import React from "react";
import "../App.css";


const SkillCard = ({ skill, logo }) => {
  return (
    <div className="skill-card">
      <img src={logo} alt={`${skill} logo`} style={{ width: "50px", height: "50px" }} />
      <h3>{skill}</h3>
    </div>
  );
};

export default SkillCard;


