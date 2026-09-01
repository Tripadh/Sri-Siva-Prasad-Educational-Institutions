import React from 'react';
import './Marquee.css';

const Marquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span className="marquee-item">
                    <span className="marquee-icon">🎓</span>
                    Admissions Open for 2026-27! Enroll now and secure your seat at Sri Siva Prasad Institute of Sciences.
                    Applications closing soon — don’t miss your chance to join a legacy of excellence!
                </span>
            </div>
        </div>
    );
};

export default Marquee;
