import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/contactme.css";

const ContactMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`contact-me-container ${inView ? "visible" : ""}`}
    >
      <p className="contact-me-section-number">What's Next?</p>
      <h2 className="contact-me-title">Get In Touch</h2>
      <p className="contact-me-description">
        I will be graduating with a Master's in Information Technology from UTD
        in December 2024 and am looking for a full-time role from then. I am
        also seeking co-op opportunities for Fall 2024. If you have any openings
        or would like to connect, please feel free to reach out. I look forward
        to hearing from you!
      </p>
      <a href="mailto:akshaypenmatsa@gmail.com" className="contact-me-button">
        Say Hello
      </a>
    </div>
  );
};

export default ContactMe;
