import React from 'react';
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Home.css';
import { Footer, FooterCopyrightBar } from '../components/footer';

// Import Assets
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.1.jpg';
import slide3 from '../assets/slide-3.png';
import slide4 from '../assets/slide-4.jpg';
import slide5 from '../assets/slide-5.png';
import slide7 from '../assets/slide-7.jpg';
import building from '../assets/building.png';

// Import Student Images
import photo1 from '../assets/shreyas.png';
import photo2 from '../assets/videep.png';
import photo3 from '../assets/harshit.png';
import photo4 from '../assets/sammera.png';
import photo5 from '../assets/sarath.png';
import photo6 from '../assets/pardhu.png';
import photo7 from '../assets/manoj.png';
import photo8 from '../assets/mok.png';

const HERO_SLIDES = [slide1, slide2, slide3, slide4, slide5, slide7];

const STORIES = [
  { image: photo1, score: '651/720', exam: 'NEET', name: 'Shreyas Medasani', message: "The constant tests, clear concepts, and doubt sessions really pushed me forward scoring 651." },
  { image: photo2, score: '645/720', exam: 'NEET', name: 'V.Videep Sri NagaSai', message: "Teachers treated me like family. Because of their support, I scored 645 in NEET." },
  { image: photo3, score: '615/720', exam: 'NEET', name: 'P.Sai Sree Harshit', message: "Scoring 615 was about smart strategy. Constant guidance and regular mocks helped." },
  { image: photo5, score: '99.63%', exam: 'JEE Mains', name: 'Y. Sarath Chaityana', message: "99.63 in JEE Mains Chemistry. A proud moment for my family." },
  { image: photo6, score: '90.77%', exam: 'JEE Mains', name: 'N.N.Pardhu', message: "My dream come true. Structured study plans helped me identify my strengths." },
  { image: photo4, score: '606/720', exam: 'NEET', name: 'Syed Sammera', message: "Scoring 606 felt surreal! The journey was filled with challenges but worth it." },
  { image: photo8, score: '591/720', exam: 'NEET', name: 'T.Mokshagana', message: "A turning point in my NEET preparation. Concept clarity was key." },
];

const TrustItem = ({ value, suffix, sub, icon }) => (
  <motion.div 
    className="trust-item bg-white rounded-4 p-4 d-flex align-items-center gap-4 flex-grow-1"
    style={{ boxShadow: 'var(--bs-box-shadow)', minWidth: '280px' }}
    whileHover={{ y: -5, boxShadow: 'var(--bs-box-shadow-lg)' }}
  >
    <div className="gradient-icon-badge">
      {icon}
    </div>
    <div className="trust-text text-start">
      <h4 className="fw-black mb-0" style={{ fontSize: '2.5rem', letterSpacing: '-1px' }}>
        {typeof value === 'number' ? (
          <CountUp end={value} enableScrollSpy scrollSpyOnce />
        ) : (
          value
        )}
        <span className="text-primary">{suffix}</span>
      </h4>
      <p className="text-muted small fw-bold text-uppercase mb-0 tracking-wide" style={{ letterSpacing: '1px' }}>{sub}</p>
    </div>
  </motion.div>
);

const ProgramCard = ({ title, desc, icon, link }) => (
  <motion.div 
    className="premium-program-card bg-white rounded-4 p-5 h-100 d-flex flex-column position-relative"
    style={{ boxShadow: 'var(--bs-box-shadow)' }}
    whileHover={{ 
      y: -10, 
      rotateX: 2, 
      rotateY: -2,
      boxShadow: "var(--bs-box-shadow-lg)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="program-gradient-wash position-absolute top-0 end-0 w-50 h-50 rounded-circle" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(255,255,255,0) 70%)', transform: 'translate(30%, -30%)' }} />
    <div className="gradient-icon-badge mb-4" style={{ width: '56px', height: '56px', fontSize: '1.5rem' }}>{icon}</div>
    <h3 className="program-title h4 fw-bold mb-3 position-relative z-index-1">{title}</h3>
    <p className="program-desc text-muted mb-4 flex-grow-1 position-relative z-index-1" style={{ fontSize: '1.05rem' }}>{desc}</p>
    <Link to={link || "#"} className="card-link text-primary fw-bold text-decoration-none mt-auto position-relative z-index-1 d-inline-flex align-items-center gap-2">
      Explore Program <i className="bi bi-arrow-right"></i>
    </Link>
  </motion.div>
);

const FeatureItem = ({ title, desc, icon, isLast }) => (
  <div className={`premium-feature-item d-flex gap-4 ${isLast ? 'mb-2' : 'mb-5'} position-relative`}>
    {!isLast && <div className="feature-connecting-line"></div>}
    <div className="gradient-icon-badge flex-shrink-0 position-relative z-1" style={{ width: '56px', height: '56px', fontSize: '1.25rem' }}>
      {icon}
    </div>
    <div className="feature-content pt-2">
      <h3 className="h5 fw-bold mb-2">{title}</h3>
      <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{desc}</p>
    </div>
  </div>
);

// SVG Waves
const WaveTop = () => (
  <div className="wave-divider-top">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.73,197.83,111.45,241.67,105.3,283.47,81.16,321.39,56.44Z" fill="#F9FAFB"></path>
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#F9FAFB" }) => (
  <div className="wave-divider-bottom">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V95.8C59.71,118.08,130.83,120.73,197.83,111.45,241.67,105.3,283.47,81.16,321.39,56.44Z" fill={fill}></path>
    </svg>
  </div>
);


export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <motion.div 
      className="home-container"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="orb-container">
        <div className="orb orb-primary"></div>
        <div className="orb orb-secondary"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="hero-section position-relative overflow-hidden" style={{ height: '90vh', minHeight: '700px' }}>
        
        {/* Swiper Background */}
        <div className="position-absolute w-100 h-100 top-0 left-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="hero-swiper h-100 w-100"
          >
            {HERO_SLIDES.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="hero-bg h-100 w-100"
                  style={{ 
                    backgroundImage: `url(${slide})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>



        {/* Floating Glass Stat Card Removed to prevent overlapping with image text */}
        
        
        <div className="hero-gradient-mask"></div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="trust-strip position-relative z-2">
        <motion.div 
          className="container d-flex flex-wrap justify-content-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="d-flex flex-grow-1">
            <TrustItem value={10} suffix="+" sub="Years of Excellence" icon={<i className="bi bi-award-fill"></i>} />
          </motion.div>
          <motion.div variants={fadeUp} className="d-flex flex-grow-1">
            <TrustItem value={5000} suffix="+" sub="Successful Students" icon={<i className="bi bi-people-fill"></i>} />
          </motion.div>
          <motion.div variants={fadeUp} className="d-flex flex-grow-1">
            <TrustItem value="Top 1%" suffix="" sub="Ranks in NEET/JEE" icon={<i className="bi bi-graph-up-arrow"></i>} />
          </motion.div>
        </motion.div>
      </section>

      {/* 3. PROGRAMS OFFERED */}
      <section className="section py-5 bg-white position-relative">
        <div className="orb orb-accent"></div>
        <motion.div 
          className="container py-5 z-1 position-relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-5 pb-3">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3 tracking-wide">ACADEMICS</span>
            <h2 className="headline-huge mb-3">Our <span className="text-gradient-accent">Programs</span></h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>Tailored courses designed to build strong foundations and achieve top ranks.</p>
          </motion.div>

          <div className="row g-5">
            <motion.div className="col-lg-4" variants={fadeUp}>
              <ProgramCard
                title="NEET Long-Term"
                desc="Intensive coaching for repeaters focusing on depth, practice, and consistency."
                icon={<i className="bi bi-heart-pulse-fill"></i>}
                link="/neet-longterm"
              />
            </motion.div>
            <motion.div className="col-lg-4 mt-lg-5" variants={fadeUp}>
              <ProgramCard
                title="JEE Mains & Adv"
                desc="Comprehensive preparation for engineering aspirants with problem-solving focus."
                icon={<i className="bi bi-cpu-fill"></i>}
                link="/jee"
              />
            </motion.div>
            <motion.div className="col-lg-4" variants={fadeUp}>
              <ProgramCard
                title="Foundation Course"
                desc="Early start programs for school students to build strong science & math fundamentals."
                icon={<i className="bi bi-book-half"></i>}
                link="/about"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section py-5 bg-alt position-relative mt-5">
        <WaveTop />
        <div className="container py-5 mt-4">
          <div className="row align-items-center g-5">
            <motion.div 
              className="col-lg-5 position-relative"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="orb orb-secondary" style={{ left: '-100px', top: '50px' }}></div>
              <img src={building} alt="Campus Building" className="img-fluid rounded-5 shadow-lg position-relative z-1" style={{ border: '8px solid white' }} />
              
              {/* Asymmetric floating accent */}
              <div className="glass-card position-absolute bottom-0 start-0 translate-middle-x mb-5 p-3 rounded-4 z-2 text-center d-none d-md-block" style={{ width: '150px' }}>
                <div className="gradient-icon-badge mb-2 mx-auto"><i className="bi bi-shield-check"></i></div>
                <div className="fw-bold fs-6">Verified</div>
                <div className="text-muted small">Excellence</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-6 offset-lg-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={fadeUp} className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3 tracking-wide">THE DIFFERENCE</motion.span>
              <motion.h2 variants={fadeUp} className="display-4 fw-black mb-4">Why Choose <span className="text-gradient-accent">SSPIS?</span></motion.h2>
              <motion.p variants={fadeUp} className="text-muted mb-5 fs-5">
                We go beyond textbooks. We build character, discipline, and absolute confidence in every student.
              </motion.p>

              <div className="features-list pe-lg-4 mt-5">
                <motion.div variants={fadeUp}>
                  <FeatureItem title="Expert Faculty" desc="Learn from the best minds with years of experience in producing top rankers." icon={<i className="bi bi-person-video3"></i>} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <FeatureItem title="Personalized Mentorship" desc="One-on-one guidance to identify strengths and work on weaknesses." icon={<i className="bi bi-bullseye"></i>} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <FeatureItem title="Strategic Testing" desc="Regular mock tests that simulate real exam conditions with detailed analytics." icon={<i className="bi bi-clipboard-data-fill"></i>} isLast={true} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <WaveBottom fill="#FFFFFF" />
      </section>

      {/* 5. SUCCESS STORIES (RESULTS) */}
      <section className="section py-5 bg-white overflow-hidden position-relative">
        <motion.div 
          className="container py-5 text-center position-relative z-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold mb-3 tracking-wide">TESTIMONIALS</motion.span>
          <motion.h2 variants={fadeUp} className="headline-huge mb-3 text-dark">Wall of <span className="text-gradient-accent">Fame</span></motion.h2>
          <motion.p variants={fadeUp} className="text-muted mb-5 fs-5 mx-auto" style={{ maxWidth: '600px' }}>Real results and stories from our dedicated students.</motion.p>

          <motion.div variants={fadeUp} className="w-100 pb-5">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={40}
              slidesPerView="auto"
              centeredSlides={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="success-slider peek-carousel pb-5"
            >
              {STORIES.map((story, idx) => (
                <SwiperSlide key={idx} style={{ width: '400px', maxWidth: '85vw' }}>
                  {({ isActive }) => (
                    <div 
                      className={`premium-testimonial-card rounded-4 p-5 text-start h-100 position-relative transition-all ${isActive ? 'active shadow-lg' : ''}`}
                      style={{ 
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isActive ? 'scale(1)' : 'scale(0.9)',
                        opacity: isActive ? 1 : 0.5
                      }}
                    >
                      {/* Huge decorative quote mark */}
                      <div className="position-absolute top-0 end-0 mt-3 me-4" style={{ fontSize: '8rem', color: 'rgba(37, 99, 235, 0.05)', lineHeight: 0.8, fontFamily: 'serif', zIndex: 0 }}>"</div>
                      
                      <div className="d-flex align-items-center mb-4 position-relative z-1">
                        <img src={story.image || slide1} alt={story.name} className="rounded-circle me-3 shadow-sm" style={{width: '64px', height: '64px', objectFit: 'cover', border: '3px solid white'}} />
                        <div>
                          <h4 className="mb-1 fs-5 fw-bold text-dark">{story.name}</h4>
                          <span className="badge bg-alt text-muted border px-2 py-1">{story.exam}</span>
                        </div>
                      </div>
                      
                      <div className="display-4 fw-black text-dark mb-2 position-relative z-1" style={{ letterSpacing: '-2px' }}>{story.score}</div>
                      <span className="premium-testimonial-highlight small d-block mb-4 fw-bold text-uppercase tracking-wide position-relative z-1">Score Achieved</span>
                      
                      <p className="text-muted fst-italic mb-0 position-relative z-1 fs-6" style={{ lineHeight: '1.8' }}>"{story.message}"</p>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="cta-section py-5 position-relative overflow-hidden premium-cta-gradient">
        <div className="orb orb-secondary opacity-25"></div>
        <div className="orb orb-accent opacity-25" style={{ right: 0, top: 0 }}></div>
        
        <motion.div 
          className="container py-5 my-5 position-relative z-1 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="headline-huge text-white mb-4">Start Your <span className="text-gradient-accent">Journey</span> Today</h2>
          <p className="mb-5 fs-4 text-white-50 mx-auto fw-light" style={{ maxWidth: '700px' }}>
            Limited seats available for the upcoming academic year.
            Don't miss the chance to learn from the best.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Link to="/contact" className="premium-btn-magnetic fw-bold px-5 py-3 fs-5 mt-4">
              Enquire Now <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
      <FooterCopyrightBar />
    </motion.div>
  );
}
