import React, { useState } from "react";
import { Footer, FooterCopyrightBar } from "../components/footer";
import ScrollReveal from "../components/ScrollReveal";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="position-relative overflow-hidden bg-alt pt-5">
      <div className="orb-container">
        <div className="orb orb-primary" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="orb orb-secondary" style={{ bottom: '-10%', right: '-10%' }}></div>
      </div>

      <div className="container py-5 mt-4 position-relative z-1">
        <ScrollReveal className="text-center mb-5 pb-3">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3 tracking-wide">REACH OUT</span>
          <h2 className="headline-huge mb-3">Contact <span className="text-gradient-accent">Us</span></h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Have questions or ready to enroll? We're here to help you start your journey.
          </p>
        </ScrollReveal>

        <div className="row g-5 justify-content-center pb-5 mb-5">
          {/* Contact Form */}
          <div className="col-lg-6">
            <ScrollReveal delay={0.1} className="h-100">
              <div className="glass-card bg-white rounded-5 p-5 h-100 shadow-lg border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <h3 className="h4 fw-bold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-bold text-muted small tracking-wide text-uppercase">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light border-0"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold text-muted small tracking-wide text-uppercase">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg bg-light border-0"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold text-muted small tracking-wide text-uppercase">Message</label>
                    <textarea
                      className="form-control bg-light border-0"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm rounded-pill">
                    Send Message
                  </button>

                  {submitted && (
                    <div className="alert alert-success mt-4 rounded-4 border-0 bg-success bg-opacity-10 text-success fw-bold d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill"></i> Thank you! We have received your message.
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5">
            <ScrollReveal delay={0.2} className="h-100">
              <div className="rounded-5 p-5 h-100 shadow-sm border bg-white" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <div className="gradient-icon-badge mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h3 className="h4 fw-bold mb-4">Corporate Headquarters</h3>
                <p className="text-muted fs-5 mb-5" style={{ lineHeight: '1.8' }}>
                  2<sup>nd</sup> Floor, Hotel Fortune Muralipark Road,<br />
                  Opp. SUBWAY, Beside HP Gas<br />
                  Sidhartha Nagar Mogalrajpuram,<br />
                  Vijayawada - 520010, NTR District, A.P.
                </p>

                <div className="d-flex align-items-center mb-4">
                  <div className="text-primary bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div>
                    <div className="small text-muted fw-bold tracking-wide text-uppercase">Email</div>
                    <a href="mailto:sprasadch12@gmail.com" className="text-dark fw-medium text-decoration-none fs-5">sprasadch12@gmail.com</a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="text-success bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-telephone-fill fs-5"></i>
                  </div>
                  <div>
                    <div className="small text-muted fw-bold tracking-wide text-uppercase">Phone</div>
                    <a href="tel:+918688124113" className="text-dark fw-medium text-decoration-none fs-5">86881 24113</a>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-5">
                  <div className="text-warning bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-clock-fill fs-5"></i>
                  </div>
                  <div>
                    <div className="small text-muted fw-bold tracking-wide text-uppercase">Timings</div>
                    <span className="text-dark fw-medium fs-5">8:00 AM – 8:00 PM (Mon–Sat)</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-top">
                  <p className="small text-muted mb-0">
                    For any queries related to this website, please contact{" "}
                    <a href="mailto:vtripadh@gmail.com" className="text-primary text-decoration-none fw-medium">vtripadh@gmail.com</a>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Footer />
      <FooterCopyrightBar />
    </div>
  );
}
