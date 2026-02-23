// import React from 'react';
// import { FaSquare } from 'react-icons/fa';

// const InteractivePanels = () => {
//   return (
//     <div className="product-page">
//       <h1>Interactive Panels</h1>
//       <div className="product-content">
//         <FaSquare size={50} />
//         <p>Advanced interactive display panels for modern workspaces.</p>
//         <ul>
//           <li>4K Display Resolution</li>
//           <li>Touch Enabled</li>
//           <li>Wireless Connectivity</li>
//           <li>Collaboration Tools</li>
//         </ul>
//         <button className="btn-primary">View Specifications</button>
//       </div>
//     </div>
//   );
// };

// export default InteractivePanels;


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUsb,
  FaProjectDiagram,
  FaNetworkWired,
  // FaDesktop,
} from "react-icons/fa";


import "../../styles/panels.css";

// Images (adjust paths as per your project)
import eduBoard from "../../assets/image/edu-board.png";
import bizBoard from "../../assets/image/biz-board.png";
import collaboration from "../../assets/image/collaboration.jpg";
import kiosk from "../../assets/image/kiosk.jpg";
import education from "../../assets/image/education.jpg";
import boardImg from "../../assets/image/board.jpg";
import displayImg from "../../assets/image/display.jpg";
import panelImg from "../../assets/image/panel.jpg";
import kioskImg from "../../assets/image/kiosk.jpg";

const features = [
  {
    icon: <FaUsb />,
    title: "USB-C One-Cable",
    desc: "Transmits 4K Video, Touch Data, and 65W Power Charging simultaneously.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Wireless Casting",
    desc: "Support for AirPlay, Miracast, and Google Cast for up to 9 devices at once.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Dual-LAN / 5G",
    desc: "Dedicated network bridge for safe guest access and high-speed streaming.",
  },
  // {
  //   icon: <FaDesktop />,
  //   title: "OPS PC Slot",
  //   desc: "Plug-in Intel PC module to run full Windows applications without external cables.",
  // },
];

const products = [
  {
    brand: "Samsung",
    title: 'Smart Board 65"',
    img: boardImg,
    features: [
      "4K UHD Display",
      "Touch Screen",
      "Android OS",
      "Wireless Connectivity",
    ],
  },
  {
    brand: "LG",
    title: 'Interactive Display 75"',
    img: displayImg,
    features: [
      "4K Resolution",
      "Multi-touch",
      "Built-in Apps",
      "Screen Share",
    ],
  },
  {
    brand: "Sharp",
    title: 'Collaboration Panel 86"',
    img: panelImg,
    features: [
      "Ultra HD",
      "20-point Touch",
      "Wireless Present",
      "Cloud Integration",
    ],
  },
];

const InteractivePanels = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

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

  return (
    <>
      {/* HERO */}
      <section className="interactive-hero bg-dark text-white py-6 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="d-flex gap-3 mb-3">
                <button
                  className="btn btn-outline-light btn-lg px-4 fw-bold"
                  onClick={resetFilters}
                >
                  <i className="fas fa-sync-alt me-2"></i> Re-establish
                </button>
              </div>

              <h1 className="display-3 fw-black mb-3">
                Interactive <span className="text-success">Panels</span>
              </h1>

              <p className="lead mb-4 opacity-75">
                Engagement redefined. From 4K smart boards for education to
                touch-enabled digital signage for retail, we provide the canvas
                for your digital content.
              </p>

              <div className="row g-3 mb-5">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-fingerprint text-success fa-2x me-3"></i>
                    <span className="small fw-bold">
                      20-Point Multi-Touch
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-wifi text-success fa-2x me-3"></i>
                    <span className="small fw-bold">
                      Wireless Screen Sharing
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-4">
                {["SECURE LOG-IN", "REAL-TIME SYNC", "CLOUD BACKUP"].map(
                  (text, i) => (
                    <div className="integration-badge" key={i}>
                      <i className="fas fa-cloud fa-2x mb-2 text-success"></i>
                      <p className="x-small fw-bold">{text}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT INVENTORY */}
      <section className="py-5 bg-light" id="panel-inventory">
        <div className="container">
          <div className="product-grid">
            {[
              {
                label: "ED-TECH SERIES",
                color: "success",
                title: 'EduTouch Pro 65"',
                tag: "Smart Classroom Whiteboard",
                price: "₹2,250",
              },
              {
                label: "ENTERPRISE HUB",
                color: "dark",
                title: 'Polarsys Vision X 86"',
                tag: "Boardroom & Collaboration",
                price: "₹4,890",
              },
              {
                label: "DIGITAL SIGNAGE",
                color: "danger",
                title: "Kiosk Terminal i55",
                tag: "Public Info & Wayfinding",
                price: "₹3,100",
              },
            ].map((item, i) => (
              <div  data-aos="fade-up" key={i}>
                <div className="product-card bg-white rounded-4 overflow-hidden shadow-sm h-100">
                  <div
                    className={`brand-strip bg-${item.color} text-white text-center py-1 small fw-bold`}
                  >
                    {item.label}
                  </div>
                  <div className="p-4">
                    <h5 className="fw-black">{item.title}</h5>
                    <p
                      className={`x-small text-uppercase text-${item.color} fw-bold`}
                    >
                      {item.tag}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                      <h4 className="fw-bold mb-0">{item.price}</h4>
                      {/* <button className="btn btn-outline-dark btn-sm rounded-pill px-3">
                        PDF Specs
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            {/* interactive panels */}
            <section className="products-section">
      <div className="container-fluid px-5">
        <div className="row g-4 justify-content-center">
          {products.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="product-card h-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="product-image"
                />

                <span className="product-brand">{item.brand}</span>
                <h4 className="product-title">{item.title}</h4>

                <ul className="feature-list">
                  {item.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                {/* <a
                  href={`mailto:info@polarsys.in?subject=Quote Request - ${item.title}`}
                  className="btn-quote"
                >
                  Request Quote
                </a> */}
              <a
                  href={`https://wa.me/919964585585?text=Hi, I am interested in ${item.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quote"
                >
                  Request Quote
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* 3333 */}
<section className="py-6 bg-white border-bottom">
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className="fw-black mb-4">
              Precision <span className="text-success">Optical Bonding</span>{" "}
              Technology
            </h2>

            <p className="text-muted">
              Unlike standard displays, our panels use{" "}
              <strong>Zero-Gap Optical Bonding</strong>. This eliminates the air
              between the glass and the LCD, providing:
            </p>

            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-microchip text-success me-2"></i>
                <strong> Zero Latency:</strong> Immediate ink-to-surface response
                for natural writing.
              </li>
              <li className="mb-3">
                <i className="fas fa-eye text-success me-2"></i>
                <strong> 178° Viewing Angles:</strong> No parallax error or
                distorted vision from the side.
              </li>
              <li className="mb-3">
                <i className="fas fa-hand-sparkles text-success me-2"></i>
                <strong> Antimicrobial Coating:</strong> Silver-ion infused glass
                for public-safe interaction.
              </li>
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <div className="bg-light p-4 rounded-4 border">
              <h6 className="fw-bold mb-3 text-uppercase small text-primary">
                System-on-Chip (SoC) Specs
              </h6>

              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <td><strong>Operating System</strong></td>
                    <td className="text-end">
                      Android 13.0 / Windows 11 Pro
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Processor</strong></td>
                    <td className="text-end">Octa-Core A73 + A53</td>
                  </tr>
                  <tr>
                    <td><strong>Memory</strong></td>
                    <td className="text-end">8GB RAM / 128GB Storage</td>
                  </tr>
                  <tr>
                    <td><strong>Touch Sensing</strong></td>
                    <td className="text-end">
                      High-Precision Infrared (IR)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 33 */}

<div className="col-lg-12" data-aos="fade-up">
  <div className="p-5 border rounded-4 bg-white shadow-sm">
    <div className="row align-items-center">
      
      {/* LEFT CONTENT */}
      <div className="col-lg-6">
        <h2 className="fw-black">
          Interactive <span className="text-primary">Kiosks</span>
        </h2>

        <p className="lead">
          Digital Signage for Public Spaces &amp; Wayfinding.
        </p>

        <ul className="list-unstyled">
          <li className="mb-2">
            <i className="fas fa-check-circle text-primary me-2"></i>
            <strong>Connectivity:</strong> Wi-Fi, Bluetooth &amp; 5G Modules
          </li>
          <li className="mb-2">
            <i className="fas fa-check-circle text-primary me-2"></i>
            <strong>Multimedia:</strong> 4K video loops &amp; PDF catalogs
          </li>
          <li className="mb-2">
            <i className="fas fa-check-circle text-primary me-2"></i>
            <strong>Durability:</strong> 7H anti-glare tempered glass
          </li>
        </ul>

        <button className="btn btn-primary px-4 py-2 mt-3">
          View Kiosk Gallery
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="col-lg-6 text-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={kioskImg}
          alt="Interactive Kiosk"
          className="img-fluid rounded-4 shadow"
        />
      </div>

    </div>
  </div>
</div>


      {/* FEATURE PANELS */}

<section className="py-5 bg-white">
  <div className="container">
    <div className="row g-4 align-items-stretch">
      
      {/* Card 1 */}
      <div className="col-lg-6 col-md-12">
        <div className="p-4 border rounded-4 bg-light h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-5">
              <img
                src={eduBoard}
                className="img-fluid rounded-3 shadow-sm"
                alt="EduTouch Pro G3"
              />
            </div>
            <div className="col-md-7">
              <h4 className="fw-black">EduTouch Pro G3</h4>
              <p className="small text-muted">
                Optimized for classrooms and training centers.
              </p>
              <div className="mb-2">
                <span className="badge bg-light text-dark me-2">20-Point Touch</span>
                <span className="badge bg-light text-dark">Wi-Fi 6</span>
              </div>
              <h5 className="fw-bold text-success">₹2,499.00</h5>
              <button className="btn btn-sm btn-dark mt-2">
                Download PDF Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-6 col-md-12">
        <div className="p-4 border rounded-4 bg-light h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-5">
              <img
                src={bizBoard}
                className="img-fluid rounded-3 shadow-sm"
                alt="Enterprise Vision 86"
              />
            </div>
            <div className="col-md-7">
              <h4 className="fw-black">Enterprise Vision 86</h4>
              <p className="small text-muted">
                4K video conferencing & real-time brainstorming.
              </p>
              <div className="mb-2">
                <span className="badge bg-light text-dark me-2">USB-C Hub</span>
                <span className="badge bg-light text-dark">4K AI Camera</span>
              </div>
              <h5 className="fw-bold text-success">₹4,150.00</h5>
              <button className="btn btn-sm btn-dark mt-2">
                Download PDF Guide
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* 333333 */}

            <section className="py-6 bg-light">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-black">
            Universal <span className="text-primary">Connectivity</span>
          </h2>
          <p className="text-muted">
            Seamlessly bridge the gap between your personal device and the big
            screen.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
              <div className="connectivity-card h-100">
                <div className="icon-box">{item.icon}</div>
                <h6 className="fw-bold mt-3">{item.title}</h6>
                <p className="small text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




      {/* USE CASES */}
{/* USE CASES */}
<section className="py-6">
  <div className="container">
    <h2 className="fw-black mb-5 text-center">
      Engineered for <span className="text-success">Impact</span>
    </h2>

    <div className="row g-5">
      <div className="col-lg-4">
        <div className="use-case-card">
          <div className="use-case-image">
            <img src={collaboration} alt="Dynamic Collaboration" />
          </div>
          <h5 className="fw-bold">Dynamic Collaboration</h5>
          <p className="small text-muted">
            In boardroom settings, users can use <strong>Gestures</strong> (two-finger scroll,
            palm-erase) to manage complex whiteboards during brainstorming.
          </p>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="use-case-card">
          <div className="use-case-image">
            <img src={kiosk} alt="Public Interaction" />
          </div>
          <h5 className="fw-bold">Public Interaction</h5>
          <p className="small text-muted">
            In museums or retail, the <strong>Hardened Glass</strong> and{" "}
            <strong>Portrait Mode</strong> support allow for self-service wayfinding
            and interactive catalogs.
          </p>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="use-case-card">
          <div className="use-case-image">
            <img src={education} alt="Classroom Immersion" />
          </div>
          <h5 className="fw-bold">Classroom Immersion</h5>
          <p className="small text-muted">
            Teachers can use <strong>Split Screen</strong> to show a 4K video on one
            side while students write notes on the other using digital ink.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default InteractivePanels;
