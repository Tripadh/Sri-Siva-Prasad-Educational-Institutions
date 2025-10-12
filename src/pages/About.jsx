import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImage from '../assets/about.png';  // Update path as needed
import aboutImage2 from '../assets/about2.jpg'; // Update path as needed
import foter from '../assets/foter.png';  // Update path as needed

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

// Copyright bar at the very bottom
const FooterCopyrightBar = () => (
  <div className="footer-copyright-bar">
    © Copyright 2025 – Sri Siva Prasad Group All rights Reserved
  </div>
);

const About = () => (
  <>
    <section className="about-container">
      <div className="about-left">
        <h2 className="about-title">ABOUT US</h2>
        <div className="about-underline"></div>
        <p className="about-text">
          A Smart Way to Get Smart
        </p>
      </div>
      <div className="about-right">
        <img src={aboutImage} alt="Sri Siva Prasad Institution" className="about-image" />
      </div>
    </section>

    {/* Side-by-side about details and image */}
    <div className="about-details-row">
      <article className="about-details">
        <p>
          At <b>Sri Siva Prasad Institution</b>, we believe education is not just about marks—
          it’s about shaping young minds, building confidence, and preparing students
          to face life with courage and determination.
        </p>
        <p>
          For years, we’ve been a second home to countless students who come with dreams
          in their eyes and leave with achievements in their hands. Every child is unique,
          and we take pride in guiding them step by step, helping them discover their strengths
          and overcome their challenges.
        </p>
        <p>
          Our classrooms are not just places for lectures—they are spaces where curiosity
          is encouraged, doubts are cleared with patience, and mistakes are seen as stepping
          stones to success. Parents trust us because we stand beside their children like mentors,
          not just teachers, ensuring that no dream is too big to achieve.
        </p>

        <h3>What Makes Us Different?</h3>
        <ul>
          <li><b>Caring Teachers</b> – Approachable guides who believe in every student’s potential.</li>
          <li><b>Individual Attention</b> – Personalized mentorship and feedback for growth.</li>
          <li><b>Strong Results</b> – Top scores in boards, JEE, NEET, and more.</li>
          <li><b>Supportive Environment</b> – Discipline with encouragement and motivation.</li>
        </ul>

        <h3>Our Pride – Student Success Stories</h3>
        <p>
          Over the years, many of our students have achieved milestones they once thought impossible—
          whether it’s scoring over <b>99 percentile in JEE Mains</b>, excelling in <b>NEET</b>,
          or topping <b>school board exams</b>. But more than numbers, it’s their transformation into
          confident, hardworking individuals that makes us proud.
        </p>

        <h3>Our Promise</h3>
        <p>
          We don’t just prepare students for exams—we prepare them for life. At Sri Siva Prasad Institution, we promise to be:
        </p>
        <ul>
          <li>A mentor who guides with patience.</li>
          <li>A motivator who lifts students when they feel low.</li>
          <li>A partner parents can rely on for their child’s growth.</li>
        </ul>

        <p>
          For us, every student’s journey is personal, every success story is a shared celebration,
          and every challenge is an opportunity to grow together.
        </p>

        <p><b>Sri Siva Prasad Institution</b> – Where teaching comes from the heart, and every dream finds a path.</p>
      </article>
      <div className="about-image2-container">
        <img src={aboutImage2} alt="NEET Admissions Poster" className="about-image2" />
      </div>
    </div>
    <Footer />
    <FooterCopyrightBar />
  </>
);

export default About;