import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pastikan index.css sudah berisi semua styling Anda
import './index.css'; 

function App() {
  useEffect(() => {
    // 1. Inisialisasi AOS (Animasi Scroll)
    AOS.init({
      duration: 1000, 
      once: true, // Animasi hanya terjadi sekali saat elemen masuk viewport
    });

    // 2. Logic Active Link Navbar (Adaptasi dari JS lama Anda)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let currentId = "hero-section"; // Default ke Home jika di paling atas

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset sedikit ke atas
        if (window.scrollY >= sectionTop) {
          currentId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentId)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function: Hapus listener saat komponen dilepas
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // [] memastikan efek hanya berjalan sekali setelah mount

  return (
    <>
      <Navbar />
      <main> 
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;