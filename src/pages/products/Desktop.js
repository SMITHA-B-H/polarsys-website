// import React from 'react';
// import { FaDesktop } from 'react-icons/fa';

// const Desktop = () => {
//   return (
//     <div className="product-page">
//       <h1>Desktop Computers</h1>
//       <div className="product-content">
//         <FaDesktop size={50} />
//         <p>Powerful desktop systems for professionals and businesses.</p>
//         <ul>
//           <li>High Performance CPUs</li>
//           <li>Ample RAM & Storage</li>
//           <li>Graphics Options</li>
//           <li>Enterprise Ready</li>
//         </ul>
//         <button className="btn-primary">View Specifications</button>
//       </div>
//     </div>
//   );
// };

// export default Desktop;


// import { useEffect } from "react";
import React from 'react';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Desktop.css";

// Images
import heroMain from "../../assets/image/desktop-hero-main.png";
import dellLogo from "../../assets/icons/dell-logo-white.png";
import hpLogo from "../../assets/icons/hp-logo-white.png";
import acerLogo from "../../assets/icons/acer-logo-white.png";

import Dell from "../../assets/image/dell.jpg";
import novo from "../../assets/image/lenovo.jpg";
import hp from "../../assets/image/hp.jpg";
import monitorDell from "../../assets/image/monitor-dell.png";
import monitorHp from "../../assets/image/monitor-hp.png";
import kbLogitech from "../../assets/image/kb-logitech.png";
import mouseDell from "../../assets/image/mouse-dell.png";

const Desktop = () => {
 const resetFilters = () => {
    const btn = document.querySelector(".btn-outline-light");
    if (!btn) return;

    btn.innerHTML =
      '<i class="fas fa-spinner fa-spin me-2"></i> Re-establishing...';

    setTimeout(() => {
      document.querySelectorAll(".product-card").forEach((card) => {
        card.style.display = "block";
        card.classList.add("aos-animate");
      });

      btn.innerHTML =
        '<i class="fas fa-sync-alt me-2"></i> Re-establish';

      document
        .getElementById("panel-inventory")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };


  const products = [
  {
    brand: "Dell",
    title: "OptiPlex 7090",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    specs: [
      "Intel i7 11th Gen",
      "16GB RAM",
      "512GB SSD",
      "Windows 11 Pro",
    ],
  },
  {
    brand: "Lenovo",
    title: "ThinkCentre M90",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    specs: [
      "Intel i5 10th Gen",
      "8GB RAM",
      "256GB SSD",
      "Windows 11",
    ],
  },
  {
    brand: "HP",
    title: "EliteDesk 800",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6",
    specs: [
      "Intel i7 11th Gen",
      "32GB RAM",
      "1TB SSD",
      "Windows 11 Pro",
    ],
  },
];

// const openWhatsApp = (productName) => {
//   const phoneNumber = "919964585585";
//   const message = `Hello, I would like to request a quote for ${productName}`;
//   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;
//   window.open(url, "_blank");
// };



const desktops = [
  {
    brand: "Dell",
    model: "OptiPlex 7090",
    image: Dell,
    configs: [
      {
        processor: "Intel i5 11th Gen",
        ram: "8GB",
        display: "21.5 inch",
        price: 45999,
      },
      {
        processor: "Intel i7 11th Gen",
        ram: "16GB",
        display: "23.8 inch",
        price: 58999,
      },
    ],
  },
  {
    brand: "HP",
    model: "EliteDesk 800",
    image: hp,
    configs: [
      {
        processor: "Intel i5 10th Gen",
        ram: "8GB",
        display: "21.5 inch",
        price: 42999,
      },
      {
        processor: "Intel i7 11th Gen",
        ram: "32GB",
        display: "24 inch",
        price: 68999,
      },
    ],
  },
  {
    brand: "Lenovo",
    model: "ThinkCentre M90",
    image: novo,
    configs: [
      {
        processor: "Intel i5 10th Gen",
        ram: "8GB",
        display: "21.5 inch",
        price: 39999,
      },
      {
        processor: "Intel i7 10th Gen",
        ram: "16GB",
        display: "23 inch",
        price: 54999,
      },
    ],
  },
];


const openWhatsApp = (brand, model, config) => {
    const phone = "9964585585";
    const message = `Hello, I would like to request a quote for:
Brand: ${brand}
Model: ${model}
Processor: ${config.processor}
RAM: ${config.ram}
Display: ${config.display}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };


const peripherals = [
  {
    name: 'Dell UltraSharp 43" 4K',
    desc: "Multi-client monitor for NOC centers.",
    price: "₹11,049.00",
    image: monitorDell,
  },
  {
    name: "HP Z27k G3 4K",
    desc: "USB-C Power Delivery & 99% sRGB.",
    price: "₹15,589.00",
    image: monitorHp,
  },
  {
    name: "Logitech MX Mechanical",
    desc: "Tactile quiet switches for dev.",
    price: "₹569.00",
    image: kbLogitech,
  },
  {
    name: "Dell Premier MS7421W",
    desc: "Rechargeable multi-device mouse.",
    price: "₹165.00",
    image: mouseDell,
  },
  {
    name: "HP Flatbed Scanner",
    desc: "High-speed document scanning.",
    price: "₹4,299.00",
    image: "/assets/image/scanner-hp.png",
  },
  {
    name: "Canon Laser Printer",
    desc: "Fast mono laser printing.",
    price: "₹7,999.00",
    image: "/assets/image/printer-canon.png",
  },
  {
    name: "Logitech HD Webcam",
    desc: "1080p video conferencing.",
    price: "₹1,899.00",
    image: "/assets/image/webcam-logitech.png",
  },
  {
    name: "SanDisk 64GB Pen Drive",
    desc: "USB 3.0 high-speed storage.",
    price: "₹599.00",
    image: "/assets/image/pendrive-sandisk.png",
  },
  {
    name: "WD 1TB External HDD",
    desc: "Portable backup solution.",
    price: "₹3,299.00",
    image: "/assets/image/harddrive-wd.png",
  },
];



  return (
    <>
      {/* HERO SECTION */}
      <section className="desktop-hero position-relative overflow-hidden bg-dark text-white py-6">
        <div className="hero-grid-overlay"></div>

        <div className="container position-relative z-index-2">
          <div className="row align-items-center min-vh-75">
            {/* LEFT */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="d-flex gap-3 mb-3">
             <button
                  className="btn btn-outline-light btn-lg px-4 fw-bold"
                  onClick={resetFilters}
                >
                  <i className="fas fa-sync-alt me-2"></i> Re-establish
                </button>
                </div>

              <h1 className="display-2 fw-black mb-3">
                Enterprise <span className="text-success-glow">Workstations</span>
              </h1>

              <p className="lead mb-5 opacity-75 pe-lg-5">
                Deployment-ready desktop solutions engineered for heavy-load
                computing, 24/7 security monitoring, and scalable software
                development environments.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">
                <div className="hero-stat">
                  <span className="d-block h4 fw-bold mb-0">99.9%</span>
                  <small className="text-success text-uppercase fw-bold">
                    Uptime Rated
                  </small>
                </div>
                <div className="vr opacity-25"></div>
                <div className="hero-stat">
                  <span className="d-block h4 fw-bold mb-0">ISV</span>
                  <small className="text-success text-uppercase fw-bold">
                    Certified
                  </small>
                </div>
                <div className="vr opacity-25"></div>
                <div className="hero-stat">
                  <span className="d-block h4 fw-bold mb-0">24hr</span>
                  <small className="text-success text-uppercase fw-bold">
                    Field Support
                  </small>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="zoom-in-left">
              <div className="hero-visual-stack position-relative">
                <img
                  src={heroMain}
                  className="img-fluid main-tower shadow-2xl"
                  alt="Desktop Tower"
                />

                <div className="floating-spec-card glass-panel p-3 rounded-4 shadow-lg animate-float">
                  <div className="d-flex align-items-center mb-2">
                    <div className="status-dot pulse me-2"></div>
                    <span className="small fw-bold">
                      SYSTEM STATUS: OPTIMAL
                    </span>
                  </div>
                  <div className="progress mb-2" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <small className="text-muted">
                    Load: Intel Xeon W-Series
                  </small>
                </div>

                <div className="brand-floating-icons">
                  <img src={dellLogo} className="brand-icon icon-1" alt="Dell" />
                  <img src={hpLogo} className="brand-icon icon-2" alt="HP" />
                  <img src={acerLogo} className="brand-icon icon-3" alt="Acer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        {/* 666777 */}
        <section className="products-wrapper">
      <div className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="product-content">
              <span className="brand">{item.brand}</span>
              <h3>{item.title}</h3>

              <ul>
                {item.specs.map((spec, i) => (
                  <li key={i}>
                    <span className="check">✔</span> {spec}
                  </li>
                ))}
              </ul>

              <button
                className="quote-btn"
                onClick={() => openWhatsApp(item.title)}
              >
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
      
        {/* 9999 */}

        <section className="desktop-wrapper">
      <div className="desktop-grid">
        {desktops.map((desktop, index) => (
          <div className="desktop-card" key={index}>
            <img src={desktop.image} alt={desktop.model} />

            <div className="desktop-body">
              <span className="brand">{desktop.brand}</span>
              <h3>{desktop.model}</h3>

              {desktop.configs.map((config, i) => (
                <div className="config-box" key={i}>
                  <p><strong>Processor:</strong> {config.processor}</p>
                  <p><strong>RAM:</strong> {config.ram}</p>
                  <p><strong>Display:</strong> {config.display}</p>

                  <div className="price-row">
                    <span className="price">₹ {config.price.toLocaleString()}</span>
                    <button
                      onClick={() =>
                        openWhatsApp(desktop.brand, desktop.model, config)
                      }
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

      <section className="py-5 bg-white">
      <div className="container">
        <h3 className="fw-black mb-4">
          Precision <span className="text-success">Peripherals</span>
        </h3>

        <div className="row g-4">
          {peripherals.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              {/* 6 cards per row on desktop */}
              <div className="peripheral-card border rounded-4 p-3 text-center h-100">
                <img
                  src={item.image}
                  className="img-fluid mb-3"
                  alt={item.name}
                />
                <h6 className="fw-bold">{item.name}</h6>
                <p className="small text-muted">{item.desc}</p>
                <div className="badge bg-light text-dark mb-2">
                  {item.price}
                </div>
                {/* Optional button */}
                {/* <button className="btn btn-sm btn-outline-primary w-100">
                  Request Quote
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default Desktop;

