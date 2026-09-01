import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS for menu & carousel

import Navbar from './pages/Navbar';
import Marquee from './components/Marquee'; // Import Marquee
import Home from './pages/Home';
import About from './pages/About';
import Founder from './pages/founder';
import VisionMission from './pages/vision';
import JeeCourses from './pages/jee';
import NeetCourses from './pages/neet';
import EamcetCourses from './pages/eamcet';
import BoardExams from './pages/boardExams';
import NeetLongTerm from './pages/neetlong';
import Faculty from './pages/faculty';
import Contact from './pages/contact';

import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Chatbot from './components/Chatbot';

function Management() {
  return (
    <PageTransition>
      <div className="container mt-5">
        <h2>Our Management</h2>
        <p>Information about management team.</p>
      </div>
    </PageTransition>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/founder" element={<PageTransition><Founder /></PageTransition>} />
        <Route path="/management" element={<Management />} />
        <Route path="/vision" element={<PageTransition><VisionMission /></PageTransition>} />
        <Route path="/vision-mission" element={<PageTransition><VisionMission /></PageTransition>} />
        <Route path="/faculty" element={<PageTransition><Faculty /></PageTransition>} />

        {/* Courses routes */}
        <Route path="/jee" element={<PageTransition><JeeCourses /></PageTransition>} />
        <Route path="/neet" element={<PageTransition><NeetCourses /></PageTransition>} />
        <Route path="/eamcet" element={<PageTransition><EamcetCourses /></PageTransition>} />
        <Route path="/board-exams" element={<PageTransition><BoardExams /></PageTransition>} />
        <Route path="/neet-longterm" element={<PageTransition><NeetLongTerm /></PageTransition>} />

        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <PageTransition>
              <div className="container mt-5">
                <h2>404 Not Found</h2>
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'var(--accent-gradient)',
        transformOrigin: '0%',
        zIndex: 9999
      }}
    />
  );
}

export default function App() {
  return (
    <Router>
      <ScrollProgressBar />
      <Navbar />
      <Marquee />

      <ScrollToTop />

      <AnimatedRoutes />

      <Analytics />
      <Chatbot />
    </Router>
  );
}
