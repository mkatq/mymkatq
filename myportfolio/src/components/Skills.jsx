import React from "react";
import "../App.css";
import AnimatedSection from "./AnimatedSection";
import { useSkills } from "../hooks/useskills";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { skills, loading, error } = useSkills();

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill.title} logo={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
