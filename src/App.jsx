import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS for menu & carousel

import Navbar from './pages/Navbar';
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

// ⭐ ADDED: ScrollToTop import (fixes footer quick links not scrolling up)
import ScrollToTop from './components/ScrollToTop';   // <-- FIX ADDED HERE

function Management() {
  return (
    <div className="container mt-5">
      <h2>Our Management</h2>
      <p>Information about management team.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* ⭐ ADDED: Auto-scroll to top on page change */}
      <ScrollToTop />   {/* <-- FIX ADDED HERE */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/management" element={<Management />} />
        <Route path="/vision" element={<VisionMission />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/faculty" element={<Faculty />} />

        {/* Courses routes */}
        <Route path="/jee" element={<JeeCourses />} />
        <Route path="/neet" element={<NeetCourses />} />
        <Route path="/eamcet" element={<EamcetCourses />} />
        <Route path="/board-exams" element={<BoardExams />} />
        <Route path="/neet-longterm" element={<NeetLongTerm />} />

        <Route path="/contact" element={<Contact />} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="container mt-5">
              <h2>404 Not Found</h2>
            </div>
          }
        />
      </Routes>

      <Analytics /> 
    </Router>
  );
}
