import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Contact from './pages/contact'; // <-- Import the Contact component

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

        <Route path="/contact" element={<Contact />} /> {/* <-- Contact route updated */}

        {/* 404 fallback for unmatched routes */}
        <Route path="*" element={<div className="container mt-5"><h2>404 Not Found</h2></div>} />
      </Routes>
    </Router>
  );
}