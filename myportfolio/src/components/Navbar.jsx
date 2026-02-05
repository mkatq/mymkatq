import React from "react";
import { Link } from "react-scroll";
import "../App.css"; // Add your styling here

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true} // Track the scroll position
            activeClass="active" // Class to add to the active item
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Skills
          </Link>
        </li>
        {/* <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Experience
          </Link>
        </li> */}
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="Certifications"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Certifications
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
