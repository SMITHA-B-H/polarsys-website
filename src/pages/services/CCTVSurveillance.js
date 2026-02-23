// import React from 'react';
// import { FaCamera } from 'react-icons/fa';

// const CCTVSurveillance = () => {
//   return (
//     <div className="service-page">
//       <h1>CCTV & Surveillance</h1>
//       <div className="service-content">
//         <FaCamera size={50} />
//         <p>Professional surveillance and monitoring systems.</p>
//         <ul>
//           <li>Camera Installation</li>
//           <li>24/7 Monitoring</li>
//           <li>Cloud Storage</li>
//           <li>Mobile Access & Alerts</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CCTVSurveillance;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/cctv.css";
import ip from "../../assets/image/ip-camera-install.jpg";
import video from "../../assets/image/video-analytics.jpg";
import thermal from "../../assets/image/thermal-camera.jpg";
import storageImage from "../../assets/image/cctv-storage.jpg";

const CCTVSurveillance = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="cctv-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="scanning-grid-overlay"></div>
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge bg-info text-dark mb-3 px-3 py-2 fw-bold text-uppercase">
                Optical Intelligence
              </span>
              <h1 className="display-3 fw-bold mb-3">
                CCTV <br />
                <span className="text-info">Surveillance Systems</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                Moving beyond simple recording. We deploy AI-powered vision
                systems that detect anomalies, track objects, and recognize
                identities in real-time.
              </p>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="glass-pill d-flex align-items-center p-2">
                    <i className="fas fa-microchip text-info me-2"></i>
                    <span className="small">AI Deep Learning NVRs</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="glass-pill d-flex align-items-center p-2">
                    <i className="fas fa-cloud text-info me-2"></i>
                    <span className="small">Hybrid Cloud Storage</span>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 mt-4">
                <div className="tech-card-mini">
                  <span className="d-block h5 mb-0 text-info">8MP / 4K</span>
                  <small className="opacity-50">Resolution Standard</small>
                </div>
                <div className="tech-card-mini">
                  <span className="d-block h5 mb-0 text-info">H.265+</span>
                  <small className="opacity-50">HEVC Compression</small>
                </div>
              </div>
            </div>

            <div
              className="col-lg-5 text-center d-none d-lg-block"
              data-aos="zoom-in"
            >
              <div className="camera-target-ui">
                <div className="target-corner tl"></div>
                <div className="target-corner tr"></div>
                <div className="target-corner bl"></div>
                <div className="target-corner br"></div>
                <i className="fas fa-video fa-4x text-info pulse-animation"></i>
                <div className="ai-label mt-3">
                  OBJECT IDENTIFIED: HUMAN [98.5%]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
<section className="py-5 bg-white">
  <div className="container">

    {/* FEATURE CARDS */}
    <div className="row gx-4 gy-4 mb-5">

      {[
        {
          img: ip,
          title: "High-Definition IP",
          desc: "4K Ultra-HD resolution with H.265+ compression to save 70% storage space.",
        },
        {
          img: video,
          title: "AI Edge Analytics",
          desc: "Intrusion detection, line crossing, abandoned object alerts, and heat mapping.",
        },
        {
          img: thermal,
          title: "Thermal & LPR",
          desc: "License Plate Recognition (LPR) and thermal sensors for fire detection and dark zones.",
        },
      ].map((item, i) => (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" key={i}>
          <div className="cctv-card-ref h-100">
            <div className="cctv-img-ref">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="p-4">
              <div className="d-flex align-items-center mb-2">
                <span className="mini-bar-ref me-2"></span>
                <span className="fw-bold small text-uppercase">
                  {item.title}
                </span>
              </div>
              <p className="small text-muted mb-0">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}

    </div>

    {/* CENTRALIZED VMS */}
    <div className="row align-items-center p-4 bg-light rounded-4 mt-5">
      <div className="col-lg-6" data-aos="fade-right">
        <h3 className="fw-bold">Centralized VMS Management</h3>
        <p className="text-muted">
          Control thousands of cameras across multiple locations from one single screen.
        </p>

        <div className="feature-list-cctv small">
          <div>
            <i className="fas fa-check-circle text-info me-2"></i>
            RAID-6 Redundant Storage
          </div>
          <div>
            <i className="fas fa-check-circle text-info me-2"></i>
            Access Control & Fire Alarm Integration
          </div>
          <div>
            <i className="fas fa-check-circle text-info me-2"></i>
            Cybersecurity Hardened Firmware
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


            {/* 222 */}

            <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* Left Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold">Hybrid Infrastructure Logic</h2>
            <p className="text-muted">
              Whether you are upgrading a legacy <strong>Coaxial (Analog)</strong> system
              or deploying a new <strong>PoE IP Network</strong>, we provide seamless
              integration using hybrid DVR/NVR technology.
            </p>

            <div className="comparison-box p-4 bg-light rounded-4 mt-4">
              <div className="row text-center">
                <div className="col-6 border-end">
                  <h6 className="fw-bold text-secondary">
                    Analog (HD-TVI/AHD)
                  </h6>
                  <p className="x-small mb-0">
                    Cost-effective, zero-latency, uses existing coax cabling.
                  </p>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold text-info">
                    Network IP (PoE)
                  </h6>
                  <p className="x-small mb-0">
                    Infinite scalability, 4K+ resolution, edge-based AI processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <h3 className="h5 fw-bold mb-4">
              <i className="fas fa-server me-2 text-info"></i>
              Storage & Forensic Data
            </h3>

            <div className="storage-logic p-4 rounded-4 bg-dark text-white">
              <div className="d-flex mb-3">
                <i className="fas fa-database mt-1 me-3 text-info"></i>
                <div>
                  <h6 className="mb-1">Tiered Storage Architecture</h6>
                  <p className="small opacity-75">
                    RAID-5/6 configurations with hot-swappable drives ensuring zero
                    data loss during disk failure.
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <i className="fas fa-cloud-upload-alt mt-1 me-3 text-info"></i>
                <div>
                  <h6 className="mb-1">Hybrid Cloud Failover</h6>
                  <p className="small opacity-75">
                    Critical event clips are instantly uploaded to the cloud,
                    securing evidence even if physical hardware is tampered with.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* 2233 */}

<section className="py-5 bg-light">
  <div className="container">

    {/* Section Header */}
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="fw-bold">Cognitive Video Analytics</h2>
      <p className="text-muted">Transforming video into actionable data.</p>
    </div>

    {/* FORCE 3 CARDS IN ONE ROW */}
    <div className="row gx-4 gy-4 justify-content-center">

      <div className="col-lg-4 col-md-6">
        <div className="analytics-card-ref h-100">
          <div className="analytics-img-ref">
            <img src={require("../../assets/image/facial-recognition-ui.jpg")} alt="Facial Recognition" />
                <div className="ai-scanner-line"></div>
            <span className="ai-tag-ref">FACE_ID: VERIFIED</span>
          </div>
          <div className="p-4">
            <h6 className="fw-bold">Facial & Attribute Search</h6>
            <p className="small text-muted">
              Search hours of footage in seconds by filtering for specific faces,
              clothing colors, or accessories.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="analytics-card-ref h-100">
          <div className="analytics-img-ref">
            <img src={require("../../assets/image/line-crossing-ui.jpg")} alt="Line Crossing" />
                <div className="ai-scanner-line"></div>
            <span className="ai-tag-ref danger">ALARM: LINE CROSS</span>
          </div>
          <div className="p-4">
            <h6 className="fw-bold">Intrusion & Line Crossing</h6>
            <p className="small text-muted">
              AI distinguishes between humans, vehicles, and animals to reduce false alarms by 90%.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="analytics-card-ref h-100">
          <div className="analytics-img-ref">
            <img src={require("../../assets/image/anpr-ui.jpg")} alt="ANPR" />
                <div className="ai-scanner-line"></div>
            <span className="ai-tag-ref info">PLATE: ABC-1234</span>
          </div>
          <div className="p-4">
            <h6 className="fw-bold">LPR / ANPR Integration</h6>
            <p className="small text-muted">
              Automated License Plate Recognition for gate automation and vehicle tracking.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* 333 */}

            <section className="py-5 bg-white">
      <div className="container">

        {/* Header */}
        <div className="row mb-5 text-center" data-aos="fade-up">
          <div className="col">
            <h2 className="fw-bold display-6">Camera Ecosystems</h2>
            <p className="text-muted mt-2">
              From high-definition analog retrofitting to enterprise-grade IP networks.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">

          {/* Analog Card */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="eco-card p-4 rounded-4 shadow-sm h-100">
              <div className="d-flex align-items-start gap-3">
                <div className="eco-icon bg-light text-secondary">
                  <i className="fas fa-microchip"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Analog & HD-TVI Solutions</h5>
                  <p className="text-muted mb-0">
                    Upgrading legacy coaxial systems to 5MP/8MP resolution without rewiring.
                    Cost-effective high-definition surveillance for established facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IP Card */}
          <div className="col-lg-5" data-aos="fade-left">
            <div className="eco-card p-4 rounded-4 shadow-sm h-100 border border-info border-2">
              <div className="d-flex align-items-start gap-3">
                <div className="eco-icon bg-info text-white">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Enterprise IP Systems</h5>
                  <p className="text-muted mb-0">
                    Infinite scalability with Power-over-Ethernet (PoE). Featuring
                    edge-based AI processing and decentralized storage capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

            {/* 444 */}
            <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6" data-aos="zoom-in">
            <div className="storage-img-wrapper shadow rounded-4 overflow-hidden">
              <img
                src={storageImage}
                alt="High Availability CCTV Storage"
                className="img-fluid w-100"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-4">High-Availability Storage</h2>
            <p className="text-muted">
              Video data is the most critical asset of a surveillance system.
              We engineer storage solutions that ensure zero frame loss and
              maximum retention.
            </p>

            <div className="storage-feature-item mb-4">
              <h6 className="fw-bold">
                <i className="fas fa-hdd text-info me-2"></i>
                RAID-6 Redundancy
              </h6>
              <p className="small text-muted mb-0">
                Protects data against simultaneous failure of two hard drives,
                ensuring continuous recording.
              </p>
            </div>

            <div className="storage-feature-item">
              <h6 className="fw-bold">
                <i className="fas fa-compress-alt text-info me-2"></i>
                Smart H.265+ Compression
              </h6>
              <p className="small text-muted mb-0">
                Reduces bandwidth and storage requirements by up to 80% while
                maintaining 4K clarity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


      {/* REMOTE COMMAND */}
      <section className="py-5 bg-dark text-white position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <h2 className="fw-bold text-info">Remote Command & Control</h2>
              <p className="opacity-75">
                Unified VMS interface for mobile, tablet, and workstation
                monitoring.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-center">
                  <div className="dot bg-info me-3"></div>
                  Push Notifications for AI Intrusion
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <div className="dot bg-info me-3"></div>
                  Encrypted Remote Live-view
                </li>
                <li className="d-flex align-items-center">
                  <div className="dot bg-info me-3"></div>
                  Multi-site Centralized CMS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CCTVSurveillance;

