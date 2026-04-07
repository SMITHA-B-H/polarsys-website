// import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../styles/Gallery.css';

// const projects = [
//   { id: 1, category: 'Software', title: 'Enterprise CRM', img: 's1.jpg' },
//   { id: 2, category: 'CCTV', title: 'Industrial Surveillance', img: 's2.jpg' },
//   { id: 3, category: 'Automation', title: 'Smart Luxury Villa', img: 's3.jpg' },
//   { id: 4, category: 'Software', title: 'E-commerce Platform', img: 's4.jpg' },
//   { id: 5, category: 'CCTV', title: 'City-wide Monitoring', img: 's5.jpg' },
//   { id: 6, category: 'Automation', title: 'Office Automation', img: 'image_fa4638.jpg' },
// ];

// const GalleryPage = () => {
//   const [filter, setFilter] = useState('All');

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const filteredProjects = filter === 'All' 
//     ? projects 
//     : projects.filter(p => p.category === filter);

//   return (
//     <div className="gallery-page">
//       {/* HEADER SECTION */}
//       <section className="gallery-hero">
//         <div className="container">
//           <span className="premium-tag" data-aos="fade-up">Our Portfolio</span>
//           <h1 data-aos="fade-up" data-aos-delay="100">Showcasing <span className="text-gradient">Excellence</span></h1>
//           <p data-aos="fade-up" data-aos-delay="200">A collection of our most sophisticated digital and hardware integrations.</p>
//         </div>
//       </section>

//       {/* FILTER CONTROLS */}
//       <section className="filter-wrapper">
//         <div className="container">
//           <div className="filter-buttons">
//             {['All', 'Software', 'CCTV', 'Automation'].map((cat) => (
//               <button 
//                 key={cat} 
//                 className={`filter-btn ${filter === cat ? 'active' : ''}`}
//                 onClick={() => setFilter(cat)}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MASONRY GRID */}
//       <section className="portfolio-grid-section">
//         <div className="container">
//           <div className="masonry-grid">
//             {filteredProjects.map((project) => (
//               <div 
//                 key={project.id} 
//                 className="portfolio-item" 
//                 data-aos="zoom-in"
//               >
//                 <div className="project-card">
//                   <div className="img-container">
//                     {/* Replace src with your actual image path */}
//                     <img src={`/assets/images/${project.img}`} alt={project.title} />
//                     <div className="card-overlay">
//                       <span className="project-cat">{project.category}</span>
//                       <h3 className="project-title">{project.title}</h3>
//                       <button className="view-details-btn">View Project <i className="bi bi-arrow-up-right"></i></button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GalleryPage;

import React, { useState, useEffect } from "react";

import g1 from "../assets/image/g1.jpg";
import g2 from "../assets/image/g2.jpg";
import g3 from "../assets/image/g3.jpg";

/* DATA WITH CATEGORY + LABEL */
const galleryData = [
  { type: "image", src: g1, category: "software", label: "Solis" },
  { type: "image", src: g2, category: "software", label: "PolarFace" },
  { type: "image", src: g3, category: "hardware", label: "Installation Work" },
  { type: "image", src: g1, category: "projects", label: "Solis" },
  { type: "image", src: g2, category: "projects", label: "PolarFace" },

  /* VIDEO */
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "projects",
    label: "Demo Video"
  }
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sliderIndex, setSliderIndex] = useState(0);

  /* FILTER LOGIC */
  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter(item => item.category === filter);

  /* AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex(prev => (prev + 1) % galleryData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 gallery-section">
      <div className="container">

        <h2 className="section-title text-center mb-4">Our Gallery</h2>

        {/* FILTER TABS */}
        <div className="text-center mb-4">
          {["all", "projects", "hardware", "software"].map(cat => (
            <button
              key={cat}
              className={`btn mx-1 ${filter === cat ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* AUTO SLIDER */}
        <div className="slider-box mb-5">
          {galleryData[sliderIndex].type === "image" ? (
            <img src={galleryData[sliderIndex].src} alt="" />
          ) : (
            <iframe
              src={galleryData[sliderIndex].src}
              title="video"
              allowFullScreen
            ></iframe>
          )}
          <span className="slider-label">
            {galleryData[sliderIndex].label}
          </span>
        </div>

        {/* GRID */}
        <div className="row g-4">
          {filteredData.map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div
                className="gallery-card"
                onClick={() => item.type === "image" && setSelectedImg(item.src)}
              >
                {item.type === "image" ? (
                  <img src={item.src} alt="" className="img-fluid" />
                ) : (
                  <iframe
                    src={item.src}
                    title="video"
                    className="gallery-video"
                  ></iframe>
                )}

                {/* LABEL */}
                <span className="gallery-label">{item.label}</span>

                {/* OVERLAY */}
                <div className="overlay">
                  <i className="bi bi-eye-fill"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="preview" />
          </div>
        )}

      </div>
    </section>
  );
};

export default GalleryPage;