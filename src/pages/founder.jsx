import React from 'react';
import { Link } from 'react-router-dom';
import founderPhoto from '../assets/founder.jpg'; // Adjust path as needed
import foter from '../assets/foter.png'; // Adjust path as needed
import './founder.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-col footer-branding">
        <img src={foter} alt="Sri Siva Prasad Logo" className="footer-logo" />
        <p className="footer-desc">
          Sri Siva Prasad Educational Institute, a premier institution nurturing excellence, has been inspiring academic success across Vijayawada and neighboring regions since 2016.
        </p>
        <p className="footer-tagline">Determination | Progress | Service</p>
        <p className="footer-policy">
          Privacy Policy | Terms & Conditions
        </p>
        <p className="footer-policy">
          Cancellation Policy | Refund Policy
        </p>
      </div>
      <div className="footer-col footer-links">
        <h3 className="footer-heading">Quick Links</h3>
        <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/founder">Founder</Link></li>
                  <li><Link to="/vision">Vision & Mission</Link></li>
                  <li><Link to="/neet-longterm">Neet Long-term</Link></li>
                  <li><Link to="/jee">JEE (Mains & Advanced)</Link></li>
                  <li><Link to="/neet">Neet</Link></li>
                  <li><Link to="/faculty">Faculty</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-col footer-contact">
        <h3 className="footer-heading">Contact Us</h3>
        <p className="footer-contact-header">Corporate Headquarters</p>
        <p>
          2<sup>nd</sup> Floor, Hotel Fortune Muralipark Road, <br />
          Opp. SUBWAY<br />
          Sidhartha Nagar Mogalrajpuram,<br />
          Vijayawada - 520010, NTR District, A.P.
        </p>
        <p>
          Email : <span className="footer-email">sprasadch12@gmail.com</span><br />
          Phone : <span className="footer-phone">86881 24113</span>
        </p>
      </div>
    </div>
  </footer>
);

const FooterCopyrightBar = () => (
  <div className="footer-copyright-bar">
    © Copyright 2025 – Sri Siva Prasad Group All rights Reserved
  </div>
);

export default function Founder() {
  return (
    <>
      <div className="founder-hero">
        <div className="founder-hero-content">
          <div className="founder-intro">
            <h1 className="founder-main-title">Meet Our Founder</h1>
            <h2 className="founder-name">Ch. Siva Prasad</h2>
            <p className="founder-credentials">M.Sc, CSIR NET, APSET, DRDO SET, Ph.D</p>
            <p className="founder-role">Founder & Managing Director</p>
          </div>
          <div className="founder-photo-section">
            <img
              src={founderPhoto}
              alt="Founder Ch. Siva Prasad"
              className="founder-main-img"
            />
          </div>
        </div>
      </div>

      <div className="founder-achievements">
        <h3 className="achievements-title">Outstanding Achievements</h3>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-number">7th</div>
            <div className="achievement-text">All India Rank in CSIR NET</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">1st</div>
            <div className="achievement-text">Rank in Andhra Pradesh (APSET)</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">✓</div>
            <div className="achievement-text">Qualified DRDO SET</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">Ph.D</div>
            <div className="achievement-text">Doctorate in Science</div>
          </div>
        </div>
      </div>

      <div className="founder-story">
        <div className="founder-story-content">
          <h3 className="story-title">The Vision Behind Excellence</h3>
          <div className="story-sections">
            <div className="story-section">
              <h4>Educational Philosophy</h4>
              <p>Ch. Siva Prasad believes that every student has the potential to excel when provided with the right guidance and environment. His approach combines academic rigor with personalized mentorship, ensuring students receive both knowledge and confidence.</p>
            </div>
            <div className="story-section">
              <h4>Institution's Foundation</h4>
              <p>Established Sri Siva Prasad Educational Institution as a holistic platform where discipline, hard work, and innovation converge to shape leaders of tomorrow. The institution focuses on critical thinking, problem-solving, and character building.</p>
            </div>
            <div className="story-section">
              <h4>Student-Centered Approach</h4>
              <p>Known for his untiring dedication, he works closely with students, ensuring personalized attention, moral support, and academic clarity at every stage of their journey. His approachable nature has made him a mentor students deeply admire.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="founder-quote-section">
        <div className="quote-container">
          <div className="quote-mark">"</div>
          <blockquote className="founder-quote-text">
            Education is not just about clearing exams; it is about building confidence, discipline, and a mindset that can face any challenge in life. At Sri Siva Prasad Educational Institution, we don't just prepare students for success — we prepare them to lead.
          </blockquote>
          <div className="quote-author">
            <span className="author-name">— Ch. Siva Prasad</span>
            <span className="author-title">Founder & Managing Director</span>
          </div>
        </div>
      </div>

      <Footer />
      <FooterCopyrightBar />
    </>
  );
}