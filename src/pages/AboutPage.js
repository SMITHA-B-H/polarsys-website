import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/AboutPage.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="page-hero2">
        <div className="container">
          <h1 data-aos="fade-up">About Polarsys</h1>
          <p data-aos="fade-up" data-aos-delay="150">
            <a href="/">Home</a> / About Us
          </p>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="about-section py-5 overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-img-wrapper position-relative">
                <img
                  src={require("../assets/image/about.jpg")}
                  className="img-fluid rounded-4 shadow-lg"
                  alt="About Polarsys"
                />
                <div className="experience-badge shadow-lg">
                  <span>1+</span>
                  <p>Years of Industry Expertise</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="section-label">About the Company</span>
              <h2>Polarsys – Your Partner in Digital Transformation</h2>
              <p className="lead">
                Polarsys Global IT Solutions delivers scalable, secure, and
                future-ready digital infrastructure.
              </p>
              <p>
               We bridge the gap between complex engineering and business growth. From mission-critical fire safety systems to high-performance application development, we ensure your infrastructure is built for tomorrow.
              </p>

              <div className="about-stats-grid">
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-project-diagram"></i></div>
                  <strong>100+</strong>
                  <span>Projects</span>
                </div>
                <div className="stat-card">
                  <div class="stat-icon"><i class="fas fa-users"></i></div>
                  <strong>50+</strong>
                  <span>Clients</span>
                </div>
                <div className="stat-card">
                  <div class="stat-icon"><i class="fas fa-layer-group"></i></div>
                  <strong>10+</strong>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    BRAND & LEADERSHIP
========================= */}
<section className="brand-leadership">
  <div className="container">

    <div className="brand-leadership-grid">

      {/* BRAND */}
      <div data-aos="fade-right">
        <div className="brand-card11">
          <h3>A Symbol of Trust and Quality</h3>
          <p>
            With a strong reputation for delivering impactful technology solutions,
            Polarsys stands for reliability, innovation, and forward-thinking strategies.
            Our brand reflects our commitment to excellence and long-term partnerships.
          </p>
          <img
            src={require("../assets/image/brand.jpg")}
            alt="Brand Identity"
          />
        </div>
      </div>

      {/* LEADERSHIP */}
      <div data-aos="fade-left">
        <div className="leadership-card">
          <h3>Leaders Who Drive Change</h3>
          <p>
            Guided by vision and experience, our leadership team focuses on creating
            value through innovation, collaboration, and strategic execution.
            We inspire teams to deliver solutions that make a real impact.
          </p>
          <img
            src={require("../assets/image/leadership.jpg")}
            alt="Leadership"
          />
        </div>
      </div>

    </div>

  </div>
</section>

{/* =========================
    CORE VALUES
========================= */}
<section className="core-values-section">
  <div className="container">

    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="core-values-title">Our Core Values</h2>
    </div>

    {/* GRID */}
    <div className="core-values-grid">
      {[
        {
          icon: "fa-shield-halved",
          title: "Integrity & Transparency",
          text: "We build trust through honest communication and ethical business practices."
        },
        {
          icon: "fa-circle-check",
          title: "Safety & Compliance",
          text: "Adhering to the highest safety standards and regulatory requirements."
        },
        {
          icon: "fa-lightbulb",
          title: "Innovation & Adaptability",
          text: "Embracing new technologies and adapting to changing market needs."
        },
        {
          icon: "fa-users",
          title: "Customer Focus",
          text: "Putting our clients first and delivering exceptional service experiences."
        },
        {
          icon: "fa-award",
          title: "Quality & Reliability",
          text: "Committed to excellence in every solution we deliver."
        },
        {
          icon: "fa-bullseye",
          title: "Continuous Learning & Excellence",
          text: "Always improving our skills and striving for operational excellence."
        }
      ].map((item, index) => (
        <div className="core-value-card" key={index} data-aos="fade-up">
          <div className="icon">
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>

  </div>
</section>



      {/* VISION & MISSION */}
      <section className="vision-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="vision-card">
                <img src={require("../assets/icons/vision.png")} alt="Vision" />
                <h3>Our Vision</h3>
                <p>
                  To be the premier technology partner delivering integrated
                  solutions that create safer and smarter environments.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="zoom-in" data-aos-delay="150">
              <div className="vision-card">
                <img src={require("../assets/icons/mission.png")} alt="Mission" />
                <h3>Our Mission</h3>
                <p>
                  To provide reliable, scalable, and compliant solutions aligned
                  with long-term business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* =========================
    COMPLIANCE & QUALITY ASSURANCE
========================= */}
<section className="compliance-section py-5 bg-light border-top">
  <div className="container">

    {/* Section Header */}
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="badge bg-primary-soft text-primary mb-2 px-3 py-2">
        Safety & Quality
      </span>
      <h2 className="fw-bold">Compliance & Quality Assurance</h2>
      <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
        Polarsys Global operates under strict international benchmarks and national
        regulatory frameworks to ensure zero-compromise delivery.
      </p>
    </div>

    {/* GRID */}
    <div className="compliance-main-grid">

      {/* Regulatory Frameworks */}
      <div data-aos="fade-right">
        <div className="compliance-group-card p-4 h-100">
          <h5 className="fw-bold mb-4 d-flex align-items-center">
            <i className="fas fa-certificate text-primary me-2"></i>
            Regulatory Frameworks
          </h5>

          <div className="compliance-grid">
            <div className="compliance-tile">
              <span className="tile-title">ISO 9001:2015</span>
              <p className="tile-text">Quality Management Standards</p>
            </div>

            <div className="compliance-tile">
              <span className="tile-title">NBC 2016</span>
              <p className="tile-text">National Building Code Compliance</p>
            </div>

            <div className="compliance-tile">
              <span className="tile-title">PESO/CE</span>
              <p className="tile-text">Electrical & Fire Safety Standards</p>
            </div>

            <div className="compliance-tile">
              <span className="tile-title">Licensed</span>
              <p className="tile-text">Certified Security System Integrators</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Control Protocols */}
      <div data-aos="fade-left">
        <div className="compliance-group-card p-4 h-100">
          <h5 className="fw-bold mb-4 d-flex align-items-center">
            <i className="fas fa-clipboard-check text-success me-2"></i>
            Quality Control Protocols
          </h5>

          <div className="qc-list">

            <div className="qc-item">
              <div className="qc-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <div>
                <h6>Certified Hardware</h6>
                <p className="small text-muted mb-0">
                  OEM-certified components for CCTV and Fire Alarms.
                </p>
              </div>
            </div>

            <div className="qc-item">
              <div className="qc-icon">
                <i className="fas fa-search-plus"></i>
              </div>
              <div>
                <h6>System Audits</h6>
                <p className="small text-muted mb-0">
                  Mandatory periodic testing and load-balance checks.
                </p>
              </div>
            </div>

            <div className="qc-item">
              <div className="qc-icon">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div>
                <h6>Documentation</h6>
                <p className="small text-muted mb-0">
                  Full installation logs, CAD layouts, and warranties provided.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>



{/* =========================
    ENGAGEMENT & SUPPORT ECOSYSTEM
========================= */}
<section className="support-model py-5 bg-white">
  <div className="container">

    {/* Section Header */}
    <div className="text-center mb-5" data-aos="fade-up">
      <span className="text-primary fw-bold small text-uppercase tracking-widest">
        Post-Implementation
      </span>
      <h2 className="fw-bold mt-2">Engagement & Support Ecosystem</h2>
      <div className="mx-auto bg-primary mt-3" style={{ height: "3px", width: "60px" }} />
    </div>

    {/* GRID CONTAINER */}
    <div className="support-grid">

      {/* Flexible Engagement */}
      <div className="support-card" data-aos="fade-up">
        <div className="support-icon bg-blue-soft">
          <i className="fas fa-handshake"></i>
        </div>

        <h5 className="fw-bold mb-3">Flexible Engagement</h5>
        <p className="text-muted small">
          Transparent pricing tailored to project scale and complexity.
        </p>

        <ul className="support-list">
          <li><i className="fas fa-check-circle"></i> Fixed-Price Turnkey Projects</li>
          <li><i className="fas fa-check-circle"></i> Time & Material (T&amp;M) Model</li>
          <li><i className="fas fa-check-circle"></i> Milestone-Based Payments</li>
        </ul>
      </div>

      {/* Proactive Maintenance */}
      <div className="support-card border-primary-highlight" data-aos="fade-up">
        <div className="support-icon bg-green-soft">
          <i className="fas fa-tools"></i>
        </div>

        <h5 className="fw-bold mb-3">Proactive Maintenance</h5>
        <p className="text-muted small">
          Comprehensive Annual Maintenance Contracts (AMC) for zero downtime.
        </p>

        <ul className="support-list">
          <li><i className="fas fa-check-circle"></i> 4-Hour Emergency Response</li>
          <li><i className="fas fa-check-circle"></i> Quarterly System Health Audits</li>
          <li><i className="fas fa-check-circle"></i> Remote &amp; On-Site Troubleshooting</li>
        </ul>

        <span className="sla-badge">SLA GUARANTEED</span>
      </div>

      {/* Warranty & Assurance */}
      <div className="support-card" data-aos="fade-up">
        <div className="support-icon bg-purple-soft">
          <i className="fas fa-shield-alt"></i>
        </div>

        <h5 className="fw-bold mb-3">Warranty &amp; Assurance</h5>
        <p className="text-muted small">
          Full protection for your hardware and software investments.
        </p>

        <ul className="support-list">
          <li><i className="fas fa-check-circle"></i> OEM Manufacturer Warranty</li>
          <li><i className="fas fa-check-circle"></i> Software Patch Updates</li>
          <li><i className="fas fa-check-circle"></i> Post-Warranty Support Extensions</li>
        </ul>
      </div>

    </div>
  </div>
</section>



{/* TEAM GRID */}
{/* TEAM GRID - Updated for 5 Leaders */}
<section>
    {/* Section Header */}

    <div className="text-center mb-5" data-aos="fade-up">

      <span className="text-primary fw-bold small text-uppercase tracking-widest">

        Leadership

      </span>

      <h2 className="fw-bold mt-2">The Visionaries Behind Polarsys</h2>

      <div

        className="mx-auto bg-primary mt-3"

        style={{ height: "3px", width: "60px" }}

      ></div>

    </div>
</section>
<div className="d-flex flex-wrap justify-content-center g-4 mt-2">
  
  {/* Leader 1 - Ravish */}
  <div className="col-leader">
    <div className="card leader-card border-0 text-center shadow-sm h-100" data-aos="fade-up" data-aos-delay="100">
      <div className="leader-image-container mt-4">
        <img src={require("../assets/image/ravi.png")} className="rounded-circle profile-img" alt="Ravish H S" />
        <div className="social-overlay">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="card-body p-4">
        <h5 className="fw-bold mb-1">Ravish H S</h5>
        <p className="text-primary small fw-bold mb-3">Founder / CEO</p>
        <p className="small text-muted px-2">Driving strategic growth and safety infrastructure standards.</p>
      </div>
    </div>
  </div>

  {/* Leader 5 - Pavithra */}
  <div className="col-leader">
    <div className="card leader-card border-0 text-center shadow-sm h-100" data-aos="fade-up" data-aos-delay="500">
      <div className="leader-image-container mt-4">
        <img src={require("../assets/image/pavi.png")} className="rounded-circle profile-img" alt="Pavithra B" />
        <div className="social-overlay">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="card-body p-4">
        <h5 className="fw-bold mb-1">Pavithra B</h5>
        <p className="text-primary small fw-bold mb-3">Board of Director</p>
        <p className="small text-muted px-2">Overseeing corporate governance and long-term vision.</p>
      </div>
    </div>
  </div>
</div>

<br/>
<br/>


{/* TEAM GRID - Updated for 5 Leaders */}
<section>
    {/* Section Header */}

    <div className="text-center mb-5" data-aos="fade-up">

      <span className="text-primary fw-bold small text-uppercase tracking-widest">
      </span>
      <h2 className="fw-bold mt-2">The Advisors Board Polarsys</h2>
      <div

        className="mx-auto bg-primary mt-3"

        style={{ height: "3px", width: "60px" }}

      ></div>

    </div>
</section>
<div className="d-flex flex-wrap justify-content-center g-4 mt-2">
  {/* leader 11 */}
  <div className="col-leader">
  <div
    className="card leader-card border-0 text-center shadow-sm h-100"
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <div className="leader-image-container mt-4">
      <img
        src={require("../assets/image/sandeepa.png")} // make sure image exists
        className="rounded-circle profile-img"
        alt="Sandeep BS"
      />
      <div className="social-overlay">
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fas fa-envelope"></i></a>
      </div>
    </div>

    <div className="card-body p-4">
      <h5 className="fw-bold mb-1">Sandeep BS</h5>
      <p className="text-primary small fw-bold mb-3">Chief Technology Officer (CTO)</p>
      <p className="small text-muted px-2">
        Driving technology strategy, system architecture, and scalable innovation.
      </p>
    </div>
  </div>
</div>
  {/* Leader 2 - Anjaneya */}

    <div className="col-leader">
    <div className="card leader-card border-0 text-center shadow-sm h-100" data-aos="fade-up" data-aos-delay="400">
      <div className="leader-image-container mt-4">
        <img src={require("../assets/image/chethan.png")} className="rounded-circle profile-img" alt="Chethan kumar V" />
        <div className="social-overlay">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="card-body p-4">
        <h5 className="fw-bold mb-1">Chethan kumar V</h5>
        <p className="text-primary small fw-bold mb-3">Technical Head</p>
        <p className="small text-muted px-2">Specializing in full-stack development and security.</p>
      </div>
    </div>
  </div>

 {/* Leader 3 - Chethan */}

  <div className="col-leader">
    <div className="card leader-card border-0 text-center shadow-sm h-100" data-aos="fade-up" data-aos-delay="200">
      <div className="leader-image-container mt-4">
        <img src={require("../assets/image/anjaneya.png")} className="rounded-circle profile-img" alt="Anjaneya E" />
        <div className="social-overlay">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="card-body p-4">
        <h5 className="fw-bold mb-1">Anjaneya E</h5>
        <p className="text-primary small fw-bold mb-3">Director of Engineering</p>
        <p className="small text-muted px-2">Leading software innovation and networking architectures.</p>
      </div>
    </div>
  </div>

  {/* Leader 4 - Mahanthesh */}
  <div className="col-leader">
    <div className="card leader-card border-0 text-center shadow-sm h-100" data-aos="fade-up" data-aos-delay="300">
      <div className="leader-image-container mt-4">
        <img src={require("../assets/image/mahanthesh.png")} className="rounded-circle profile-img" alt="Mahanthesh R" />
        <div className="social-overlay">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="card-body p-4">
        <h5 className="fw-bold mb-1">Mahanthesh R</h5>
        <p className="text-primary small fw-bold mb-3">Head of Sales</p>
        <p className="small text-muted px-2">Expert in strategic partnerships and market expansion.</p>
      </div>
    </div>
  </div>
</div>

  
      {/* CTA */}

  {/* =========================
    GLOBAL CTA SECTION
========================= */}
<section className="cta-section">
  <div className="container">
    <div className="cta-content text-center" data-aos="fade-up">
      <h2 className="cta-heading">
        Ready to Transform Your Business?
      </h2>
      <p className="cta-subtext">
        Let’s discuss how POLARSYS can help you achieve your technology and
        security goals
      </p>

      <a href="/contact" className="cta-btn">
        Contact Us Today
        <i className="fas fa-arrow-right ms-2"></i>
      </a>
    </div>
  </div>
</section>

    </>
  );
};

export default AboutPage;
