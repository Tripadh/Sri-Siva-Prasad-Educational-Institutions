import React from 'react';
import './boardexams.css';
import { Footer, FooterCopyrightBar } from '../components/footer';

export default function BoardExams() {
  return (
    <>
      <div className="board-container">
        {/* Hero Section */}
        <section className="board-hero">
          <h1>Board Exam Preparation - Sri Siva Prasad Educational Institution</h1>
          <p>
            Excel in Intermediate Board Exams with conceptual clarity, personalized attention, and structured guidance from expert faculty.
          </p>
        </section>

        {/* Highlights Section */}
        <section className="board-highlights">
          <h2>Unique Highlights</h2>
          <ul>
            <li>Comprehensive coverage of Physics, Chemistry, Mathematics, and Biology as per the latest Intermediate Board syllabus</li>
            <li>Chapter-wise teaching with regular unit tests and cumulative revisions</li>
            <li>Expert faculty with years of experience in Board and competitive exam preparation</li>
            <li>Daily practice worksheets and concept recap sheets for effective revision</li>
            <li>Focus on understanding, presentation, and step-wise scoring techniques</li>
            <li>Answer writing practice with model papers and examiner-style evaluations</li>
            <li>Weekly performance analysis and personalized mentor feedback</li>
            <li>Dedicated “Doubt Clearance Hour” for one-on-one student support</li>
            <li>Integrated timetable balancing Board + EAMCET/NEET preparation without pressure</li>
            <li>Motivational and stress-management sessions before exams for confidence and focus</li>
          </ul>
        </section>

        {/* Curriculum Overview Section */}
        <section className="board-curriculum">
          <h2>Brief Curriculum Overview</h2>
          <ul>
            <li>Physics: Motion, Waves, Current Electricity, Optics, Modern Physics</li>
            <li>Chemistry: Physical, Organic, and Inorganic chemistry with lab-oriented learning</li>
            <li>Mathematics: Algebra, Calculus, Geometry, and Trigonometry fundamentals</li>
            <li>Biology: Plant Physiology, Human Anatomy, Genetics, Ecology, and Evolution</li>
          </ul>
        </section>

        {/* Why Choose Us Section */}
        <section className="board-whyus">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Board-focused teaching methodology with concept-to-application clarity</li>
            <li>High-quality study material aligned with both Telangana & Andhra Pradesh syllabi</li>
            <li>Daily test discussions and error analysis to improve accuracy</li>
            <li>Smart note-taking and memory techniques to retain core topics</li>
            <li>Progress reports for parents to track academic growth</li>
            <li>Result-oriented strategy sessions from experienced educators</li>
          </ul>
        </section>
      </div>
      <Footer />
      <FooterCopyrightBar />
    </>
  );
}