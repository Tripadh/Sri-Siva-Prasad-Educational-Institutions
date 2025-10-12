import React from "react";
import slide from '../assets/faculty.png'; // Logo image
import { Footer, FooterCopyrightBar } from '../components/footer';
import "./faculty.css";

const facultyMembers = [
  {
    name: "Ch.Sri Siva Prasad",
    designation: "Head of Department – Chemistry",
    qualification: "Ph.D, M.Sc. (Chemistry), CSIR-NET, AP-SET.",
    experience: "20+ years",
    bio: "Expert in NEET Chemistry and passionate about simplifying complex reactions through real-world examples. Guided 5000+ students to achieve top ranks with clarity and confidence."
  },
  {
    name: "Mr.K.Sankar",
    designation: "Senior Biology Faculty",
    qualification: "M.Sc (Biology), CSIR-NET, AP-SET.",
    experience: "20+ years",
    bio: "Passionate about simplifying Biology through examples and logical reasoning. Has guided numerous NEET aspirants toward consistent improvement and top performance."
  },
  {
    name: "SINGAMSETTY VENKATA NAGA ANJANEYULU",
    designation: "Senior Physics Faculty",
    qualification: "M.Sc. (Physics), B.Ed., AP-SET.",
    experience: " 20+years",
    bio: "Expert in NEET Physics who simplifies even the most challenging topics through logic and visualization. Mentored thousands of students to build accuracy, speed, and confidence in problem-solving."
  },
];

export default function Faculty() {
  return (
    <>
      <div className="faculty-section">
        {/* Big, centered logo image with improved styling */}
        <div className="faculty-top-image">
          <img src={slide} alt="Our Faculty Logo" className="faculty-logo" />
        </div>
        <h2 className="faculty-title">Meet Our Faculty</h2>
        <p className="faculty-intro">
          Experienced mentors dedicated to guiding you every step of your academic journey.
        </p>
        <div className="faculty-grid">
          {facultyMembers.map((fac, idx) => (
            <div className="faculty-card" key={idx}>
              <div className="faculty-details">
                <h3>{fac.name}</h3>
                <p className="faculty-designation">{fac.designation}</p>
                <p className="faculty-qualification">
                  <strong>Qualification:</strong> {fac.qualification}
                </p>
                <p className="faculty-experience">
                  <strong>Experience:</strong> {fac.experience}
                </p>
                <p className="faculty-bio">{fac.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <FooterCopyrightBar />
    </>
  );
}