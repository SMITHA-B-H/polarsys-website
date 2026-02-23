import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/intercom.css"; 

const IntercomService = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  const features = [
    { icon: <i className="fas fa-video"></i>, title: "HD Video Crystal", desc: "Two-way high-definition video communication with infrared night vision." },
    { icon: <i className="fas fa-mobile-alt"></i>, title: "Mobile Integration", desc: "Receive doorbell calls and unlock doors directly from your smartphone." },
    { icon: <i className="fas fa-shield-alt"></i>, title: "Tamper Alerts", desc: "Instant notifications if the outdoor station is tampered with or moved." },
    { icon: <i className="fas fa-network-wired"></i>, title: "SIP Protocol", desc: "Standardized SIP support for seamless integration with existing IP PBX systems." }
  ];

  // Add these to your features array
const telecomFeatures = [
  { icon: <i className="fas fa-phone-volume"></i>, title: "PBX Integration", desc: "Connects outdoor stations directly to your office IP-PBX as a standard extension." },
  { icon: <i className="fas fa-sim-card"></i>, title: "GSM Gateway", desc: "Forwards door calls to mobile numbers via SIM-based routing when internet is down." },
  { icon: <i className="fas fa-headset"></i>, title: "Centralized Console", desc: "Front desk operators can manage multiple building entries from a single VoIP phone." }
];
  const intercomTypes = ["IP Video Intercom", "Wireless Video Doorbell", "Multi-Apartment Systems", "Industrial SIP Stations"];
  const installationSteps = ["Plan network layout & PoE drops", "Mount outdoor station at 1.5m height", "Connect Ethernet/PoE to Network Switch", "Configure IP addresses & SIP accounts", "Test mobile app & indoor monitor sync"];

  return (
    <div className="intercom-page">
      {/* HIGH-TECH HERO SECTION */}
      <section className="intercom-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="connection-grid"></div> {/* Animated background lines */}
        
        <div className="container position-relative z-index-2">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge border border-info text-info mb-3 px-3 py-2 fw-bold text-uppercase">
                Smart Communication
              </span>
              <h1 className="display-3 fw-bold mb-3">
                Seamless <br />
                <span className="text-info">Intercomm</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                Advanced IP-based communication systems that bridge the gap between 
                security and convenience. Control your perimeter from anywhere in the world.
              </p>

              <div className="d-flex gap-4 mb-5">
                <div className="hero-stat">
                  <span className="d-block h2 fw-bold text-info mb-0">Full IP</span>
                  <small className="text-white-50">End-to-End Encryption</small>
                </div>
                <div className="vr bg-info opacity-25"></div>
                <div className="hero-stat">
                  <span className="d-block h2 fw-bold text-info mb-0">2-Way</span>
                  <small className="text-white-50">HD Audio/Video</small>
                </div>
              </div>
              
              <button className="btn btn-info btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg">
                Explore Systems
              </button>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-visual-container">
                {/* Image tag for visual representation of the technology */}
                
                <div className="floating-card p-4 rounded-4 shadow-lg border border-secondary">
                   <div className="d-flex align-items-center mb-2">
                      <div className="pulse-dot me-2"></div>
                      <small className="text-info fw-bold">System Online</small>
                   </div>
                   <p className="mb-0 small">Front Gate: Identification Verified <i className="fas fa-check-circle ms-1"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Key Technologies</h2>
            <div className="underline mx-auto"></div>
          </div>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="feature-card h-100 p-4 border rounded-4 text-center transition-all">
                  <div className="feature-icon mb-3 text-info h2">{f.icon}</div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="small text-muted mb-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* // Inside your return() - Add this section before the Installation Guide */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right">
        <h2 className="fw-bold mb-4">The <span className="text-info">Telecom Bridge</span></h2>
        <p className="text-muted">
          Our intercoms aren't just standalone doorbells; they are fully functional 
          <strong> VoIP endpoints</strong>. By integrating with your existing telecommunications 
          infrastructure, you ensure no visitor is ever missed.
        </p>
        
        <ul className="list-unstyled">
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-check-circle text-info me-3"></i>
            <div><strong>SIP Trunking:</strong> Connects to global VoIP providers for remote access.</div>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-check-circle text-info me-3"></i>
            <div><strong>Paging Integration:</strong> Use the intercom as a public address speaker for announcements.</div>
          </li>
        </ul>
      </div>
      
      <div className="col-lg-6" data-aos="zoom-in">
        <div className="telecom-diagram p-4 rounded-4 bg-light border border-info border-opacity-25">
           {/* Visual representation of Intercom to Phone System flow */}
           
           <div className="text-center mt-3">
             <small className="text-uppercase fw-bold text-muted">Unified Communications Flow</small>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* SYSTEM TYPES & INSTALLATION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
               <h2 className="fw-bold mb-4">Intercom Solutions</h2>
               <div className="intercom-types d-grid gap-3">
                  {intercomTypes.map((type, index) => (
                    <div className="intercom-card p-3 bg-white shadow-sm rounded-3 border-start border-info border-4" key={index}>
                      <h6 className="mb-0 fw-bold">{type}</h6>
                    </div>
                  ))}
               </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
               <div className="installation-guide p-4 bg-dark text-white rounded-4 shadow-lg">
                  <h3 className="text-info mb-4">IP Deployment Logic</h3>
                  <p className="small text-white-50 mb-4">
                    <strong>Infrastructure:</strong> Cat6 cabling is required for stable PoE data transfer.
                  </p>
                  <ul className="list-unstyled">
                    {installationSteps.map((step, index) => (
                      <li key={index} className="mb-3 d-flex align-items-start">
                        <span className="step-badge me-3">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntercomService;