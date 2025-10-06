import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'; 

// Data Pengalaman (POSISI SUDAH DIPERIKSA DAN DIJAMIN KIRI-KANAN)
const experienceData = [
    { 
        title: "Creative Media - GDGoC UNHAS", 
        role: "Core Team", 
        date: "Aug 2025 - Present", 
        desc: "Contributed to shaping GDGoC’s visual identity and created engaging digital content.",
        position: "left" 
    },
    { 
        title: "Publications, Documentation, and Design Division - Coder Institute", 
        role: "Management Member", 
        date: "Jan 2025 - Present", 
        desc: "Managed social visuals and documentation; created promotional materials.",
        position: "right" // KANAN
    },
    { 
        title: "Inclusive JKN Mobile App", 
        role: "UI/UX Designer", 
        date: "Currently", 
        desc: "Currently assisting a lecturer in a research project focused on developing an inclusive JKN (National Health Insurance) mobile app for people with disabilities. Responsible for accessibility research, UI/UX design, and prototype development.",
        position: "left" 
    },
    { 
        title: "UI/UX Design Intern – Hesalab", 
        role: "Intern", 
        date: "Feb 2025 – May 2025", 
        desc: "Learned design thinking & prototyping; designed user-friendly interfaces with Figma.",
        position: "right" // KANAN
    },
    { 
        title: "Publications, Documentation, and Design Division – Recursion Competition", 
        role: "Committee Member", 
        date: "Dec 2024 – Apr 2025", 
        desc: "Designed event materials and visual assets consistent with competition branding.",
        position: "left" 
    },
];

// Komponen Item Timeline
const ExperienceItem = ({ item, index }) => (
    <div 
        className={`timeline-item ${item.position}`} 
        data-aos={item.position === "left" ? "fade-right" : "fade-left"} 
        data-aos-delay={index * 150}
    >
        <div className="timeline-content">
            <h3>{item.title}</h3>
            <p className="role"><strong>{item.role}</strong> | {item.date}</p>
            <p>{item.desc}</p>
        </div>
        
        {/* ELEMEN TITIK (DOT) dengan ICON KOPER */}
        <div 
            className="timeline-dot" 
            data-aos="zoom-in" 
            data-aos-delay={index * 150 + 400} 
            data-aos-anchor-placement="top-center"
        >
            <FontAwesomeIcon icon={faBriefcase} />
        </div>
    </div>
);

const Experience = () => {
  const timelineRef = useRef(null);
  
  // LOGIC SCROLL UNTUK MENGISI GARIS (ATAS KE BAWAH)
  const handleScroll = () => {
    const timelineElement = timelineRef.current;
    if (timelineElement) {
        const rect = timelineElement.getBoundingClientRect();
        const totalHeight = timelineElement.offsetHeight;
        
        // Jarak timeline dari atas viewport
        const timelineTop = rect.top; 
        // Jarak yang sudah discroll dari atas timeline
        const distanceScrolled = -timelineTop; 
        
        let fillHeight = Math.max(0, distanceScrolled);
        fillHeight = Math.min(fillHeight, totalHeight);
        
        const fillPercentage = (fillHeight / totalHeight) * 100;

        // Menerapkan persentase tinggi ke variabel CSS
        timelineElement.style.setProperty('--timeline-fill-percentage', `${fillPercentage}%`);
    }
  };

  useEffect(() => {
    const initialRun = () => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    };

    // PENTING: Menjalankan dengan sedikit delay agar DOM ter-render sempurna 
    // sebelum menghitung tinggi total (memperbaiki animasi scroll)
    const timeoutId = setTimeout(initialRun, 100); 
    
    // Cleanup: Hapus listener
    return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="experience" id="experience">
      <h2 data-aos="fade-down">🏢 Work Experiences</h2>
      
      <div className="timeline" ref={timelineRef}>
        {experienceData.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} /> 
        ))}
      </div>
    </section>
  );
};

export default Experience;