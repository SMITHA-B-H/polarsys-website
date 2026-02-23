import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Gallery.css';

const projects = [
  { id: 1, category: 'Software', title: 'Enterprise CRM', img: 'image_6e5eba.jpg' },
  { id: 2, category: 'CCTV', title: 'Industrial Surveillance', img: 'image_6ed701.jpg' },
  { id: 3, category: 'Automation', title: 'Smart Luxury Villa', img: 'image_f7fc62.jpg' },
  { id: 4, category: 'Software', title: 'E-commerce Platform', img: 'image_f81662.jpg' },
  { id: 5, category: 'CCTV', title: 'City-wide Monitoring', img: 'image_fa45bb.jpg' },
  { id: 6, category: 'Automation', title: 'Office Automation', img: 'image_fa4638.jpg' },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="gallery-page">
      {/* HEADER SECTION */}
      <section className="gallery-hero">
        <div className="container">
          <span className="premium-tag" data-aos="fade-up">Our Portfolio</span>
          <h1 data-aos="fade-up" data-aos-delay="100">Showcasing <span className="text-gradient">Excellence</span></h1>
          <p data-aos="fade-up" data-aos-delay="200">A collection of our most sophisticated digital and hardware integrations.</p>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="filter-wrapper">
        <div className="container">
          <div className="filter-buttons">
            {['All', 'Software', 'CCTV', 'Automation'].map((cat) => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="masonry-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="portfolio-item" 
                data-aos="zoom-in"
              >
                <div className="project-card">
                  <div className="img-container">
                    {/* Replace src with your actual image path */}
                    <img src={`/assets/images/${project.img}`} alt={project.title} />
                    <div className="card-overlay">
                      <span className="project-cat">{project.category}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <button className="view-details-btn">View Project <i className="bi bi-arrow-up-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;