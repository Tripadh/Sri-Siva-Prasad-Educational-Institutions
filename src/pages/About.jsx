import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';
import aboutImage from '../assets/about.png';
import aboutImage2 from '../assets/about2.jpg';
import { Footer, FooterCopyrightBar } from '../components/footer';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="home-container">
      {/* 1. Cinematic Hero Section */}
      <section className="about-hero-section position-relative overflow-hidden pt-5 mt-5">
        <div className="orb orb-primary" style={{ top: '-10%', right: '10%' }}></div>
        <div className="orb orb-secondary" style={{ top: '40%', left: '-10%' }}></div>
        
        <div className="container text-center position-relative z-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="position-relative">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3 tracking-wide">OUR STORY</span>
            
            <h1 className="display-2 fw-black mb-3 text-dark tracking-tight">
              About <span className="text-gradient-accent">Us</span>
            </h1>
            
            <p className="fs-4 text-muted fw-medium mx-auto mb-5" style={{ maxWidth: '600px' }}>
              A Smart Way to Get Smart
            </p>
          </motion.div>
        </div>

        <div className="w-100 d-flex flex-column align-items-center mt-4 z-1">
          <div className="position-relative w-100 d-flex justify-content-center">
            <img src={aboutImage} alt="Sri Siva Prasad Institute of Sciences" className="cinematic-banner shadow-lg" />
            <div className="hero-gradient-mask"></div>
          </div>
          
          {/* 2. Glassmorphic Introduction Card (Below Banner) */}
          <motion.div 
            className="premium-glass-card introduction-card text-center p-5 mx-3 z-3 position-relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="fs-5 text-dark mb-4">
              At <b>Sri Siva Prasad Institute of Sciences</b>, we believe education is not just about marks—
              it’s about shaping young minds, building confidence, and preparing students
              to face life with courage and determination.
            </p>
            <p className="fs-6 text-muted mb-0">
              For years, we’ve been a second home to countless students who come with dreams
              in their eyes and leave with achievements in their hands. Every child is unique,
              and we take pride in guiding them step by step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values Grid (What Makes Us Different) */}
      <section className="section py-5 mt-5 position-relative z-1">
        <motion.div 
          className="container py-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-5 pb-3">
            <h2 className="display-4 fw-black mb-3">What Makes Us <span className="text-gradient-accent">Different?</span></h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
              Our classrooms are spaces where curiosity is encouraged and mistakes are stepping stones to success.
            </p>
          </div>

          <div className="row g-4">
            <motion.div className="col-md-6 col-lg-3" variants={fadeUp}>
              <div className="premium-program-card p-4 h-100 rounded-4 text-center d-flex flex-column align-items-center">
                <div className="gradient-icon-badge mb-4"><i className="bi bi-heart-fill"></i></div>
                <h4 className="fw-bold mb-3">Caring Teachers</h4>
                <p className="text-muted small mb-0">Approachable guides who truly believe in every student’s potential.</p>
              </div>
            </motion.div>
            <motion.div className="col-md-6 col-lg-3" variants={fadeUp}>
              <div className="premium-program-card p-4 h-100 rounded-4 text-center d-flex flex-column align-items-center">
                <div className="gradient-icon-badge mb-4"><i className="bi bi-person-lines-fill"></i></div>
                <h4 className="fw-bold mb-3">Individual Attention</h4>
                <p className="text-muted small mb-0">Personalized mentorship and detailed feedback to ensure steady growth.</p>
              </div>
            </motion.div>
            <motion.div className="col-md-6 col-lg-3" variants={fadeUp}>
              <div className="premium-program-card p-4 h-100 rounded-4 text-center d-flex flex-column align-items-center">
                <div className="gradient-icon-badge mb-4"><i className="bi bi-graph-up-arrow"></i></div>
                <h4 className="fw-bold mb-3">Strong Results</h4>
                <p className="text-muted small mb-0">Consistently achieving top scores in boards, JEE, NEET, and more.</p>
              </div>
            </motion.div>
            <motion.div className="col-md-6 col-lg-3" variants={fadeUp}>
              <div className="premium-program-card p-4 h-100 rounded-4 text-center d-flex flex-column align-items-center">
                <div className="gradient-icon-badge mb-4"><i className="bi bi-shield-check"></i></div>
                <h4 className="fw-bold mb-3">Supportive Environment</h4>
                <p className="text-muted small mb-0">Balancing strong discipline with constant encouragement and motivation.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. Pride and Promise (Split Layout) */}
      <section className="section py-5 bg-white position-relative">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div 
              className="col-lg-5 position-relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="orb orb-secondary" style={{ left: '-50px', top: '10%' }}></div>
              <img src={aboutImage2} alt="NEET Admissions Poster" className="img-fluid rounded-5 shadow-lg position-relative z-1" style={{ border: '1px solid rgba(0,0,0,0.05)' }} />
            </motion.div>
            
            <motion.div 
              className="col-lg-6 offset-lg-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeUp} className="mb-5">
                <h3 className="display-5 fw-black mb-4">Our Pride</h3>
                <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.8' }}>
                  Over the past decade, Sri Siva Prasad Institute of Sciences has established itself as a beacon of academic excellence in Vijayawada. Many of our students have achieved milestones they once thought impossible—whether it’s scoring over <b className="text-dark">99 percentile in JEE Mains</b>, securing top state ranks in <b className="text-dark">NEET</b>, or dominating school board exams with perfect GPAs.
                </p>
                <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.8' }}>
                  But our true pride lies beyond just the numbers. It is found in the thousands of successful alumni who are now pursuing their dreams at prestigious medical colleges, IITs, NITs, and top-tier engineering universities across the country. We take average students and, through our rigorous methodology, transform them into top-tier performers. Watching them evolve into confident, disciplined, and intellectually curious individuals is our greatest reward.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="position-relative ps-4" style={{ borderLeft: '2px solid var(--accent-blue)' }}>
                <h3 className="display-5 fw-black mb-4">Our Promise</h3>
                <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.8' }}>
                  We understand that competitive exams can be daunting. That is why we don’t just prepare students for exams—we prepare them for life. We are committed to providing a stress-free, highly engaging learning environment where concepts are mastered, not memorized. We promise to be:
                </p>
                <ul className="list-unstyled fs-5 text-muted mb-4" style={{ lineHeight: '2' }}>
                  <li className="d-flex align-items-start gap-3 mb-3">
                    <i className="bi bi-check-circle-fill text-primary mt-1"></i> 
                    <span><b>Unwavering Mentors:</b> We guide with infinite patience, ensuring no student is ever left behind, regardless of their starting academic level.</span>
                  </li>
                  <li className="d-flex align-items-start gap-3 mb-3">
                    <i className="bi bi-check-circle-fill text-primary mt-1"></i> 
                    <span><b>Relentless Motivators:</b> We build psychological resilience, lifting students up when they face setbacks and teaching them how to overcome academic anxiety.</span>
                  </li>
                  <li className="d-flex align-items-start gap-3 mb-3">
                    <i className="bi bi-check-circle-fill text-primary mt-1"></i> 
                    <span><b>Transparent Partners:</b> We maintain an open, continuous dialogue with parents, providing detailed analytics and honest feedback on their child's progress.</span>
                  </li>
                </ul>
                <p className="fs-5 text-muted mb-0" style={{ lineHeight: '1.8' }}>
                  At Sri Siva Prasad, every student’s journey is profoundly personal to us. Your child's success story is our shared celebration, and we will walk every step of that path together.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer Conclusion */}
      <section className="py-5 bg-alt text-center border-top">
        <div className="container my-4">
          <h4 className="fs-4 fw-light text-muted">
            <span className="text-gradient-accent fw-bold">Sri Siva Prasad Institute of Sciences</span> – Where teaching comes from the heart, and every dream finds a path.
          </h4>
        </div>
      </section>

      <Footer />
      <FooterCopyrightBar />
    </div>
  );
};

export default About;