import React from 'react';

// Data Proyek dalam bentuk Array of Objects
const projectData = [
  { imgSrc: "Danantara.png", title: "Redesign Website Danantara", desc: "Internship project focusing on redesigning Danantara’s investment management website into a modern and professional platform." },
  { imgSrc: "Crypto.png", title: "Crypto Web Sections", desc: "Exploration project creating two web sections with a futuristic crypto theme emphasizing innovation and trust." },
  { imgSrc: "BankDigital.png", title: "Mobile Design – Digital Bank", desc: "Mobile design concept for a digital banking app focusing on simplicity, trust, and user-friendliness." },
  { imgSrc: "Kurio.png", title: "Redesign Packaging – Kurio", desc: "Product packaging redesign for Kurio with a minimalist and modern approach to strengthen brand identity." },
  { imgSrc: "Learnify.png", title: "PBO App – UI/UX Design", desc: "Designed UI/UX for an object-oriented programming course app with a focus on usability and clean layout." },
  { imgSrc: "SRE.png", title: "IMK Project – SDG: Affordable and Clean Energy", desc: "Designed an accessible website supporting SDG 7 using UI/UX evaluation techniques." },
  { imgSrc: "Tickie.png", title: "Virtual Machine CRUD App", desc: "Designed the interface and front-end navbar for a CRUD-based VM system in a digital security project." },
  { imgSrc: "pusdis.jpg", title: "Inclusive JKN Mobile App", desc: "Research assistant project developing an inclusive JKN mobile app for people with disabilities." },
];

// Component Project Card yang bisa digunakan berulang
const ProjectCard = ({ imgSrc, title, desc, delay }) => (
    <div className="project-card" data-aos="zoom-in-up" data-aos-delay={delay}>
        {/* Catatan: Pastikan semua gambar diletakkan di folder public/ */}
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

const Projects = () => {
  return (
    <section className="projects-section" id="Myprojects">
      <h2 data-aos="fade-down">🚀My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            desc={project.desc}
            // Memberikan delay berurutan pada AOS
            delay={index * 150} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;