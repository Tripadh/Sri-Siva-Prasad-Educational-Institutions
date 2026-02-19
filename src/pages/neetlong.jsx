import React, { useState, useEffect } from "react";
import "./neetlong.css";
import { Footer, FooterCopyrightBar } from "../components/footer";

// Import your local images
import neetImg1 from "../assets/neetlt.png";
import neetImg2 from "../assets/hd logo full.jpg";

export default function NeetLongTerm() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="neet-page-wrapper">
      {/* --- Ultra-Premium Hero Section --- */}
      <header className="neet-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Admissions Open 2025-26</span>
          <h1 className="hero-title">
            Crack NEET with <span className="highlight-text">Certainty</span>
          </h1>
          <p className="hero-subtitle">
            Sri Siva Prasad Educational Institute presents the ultimate Long-Term
            Program. Expert mentorship, rigorous practice, and a proven path to
            your dream medical college.
          </p>
          {/* Buttons removed as per request */}
        </div>

        {/* Floating Stats Strip */}
        <div className="hero-stats-strip">
          <div className="stat-item">
            <h3>95%</h3>
            <p>Qualify Rate</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>650+</h3>
            <p>Top Scores</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>1:1</h3>
            <p>Mentorship</p>
          </div>
        </div>
      </header>

      {/* --- Founder's Vision (Redesigned) --- */}
      <section className="section-founder">
        <div className="container">
          <div className="founder-card">
            <div className="founder-text">
              <h2>Founder's Vision</h2>
              <blockquote>
                "Education should empower dreams, not stress students. We guide every
                student with care and purpose to help them learn with confidence."
              </blockquote>
              <div className="founder-name">
                <strong>Ch. Sri Siva Prasad Garu</strong>
                <span>Founder & Director</span>
              </div>
            </div>
            <div className="founder-visual">
              {/* Use a specialized graphic or abstract shape here if no photo */}
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us? (Grid Layout) --- */}
      <section className="section-features">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text">Why Top Rankers Choose Us</h2>
            <p className="features-intro">
              A curriculum designed for excellence, tailored for you. We go beyond
              traditional teaching by integrating <strong>personalized analytics</strong>,
              <strong>mental conditioning</strong>, and <strong>strategic exam simulations</strong>.
              Our ecosystem is built to transform potential into performance, ensuring
              every hour you spend counts towards your dream rank.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card glass-effect">
              <div className="icon-box">📚</div>
              <h3>Comprehensive Coverage</h3>
              <p>Master 100% of the NCERT syllabus with profound conceptual clarity. We deconstruct complex topics into intuitive, graspable logic.</p>
            </div>
            <div className="feature-card glass-effect">
              <div className="icon-box">🎯</div>
              <h3>Strategic Testing</h3>
              <p>Rigorous weekly part-tests, cumulative revisions, and full-scale Grand Mocks designed to forge exam stamina and precision.</p>
            </div>
            <div className="feature-card glass-effect">
              <div className="icon-box">💡</div>
              <h3>Doubt Resolution</h3>
              <p>A relentless doubt-clearing ecosystem featuring instant clarification and deep-dive error analysis to eliminate every weakness with speed.</p>
            </div>
            <div className="feature-card glass-effect">
              <div className="icon-box">🧠</div>
              <h3>Stress-Free Learning</h3>
              <p>A meticulously curated environment that balances intense academic rigor with mental well-being for sustainable performance.</p>
            </div>
            <div className="feature-card glass-effect">
              <div className="icon-box">📊</div>
              <h3>Performance Tracking</h3>
              <p>Cutting-edge AI analytics that track your progress, identify speed bottlenecks, and optimize your accuracy for peak scores.</p>
            </div>
            <div className="feature-card glass-effect">
              <div className="icon-box">🔬</div>
              <h3>Practical Mastery</h3>
              <p>Specialized sessions for biological diagrams and lab-based questions ensuring you capture every mark in the practical domain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Roadmap / Timeline --- */}
      <section className="section-roadmap">
        <div className="container">
          <h2 className="section-title-center">Your Road to AIIMS</h2>
          <div className="roadmap-container">
            <div className="roadmap-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Foundation (Months 1-2)</h3>
                <p>Architecting a rock-solid base by mastering core NCERT concepts and fundamentals.</p>
              </div>
            </div>
            <div className="roadmap-connector"></div>
            <div className="roadmap-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Application (Months 3-6)</h3>
                <p>Intensive problem-solving marathons, topic-wise tests, and targeted weakness elimination.</p>
              </div>
            </div>
            <div className="roadmap-connector"></div>
            <div className="roadmap-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Mastery (Months 7-10)</h3>
                <p>Advanced problem solving, grand tests, and high-pressure exam simulation drills.</p>
              </div>
            </div>
            <div className="roadmap-connector"></div>
            <div className="roadmap-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Final Sprint (Months 11-12)</h3>
                <p>Rapid-fire revision, error log scrubbing, and final confidence boosters for peak performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="section-testimonials">
        <div className="container">
          <h2 className="section-title-center">Success Stories</h2>
          <div className="testimonials-row">
            <div className="testimonial-card-modern">
              <p className="t-text">"The personalized mentorship was a game changer. I knew exactly what to study and when."</p>
              <div className="t-author">
                <div className="t-avatar">S</div>
                <div>
                  <h4>Shreyas Medasani</h4>
                  <span className="t-score">Score: 651/720</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card-modern">
              <p className="t-text">"Regular mock tests helped me overcome my exam fear. The faculty is incredible."</p>
              <div className="t-author">
                <div className="t-avatar">V</div>
                <div>
                  <h4>V. Videep</h4>
                  <span className="t-score">Score: 645/720</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card-modern">
              <p className="t-text">"A stress-free environment that actually cares about students. Highly recommended!"</p>
              <div className="t-author">
                <div className="t-avatar">P</div>
                <div>
                  <h4>P. Sai Sree</h4>
                  <span className="t-score">Score: 615/720</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="section-cta-final">
        <div className="cta-content">
          <h2>Don't Just Dream. Achieve.</h2>
          <p>Limited seats available for the upcoming batch. Secure your future today.</p>
          <button className="btn-white-pulse" onClick={() => window.location.href = '/contact'}>Start Your Journey</button>
        </div>
      </section>

      <Footer />
      <FooterCopyrightBar />
    </div>
  );
}