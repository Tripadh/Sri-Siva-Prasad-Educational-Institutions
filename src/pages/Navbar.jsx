import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/navbar-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom shadow-sm py-2 sticky-top" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Sri Siva Prasad Institute of Sciences Logo"
            height="90"
            className="me-3"
            style={{ borderRadius: "10px", boxShadow: "0 2px 12px rgba(34, 112, 181, 0.10)" }}
          />
        </Link>

        {/* Desktop WhatsApp + Call */}
        <div className="d-none d-lg-flex flex-column align-items-end ms-auto gap-2 order-lg-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918688124113"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-3 align-items-center shadow-sm"
            style={{ fontWeight: 500, width: '160px', justifyContent: "start" }}
          >
            <i className="bi bi-whatsapp" style={{ fontSize: "1.3rem", marginRight: "7px" }}></i>
            WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+91918688124113"
            className="btn btn-primary px-3 align-items-center shadow-sm"
            style={{ fontWeight: 500, width: '160px', justifyContent: "start" }}
          >
            <i className="bi bi-telephone-fill" style={{ fontSize: "1.2rem", marginRight: "7px" }}></i>
            Call: 8688124113
          </motion.a>
        </div>

        {/* ⭐ MOBILE "VIEW MORE ▾" BUTTON */}
        <div className="d-flex d-lg-none align-items-center ms-auto order-lg-2">
          <button
            className="mobile-menu-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu-text">VIEW MORE</span>
            <span className="menu-arrow">▾</span>
          </button>
        </div>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">

            {/* Experience Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link fw-semibold"
                id="experienceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none' }}
              >
                Experience SSPIS
              </button>
              <ul className="dropdown-menu shadow border-0" aria-labelledby="experienceDropdown">
                <li><Link to="/about" className="dropdown-item">About Us</Link></li>
                <li><Link to="/founder" className="dropdown-item">Founder</Link></li>
                <li><Link to="/vision-mission" className="dropdown-item">Vision and Mission</Link></li>
              </ul>
            </li>

            {/* Courses Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link fw-semibold"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none' }}
              >
                Our Courses
              </button>
              <ul className="dropdown-menu shadow border-0" aria-labelledby="coursesDropdown">
                <li><Link to="/jee" className="dropdown-item">JEE (Main & Advanced)</Link></li>
                <li><Link to="/neet" className="dropdown-item">Neet</Link></li>
                <li><Link to="/eamcet" className="dropdown-item">Eamcet</Link></li>
                <li><Link to="/board-exams" className="dropdown-item">Board Exams</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/neet-longterm" className="nav-link fw-semibold">Neet Long-Term</Link>
            </li>

            <li className="nav-item">
              <Link to="/faculty" className="nav-link fw-semibold">Faculty</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link fw-semibold">Contact Us</Link>
            </li>

            {/* Mobile WhatsApp + Call */}
            <li className="nav-item d-lg-none mt-2">
              <a
                href="https://wa.me/918688124113"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success w-100 mb-2 shadow-sm"
                style={{ fontWeight: 500 }}
              >
                <i className="bi bi-whatsapp" style={{ fontSize: "1.2rem", marginRight: "7px" }}></i>
                WhatsApp
              </a>
              <a
                href="tel:+91918688124113"
                className="btn btn-primary w-100 shadow-sm"
                style={{ fontWeight: 500 }}
              >
                <i className="bi bi-telephone-fill" style={{ fontSize: "1.1rem", marginRight: "7px" }}></i>
                Call: 8688124113
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
