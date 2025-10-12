import React, { useState } from 'react';
import './eamcet.css';
import { Footer, FooterCopyrightBar } from '../components/footer';

const curriculum = {
  Physics: [
    "Mechanics",
    "Waves",
    "Heat",
    "Electricity & Magnetism",
  ],
  Chemistry: [
    "Physical Chemistry",
    "Organic Chemistry",
    "Inorganic Chemistry",
  ],
  Mathematics: [
    "Algebra",
    "Calculus",
    "Trigonometry",
    "Geometry",
  ],
  Biology: [
    "Genetics",
    "Ecology",
    "Human Physiology",
  ],
};

export default function Eamcet() {
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <div className="eamcet-container">
        {/* Curriculum toggle button */}
        <div className="curriculum-toggle-switch" style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
          {!showCurriculum ? (
            <button className="btn btn-secondary" onClick={() => setShowCurriculum(true)}>
              View Curriculum Overview
            </button>
          ) : (
            <button className="btn btn-light" onClick={() => setShowCurriculum(false)}>
              &larr; Back to EAMCET Overview
            </button>
          )}
        </div>

        {!showCurriculum ? (
          <>
            {/* Hero Section */}
            <section className="eamcet-hero">
              <h1>EAMCET Course - Sri Siva Prasad College</h1>
              <p>Crack EAMCET with result-oriented strategies, strong fundamentals, and expert guidance.</p>
            </section>

            {/* Highlights Section */}
            <section className="eamcet-highlights">
              <h2>Unique Highlights</h2>
              <ul>
                <li>Comprehensive coverage of Physics, Chemistry, and Mathematics/Biology as per Telangana and AP EAMCET pattern</li>
                <li>Regular topic-wise and grand tests for performance assessment</li>
                <li>Experienced faculty with consistent EAMCET toppers and proven results</li>
                <li>Focus on speed, accuracy, and smart solving techniques</li>
                <li>Board-integrated learning ensuring perfect sync between Inter & EAMCET preparation</li>
                <li>Short-cut formulas & problem-solving hacks for faster attempts</li>
                <li>Chapter-end “Concept Combos” to strengthen fundamentals through quick recap sessions</li>
                <li>Weekly leaderboards & progress tracking for motivation and self-assessment</li>
                <li>Exam hall simulations replicating real EAMCET pressure and timing</li>
                <li>Dedicated “Doubt Hour” with faculty mentoring for personalized support</li>
              </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="eamcet-whyus">
              <h2>Why Choose Us</h2>
              <ul>
                <li>Concept-driven teaching for crystal-clear understanding</li>
                <li>Smart strategy sessions focused on time management and accuracy</li>
                <li>Personalized mentor guidance for every student</li>
                <li>Mock exams designed exactly like the real EAMCET pattern</li>
                <li>Consistent improvement reports shared with parents</li>
                <li>Motivational and strategy sessions from past rankers</li>
              </ul>
            </section>
          </>
        ) : (
          // Curriculum overview as a "separate page"
          <section className="eamcet-curriculum">
            <h2>Curriculum Overview</h2>
            {Object.entries(curriculum).map(([subject, topics]) => (
              <div key={subject} className="curriculum-section" style={{ marginBottom: '1rem' }}>
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