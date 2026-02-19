import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import { Footer, FooterCopyrightBar } from '../components/footer';

// Import Assets
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.1.jpg';
import slide3 from '../assets/slide-3.png';
import slide4 from '../assets/slide-4.jpg';
import slide5 from '../assets/slide-5.png';
import slide6 from '../assets/slide-6.png';
import slide7 from '../assets/slide-7.jpg';

import building from '../assets/building.png';

// Import Student Images
import photo1 from '../assets/shreyas.png';
import photo2 from '../assets/videep.png';
import photo3 from '../assets/harshit.png';
import photo4 from '../assets/sammera.png';
import photo5 from '../assets/sarath.png';
import photo6 from '../assets/pardhu.png';
import photo7 from '../assets/manoj.png';
import photo8 from '../assets/mok.png';

/* --- Data Constants --- */
const HERO_SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

const STORIES = [
  { image: photo1, score: '651/720', exam: 'NEET', name: 'Shreyas Medasani', message: "The constant tests, clear concepts, and doubt sessions really pushed me forward scoring 651." },
  { image: photo2, score: '645/720', exam: 'NEET', name: 'V.Videep Sri NagaSai', message: "Teachers treated me like family. Because of their support, I scored 645 in NEET." },
  { image: photo3, score: '615/720', exam: 'NEET', name: 'P.Sai Sree Harshit', message: "Scoring 615 was about smart strategy. Constant guidance and regular mocks helped." },
  { image: photo5, score: '99.63%', exam: 'JEE Mains', name: 'Y. Sarath Chaityana', message: "99.63 in JEE Mains Chemistry. A proud moment for my family." },
  { image: photo6, score: '90.77%', exam: 'JEE Mains', name: 'N.N.Pardhu', message: "My dream come true. Structured study plans helped me identify my strengths." },
  { image: photo4, score: '606/720', exam: 'NEET', name: 'Syed Sammera', message: "Scoring 606 felt surreal! The journey was filled with challenges but worth it." },
  { image: photo8, score: '591/720', exam: 'NEET', name: 'T.Mokshagana', message: "A turning point in my NEET preparation. Concept clarity was key." },
];

/* --- Sub-Components --- */

const TrustItem = ({ title, sub, iconPath }) => (
  <div className="trust-item">
    <div className="trust-icon">
      {/* Simple SVG Icons */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {iconPath}
      </svg>
    </div>
    <div className="trust-text">
      <h4>{title}</h4>
      <p>{sub}</p>
    </div>
  </div>
);

const ProgramCard = ({ title, desc, icon, link }) => (
  <div className="program-card">
    <div className="program-icon">{icon}</div>
    <h3 className="program-title">{title}</h3>
    <p className="program-desc">{desc}</p>
    <Link to={link || "#"} className="card-link">Learn More &rarr;</Link>
  </div>
);

const FeatureItem = ({ title, desc, icon }) => (
  <div className="feature-item">
    <div className="feature-icon-box">
      {icon}
    </div>
    <div className="feature-content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

/* --- Main Component --- */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  return (
    <div className="home-container">

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Background Slideshow */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

      </section>

      {/* Hero CTA Strip (Moved below slideshow) */}
      <div className="hero-cta-strip">
        <div className="container">
          <div className="hero-cta-group">
            <a href="tel:+918688124113" className="btn-primary">Apply Now</a>
            <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ color: '#333', borderColor: '#333' }}>Download Brochure</a>
          </div>
        </div>
      </div>

      {/* 2. TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-content">
          <TrustItem
            title="10+ Years"
            sub="of Excellence"
            iconPath={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
          />
          <TrustItem
            title="5000+"
            sub="Successful Students"
            iconPath={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
          />
          <TrustItem
            title="Top Ranks"
            sub="in NEET & JEE"
            iconPath={<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>}
          />
        </div>
      </section>

      {/* 3. PROGRAMS OFFERED */}
      <section className="section programs-section">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">Tailored courses designed to build strong foundations and achieve top ranks.</p>

        <div className="programs-grid">
          <ProgramCard
            title="NEET Long-Term"
            desc="Intensive coaching for repeaters focusing on depth, practice, and consistency."
            icon="🩺"
            link="/neet-longterm"
          />
          <ProgramCard
            title="JEE Mains & Adv"
            desc="Comprehensive preparation for engineering aspirants with problem-solving focus."
            icon="⚙️"
            link="/jee"
          />
          <ProgramCard
            title="Foundation Course"
            desc="Early start programs for school students to build strong science & math fundamentals."
            icon="📚"
            link="/about"
          />
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section why-us-section">
        <div className="features-grid">
          <div className="features-left">
            <img src={building} alt="Campus Building" />
          </div>
          <div className="features-right">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose Us?</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>
              We go beyond textbooks. We build character, discipline, and confidence.
            </p>

            <div className="features-list">
              <FeatureItem
                title="Expert Faculty"
                desc="Learn from the best minds with years of experience in producing top rankers."
                icon="👨‍🏫"
              />
              <FeatureItem
                title="Personalized Mentorship"
                desc="One-on-one guidance to identify strengths and work on weaknesses."
                icon="🎯"
              />
              <FeatureItem
                title="Strategic Testing"
                desc="Regular mock tests that simulate real exam conditions with detailed analytics."
                icon="📊"
              />
              <FeatureItem
                title="Safe Hostel Facility"
                desc="Secure, disciplined, and comfortable living environment for focused learning."
                icon="🏠"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUCCESS STORIES (RESULTS) */}
      <section className="section results-section">
        <h2 className="section-title">Wall of Fame</h2>
        <p className="section-subtitle">Real results from our dedicated students.</p>

        <div className="success-slider-container">
          <div className="success-track">
            {[...STORIES, ...STORIES].map((story, idx) => (
              <div key={idx} className="success-card">
                <div className="student-profile">
                  <img src={story.image || slide1} alt={story.name} className="student-img" />
                  <div className="student-info">
                    <h4>{story.name}</h4>
                    <span className="exam-pill">{story.exam}</span>
                  </div>
                </div>
                <div className="score-display">{story.score}</div>
                <span className="score-label">Score Achieved</span>
                <p className="quote">"{story.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Start Your Journey Today</h2>
          <p className="cta-subtitle">
            Limited seats available for the upcoming academic year.
            Don't miss the chance to learn from the best.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1.2rem', padding: '18px 40px' }}>
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      <FooterCopyrightBar />
    </div>
  );
}
