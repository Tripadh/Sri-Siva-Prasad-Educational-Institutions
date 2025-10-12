import React from 'react';
import { Link } from 'react-router-dom';
import foter from '../assets/foter.png';
import './footer.css';

export function Footer() {
  return (
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
}

export function FooterCopyrightBar() {
  return (
    <div className="footer-copyright-bar">
      © Copyright 2025 – Sri Siva Prasad Group All rights Reserved
    </div>
  );
}