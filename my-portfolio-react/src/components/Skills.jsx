import React from 'react';

// Data Skills (memudahkan jika ingin menambah/mengubah)
const skillItems = [
    { imgSrc: "figma.png", name: "Figma" },
    { imgSrc: "ibispaint.png", name: "Ibis Paint" },
    { imgSrc: "canva.png", name: "Canva" },
    { imgSrc: "ae.png", name: "After Effect" },
    { imgSrc: "alightmotion.png", name: "Alight Motion" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">🎯 Skills</h2>
      <div className="skills-slider" data-aos="fade-up" data-aos-delay="200">
        <div className="slide-track">
            {/* Loop 2x untuk ilusi looping di CSS */}
            {[...skillItems, ...skillItems].map((skill, index) => (
                <div key={index} className="skill-item">
                    {/* Catatan: Pastikan gambar diletakkan di folder public/ */}
                    <img src={skill.imgSrc} alt={skill.name} />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;