import React, { useState, useEffect, useRef } from "react";
import "./neetlong.css";
import { Footer, FooterCopyrightBar } from "../components/footer";

// Import your local images
import neetImg1 from "../assets/neetlt.png";
import neetImg2 from "../assets/hd logo full.jpg";

// --- Carousel Images ---
const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80",
    headline: "Achieve NEET Success with Sri Siva Prasad College",
    subtext: "A comprehensive, guided journey to your medical career.",
  },
  {
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1600&q=80",
    headline: "Personalized Mentorship & Doubt Clearing",
    subtext: "Individual attention to boost your confidence and clarity.",
  },
  {
    image: neetImg1,
  },
  {
    image: neetImg2,
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80",
    headline: "Interactive Learning, Stress-Free Environment",
    subtext: "Learn, revise, and practice the smart way.",
  },
];

const quotes = [
  "Success is no accident. It is hard work, perseverance, learning, and sacrifice.",
  "Dream big, work hard, stay focused, and surround yourself with good people.",
  "Your only limit is your mind. Strive for progress, not perfection.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
];

const features = [
  "Comprehensive NEET syllabus coverage – All topics explained thoroughly for strong conceptual clarity",
  "Daily concept-wise classes – Step-by-step learning to build rock-solid fundamentals",
  "Weekly chapter tests & full-length mocks – Practice that boosts confidence and exam readiness",
  "Personalized doubt clearing & mentorship – One-on-one guidance to resolve every question",
  "Stress-free, interactive learning – Engaging teaching methods that make learning enjoyable",
  "Special sessions for diagrams & practicals – Master biological drawings and experiments with ease",
  "Time management & exam strategy workshops – Learn smart techniques to maximize scores",
  "Frequent feedback & progress reports – Keep parents updated on their child’s performance",
  "Access to previous years’ solved papers – In-depth analysis to understand patterns and trends",
  "Exclusive lab-work & viva practice support – Hands-on help to excel in Biology practicals",
  "Error list & mistake tracking – Identify mistakes and turn them into strengths for faster improvement"
];

const testimonials = [
  {
    name: "Shreyas Medasani",
    score: "651/720",
    message:
      "The NEET Long Term program helped me build a strong foundation. The personalized mentorship and regular mocks boosted my confidence greatly.",
  },
  {
    name: "V.Videep Sri NagaSai",
    score: "645/720",
    message:
      "With thorough concepts and guided doubts sessions, I was always prepared for every exam phase.",
  },
  {
    name: "P.Sai Sree Harshit",
    score: "615/720",
    message:
      "The stress-free environment allowed me to learn effectively and score well.",
  },
];

export default function NeetLongTerm() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselTimeout = useRef();

  useEffect(() => {
    carouselTimeout.current = setTimeout(() => {
      setCarouselIdx((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);
    return () => clearTimeout(carouselTimeout.current);
  }, [carouselIdx]);

  const [quoteIdx, setQuoteIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="neet-wow-container">
        {/* --- Carousel Section --- */}
        <section className="neet-carousel">
          {carouselSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-slide${carouselIdx === idx ? " active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-overlay" />
              <div className="carousel-caption">
                <h1>{slide.headline}</h1>
                <p>{slide.subtext}</p>
              </div>
            </div>
          ))}

          <div className="carousel-indicators">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                className={`indicator-dot${carouselIdx === idx ? " active" : ""}`}
                onClick={() => setCarouselIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>
      

        {/* --- Motivational Quotation --- */}
        <section className="neet-quote-section">
          <blockquote>
            <span className="quote-mark">“</span>
            <span className="quote-text">{quotes[quoteIdx]}</span>
            <span className="quote-mark">”</span>
          </blockquote>
        </section>

        {/* --- Founder’s Vision --- */}
        <section className="neet-section founder-section">
          <h2 className="wow-title">Founder’s Vision</h2>
          <p className="founder-quote">
            Education should empower dreams, not stress students.
          </p>
          <p className="founder-desc">
            At Sri Siva Prasad Educational Institution, we guide every student with care and purpose.
            Our goal is simple — to help them learn with confidence, stay curious, and reach their NEET dream with a calm and focused mind.
          </p>
          <p className="founder-sign">— Ch.Sri Siva Prasad Garu, Founder & Director</p>
        </section>

        {/* --- Results Snapshot --- */}
        <section className="neet-section results-section">
          <h2 className="wow-title">Our Results Speak for Themselves</h2>
          <div className="results-grid">
            <div className="result-box">
              <h3>95%</h3>
              <p>Students Qualified NEET 2024</p>
            </div>
            <div className="result-box">
              <h3>60+</h3>
              <p>Students Scored Above 600</p>
            </div>
            <div className="result-box">
              <h3>10+</h3>
              <p>Students Above 650 Marks</p>
            </div>
            <div className="result-box">
              <h3>3 Years</h3>
              <p>Consistent Track Record of Excellence</p>
            </div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section className="neet-section features-section">
          <h2 className="wow-title">Program Features</h2>
          <div className="features-list feature-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <span className="feature-icon">
                  {idx % 2 === 0 ? "🌟" : "💡"}
                </span>
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* --- Journey Timeline --- */}
        <section className="neet-section timeline-section">
          <h2 className="wow-title">Your Year-Long NEET Journey</h2>
          <div className="timeline-journey">
            <div className="timeline-step">
              <div className="timeline-step-title">Months 1–2</div>
              <div>Concept Foundation: Build strong basics and subject confidence.</div>
              <svg className="timeline-arrow" viewBox="0 0 45 30">
                <path d="M5,15 Q22.5,35 40,15" stroke="#2563eb" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead1)" />
                <defs>
                  <marker id="arrowhead1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6" fill="#2563eb" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-step-title">Months 3–6</div>
              <div>Intensive Practice: Topic mastery and weekly mock tests.</div>
              <svg className="timeline-arrow" viewBox="0 0 45 30">
                <path d="M5,15 Q22.5,35 40,15" stroke="#2563eb" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead2)" />
                <defs>
                  <marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6" fill="#2563eb" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-step-title">Months 7–10</div>
              <div>Mock Marathon: Full-length tests and exam hall simulations.</div>
              <svg className="timeline-arrow" viewBox="0 0 45 30">
                <path d="M5,15 Q22.5,35 40,15" stroke="#2563eb" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead3)" />
                <defs>
                  <marker id="arrowhead3" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6" fill="#2563eb" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-step-title">Months 11–12</div>
              <div>Revision Power Weeks: Compact, high-yield final push.</div>
              {/* No arrow after the last step */}
            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="neet-section testimonial-section">
          <h2 className="wow-title">What Our Students Say</h2>
          <div className="testimonial-carousel">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`testimonial-card${ currentTestimonial === idx ? " active" : "" }`}
                style={{
                  opacity: currentTestimonial === idx ? 1 : 0,
                  zIndex: currentTestimonial === idx ? 2 : 1,
                }}
              >
                <blockquote>
                  <em>"{t.message}"</em>
                </blockquote>
                <div className="testimonial-meta">
                  <strong>{t.name}</strong> <span>- Score: {t.score}</span>
                </div>
              </div>
            ))}
            <div className="testimonial-indicators">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator-dot${ currentTestimonial === idx ? " active" : "" }`}
                  onClick={() => setCurrentTestimonial(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      
        {/* --- Call To Action --- */}
        <section className="neet-section cta-section">
          <h2 className="wow-title">Ready to Begin Your NEET Journey?</h2>
          <p>
            Join our 2025–26 NEET Long-Term Program and start your preparation with
            the best mentors and proven results.
          </p>
          <div className="cta-buttons">
            <button className="apply-btn">📩 Apply Now</button>
            <a
              href="tel:+91918688124113"
              className="contact-btn"
              style={{ fontWeight: 500, display: "inline-block", textDecoration: "none" }}
            >
              📞 Contact us
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <FooterCopyrightBar />
    </>
  );
}