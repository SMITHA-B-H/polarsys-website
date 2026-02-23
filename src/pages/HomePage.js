// import React from 'react';

// function HomePage() {
//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h2>Home Page</h2>
//       <p>Welcome to the home page of our React app!</p>
//       <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
//         Get Started
//       </button>
//     </div>
//   );
// }

// export default HomePage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import images
// import serviceAppDev from '../assets/image/service-app-dev.jpg';
// import networking from '../assets/image/networking.jpg';
// import digital from '../assets/image/digital.jpg';
import serviceTest1 from '../assets/image/c8.jpg';
import uiux1 from '../assets/image/c7.jpg';
import support1 from '../assets/image/c9.jpg';

import serviceAppDev from '../assets/image/c1.jpg';
import networking from '../assets/image/c2.jpg';
import digital from '../assets/image/c3.jpg';
import serviceTest from '../assets/image/c4.jpg';
import uiux from '../assets/image/c5.jpg';
import support from '../assets/image/c6.jpg';


// import appleLogo from "../assets/icons/apple.png";
// import hpLogo from "../assets/icons/hp.png";
// import lenovoLogo from "../assets/icons/lenovo.png";
// import dellLogo from "../assets/icons/delllog.png";

import appleLogo from "../assets/icons/buy11.png";
import hpLogo from "../assets/icons/buy2.png";
import lenovoLogo from "../assets/icons/buy3.png";
import dellLogo from "../assets/icons/buy4.png";

// const brands = [
//   { name: "Apple", logo: appleLogo, link: "/brands/apple" },
//   { name: "HP", logo: hpLogo, link: "/brands/hp" },
//   { name: "Lenovo", logo: lenovoLogo, link: "/brands/lenovo" },
//   { name: "Dell", logo: dellLogo, link: "/brands/dell" }
// ];
const brands = [
  { name: "Apple", logo: appleLogo, path: "/products/apple" },
  { name: "HP", logo: hpLogo, path: "/products/hp" },
  { name: "Lenovo", logo: lenovoLogo, path: "/products/lenovo" },
  { name: "Dell", logo: dellLogo, path: "/products/dell" }
];
const services = [
  { title: "Software Development", path: "application-development", img: "c1.jpg" },
  { title: "Networking", path: "networking", img: "c2.jpg" },
  { title: "Fire Safety", path: "fire-system", img: "c10.jpg" },
  { title: "Fire Hydrant", path: "fire-hydrant", img: "c11.jpg" },
  { title: "Access Control", path: "access-control", img: "c5.jpg" },
  { title: "Automation", path: "automation", img: "c7.jpg" },
  { title: "CCTV", path: "cctv", img: "c9.jpg" },
  { title: "Intercom", path: "intercom", img: "c8.jpg" },
  { title: "Public Address", path: "pa-system", img: "c13.jpg" },
  { title: "Digital Marketing", path: "digital-marketing", img: "c3.jpg" },
  { title: "IT Consulting", path: "it-consulting", img: "c6.jpg" },
  { title: "Smart Class Setup", path: "smart-class", img: "c12.jpg" }
];
const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Delivering Reliable IT Solutions for a Digital World</h1>
        <p>
          Polarsys Global IT Solutions Private Limited is a technology-focused company
          delivering practical, scalable, and efficient IT solutions to modern businesses.
        </p>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>

      {/* SERVICES SECTION */}

      <section className="services py-5">
         <div className="container"> 
          <div className="row mb-5">
             <div className="col text-center">
               <h6 className="text-primary fw-bold" data-aos="fade-up">OUR SERVICES</h6> 
               <h2 className="fw-bold" data-aos="fade-up" data-aos-delay="100"> Innovative IT Solutions <br /> Tailored for Your Industry </h2> 
               <p className="text-muted mt-3" data-aos="fade-up" data-aos-delay="200"> We deliver scalable, secure, and future-ready technology solutions to help businesses thrive in the digital era. </p> 
               </div> 
               </div>
        
              {/* <div
                id="servicesCarousel"
                className="carousel slide services-slider mt-5"
                data-bs-ride="carousel"
                data-bs-interval="2500"
                data-bs-pause="false"
              > */}

          {/* <div className="carousel-inner"> */}

            {/* SLIDE 1 */}
            {/* <div className="carousel-item active">
              <div className="row g-4">

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={serviceAppDev} alt="Application Development" />
                    <h5>Application Development</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={networking} alt="Networking" />
                    <h5>Networking</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={digital} alt="Digital Marketing" />
                    <h5>Digital Marketing</h5>
                  </div>
                </div>

              </div>
            </div> */}


            {/* SLIDE 2 */}
            {/* <div className="carousel-item">
              <div className="row g-4">

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={serviceTest} alt="Software Testing" />
                    <h5>Software Testing</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={uiux} alt="UI UX Design" />
                    <h5>UI / UX Design</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={support} alt="IT Support" />
                    <h5>IT Support & Maintenance</h5>
                  </div>
                </div>

              </div>
            </div> */}

            {/* SLIDE 3 */}
            {/* <div className="carousel-item">
              <div className="row g-4">

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={serviceTest1} alt="Software " />
                    <h5>Intercom System</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={uiux1} alt="UI  Design" />
                    <h5>Home Automation</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service-card">
                    <img src={support1} alt="IT Support" />
                    <h5>CCTV & Surveillance</h5>
                  </div>
                </div>

              </div>
            </div> */}

          {/* </div> */}


              {/* Navigation */}
              {/* <button
                className="carousel-control-prev custom-nav"
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide="prev"
              >
                <span className="nav-icon">&#8592;</span>
              </button>

              <button
                className="carousel-control-next custom-nav"
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide="next"
              >
                <span className="nav-icon">&#8594;</span>
              </button> */}

          {/* </div> */}
        </div>
      </section>

      {/* core services */}
<section className="core-services py-5">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="section-title fw-bold">Our Core Services</h2>
      <div className="title-line mx-auto"></div>
    </div>

    <div className="services-grid">
     {services.map((service, index) => (
        <Link to={`/services/${service.path}`} className="service-card" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
          <div className="service-img-wrapper">
            {/* // Replace the old <img> line in your map function with this: */}
             <img 
          src={require(`../assets/image/${service.img}`)} 
          alt={service.title} 
          className="service-img" 
        />
            <div className="img-overlay"></div>
          </div>
          <div className="service-content">
            <h4>{service.title}</h4>
            <span className="view-more">Explore <i className="fa-solid fa-arrow-right"></i></span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* shop-brand */}
<section className="shop-brand">
      <div className="container">

        <div className="brand-heading">
          <h2>Buy Refurbished Laptops By Brand</h2>
        </div>

        <div className="brand-grid">
          {brands.map((brand, index) => (
            <Link to={brand.path} key={index} className="brand-card">
              <img src={brand.logo} alt={brand.name} />
              {/* <span>{brand.name}</span> */}
            </Link>
          ))}
        </div>

      </div>
    </section>
  

{/* corporate-profile */}
<section className="corporate-profile">
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="cp-title">Corporate Profile</h2>
          <p className="cp-subtitle">POLARSYS GLOBAL AT A GLANCE</p>
          <div className="cp-underline"></div>
        </div>

        {/* Cards */}
        <div className="row gx-4 justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
            <div className="cp-card">
              <div className="cp-icon">
                <i className="fa-solid fa-rotate"></i>
              </div>
              <h6 className="cp-label">FOUNDED</h6>
              <h3 className="cp-value">2025</h3>
              <p className="cp-desc">Building on 1+ years expertise</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
            <div className="cp-card">
              <div className="cp-icon">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <h6 className="cp-label">ENTITY</h6>
              <h3 className="cp-value">Pvt. Ltd.</h3>
              <p className="cp-desc">Regd. under MCA, India</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
            <div className="cp-card cp-highlight">
              <div className="cp-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h6 className="cp-label">WORKFORCE</h6>
              <h3 className="cp-value">12+</h3>
              <p className="cp-desc">Certified Engineers & Devs</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
            <div className="cp-card">
              <div className="cp-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h6 className="cp-label">HEADQUARTERS</h6>
              <h3 className="cp-value">Karnataka</h3>
              <p className="cp-desc">Strategic Hub, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* clients partners */}
  <section className="clients-partners py-5 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="text-primary fw-bold text-uppercase small tracking-widest">
            Our Ecosystem
          </span>
          <h2 className="fw-bold mt-2">Trusted by Industry Leaders</h2>
          <div className="mx-auto bg-primary mt-2 section-underline"></div>
        </div>

        {/* Industries */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h6 className="text-muted mb-4 fw-semibold text-uppercase small">
              Industries We Empower
            </h6>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <span className="industry-badge">
                <i className="fas fa-building me-2"></i>Real Estate
              </span>
              <span className="industry-badge">
                <i className="fas fa-graduation-cap me-2"></i>Education
              </span>
              <span className="industry-badge">
                <i className="fas fa-hospital me-2"></i>Healthcare
              </span>
              <span className="industry-badge">
                <i className="fas fa-briefcase me-2"></i>Corporate Offices
              </span>
              <span className="industry-badge">
                <i className="fas fa-home me-2"></i>Residential Estates
              </span>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="partners-wrapper">
          <h6 className="text-center text-muted mb-4 fw-semibold text-uppercase small">
            Strategic Technology Partners
          </h6>

          <div className="logo-track">
            <div className="logo-slide">
              <span className="partner-logo">HIKVISION</span>
              <span className="partner-logo">eSSL</span>
              <span className="partner-logo">D-LINK</span>
              <span className="partner-logo">COMMSCOPE</span>
              <span className="partner-logo">RAVEL</span>
              <span className="partner-logo">BOSCH</span>
            </div>

            {/* Duplicate for infinite scroll */}
            <div className="logo-slide">
              <span className="partner-logo">HIKVISION</span>
              <span className="partner-logo">eSSL</span>
              <span className="partner-logo">D-LINK</span>
              <span className="partner-logo">COMMSCOPE</span>
              <span className="partner-logo">RAVEL</span>
              <span className="partner-logo">BOSCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
      

      {/* STATS SECTION */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            <StatItem val="1+" label="Years Experience" delay="0" />
            <StatItem val="100+" label="Projects Delivered" delay="100" />
            <StatItem val="100+" label="Happy Clients" delay="200" />
            <StatItem val="24/7" label="Support" delay="300" />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helper Components to keep the code clean */
const SnapshotCard = ({ icon, label, value, desc, delay }) => (
  <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={delay}>
    <div className="snapshot-card">
      <div className="snapshot-icon"><i className={`fas ${icon}`}></i></div>
      <div className="snapshot-content">
        <span className="snapshot-label">{label}</span>
        <h4 className="snapshot-value">{value}</h4>
        <p className="snapshot-desc">{desc}</p>
      </div>
    </div>
  </div>
);


const StatItem = ({ val, label, delay }) => (
  <div className="col-md-3" data-aos="zoom-in" data-aos-delay={delay}>
    <h2>{val}</h2>
    <p>{label}</p>
  </div>
);

export default HomePage;
