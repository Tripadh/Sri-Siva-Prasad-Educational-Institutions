import React from 'react';
import { Link } from 'react-router-dom';
import './vision.css'; // Your existing CSS
import visionImage from '../assets/vision.png'; // Update path as needed
import foter from '../assets/foter.png'; // Update path as needed

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

export default function Vision() {
  return (
    <>
      <div className="vision-container">
        <section className="vision-hero">
          <h2 className="vision-title">Our Vision & Legacy</h2>
          <img
            src={visionImage}
            alt="Vision illustration"
            className="vision-hero-image"
          />
          <p className="vision-lead">
            To awaken brilliance — not just by teaching lessons, but by lighting minds.<br />
            We envision a world where every student walks in with curiosity and walks out with clarity, confidence, and purpose.<br />
            Sri Siva Prasad Institution strives to be more than a place of education — it’s a movement that shapes thinkers, dreamers, innovators, and leaders who don’t wait for the future… they build it.
          </p>
          <p className="vision-sublead">
            We dream of classrooms that spark imagination, mentors who ignite self-belief, and an institution that doesn’t just produce achievers — it produces impact-makers.
          </p>
        </section>

        <section className="vision-values">
          <h3 className="vision-subheading">Our Promise</h3>
          <p className="vision-lead">
            At Sri Siva Prasad Institution, every student matters.<br />
            Every question is heard.<br />
            Every dream is nurtured.<br />
            Because education isn’t a race here — it’s a journey of growth, courage, and becoming your best self.
          </p>
          <div className="vision-pillars">

            <div className="vision-pillar">
              <span className="pillar-icon" role="img" aria-label="Precision">🧠</span>
              <h3 className="pillar-title">Precision</h3>
              <p>
                “For every batch of 30 students, we focus on transforming potential into results..<br />
                Each student receives personalized attention, a tailored study plan, and focused practice to strengthen weak areas and sharpen problem-solving skills. <br />
                With concept clarity, regular assessments, and doubt resolution, NEET and JEE success becomes structured, consistent, and achievable
              </p>
            </div>

            <div className="vision-pillar">
              <span className="pillar-icon" role="img" aria-label="Determination">💪</span>
              <h3 className="pillar-title">Determination</h3>
              <p>
                We focus on steady effort every day. Students learn to turn challenges into lessons, mistakes into learning, and doubts into motivation. <br />
                True determination means getting stronger with each step and each concept. <br />
                We guide and support every student to keep that determination alive throughout their journey.
              </p>
            </div>

            <div className="vision-pillar">
              <span className="pillar-icon" role="img" aria-label="Progress">🚀</span>
              <h3 className="pillar-title">Progress</h3>
              <p>
                Every chapter completed is a milestone, every mock test shows where to improve. <br />
                We guide students step by step, helping them learn, adapt, and grow. <br />
                Our approach is simple, focused, and supportive, ensuring steady progress toward NEET and JEE success.
              </p>
            </div>

            <div className="vision-pillar">
              <span className="pillar-icon" role="img" aria-label="Innovation">💡</span>
              <h3 className="pillar-title">Innovation</h3>
              <p>
                Rooted in proven teaching methods yet evolving with time, we blend tradition with technology.<br />
                From AI-backed performance tracking to smart revision plans, our classroom goes beyond chalk and talk — it’s a living system that evolves with every student.
              </p>
            </div>

            <div className="vision-pillar">
              <span className="pillar-icon" role="img" aria-label="Mentorship">❤️</span>
              <h3 className="pillar-title">Mentorship</h3>
              <p>
                For every batch of 30, there’s not just a teacher — there’s a mentor.<br />
                Someone who listens, guides, and believes when self-doubt creeps in.<br />
                Because real mentorship doesn’t end when class does; it continues until confidence replaces confusion.
              </p>
            </div>

            <div className="vision-pillar">
              <span className="pillar-icon" role="img" aria-label="Purpose">🌱</span>
              <h3 className="pillar-title">Purpose</h3>
              <p>
                Our goal isn’t to produce rank holders — it’s to build lifelong learners.<br />
                We measure success not just by marks, but by the courage, curiosity, and clarity our students carry into every stage of life.<br />
                Because true education is not the end of a journey — it’s the beginning of a meaningful one.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FooterCopyrightBar />
    </>
  );
}