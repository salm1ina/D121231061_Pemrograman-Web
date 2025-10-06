import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLinkedinIn, 
    faInstagram, 
    faGithub, 
    faDribbble 
} from '@fortawesome/free-brands-svg-icons'; 

const roles = ["UI/UX Designer", "Graphic Designer"];

// Komponen untuk Efek Mengetik
const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }
    
    return () => clearTimeout(timeout); 
  }, [roleIndex, charIndex, isDeleting]);

  return (
    <h2 className="role">
      <span className="typing">{displayedText}</span><span className="cursor">|</span>
    </h2>
  );
};


// Komponen Hero Utama
const Hero = () => {
  return (
    <section className="hero" id="hero-section">
      <div 
        className="profile-pic" 
        data-aos="fade-zoom-in" 
        data-aos-easing="ease-in-sine" 
        data-aos-duration="600"
      >
        <img src="fotoprofill.jpg" alt="Ila Profile" /> 
      </div>

      <h1 className="name" data-aos="fade-up" data-aos-delay="200">
        Nabila Salsabila Akbar S.
      </h1>

      <TypingEffect /> 

      <p className="desc" data-aos="fade-up" data-aos-delay="400">
        Biasa dipanggil <b>iLa</b>
      </p>

      {/* Buttons */}
      <div className="buttons" data-aos="fade-up" data-aos-delay="600">
        <a href="mailto:nabilaakbars1@gmail.com" className="btn primary">Contact me here →</a>
        <a href="cv.pdf" className="btn secondary" download>Download CV ⬇</a> 
      </div>

      {/* Social Media Links dengan Font Awesome React Component */}
      <div className="social-links" data-aos="fade-up" data-aos-delay="800">
        <a href="https://linkedin.com/nblsaalsa" target="_blank" className="icon linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        
        <a href="https://instagram.com/nblsaalsa" target="_blank" className="icon instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        
        <a href="https://github.com/salm1ina" target="_blank" className="icon github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        
        <a href="https://dribbble.com/nbilasaalsa" target="_blank" className="icon dribbble">
          <FontAwesomeIcon icon={faDribbble} />
        </a>
      </div>
    </section>
  );
};

export default Hero;