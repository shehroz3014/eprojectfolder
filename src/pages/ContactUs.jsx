import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div className="contact-page">

      {/* TOP HEADING */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out to us anytime and our team
          will get back to you as soon as possible.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="contact-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>support@luxe.com</p>
            </div>
          </div>

          <div className="contact-box">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="contact-box">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          <div className="contact-box">
            <FaClock className="contact-icon" />
            <div>
              <h3>Working Days</h3>
              <p>Mon - Sun</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">

          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />

            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
            />

            <textarea
              placeholder="Write your message..."
              className="contact-textarea"
            ></textarea>

            <button className="contact-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default ContactUs;