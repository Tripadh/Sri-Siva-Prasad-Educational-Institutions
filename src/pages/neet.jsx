import React, { useState } from 'react';
import './neet.css';
import { Footer, FooterCopyrightBar } from '../components/footer';

// Daily/Weekly Unique Features
const uniqueHighlights = [
  "Daily concept-wise classes to build strong fundamentals in 11th so 12th feels easier",
  "Weekly tests to gauge your growth and spot weak areas early",
  "Focused sessions on diagrams, biological drawing, and practicals – since Biology isn’t just theory",
  "Special classes on numericals / reaction mechanisms / optics etc. that students struggle with",
  "Time management and exam strategy workshops (how to attempt NEET within time, which sections first, how to eliminate options)",
  "Frequent feedback & progress reports for students + parents so everyone stays on the same page",
  "Revision booster sessions closer to exams (crash courses) for high yield chapters",
  "Mini mock-exams under NEET time pressure to simulate real exam environment",
  "Personalized doubt hours – small group or 1-on-1 so no question remains unanswered",
  "Access to previous years’ NEET solved papers and analysis of trends (what types of questions repeat, which topics are hot)",
  "Exclusive lab-work support and viva practice for Biology practicals",
];

// Inter Student Integrated Features
const uniqueInterFeatures = [
  "NEET + Intermediate syllabus taught together — one effort, two results. No duplication, no confusion.",
  "Every week’s schedule matches your Board timeline and NEET weightage topics — so you’re exam-ready on both fronts.",
  "Concept-to-Crystal Learning Approach: From micro concepts to macro understanding — each topic starts from the roots and grows to NEET-level perfection.",
  "Smart Practice Ecosystem: Daily chapter drills, weekly Concept Combos, and monthly grand mocks keep your accuracy sharp and timing on point.",
  "Subject Labs & Visual Learning Pods: Interactive Biology models, Physics experiments, and Chemistry demos that make abstract topics click instantly.",
  "‘Doubt Doctor’ Sessions: Dedicated slots for personal doubt solving — no question too small, no concept left unclear.",
  "Success Journal & Mentor Connect: Each student maintains a personal progress book with mentor feedback, goal tracking, and improvement roadmaps.",
  "Mindset & Motivation Hours: Weekly power sessions with toppers, psychologists, and faculty to build exam resilience and focus.",
  "Parent Performance Portal: Transparent digital reports for parents — attendance, test performance, and progress at a glance.",
  "Exam Hall Simulation: NEET-style timed exams conducted in actual exam conditions — practice until it feels like second nature.",
  "Revision Power Weeks: Compact, high-yield revision sessions before board and NEET exams — your final push, supercharged.",
];

const curriculum = {
  Physics: [
    "Mechanics",
    "Thermodynamics",
    "Electrostatics",
    "Optics",
    "Modern Physics",
  ],
  Chemistry: [
    "Physical Chemistry",
    "Organic Chemistry",
    "Inorganic Chemistry",
  ],
  Biology: [
    "Cell Biology",
    "Human Physiology",
    "Genetics and Evolution",
    "Ecology and Environment",
  ]
};

export default function Neet() {
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <div className="neet-container">
        {/* Switch toggle */}
        <div className="curriculum-toggle-switch" style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
          {!showCurriculum ? (
            <button className="btn btn-secondary" onClick={() => setShowCurriculum(true)}>
              View Curriculum Overview
            </button>
          ) : (
            <button className="btn btn-light" onClick={() => setShowCurriculum(false)}>
              &larr; Back to NEET Overview
            </button>
          )}
        </div>
        {!showCurriculum ? (
          <>
            <section className="neet-hero">
              <h1>NEET Course - Sri Siva Prasad College</h1>
              <p>Preparing you thoroughly for NEET with expert faculty and comprehensive curriculum.</p>
            </section>
            <section className="neet-unique">
              <h2>Key Points</h2>
              <ul>
                {uniqueHighlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="neet-inter-unique">
              <h2>Unique Highlights (for Inter Students — Integrated Curriculum)</h2>
              <ul>
                {uniqueInterFeatures.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <section className="curriculum-overview">
            <h3>Curriculum Overview</h3>
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