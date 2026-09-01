import React from "react";
import slide from "../assets/faculty.png";
import { Footer, FooterCopyrightBar } from "../components/footer";
import ScrollReveal from "../components/ScrollReveal";
import "./faculty.css";

const facultyMembers = [
  {
    name: "Ch.Sri Siva Prasad",
    designation: "Head of Department – Chemistry",
    subject: "Chemistry",
    icon: "⚗️", 
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
    <div className="position-relative overflow-hidden bg-alt">
      <div className="orb-container">
        <div className="orb orb-primary" style={{ top: '-10%', right: '10%' }}></div>
        <div className="orb orb-secondary" style={{ top: '40%', left: '-10%' }}></div>
        <div className="orb orb-accent" style={{ bottom: '-10%', right: '40%' }}></div>
      </div>

      <div className="container py-5 mt-4 position-relative z-1">
        <ScrollReveal className="text-center mb-5 pb-4">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3 tracking-wide">LEADERSHIP</span>
          <h2 className="headline-huge mb-3">Meet Our <span className="text-gradient-accent">Faculty</span></h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '700px' }}>
            Experienced mentors dedicated to guiding you every step of your academic journey.
          </p>
        </ScrollReveal>

        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-lg-10">
            <ScrollReveal delay={0.1}>
              <div className="text-center rounded-5 overflow-hidden shadow-lg border" style={{ borderColor: 'rgba(0,0,0,0.05)', backgroundColor: 'white' }}>
                <img src={slide} alt="Faculty Banner" className="img-fluid w-100" style={{ maxHeight: '450px', objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="row g-5 pb-5">
          {facultyMembers.map((fac, idx) => (
            <div className="col-lg-4" key={idx}>
              <ScrollReveal delay={0.1 * (idx + 1)}>
                <div className="bg-white rounded-5 p-5 h-100 d-flex flex-column position-relative shadow-sm transition-all" 
                     style={{ border: '1px solid rgba(0,0,0,0.05)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--bs-box-shadow-lg)'; }}
                     onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--bs-box-shadow-sm)'; }}
                >
                  <div className="d-flex align-items-center mb-4">
                    <div className="gradient-icon-badge shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      {fac.icon}
                    </div>
                    <div className="ms-3">
                      <span className="badge bg-alt border text-muted px-2 py-1 mb-1">{fac.subject}</span>
                    </div>
                  </div>

                  <h3 className="h4 fw-bold mb-1 text-dark">{fac.name}</h3>
                  <p className="text-primary fw-medium small mb-4">{fac.designation}</p>

                  <div className="mb-4">
                    <div className="small fw-bold text-uppercase text-muted mb-1 tracking-wide">Qualification</div>
                    <p className="small mb-0 text-dark fw-medium">{fac.qualification}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="small fw-bold text-uppercase text-muted mb-1 tracking-wide">Experience</div>
                    <p className="small mb-0 text-dark fw-medium">{fac.experience}</p>
                  </div>

                  <div className="mb-4 flex-grow-1">
                    <div className="small fw-bold text-uppercase text-muted mb-2 tracking-wide">Achievements</div>
                    <ul className="list-unstyled mb-0">
                      {fac.achievements.map((ach, i) => (
                        <li key={i} className="small text-dark mb-2 d-flex align-items-start gap-2">
                          <i className="bi bi-check-circle-fill text-primary opacity-75 mt-1" style={{ fontSize: '0.8rem' }}></i> {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-top">
                    <p className="small text-muted fst-italic mb-0">"{fac.bio}"</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <FooterCopyrightBar />
    </div>
  );
}
