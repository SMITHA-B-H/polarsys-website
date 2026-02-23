import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/smartclass.css"; // Ensure you create this file
// import smartImg from "../../assets/image/education.jpg"; // Placeholder path
// import interactivePanel from "../../assets/image/interactive-panel.png"; // Placeholder path
// import interactivePanel from "../../assets/image/board.jpg";

const SmartClass = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="smart-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="digital-glow"></div>
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge border border-primary text-primary mb-3 px-3 py-2 fw-bold text-uppercase">
                Next-Gen Education
              </span>
              <h1 className="display-3 fw-bold mb-3">
                Future-Ready <br />
                <span className="text-primary">Smart Classrooms</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                Transforming traditional learning spaces into interactive, digital hubs 
                with 4K UHD panels, integrated LMS, and hybrid teaching technology.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className="edu-tag">
                  <i className="fas fa-chalkboard-teacher me-2"></i>Interactive 4K Panels
                </div>
                <div className="edu-tag">
                  <i className="fas fa-wifi me-2"></i>Hybrid Connectivity
                </div>
                <div className="edu-tag">
                  <i className="fas fa-vr-cardboard me-2"></i>AR/VR Ready
                </div>
              </div>

              <div className="d-flex gap-4 mt-4">
                <div className="edu-stat" data-aos="zoom-in">
                  <span className="d-block h2 fw-bold text-primary mb-0">4K</span>
                  <small className="text-white-50">UHD Clarity</small>
                </div>
                <div className="vr bg-primary opacity-25"></div>
                <div className="edu-stat" data-aos="zoom-in" data-aos-delay="200">
                  <span className="d-block h2 fw-bold text-primary mb-0">20+</span>
                  <small className="text-white-50">Touch Points</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
               <div className="floating-ui-grid">
                  <div className="ui-item" data-aos="fade-down"><i className="fas fa-pen-nib"></i></div>
                  <div className="ui-item shadow-lg" data-aos="zoom-in" data-aos-delay="150"><i className="fas fa-book-open"></i></div>
                  <div className="ui-item" data-aos="fade-up" data-aos-delay="300"><i className="fas fa-video"></i></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGIES */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">The Interactive Ecosystem</h2>
              <p className="text-muted mb-5">
                Our smart classroom solutions go beyond just screens. We provide a 
                <strong> holistic ecosystem</strong> that integrates hardware, software, 
                and high-speed networking for seamless knowledge transfer.
              </p>

              <div className="accordion custom-edu-accordion" id="eduAccordion">
                <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                  <h2 className="accordion-header">
                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelDetail">
                      <i className="fas fa-desktop me-3 text-primary"></i>
                      IFP (Interactive Flat Panels)
                    </button>
                  </h2>
                  <div id="panelDetail" className="accordion-collapse collapse show" data-bs-parent="#eduAccordion">
                    <div className="accordion-body bg-light-primary">
                      Toughened anti-glare glass with Android/Windows dual OS support. 
                      Enables digital annotation, screen mirroring, and cloud storage saving.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#audioDetail">
                      <i className="fas fa-volume-up me-3 text-primary"></i>
                      Classroom Audio Orchestration
                    </button>
                  </h2>
                  <div id="audioDetail" className="accordion-collapse collapse" data-bs-parent="#eduAccordion">
                    <div className="accordion-body bg-light-primary">
                      Wireless collar mics and distributed ceiling speakers ensure 
                      even sound distribution so every student hears clearly.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="tech-matrix p-4 rounded-4 bg-dark text-white">
                <h5 className="text-primary fw-bold mb-4">
                  <i className="fas fa-layer-group me-2"></i>
                  Setup Workflow
                </h5>
                <div className="matrix-step mb-3 d-flex align-items-center" data-aos="fade-left" data-aos-delay="100">
                  <div className="step-num">01</div>
                  <div><strong>Infrastructure:</strong> High-speed Wi-Fi 6 & PoE cabling.</div>
                </div>
                <div className="matrix-step mb-3 d-flex align-items-center" data-aos="fade-left" data-aos-delay="200">
                  <div className="step-num">02</div>
                  <div><strong>Visual Integration:</strong> 4K IFP installation with OPS PC.</div>
                </div>
                <div className="matrix-step d-flex align-items-center" data-aos="fade-left" data-aos-delay="300">
                  <div className="step-num bg-primary">03</div>
                  <div><strong>Software:</strong> LMS Integration & Teacher Training.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYBRID LEARNING ARCHITECTURE - THE "BRAIN" OF THE CLASSROOM */}
<section className="py-5 bg-dark text-white position-relative">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7" data-aos="fade-right">
        <h2 className="fw-bold mb-4 text-primary">Hybrid Teaching Edge</h2>
        <p className="opacity-75 mb-4">
          Our setup enables a "Broadcast-Ready" environment where students at home 
          experience the same engagement as those in the front row.
        </p>
        
        <div className="row g-3">
          <div className="col-md-6">
            <div className="p-3 border border-primary border-opacity-25 rounded-3 bg-primary bg-opacity-10">
              <h6><i className="fas fa-sync text-primary me-2"></i>Real-time Casting</h6>
              <p className="small mb-0 opacity-75">Instant screen sharing from any student device (iOS, Android, Windows) to the main panel.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border border-primary border-opacity-25 rounded-3 bg-primary bg-opacity-10">
              <h6><i className="fas fa-cloud text-primary me-2"></i>Session Recording</h6>
              <p className="small mb-0 opacity-75">One-touch recording of the entire lecture, including board annotations and audio.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-5" data-aos="zoom-in">
        <div className="tech-spec-box p-4 rounded-4 border border-secondary">
          <h5 className="mb-4"><i className="fas fa-microchip text-primary me-2"></i>Panel Specs</h5>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-2"><span>Resolution</span><strong>3840 x 2160 (4K)</strong></li>
            <li className="d-flex justify-content-between mb-2"><span>Touch Tech</span><strong>Infrared Ultra-Fine</strong></li>
            <li className="d-flex justify-content-between mb-2"><span>OS</span><strong>Android 13 / Win 11 Pro</strong></li>
            <li className="d-flex justify-content-between"><span>Bonding</span><strong>Zero-Gap Technology</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* INTERACTIVE TOOLS SECTION */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="fw-bold">Pre-Loaded <span className="text-primary">Teaching Suite</span></h2>
      <p className="text-muted">Tools designed to make complex subjects easy to visualize.</p>
    </div>
    
    <div className="row g-4">
      <div className="col-md-3" data-aos="flip-left">
        <div className="tool-card text-center p-4 rounded-4 border">
          <i className="fas fa-square-root-alt text-primary h2 mb-3"></i>
          <h6>Math Tools</h6>
          <p className="x-small text-muted">Intelligent geometry & formula recognition.</p>
        </div>
      </div>
      <div className="col-md-3" data-aos="flip-left" data-aos-delay="100">
        <div className="tool-card text-center p-4 rounded-4 border">
          <i className="fas fa-flask text-primary h2 mb-3"></i>
          <h6>Virtual Labs</h6>
          <p className="x-small text-muted">Safe chemistry & physics simulations.</p>
        </div>
      </div>
      <div className="col-md-3" data-aos="flip-left" data-aos-delay="200">
        <div className="tool-card text-center p-4 rounded-4 border">
          <i className="fas fa-globe-americas text-primary h2 mb-3"></i>
          <h6>3D Maps</h6>
          <p className="x-small text-muted">Interactive geography & spatial history.</p>
        </div>
      </div>
      <div className="col-md-3" data-aos="flip-left" data-aos-delay="300">
        <div className="tool-card text-center p-4 rounded-4 border">
          <i className="fas fa-language text-primary h2 mb-3"></i>
          <h6>Language Lab</h6>
          <p className="x-small text-muted">AI-driven phonetics & grammar correction.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* HARDWARE SPECIFICATIONS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Essential Components</h2>
            <p className="text-muted">Precision-engineered hardware for uninterrupted learning.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: "fa-microphone-alt", title: "Smart Audio", desc: "Noise-canceling microphones and spatial audio for hybrid classes." },
              { icon: "fa-video", title: "PTZ Cameras", desc: "Auto-tracking cameras that follow the teacher's movement." },
              { icon: "fa-server", title: "OPS Computing", desc: "Integrated high-performance PC modules for lag-free multitasking." }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="edu-card h-100">
                  <i className={`fas ${item.icon} mb-3 h3 text-primary`}></i>
                  <h6>{item.title}</h6>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default SmartClass;