// src/components/Contact.jsx
import React, { useRef, useEffect, useState } from "react";
import "../App.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import { apiFetch } from "../config/api"; // your helper to fetch backend

const Contact = () => {
  const form = useRef();
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch About info for email, phone, links
  useEffect(() => {
    async function fetchAbout() {
      try {
        const data = await apiFetch("/about"); // fetch backend
        setAbout(data);
      } catch (err) {
        setError(err.message || "Failed to load About info");
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w210gdw",
        "template_ybd8rx4",
        form.current,
        "_kinG3Fg0FmZltCSS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  if (loading) return <p>Loading contact info...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!about) return <p>No contact info available.</p>;

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={about.email} // autofill email
            required
          />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>
            <FaEnvelope /> Email:{" "}
            <a style={{ color: "skyblue" }} href={`mailto:${about.email}`}>
              {about.email}
            </a>
          </p>
          <p>
            <FaPhone /> Phone: {about.phone}
          </p>
          <div className="social-icons">
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={about.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
