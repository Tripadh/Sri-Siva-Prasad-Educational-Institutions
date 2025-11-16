import React from "react";
import slide from "../assets/faculty.png";
import { Footer, FooterCopyrightBar } from "../components/footer";
import "./faculty.css";

const facultyMembers = [
  {
    name: "Ch.Sri Siva Prasad",
    designation: "Head of Department – Chemistry",
    subject: "Chemistry",
    icon: "⚗️", // UPDATED HERE – SUBJECT ICON
    qualification: "Ph.D, M.Sc. (Chemistry), CSIR-NET, AP-SET.",
    experience: "20+ years",
    achievements: [
      "Guided 5000+ NEET aspirants",
      "Produced multiple state top ranks",
      "Known for conceptual visualization",
    ],
    bio: "Expert in NEET Chemistry and passionate about simplifying complex reactions.",
  },
  {
    name: "Mr.K.Sankar",
    designation: "Senior Biology Faculty",
    subject: "Biology",
    icon: "🧬",
    qualification: "M.Sc (Biology), CSIR-NET, AP-SET.",
    experience: "20+ years",
    achievements: [
      "NEET specialist for two decades",
      "Concept-based teaching expert",
    ],
    bio: "Passionate about simplifying Biology through logic and real-world examples.",
  },
  {
    name: "SINGAMSETTY VENKATA NAGA ANJANEYULU",
    designation: "Senior Physics Faculty",
    subject: "Physics",
    icon: "⚡",
    qualification: "M.Sc. (Physics), B.Ed., AP-SET.",
    experience: "20+ years",
    achievements: [
      "Produced consistent 650+ scorers",
      "Physics problem-solving specialist",
    ],
    bio: "Expert in NEET Physics who simplifies challenging topics with visualization.",
  },
];

export default function Faculty() {
  return (
    <>
      <div className="faculty-section">

        <div className="faculty-top-image">
          <img src={slide} alt="Faculty Logo" className="faculty-logo" />
        </div>

        <h2 className="faculty-title">Meet Our Faculty</h2>
        <p className="faculty-intro">
          Experienced mentors dedicated to guiding you every step of your academic journey.
        </p>

        

        <div className="faculty-grid">
          {facultyMembers.map((fac, idx) => (
            <div className="faculty-card" key={idx}>

              {/* 🎯 ICON BADGE INSTEAD OF PHOTO */}
              <div className="faculty-icon-circle">
                {fac.icon}
              </div>
              <span className="faculty-icon-subject">{fac.subject}</span>

              <div className="faculty-details">
                <h3>{fac.name}</h3>
                <p className="faculty-designation">{fac.designation}</p>

                <p className="faculty-qualification">
                  <strong>Qualification:</strong> {fac.qualification}
                </p>

                <p className="faculty-experience">
                  <strong>Experience:</strong> {fac.experience}
                </p>

                <ul className="achievement-list">
                  {fac.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>

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
