import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const ProjectCard = ({
 classn = "project-image",
  title,
  description,
  technologies,
  icon,
  images,
  github,
}) => {
  return (
    <div className="project-card">
      <div className="div-project" style={{ textAlign: "center" }}>
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontFamily: "Poppins"
          }}
        >
          <img
            src={icon}
            style={{
              width: "40px",
              height: "40px",
              verticalAlign: "middle",
            }}
          />
          {title}
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              style={{
                width: "15px",
                height: "15px",
                verticalAlign: "middle",
              }}
            />
          </a>
        </h3>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ textAlign: "left", width: "100%" }}>
            <p className="description-size">{description}</p>
          </div>
        </div>

        <div className="project-icon">
          {technologies.map((logo, index) => (
            <img key={index} src={logo} alt="" className="project-logo" />
          ))}
        </div>
        <p className="made-by">Built with</p>
      </div>

      <div className="div-project">
        <Carousel className={classn} showThumbs={false} infiniteLoop autoPlay>
          {images.map((image, index) => (
            <div key={index}>
              <img
                style={{
                  padding: "20px 10px",
                }}
                src={image}
                alt={`${title} screenshot ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectCard;
