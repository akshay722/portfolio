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
        I recently graduated with a Master's in Information Technology from UTD
        in December 2024 and am actively seeking a full-time software
        engineering role. I'm eager to apply my skills in building scalable,
        customer-focused solutions and collaborate with innovative teams. If you
        have any opportunities or would like to connect, feel free to reach out.
        I look forward to the next exciting chapter in my career!
      </p>
      <a href="mailto:akshaypenmatsa@gmail.com" className="contact-me-button">
        Say Hello
      </a>
    </div>
  );
};

export default ContactMe;
