import React, { useState } from 'react';
import './jee.css';
import { Footer, FooterCopyrightBar } from '../components/footer';

const keyHighlights = [
  {
    title: "Personalized Mentorship",
    desc: "Dedicated mentors guide each student personally, ensuring their doubts are cleared and progress is closely monitored."
  },
  {
    title: "Chapter-wise Mock Tests",
    desc: "Regular assessments to track progress."
  },
  {
    title: "Result Analytics",
    desc: "Understand your strengths and weak areas."
  },
  {
    title: "IIT Expert Faculty",
    desc: "Learn from teachers who’ve been there, done that."
  },
  {
    title: "Concept Clarity Guarantee",
    desc: "We don’t just teach, we ensure you truly understand each topic before moving on."
  }
];

const uniqueFeatures = [
  {
    title: "Visionary Leadership",
    desc: "Led by Siva Prasad Sir (or “Founder/Director Siva Prasad”) with over 15+ years of experience in IIT-JEE / competitive exams coaching. Deep understanding of what examiners expect and how students need to prepare."
  },
  {
    title: "Alumni & Expert Faculty",
    desc: "Teachers include IIT / top-college alumni, subject experts, and senior mentors with proven track records in helping students crack tough targets."
  },
  {
    title: "Focused on High-Impact Topics + Fundamentals",
    desc: "We zero in on topics that guarantee maximum scoring, without ignoring strong basics—because cramming without foundation crashes when exam stress hits."
  },
  {
    title: "IIT-Level Study Material",
    desc: "All study materials, assignments, mock tests and solution sheets are prepared by people who KNOW the IIT-JEE style inside out."
  },
  {
    title: "Personalized Mentorship & Feedback",
    desc: "Small batches • Regular performance analysis • One-on-one doubt clearing • Continuous feedback loops so you can see where you need to improve."
  },
  {
    title: "Separate Campus-like Environment",
    desc: "Hygienic hostel facilities, clean mess food, comfortable stay; separate wings or spaces for boys and girls to ensure safety, focus, and comfort."
  },
  {
    title: "Stress-Free Learning Atmosphere",
    desc: "Interactive & joyful teaching methodology—group discussions, peer learning, doubt sessions, motivational support; not just rote teaching."
  },
  {
    title: "Regular Mock Exams & Real-Exam Simulations",
    desc: "Simulators of real IIT-JEE pattern so you get used to time, pressure, question types etc. So by exam day, nothing shocks you."
  },
  {
    title: "Strong Track Record & Success Stories",
    desc: "Hundreds (or thousands) of students placed in IIT / NIT / top engineering colleges under guidance; alumni support & mentorship."
  }
];

const curriculum = {
  Physics: [
    "Mechanics",
    "Thermodynamics",
    "Electrodynamics",
    "Optics",
    "Modern Physics",
  ],
  Chemistry: [
    "Physical",
    "Organic",
    "Inorganic concepts simplified for accuracy",
  ],
  Maths: [
    "Algebra",
    "Calculus",
    "Coordinate Geometry",
    "Trigonometry",
  ]
};

export default function Courses() {
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleApplyNow = () => alert("Application process will start soon!");
  const handleKnowMore = () => alert("More details coming soon!");

  return (
    <>
      <div className="jee-course-container">
        {/* Option to switch to curriculum view */}
        <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
          {!showCurriculum ? (
            <button
              className="btn btn-secondary"
              onClick={() => setShowCurriculum(true)}
            >
              View Curriculum Overview
            </button>
          ) : (
            <button
              className="btn btn-light"
              onClick={() => setShowCurriculum(false)}
              style={{ marginBottom: '1rem' }}
            >
              &larr; Back to JEE Overview
            </button>
          )}
        </div>

        {/* Show either main JEE or curriculum */}
        {!showCurriculum ? (
          <>
            {/* Hero Section */}
            <section className="hero-area">
              <h1>JEE Main & Advanced — Sri Siva Prasad College.</h1>
              <p className="hero-tagline">
                Master the foundation to IIT success with us.
              </p>
            </section>

            {/* Description */}
            <section className="description">
              <p>
                Our JEE program focuses on mastering core Physics, Chemistry, and Mathematics
                through concept-driven learning and consistent mock tests. We guide each student
                from fundamentals to the finish line — the IITs.
              </p>
            </section>

            {/* Unique Features Heading & Cards */}
            <section>
              <h2 style={{ textAlign: 'center', marginBottom: '1.2rem', fontWeight: 700, color: '#0e4182' }}>
                Unique Features — Siva Prasad Institution
              </h2>
              <div className="unique-features-list">
                {uniqueFeatures.map(({ title, desc }, idx) => (
                  <div key={idx} className="unique-feature-card">
                    <span className="unique-feature-title">{title}</span>
                    <span className="unique-feature-desc">{desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Features Heading & Cards */}
            <section>
              <h2 style={{ textAlign: 'center', marginBottom: '1.2rem', fontWeight: 700 }}>
                Features of our IIT Long Term Program and Inter + IIT
              </h2>
              <div className="key-highlights">
                {keyHighlights.map(({ title, desc }, index) => (
                  <div key={index} className="highlight-card">
                    <span className="highlight-title">{title}</span>
                    <span className="highlight-dash"> – </span>
                    <span className="highlight-desc">{desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Call-to-Action */}
            <section className="call-to-action">
              <p>
                Ready to power your JEE journey? Join now and start your success story.
              </p>
              <button
                className="btn btn-primary me-3"
                onClick={handleApplyNow}
              >
                Apply Now
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={handleKnowMore}
              >
                Know More
              </button>
            </section>
          </>
        ) : (
          // Curriculum overview as a "separate page"
          <section className="curriculum-overview">
            <h3>Curriculum Overview</h3>
            {Object.entries(curriculum).map(([subject, topics]) => (
              <div key={subject} className="curriculum-section">
                <button
                  className="curriculum-toggle"
                  onClick={() => toggleSection(subject)}
                  aria-expanded={expandedSection === subject}
                >
                  {subject}
                </button>
                {expandedSection === subject && (
                  <ul className="curriculum-list">
                    {topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
      <Footer />
      <FooterCopyrightBar />
    </>
  );
}