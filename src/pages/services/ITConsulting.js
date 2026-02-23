import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/itconsulting.css"; 

const ITConsulting = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  const consultingServices = [
    { icon: "fa-network-wired", title: "Infrastructure Audit", desc: "Comprehensive evaluation of your current network, server health, and hardware lifecycle." },
    { icon: "fa-user-shield", title: "Cybersecurity Strategy", desc: "Developing zero-trust architectures and incident response protocols to protect enterprise data." },
    { icon: "fa-cloud-upload-alt", title: "Cloud Migration", desc: "Seamless transition of local workloads to AWS, Azure, or Hybrid Cloud environments." },
    { icon: "fa-project-diagram", title: "Digital Transformation", desc: "Modernizing legacy workflows through AI integration and custom software roadmaps." }
  ];

  return (
    <div className="consulting-page">
      {/* ENTERPRISE HERO SECTION */}
      <section className="consulting-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="abstract-bg"></div>
        <div className="container position-relative z-index-2">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge border border-primary text-primary mb-3 px-3 py-2 fw-bold text-uppercase">
                Strategic IT Excellence
              </span>
              <h1 className="display-3 fw-bold mb-3">
                Architecting Your <br />
                <span className="text-primary">Digital Future</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                We bridge the gap between business goals and technological capability through 
                expert-led IT consulting and vendor-neutral strategic planning.
              </p>

              <div className="d-flex gap-4 mt-5">
                <div className="consult-stat">
                  <span className="d-block h2 fw-bold text-primary mb-0">15+</span>
                  <small className="text-white-50">Years Experience</small>
                </div>
                <div className="vr bg-primary opacity-25"></div>
                <div className="consult-stat">
                  <span className="d-block h2 fw-bold text-primary mb-0">500+</span>
                  <small className="text-white-50">Projects Delivered</small>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block" data-aos="zoom-in">
              <div className="consulting-visual">
                <div className="floating-data-card shadow-lg p-4 rounded-4">
                   <h6 className="text-primary fw-bold"><i className="fas fa-chart-line me-2"></i>Efficiency Gain</h6>
                   <div className="progress mt-2" style={{height: "8px"}}>
                      <div className="progress-bar bg-primary" style={{width: "85%"}}></div>
                   </div>
                   <p className="small text-muted mt-2 mb-0">Optimized Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC SERVICES */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Consulting Pillars</h2>
            <div className="heading-line mx-auto"></div>
          </div>
          <div className="row g-4">
            {consultingServices.map((s, i) => (
              <div key={i} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="pillar-card p-4 h-100 border-0 shadow-sm rounded-4 text-center">
                  <div className="pillar-icon-box mb-3 mx-auto">
                    <i className={`fas ${s.icon}`}></i>
                  </div>
                  <h5 className="fw-bold">{s.title}</h5>
                  <p className="small text-muted mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING WORKFLOW */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Our <span className="text-primary">Methodology</span></h2>
              <div className="method-step mb-4 d-flex">
                 <div className="step-count me-3">01</div>
                 <div>
                    <h6 className="fw-bold">Discovery & Assessment</h6>
                    <p className="small text-muted">We analyze your current tech stack and identify operational bottlenecks.</p>
                 </div>
              </div>
              <div className="method-step mb-4 d-flex">
                 <div className="step-count me-3">02</div>
                 <div>
                    <h6 className="fw-bold">Strategic Roadmap</h6>
                    <p className="small text-muted">We design a custom implementation plan aligned with your 5-year business goals.</p>
                 </div>
              </div>
              <div className="method-step d-flex">
                 <div className="step-count me-3 bg-primary text-white">03</div>
                 <div>
                    <h6 className="fw-bold">Execution & Governance</h6>
                    <p className="small text-muted">Hands-on management of deployments with continuous security monitoring.</p>
                 </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="p-5 bg-dark text-white rounded-5 shadow-lg">
                <h4 className="text-primary mb-4">Ready to Modernize?</h4>
                <p className="opacity-75 mb-4">Book a consultation with our senior architects to review your IT roadmap.</p>
                <button className="btn btn-primary btn-lg w-100 py-3 fw-bold">Schedule Audit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

        

        {/* STRATEGIC GOVERNANCE SECTION */}
<section className="py-5 bg-dark text-white">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6" data-aos="fade-right">
        <h2 className="fw-bold mb-4">Strategic <span className="text-primary">IT Governance</span></h2>
        <p className="lead text-white-50">
          We don't just recommend technology; we build scalable frameworks that ensure your 
          IT infrastructure evolves with your business.
        </p>
        
        <div className="consulting-feature-list mt-4">
          <div className="d-flex mb-4">
            <div className="icon-circle bg-primary text-white me-3">
              <i className="fas fa-microchip"></i>
            </div>
            <div>
              <h5 className="mb-1">Vendor Neutrality</h5>
              <p className="small opacity-75">We work with Bosch, Hikvision, and D-Link to find the right fit for your specific budget and scale.</p>
            </div>
          </div>
          
          <div className="d-flex mb-4">
            <div className="icon-circle bg-primary text-white me-3">
              <i className="fas fa-lock"></i>
            </div>
            <div>
              <h5 className="mb-1">Compliance & Risk</h5>
              <p className="small opacity-75">Ensuring your data handling meets industry standards across Healthcare and Corporate sectors.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-left">
        <div className="framework-box p-4 rounded-4 border border-secondary bg-opacity-10 bg-primary">
          <h4 className="text-primary mb-4 text-center">Implementation Lifecycle</h4>
          
          <ul className="list-unstyled mt-3">
            <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i> Initial Infrastructure Audit</li>
            <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i> Partner Technology Selection (Bosch/Hikvision)</li>
            <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i> Pilot Testing & Deployment</li>
            <li><i className="fas fa-check-circle text-primary me-2"></i> 24/7 Managed Support Roadmap</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* PARTNERS & INDUSTRIES SECTION */}
        {/* <section className="py-5 bg-white">
        <div className="container text-center">
            <div className="mb-5" data-aos="fade-up">
            <h6 className="text-primary text-uppercase fw-bold ls-2">Our Ecosystem</h6>
            <h2 className="fw-bold">Trusted by Industry Leaders</h2>
            <div className="heading-line mx-auto"></div>
            </div>

            
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5" data-aos="fade-up">
            {['Real Estate', 'Education', 'Healthcare', 'Corporate Offices', 'Residential Estates'].map((industry) => (
                <span key={industry} className="industry-badge px-4 py-2 shadow-sm border rounded-pill">
                <i className="fas fa-university me-2 text-primary"></i> {industry}
                </span>
            ))}
            </div>

        </div>
        </section> */}

    </div>
  );
};

export default ITConsulting;