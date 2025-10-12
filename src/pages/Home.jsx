import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './Home.css';
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.1.jpg';
import slide3 from '../assets/slide-3.png';
import slide4 from '../assets/slide-4.jpg';
import slide5 from '../assets/slide-5.png';
import slide6 from '../assets/slide-6.png';
import building from '../assets/building.png';
import foter from '../assets/foter.png';
// Success stories images
import photo1 from '../assets/shreyas.png';
import photo2 from '../assets/videep.png';
import photo3 from '../assets/harshit.png';
import photo4 from '../assets/sammera.png';
import photo5 from '../assets/sarath.png';
import photo6 from '../assets/pardhu.png';
import photo7 from '../assets/manoj.png';
import photo8 from '../assets/mok.png';
const stories = [
  {
    image: photo1,
    score: '651/720',
    exam: 'NEET ',
    name: 'Shreyas Medasani',
    message: "I studied at Sri Siva Prasad Institute and honestly, the teaching here made all the difference. The constant tests, clear concepts, and doubt sessions really pushed me forward, and I ended up scoring 651 in NEET. If you’re serious about cracking NEET, this place gives you the right push and confidence!”"
  },
  {
    image: photo2,
    score: '645/720',
    exam: 'Neet ',
    name: 'V.Videep Sri NagaSai',
    message: "When I first joined Sri Siva Prasad Institute, I was just an ordinary student filled with doubts and fear. The teachers treated me like family, encouraged me every single day, and stood by me through my struggles. Because of their support and guidance, I scored 651 in NEET, something I once thought was impossible."
  },
  {
    image: photo3,
    score: '615/720',
    exam: 'Neet ',
    name: 'P.Sai Sree Harshit',
    message: "Sri Siva Prasad Institute gave me the structure, focus and confidence I needed to excel . Scoring 615 was not just about hard work, it was about smart strategy. With constant guidance, regular mocks and targeted revisions, I always knew what to improve and how to get there."
  },
  {
    image: photo5,
    score: '99.63/100',
    exam: 'JEE Mains ',
    name: 'Y. Sarath Chaityana ',
    message: "I scored 99.63 in JEE Mains Chemistry. It’s a proud and unforgettable moment for me and my family. The disciplined environment, approachable teachers, and constant support at Sri Siva Prasad Institute truly made all the difference in my preparation."
  },
  {
    image: '',
    score: '94.39/100',
    exam: 'JEE Mains ',
    name: 'N.Yeshwitha',
    message: "Joining Sri Siva Prasad Institute was the best decision I made for my JEE preparation. The teachers here are not just knowledgeable but genuinely care about your success. Their personalized attention, regular tests, and doubt-clearing sessions helped me stay on track and focused. Scoring 94.39 in JEE Mains is a testament to their dedication and my hard work."
  },
  {
    image: photo6,
    score: '90.77/100',
    exam: 'JEE Mains ',
    name: 'N.N.Pardhu',
    message: "Scoring 90.77 in JEE Mains was a dream come true for me, and I owe it all to Sri Siva Prasad Institute. The structured study plans, regular mock tests, and personalized feedback helped me identify my strengths and weaknesses. The teachers were always available to clarify doubts and provide guidance, making my preparation smooth and effective."
  },
  {
    image: photo4,
    score: '606/720',
    exam: 'NEET ',
    name: 'Syed Sammera',
    message: "I still remember the day I got my NEET results - scoring 606 felt surreal! The journey at Sri Siva Prasad Institute was filled with challenges, but the unwavering support from teachers and the structured approach to learning made all the difference. Their focus on concept clarity and regular assessments kept me on track, and I couldn’t be more grateful for their guidance."
  },
  {
    image: photo7,
    score: '542/720',
    exam: 'NEET ',
    name: 'Kolli Moanoj',
    message: "Scoring 542 in NEET was a significant achievement for me, and I attribute it to the exceptional guidance I received at Sri Siva Prasad Institute. The teachers here are not just educators but mentors who genuinely care about your success. Their personalized attention, regular tests, and doubt-clearing sessions helped me stay focused and motivated throughout my preparation."
  },
  {
    image: photo8,
    score: '591/720',
    exam: 'NEET ',
    name: 'T.Mokshagana',
    message: "Joining Sri Siva Prasad Institute was a turning point in my NEET preparation. The supportive environment, approachable teachers, and structured study plans made all the difference. Their focus on concept clarity and regular assessments helped me stay on track, and I’m proud to say I scored 591 in NEET."
  },
];

const SuccessStoryCard = ({ image, score, exam, name, message }) => (
  <div className="ssc-card">
    <div className="ssc-card-img-wrap">
      {image && <img src={image} alt={name} className="ssc-card-img" />}
    </div>
    <div className="ssc-card-score">
      <span>{score}</span>
      <div className="ssc-card-exam">{exam}</div>
    </div>
    <div className="ssc-card-message">
      Hi, I am {name}. {message}
    </div>
  </div>
);

const CARDS_PER_SLIDE = 3;

const SuccessStories = () => {
  const [startIdx, setStartIdx] = useState(0);

  const storiesCount = stories.length;
  const canSlide = storiesCount > CARDS_PER_SLIDE;

  useEffect(() => {
    if (!canSlide) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [startIdx, storiesCount]);

  const handlePrev = () => {
    setStartIdx(prev => (prev - 1 + storiesCount) % storiesCount);
  };
  const handleNext = () => {
    setStartIdx(prev => (prev + 1) % storiesCount);
  };

  const visibleStories = [];
  for (let i = 0; i < CARDS_PER_SLIDE; i++) {
    visibleStories.push(stories[(startIdx + i) % storiesCount]);
  }

  const totalDots = storiesCount;

  return (
    <section className="ssc-section">
      <h2 className="ssc-title">--------  OUR SUCCESS STORIES  --------</h2>
      <div className="ssc-carousel-row">
        <button className="ssc-arrow ssc-arrow-left" onClick={handlePrev} disabled={!canSlide}>&lt;</button>
        <div className="ssc-cards-row">
          {visibleStories.map((story, idx) => (
            <SuccessStoryCard key={idx} {...story} />
          ))}
        </div>
        <button className="ssc-arrow ssc-arrow-right" onClick={handleNext} disabled={!canSlide}>&gt;</button>
      </div>
      <div className="ssc-dots">
        {[...Array(totalDots)].map((_, idx) => (
          <span
            key={idx}
            className={`ssc-dot ${startIdx === idx ? "ssc-dot-active" : ""}`}
            onClick={() => setStartIdx(idx)}
          />
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-col footer-branding">
        <img src={foter} alt="Sri Siva Prasad Logo" className="footer-logo" />
        <p className="footer-desc">
          Sri Siva Prasad Educational Institute, a premier institution nurturing excellence, has been inspiring academic success across Vijayawada and neighboring regions since 2016.
        </p>
        <p className="footer-tagline">Determination | Progress | Service</p>
        <p className="footer-policy">
          Privacy Policy | Terms & Conditions
        </p>
        <p className="footer-policy">
          Cancellation Policy | Refund Policy
        </p>
      </div>
      <div className="footer-col footer-links">
        <h3 className="footer-heading">Quick Links</h3>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/founder">Founder</Link></li>
          <li><Link to="/vision">Vision & Mission</Link></li>
          <li><Link to="/neet-longterm">Neet Long-term</Link></li>
          <li><Link to="/jee">JEE (Mains & Advanced)</Link></li>
          <li><Link to="/neet">Neet</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-col footer-contact">
        <h3 className="footer-heading">Contact Us</h3>
        <p className="footer-contact-header">Corporate Headquarters</p>
        <p>
          2<sup>nd</sup> Floor, Hotel Fortune Muralipark Road, <br />
          Opp. SUBWAY<br />
          Sidhartha Nagar Mogalrajpuram,<br />
          Vijayawada - 520010, NTR District, A.P.
        </p>
        <p>
          Email : <span className="footer-email">sprasadch12@gmail.com</span><br />
          Phone : <span className="footer-phone">86881 24113</span>
        </p>
      </div>
    </div>
  </footer>
);

const FooterCopyrightBar = () => (
  <div className="footer-copyright-bar">
    © Copyright 2025 – Sri Siva Prasad Group All rights Reserved
  </div>
);

export default function Home() {
  return (
    <>
      <div className="fullscreen-carousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="First Slide" />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="Third Slide" />
            </div>
            <div className="carousel-item">
              <img src={slide4} className="d-block w-100" alt="Fourth Slide" />
            </div>
            <div className="carousel-item">
              <img src={slide5} className="d-block w-100" alt="Fifth Slide" />
            </div>
            <div className="carousel-item">
              <img src={slide6} className="d-block w-100" alt="Sixth Slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <strong>Admissions Open for 2025–26! Enroll now and secure your seat at Sri Siva Prasad Educational Institution. Applications close on Soon— don’t miss your chance to join a legacy of excellence!</strong>
        </marquee>
      </div>

      <div className="home-banner-message">
        <h2 className="home-banner-title">
          Guiding Young Minds to Discover Their Path as Future Doctors and Engineers
        </h2>
        <p className="home-banner-desc">
          At <strong>Sri Siva Prasad</strong>, We don’t just teach—we inspire. Here, every student is guided with passion and purpose to reach their highest calling
          <strong> —whether it’s wearing the proud white coat of a doctor or designing the groundbreaking innovations of an engineer.</strong> With care that never wavers and dedication that never rests, 
          we turn ambition into achievement. <strong>Your journey is our mission, and your success is our pride.</strong>
        </p>
      </div>

      <div className="home-about-section">
        <div className="home-about-left">
          <img src={building} alt="Sri Siva Prasad Building" />
        </div>
        <div className="home-about-right">
          <h2>Sri Siva Prasad Educational Group</h2>
          <p>
            For more than one decades, 
            Sri Siva Prasad College has stood as a benchmark of academic excellence, 
            especially in preparing students for competitive exams like NEET and JEE. 
            Recognized as one of the region’s most respected institutions and highly praised by students for its supportive learning environment, 
            concept-oriented teaching, and approachable faculty, the college has consistently guided aspirants toward top medical and engineering colleges. 
            Every year, hundreds of students choose Sri Siva Prasad for its specialized intermediate programs that focus on building strong conceptual foundations in Physics, Chemistry, Biology, and Mathematics, while offering personal mentoring, regular doubt-clearing sessions, and frequent mock tests with detailed feedback. 
            With strategic study plans, consistent performance tracking, and dedicated faculty who mentor and motivate beyond the classroom, the college ensures that students are not only well-prepared academically but also confident and focused in their journey.
            At Sri Siva Prasad Institution, we believe success is not just about hard work, 
            but smart effort with the right guidance — and our mission is to transform every student’s aspiration of becoming a doctor or engineer into a reality by helping them secure admission in the nation’s top institutions.
          </p>
        </div>
      </div>

      <SuccessStories />
      <Footer />
      <FooterCopyrightBar />
    </>
  );
}