// Contact.jsx
import React, { useState } from "react";
import { Footer, FooterCopyrightBar } from "../components/footer";
import "./contact.css"; // Create this file for styling

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you could send form data to your backend or an email service
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-content">
          {/* Contact Form Section */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
              />
            </label>
            <button type="submit" className="contact-btn">
              Send Message
            </button>

            {submitted && (
              <div className="contact-success">
                Thank you! We have received your message.
              </div>
            )}
          </form>

          {/* Contact Info Section */}
          <div className="contact-info">
            <h3>Corporate Headquarters</h3>
            <p>
              2<sup>nd</sup> Floor, Hotel Fortune Muralipark Road,<br />
              Opp. SUBWAY, Beside HP Gas<br />
              Sidhartha Nagar Mogalrajpuram,<br />
              Vijayawada - 520010, NTR District, A.P.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:sprasadch12@gmail.com">
                sprasadch12@gmail.com
              </a>
              <br />
              Phone: <a href="tel:+918688124113">86881 24113</a>
            </p>
            <p>
              <b>Timings:</b> 8:00 AM – 8:00 PM (Mon–Sat)
            </p>

            {/* 🆕 Added website query contact info */}
            <div className="website-query">
              <hr className="query-divider" />
              <p>
                For any queries related to this website, please contact{" "}
                <a href="mailto:vtripadh@gmail.com">vtripadh@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
      <FooterCopyrightBar />
    </>
  );
}
