import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/networking.css";

const Networking = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="networking-hero py-5 position-relative overflow-hidden bg-dark text-white">
        <div className="circuit-overlay"></div>
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-primary me-2">INFRASTRUCTURE</span>
                <span className="text-primary small fw-bold text-uppercase">
                  LAN / WAN / SD-WAN
                </span>
              </div>

              <h1 className="display-3 fw-black mb-3">
                Resilient <span className="text-info">Networks</span>
              </h1>

              <p className="lead text-white-50 mb-4">
                Designing resilient communication pathways with zero-downtime
                operations.
              </p>

              <div className="d-flex gap-4">
                <div>
                  <h3 className="fw-bold mb-0">99.99%</h3>
                  <small className="text-info fw-bold">Uptime SLA</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0">Cat6/Fiber</h3>
                  <small className="text-info fw-bold">Standard</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="network-viz-container">
                <i className="fas fa-project-diagram pulse-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section className="py-5">
        <div className="container">
          <h3 className="fw-bold mb-4">Core Infrastructure Solutions</h3>

          <div className="row g-4">
            {[
              {
                icon: "fa-sitemap",
                title: "LAN/WAN Design",
                text: "Strategic architecture for scalable networks."
              },
              {
                icon: "fa-project-diagram",
                title: "Structured Cabling",
                text: "Cat6 and Fiber optic certified deployments."
              },
              {
                icon: "fa-server",
                title: "Rack Design",
                text: "Optimized server room organization."
              },
              // {
              //   icon: "fa-user-lock",
              //   title: "VPN & Security",
              //   text: "Encrypted tunnels and remote access."
              // }
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-3 col-sm-6">
                <div className="net-card p-4 rounded-4 h-100">
                  <div className="net-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h5>{item.title}</h5>
                  <p className="small text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRA MODULES */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Infrastructure Modules</h2>

          <div className="row">
            <div className="col-lg-4">
              <div className="nav flex-column nav-pills custom-net-tabs">
                <button className="nav-link active">LAN / WAN</button>
                <button className="nav-link">Structured Cabling</button>
                <button className="nav-link">Rack Design</button>
                <button className="nav-link">VPN Security</button>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="tech-content-area p-5 bg-white rounded-4 shadow">
                <h3 className="fw-bold mb-3">LAN / WAN Management</h3>
                <p>
                  SD-WAN optimized networks for multi-branch connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-5 align-items-center">
          
          {/* LEFT CONTENT */}
          <div
            className="col-lg-6 order-2 order-lg-1"
            data-aos="fade-right"
          >
            <h2 className="fw-black mb-4">Wired & Wireless Excellence</h2>

            <p className="text-muted">
              We provide end-to-end connectivity solutions, from physical
              structural cabling to high-density Wi-Fi 6 deployments for
              industrial campuses.
            </p>

            <div className="net-spec p-4 bg-white rounded-4 shadow-sm mb-3">
              <h6 className="fw-bold">
                <i className="fas fa-network-wired text-primary me-2"></i>
                Structural Cabling (Cat6a / Fiber)
              </h6>
              <p className="small text-muted mb-0">
                Fluke-tested cable management ensuring zero signal degradation
                across long-distance runs.
              </p>
            </div>

            <div className="net-spec p-4 bg-white rounded-4 shadow-sm">
              <h6 className="fw-bold">
                <i className="fas fa-shield-virus text-primary me-2"></i>
                Network Security & Firewalls
              </h6>
              <p className="small text-muted mb-0">
                Implementing Fortinet and Cisco ASA hardware for deep packet
                inspection and intrusion prevention.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
          >
            <div className="network-topology-visual p-4 bg-dark rounded-4 text-white">
              <h5 className="fw-bold mb-4">
                SD-WAN & Multi-Site Connectivity
              </h5>

              <p className="small opacity-75">
                Connect global offices with a unified software-defined network.
                Our SD-WAN solutions prioritize mission-critical traffic
                (VoIP/ERP) over standard data.
              </p>

              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  Site-to-Site VPN Tunneling
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  Load Balancing & Failover Logic
                </li>
                <li>
                  <i className="fas fa-check text-primary me-2"></i>
                  24/7 Network Operations Center (NOC)
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>


  

<section className="py-5 bg-dark text-white text-center">
  <div className="container">
    <h2 className="display-4 fw-black mb-4">
      Ready to <span className="text-success">Deploy?</span>
    </h2>

    <p className="lead mb-5 opacity-75">
      Our engineering team doesn't just ship boxes. We configure, secure, and install
      your entire infrastructure to be "Plug-and-Play" on Day 1.
    </p>

    <div className="row justify-content-center g-4">
      <div className="col-lg-4 col-md-6">
        <div className="deploy-card h-100">
          <i className="fas fa-truck-loading"></i>
          <h5>Global Logistics</h5>
          <p>Safe transport of sensitive server and panel hardware.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="deploy-card h-100">
          <i className="fas fa-tools"></i>
          <h5>On-Site Install</h5>
          <p>Mounting panels and racking servers by certified techs.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="deploy-card h-100">
          <i className="fas fa-headset"></i>
          <h5>24/7 Support</h5>
          <p>Remote monitoring of firewalls and hardware health.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="service-cta text-center">
        <div className="container">
          <h2>Ready to Build Your Network?</h2>
          <p>Let’s transform your ideas into powerful infrastructure.</p>
          <a href="/contact" className="btn btn-primary">
            Talk to Our Experts
          </a>
        </div>
      </section>
    </>
  );
};

export default Networking;

