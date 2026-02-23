// import React from 'react';
// import { FaFireExtinguisher } from 'react-icons/fa';

// const FireAlarmSystem = () => {
//   return (
//     <div className="service-page">
//       <h1>Fire Alarm System</h1>
//       <div className="service-content">
//         <FaFireExtinguisher size={50} />
//         <p>Advanced fire detection and alarm systems for safety.</p>
//         <ul>
//           <li>Fire Detection</li>
//           <li>Alarm Installation</li>
//           <li>System Maintenance</li>
//           <li>24/7 Monitoring</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FireAlarmSystem;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../styles/fire-system.css";
import fireImg from "../../assets/image/fire.jpg";

export default function FireAlarmSystem() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="fire-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="fire-overlay"></div>

        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge bg-danger mb-3 px-3 py-2">Safety</span>

              <h1 className="display-3 fw-bold mb-3">
                Fire Detection <br />
                <span className="text-danger">& Alarm Systems</span>
              </h1>

              <p className="lead text-white-50 mb-4">
                Precision-engineered life safety systems compliant with NBC 2016
                and international fire codes.
              </p>

              <div className="d-flex align-items-center gap-3">
                <div className="safety-cert text-center">
                  <i className="fas fa-shield-alt text-danger fs-2"></i>
                  <span className="d-block small mt-1">NBC Compliant</span>
                </div>

                <div className="vr bg-white opacity-25 mx-3"></div>

                <div className="safety-cert text-center">
                  <i className="fas fa-clock text-danger fs-2"></i>
                  <span className="d-block small mt-1">24/7 Monitoring</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block" data-aos="zoom-in">
              <div className="fire-panel-display shadow-lg p-3 bg-dark border border-secondary rounded-3">
                <div className="panel-screen p-4 bg-black text-danger border border-danger mb-2">
                  <code className="small d-block text-uppercase">
                    System Status: Normal
                  </code>
                  <div className="pulse-line"></div>
                  <code className="small d-block text-success">
                    All Sensors Calibrated
                  </code>
                </div>

                <div className="panel-buttons d-grid grid-3 gap-2">
                  <div className="btn-indicator active"></div>
                  <div className="btn-indicator"></div>
                  <div className="btn-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Lifecycle of a Safety System</h2>
            <p className="text-muted">
              From conceptual blueprint to periodic maintenance.
            </p>
          </div>

          <div className="row g-4 text-center">
            {[
              {
                icon: "fa-pencil-ruler",
                title: "01. Design",
                desc: "AutoCAD layouts for smoke/heat detector placement per fire load calculation."
              },
              {
                icon: "fa-thermometer-three-quarters",
                title: "02. Installation",
                desc: "Certified wiring and addressable panel setup by expert technicians."
              },
              {
                icon: "fa-microchip",
                title: "03. Calibration",
                desc: "Sensitivity testing for smoke/heat sensors to avoid false alarms.",
                active: true
              },
              // {
              //   icon: "fa-calendar-check",
              //   title: "04. AMC",
              //   desc: "Quarterly audits and battery-backup health checks."
              // }
            ].map((item, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <div className={`lifecycle-box ${item.active ? "active-safety" : ""}`}>
                  <div className="icon-circle">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <p className="small text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



          <section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-5">
      
      {/* Left Content */}
      <div className="col-lg-6" data-aos="fade-right">
        <h2 className="fw-bold mb-4">
          Precision Calibration &amp; Sensitivity
        </h2>

        <p className="text-muted">
          A fire alarm is only as good as its calibration. We specialize in{" "}
          <strong>Software-Based Drift Compensation</strong>, ensuring your
          sensors don't trigger false alarms due to dust or environmental aging.
        </p>

        <div className="calibration-features mt-4">
          
          <div
            className="d-flex align-items-start mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="me-3 p-2 bg-danger-soft rounded text-danger">
              <i className="fas fa-microchip"></i>
            </div>
            <div>
              <h6 className="fw-bold">Intelligent Addressable Logic</h6>
              <p className="small text-muted">
                Each detector has a unique ID, allowing the command panel to
                display the exact room and floor of the incident.
              </p>
            </div>
          </div>

          <div
            className="d-flex align-items-start mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="me-3 p-2 bg-danger-soft rounded text-danger">
              <i className="fas fa-vial"></i>
            </div>
            <div>
              <h6 className="fw-bold">Simulated Smoke Testing</h6>
              <p className="small text-muted">
                We use UL-listed specialized aerosol canisters to verify chamber
                response times during every inspection.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Card */}
      <div className="col-lg-6" data-aos="zoom-in">
        <div className="card bg-dark text-danger p-4 shadow-lg border-danger-glow mt-4">
          <h5 className="fw-bold">
            <i className="fas fa-exclamation-triangle me-2"></i>
            System Integration SOP
          </h5>

          <ul className="list-unstyled small text-white-50 mb-0">
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2"></i>
              Auto-Shutdown of HVAC Dampers
            </li>
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2"></i>
              Elevator Grounding &amp; Recall
            </li>
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2"></i>
              Emergency PA Announcement Trigger
            </li>
            <li>
              <i className="fas fa-arrow-right me-2"></i>
              Unlocking of all EM-Lock Access Doors
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>




      {/* DETECTION TECHNOLOGY */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h3 className="fw-bold mb-4">Detection Technology</h3>

              {[
                {
                  icon: "fa-cloud",
                  title: "Photoelectric Smoke Detection",
                  desc: "Ideal for smoldering fires in offices and residential complexes."
                },
                {
                  icon: "fa-thermometer",
                  title: "Rate-of-Rise Heat Sensors",
                  desc: "Specialized sensors for server rooms and kitchens."
                },
                {
                  icon: "fa-wave-square",
                  title: "Beam Detection",
                  desc: "Wide-range detection for high-ceiling warehouses and atriums."
                }
              ].map((item, i) => (
                <div key={i} className="d-flex gap-3 mb-4">
                  <div className="det-icon text-danger">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <h6>{item.title}</h6>
                    <p className="small text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <img
                src={fireImg}
                alt="Fire Sensor Calibration"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-5">
      
      {/* Left Content */}
      <div className="col-lg-6" data-aos="fade-right">
        <h2 className="fw-bold mb-4">
          Precision Calibration &amp; Sensitivity
        </h2>

        <p className="text-muted">
          A fire alarm is only as good as its calibration. We specialize in{" "}
          <strong>Software-Based Drift Compensation</strong>, ensuring your
          sensors don't trigger false alarms due to dust or environmental aging.
        </p>

        <div className="calibration-features mt-4">
          
          <div
            className="d-flex align-items-start mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="me-3 p-2 bg-danger-soft rounded text-danger">
              <i className="fas fa-microchip"></i>
            </div>
            <div>
              <h6 className="fw-bold">Intelligent Addressable Logic</h6>
              <p className="small text-muted">
                Each detector has a unique ID, allowing the command panel to
                display the exact room and floor of the incident.
              </p>
            </div>
          </div>

          <div
            className="d-flex align-items-start mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="me-3 p-2 bg-danger-soft rounded text-danger">
              <i className="fas fa-vial"></i>
            </div>
            <div>
              <h6 className="fw-bold">Simulated Smoke Testing</h6>
              <p className="small text-muted">
                We use UL-listed specialized aerosol canisters to verify chamber
                response times during every inspection.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Card */}
      <div className="col-lg-6" data-aos="zoom-in">
        <div className="card bg-dark text-danger p-4 shadow-lg border-danger-glow mt-4">
          <h5 className="fw-bold">
            <i className="fas fa-exclamation-triangle me-2"></i>
            System Integration SOP
          </h5>

          <ul className="list-unstyled small text-white-50 mb-0">
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2"></i>
              Auto-Shutdown of HVAC Dampers
            </li>
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2"></i>
              Elevator Grounding &amp; Recall
            </li>
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2"></i>
              Emergency PA Announcement Trigger
            </li>
            <li>
              <i className="fas fa-arrow-right me-2"></i>
              Unlocking of all EM-Lock Access Doors
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>


   <section className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">Specialized Detection Modules</h2>
      <p className="text-muted">Tailored hardware for specific fire loads.</p>
    </div>

    {/* IMPORTANT: row must be direct parent */}
    <div className="row g-4">

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="detector-card h-100 p-4 bg-white text-center rounded-4 shadow-sm">
          <i className="fas fa-wind fs-1 text-danger mb-3"></i>
          <h6>Aspirating (VESDA)</h6>
          <p className="small text-muted text-start">
            Early warning smoke detection for high-value data centers.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="detector-card h-100 p-4 bg-white text-center rounded-4 shadow-sm">
          <i className="fas fa-sun fs-1 text-warning mb-3"></i>
          <h6>Flame Detectors</h6>
          <p className="small text-muted text-start">
            UV/IR sensors for chemical storage and oil & gas facilities.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="detector-card h-100 p-4 bg-white text-center rounded-4 shadow-sm">
          <i className="fas fa-broadcast-tower fs-1 text-primary mb-3"></i>
          <h6>Linear Heat Cables</h6>
          <p className="small text-muted text-start">
            Ideal for cable trays, tunnels, and conveyor belts.
          </p>
        </div>
      </div>

      {/* <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="detector-card h-100 p-4 bg-white text-center rounded-4 shadow-sm">
          <i className="fas fa-tint fs-1 text-info mb-3"></i>
          <h6>Water Leak Sensors</h6>
          <p className="small text-muted text-start">
            Detecting secondary threats to server racks and power rooms.
          </p>
        </div>
      </div> */}

    </div>
  </div>
</section>


      {/* CTA */}
      <section className="fire-cta">
        <div className="container text-center" data-aos="fade-up">
          <h2>Ready to Automate with AI?</h2>
          <p>Let’s transform your business with intelligent automation.</p>
          <a href="/contact" className="btn btn-primary">
            Talk to Our Experts
          </a>
        </div>
      </section>
    </>
  );
}
