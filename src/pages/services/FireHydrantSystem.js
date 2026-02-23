// import React from 'react';
// import { FaWater } from 'react-icons/fa';

// const FireHydrantSystem = () => {
//   return (
//     <div className="service-page">
//       <h1>Fire Hydrant System</h1>
//       <div className="service-content">
//         <FaWater size={50} />
//         <p>Complete fire hydrant and water supply systems.</p>
//         <ul>
//           <li>System Design</li>
//           <li>Installation</li>
//           <li>Testing & Certification</li>
//           <li>Maintenance & Repairs</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FireHydrantSystem;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/fire-hydrant.css"
import fire from "../../assets/image/hydrant-installation-site.jpg";
import pump from "../../assets/image/fire-pump-house.jpg"

const hardwareItems = [
  {
    title: "Landing Valves",
    desc: "Single/Double headed gunmetal valves for fire brigade use.",
    icon: "fas fa-faucet",
    highlight: true,
  },
  {
    title: "Hose Cabinets",
    desc: "Weather-proof MS/SS cabinets with CP hoses and nozzles.",
    icon: "fas fa-briefcase",
  },
  {
    title: "Fire Monitors",
    desc: "High-flow ground/roof monitors for chemical warehouses.",
    icon: "fas fa-shield-alt",
  },
  {
    title: "Siamese Connection",
    desc: "Two-way fire department inlet for external water supply.",
    icon: "fas fa-tint",
  },
];



const HydrantAutomation = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hydrant-command-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="fluid-path-overlay"></div>

        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-danger me-2">SUPPRESSION CORE</span>
                <span className="text-danger small fw-bold tracking-widest text-uppercase">
                  NFPA 20 & IS:15105 Compliant
                </span>
              </div>

              <h1 className="display-2 fw-black mb-3">
                Automated <br />
                <span className="text-danger-glow">Hydrant Networks</span>
              </h1>

              <p className="lead opacity-75 mb-4">
                Precision-engineered high-pressure water delivery systems with
                intelligent pump sequencing and fail-safe automation for
                immediate fire combat.
              </p>

              <div className="row g-2 mb-4">
                <div className="col-auto">
                  <div className="stat-box-dark">
                    <span className="d-block h4 mb-0">15 Bar</span>
                    <small className="text-white-50">Max Pressure</small>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="stat-box-dark">
                    <span className="d-block h4 mb-0">2000 GPM</span>
                    <small className="text-white-50">
                      Flow Rate Capacity
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-5 text-center d-none d-lg-block"
              data-aos="zoom-in-left"
            >
              <div className="animated-gauge-wrapper">
                <div className="gauge-face"></div>
                <div className="gauge-needle-animated"></div>
                <div className="gauge-center"></div>
                <span className="gauge-readout">8.5 Bar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUMP HOUSE SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">The Integrated Pump House</h2>
              <p className="text-muted">
                Our suppression systems are built around an automated pump house
                logic that ensures water is always available, even during total
                power failure.
              </p>

              <div className="pump-breakdown mt-4">
                <div className="d-flex align-items-center p-3 mb-3 bg-light rounded-3 shadow-sm border-end border-danger border-5">
                  <i className="fas fa-bolt me-3 text-danger fs-4"></i>
                  <div>
                    <h6 className="fw-bold mb-0">
                      Electric Main Pump
                    </h6>
                    <small className="text-muted">
                      Primary suppression driver for high-volume delivery.
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center p-3 mb-3 bg-light rounded-3 shadow-sm">
                  <i className="fas fa-oil-can me-3 text-danger fs-4"></i>
                  <div>
                    <h6 className="fw-bold mb-0">
                      Diesel Standby Pump
                    </h6>
                    <small className="text-muted">
                      Auto-starts instantly during electrical grid failure.
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center p-3 rounded-3 bg-light shadow-sm">
                  <i className="fas fa-compress-arrows-alt me-3 text-danger fs-4"></i>
                  <div>
                    <h6 className="fw-bold mb-0">Jockey Pump</h6>
                    <small className="text-muted">
                      Maintains line pressure and prevents system cycling.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg overflow-hidden rounded-4">
                <div className="card-header bg-danger text-white py-3 fw-bold">
                  <i className="fas fa-clipboard-check me-2"></i>
                  Compliance & Inspection SOP
                </div>

                <div className="card-body p-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="fas fa-check text-success me-3"></i>
                      Hydrostatic Pressure Testing of Pipelines
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="fas fa-check text-success me-3"></i>
                      Annual Hydrant Flow & Flush Tests
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="fas fa-check text-success me-3"></i>
                      Diesel Engine RPM & Battery Health Audit
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="fas fa-check text-success me-3"></i>
                      Hose Reel & Nozzle Calibration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    {/* firehydrant */}
    <section className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-2">Mission-Critical Hardware</h2>
          <p className="text-muted">
            Heavy-duty components for zero-failure performance.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {hardwareItems.map((item, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`hardware-card h-100 text-center p-4 rounded-4 shadow-sm bg-white ${
                  item.highlight ? "border border-danger border-2" : ""
                }`}
              >
                <div className="icon-wrap mb-3">
                  <i className={`${item.icon} text-danger fs-2`}></i>
                </div>

                <h6 className="fw-semibold mb-2">{item.title}</h6>
                <p className="small text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* 333 */}

      <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="fw-black h1 mb-3">
              Precision Installation & Routing
            </h2>
            <p className="text-muted mb-4">
              Our certified engineers execute meticulous pipeline routing,
              hydrostatic testing, and strategic hydrant placement to maximize
              coverage and minimize pressure drop.
            </p>

            <div className="feature-grid-hydrant">
              <div
                className="feature-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <i className="fas fa-water text-danger fs-3 mb-2"></i>
                <h6 className="fw-bold">Seamless Pipeline Welding</h6>
                <p className="small text-muted mb-0">
                  NDT-certified welds for leak-proof, high-pressure conduits.
                </p>
              </div>

              <div
                className="feature-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="fas fa-map-marked-alt text-danger fs-3 mb-2"></i>
                <h6 className="fw-bold">Strategic Hydrant Placement</h6>
                <p className="small text-muted mb-0">
                  Optimized for access, reach, and adherence to coverage zones.
                </p>
              </div>

              <div
                className="feature-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="fas fa-road text-danger fs-3 mb-2"></i>
                <h6 className="fw-bold">Road Crossing & Trenching</h6>
                <p className="small text-muted mb-0">
                  Expert civil work for underground piping with minimal
                  disruption.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in-left">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src={fire}
                className="img-fluid"
                alt="Fire Hydrant Installation"
              />
              <div className="card-img-overlay d-flex align-items-end p-4">
                <div
                  className="overlay-text bg-dark p-3 rounded opacity-90"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h5 className="text-white fw-bold mb-1">
                    On-Site Execution
                  </h5>
                  <p className="small text-white-50 mb-0">
                    Our team deploying a multi-branch hydrant line at an
                    industrial park.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-black h1 mb-3">
            Automated Pump House & Maintenance
          </h2>
          <p className="text-muted">
            Self-regulating systems for peak performance and compliance.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card bg-white p-4 rounded-4 shadow-lg border-start border-danger border-5">
              <h5 className="fw-bold text-dark mb-3">
                <i className="fas fa-cogs me-2"></i>
                Intelligent Pump Sequencing
              </h5>

              <p className="small text-muted">
                Jockey, Main Electric, and Diesel Standby pumps are{" "}
                <strong>automatically cycled and tested</strong> to ensure
                optimal pressure and instant activation.
              </p>

              <ul className="list-unstyled small mt-3 mb-0">
                <li className="mb-1">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Auto-Start Diesel Backup
                </li>
                <li className="mb-1">
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Pressure Drop Detection
                </li>
                <li>
                  <i className="fas fa-check-circle text-danger me-2"></i>
                  Remote Monitoring & Alerts
                </li>
              </ul>
            </div>

            <div
              className="card bg-dark text-white p-4 rounded-4 shadow-lg mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h5 className="fw-bold text-danger mb-3">
                <i className="fas fa-file-invoice me-2"></i>
                Digital Compliance Logs
              </h5>
              <p className="small opacity-75">
                Automated reports for annual hydrant flow tests, pump run-hours,
                and hydrostatic pressure records. Cloud-archived for audit.
              </p>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex justify-content-center align-items-start pt-lg-4"
            data-aos="zoom-in"
          >
            <img
              src={pump}
              className="img-fluid rounded-4 shadow-lg border border-secondary pump-img"
              alt="Fire Pump House"
            />
          </div>



        </div>
      </div>
    </section>


    </>
  );
};

export default HydrantAutomation;

