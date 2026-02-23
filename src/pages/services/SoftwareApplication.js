import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../styles/service-detail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const SoftwareApplicationt = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* ===============================
          SERVICE HERO
      =============================== */}
      <section className="software-hero py-6 bg-dark text-white position-relative overflow-hidden">
        <div className="code-matrix-overlay"></div>

        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-success text-dark me-2">
                  ENTERPRISE GRADE
                </span>
                <span className="text-success small fw-bold tracking-widest text-uppercase">
                  Full-Stack Development
                </span>
              </div>

              <h1 className="display-2 fw-black mb-3">
                Custom <br />
                <span className="text-success-glow">Software Engines</span>
              </h1>

              <p className="lead opacity-75 mb-4">
                We architect scalable, secure, and high-performance applications.
                From custom ERPs to mobile ecosystems, we turn complex business
                logic into seamless digital experiences.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="tech-pill-software">
                    <i className="fas fa-layer-group text-success me-2"></i>
                    Microservices
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tech-pill-software">
                    <i className="fas fa-infinity text-success me-2"></i>
                    DevOps CI/CD
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-5 text-center d-none d-lg-block"
              data-aos="zoom-in"
            >
              <div className="dev-terminal shadow-lg rounded-3 p-3 text-start bg-black border border-secondary mt-3">
                <div className="terminal-dots mb-2">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <code className="text-success small">
                  $ npm run build:production
                </code>
                <br />
                <code className="text-white extra-small">
                  {">"} Optimizing assets... Done.
                </code>
                <br />
                <code className="text-white extra-small">
                  {">"} Deploying to AWS Cluster... [OK]
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
          SERVICE OVERVIEW
      =============================== */}
      <section className="service-detail-section py-6 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="zoom-in-right">
              <div className="image-wrapper-detail position-relative">
                <img
                  src= {require('../../assets/image/service-app-dev.jpg')}
                  className="img-fluid rounded-5 shadow-lg"
                  alt="Application Development"
                />

                <div className="floating-badge-dev bg-white shadow p-3 rounded-4 border d-flex align-items-center">
                  <div className="icon-circle bg-success-light me-3">
                    <i className="fas fa-rocket text-success"></i>
                  </div>
                  <div>
                    <span className="d-block fw-bold small">ADaaS Model</span>
                    <small className="text-muted">
                      Accelerated Delivery
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="text-success fw-bold text-uppercase tracking-widest small d-block mb-2">
                Core Competency
              </span>

              <h2 className="display-5 fw-black mb-3">
                Next-Generation <span className="text-success">ADaaS</span>{" "}
                Ecosystems
              </h2>

              <p className="lead fw-medium">
                Polarsys delivers end-to-end application development services—
                from architectural ideation to cloud-native deployment.
              </p>

              <div className="technical-description text-muted mb-4">
                <p>
                  Application Development as a Service (ADaaS) provides businesses
                  with a comprehensive, end-to-end solution for building,
                  deploying, and maintaining custom applications.
                </p>
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="d-flex">
                    <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                    <div>
                      <strong>Robust Scalability</strong>
                      <small className="d-block">
                        Designed to grow with users.
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex">
                    <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                    <div>
                      <strong>UX-First Design</strong>
                      <small className="d-block">
                        Seamless user journeys.
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className="btn btn-success btn-lg px-4 py-3 rounded-pill fw-bold shadow-sm mt-4"
              >
                Request System Architecture{" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>


        {/* =========================
          WHAT WE OFFER
      ========================= */}
      <section className="offer-section py-6 bg-white overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-7" data-aos="fade-right">
              <div className="row g-4">

                <div className="col-md-6">
                  <div className="offer-card-premium p-4 rounded-4 border shadow-sm h-100">
                    <div className="icon-box-sm mb-3 bg-success text-white">
                      <i className="fas fa-sync-alt"></i>
                    </div>
                    <h5 className="fw-bold">Agile & Scrum</h5>
                    <p className="small text-muted mb-0">
                      Bi-weekly sprint cycles with continuous stakeholder feedback loops and JIRA-tracked velocity.
                    </p>
                  </div>
                </div>

                {/* <div className="col-md-6">
                  <div className="offer-card-premium p-4 rounded-4 border shadow-sm h-100">
                    <div className="icon-box-sm mb-3 bg-dark text-white">
                      <i className="fab fa-git-alt"></i>
                    </div>
                    <h5 className="fw-bold">Git Flow Architecture</h5>
                    <p className="small text-muted mb-0">
                      Rigorous branch management (Main, Develop, Feature) with mandatory peer code reviews.
                    </p>
                  </div>
                </div> */}

                {/* <div className="col-md-6">
                  <div className="offer-card-premium p-4 rounded-4 border shadow-sm h-100">
                    <div className="icon-box-sm mb-3 bg-info text-white">
                      <i className="fas fa-infinity"></i>
                    </div>
                    <h5 className="fw-bold">CI/CD Integration</h5>
                    <p className="small text-muted mb-0">
                      Automated build, test, and deployment pipelines using Docker, Jenkins, or GitHub Actions.
                    </p>
                  </div>
                </div> */}

                <div className="col-md-6">
                  <div className="offer-card-premium p-4 rounded-4 border shadow-sm h-100">
                    <div className="icon-box-sm mb-3 bg-warning text-dark">
                      <i className="fas fa-file-code"></i>
                    </div>
                    <h5 className="fw-bold">Technical Specs</h5>
                    <p className="small text-muted mb-0">
                      Comprehensive API documentation via Swagger/OpenAPI and system architecture mapping.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-left">
              <div className="process-visual-container position-relative">
                <div className="floating-stat-card p-3 shadow-lg rounded-3 bg-white border">
                  <div className="d-flex align-items-center">
                    <div className="pulse-green me-2"></div>
                    <span className="fw-bold small">Production: Stable</span>
                  </div>
                  <div className="progress mt-2" style={{ height: "5px" }}>
                    <div className="progress-bar bg-success" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          SDLC + STACK
      ========================= */}
      <section className="py-5 bg-white">
        <div className="container">

          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="dev-feature-card p-4 rounded-4 border-start border-success border-4 shadow-sm h-100">
                <h5 className="fw-bold">
                  <i className="fas fa-desktop text-success me-2"></i>
                  Web & Enterprise Apps
                </h5>
                <p className="small text-muted">
                  Scalable SaaS platforms, B2B portals, and custom ERP/CRM systems built with React, Angular, and Node.js.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
              <div className="dev-feature-card p-4 rounded-4 border-start border-success border-4 shadow-sm h-100">
                <h5 className="fw-bold">
                  <i className="fas fa-mobile-alt text-success me-2"></i>
                  Mobile Ecosystems
                </h5>
                <p className="small text-muted">
                  Native and Cross-platform (Flutter/React Native) mobile applications with seamless API integrations.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
              <div className="dev-feature-card p-4 rounded-4 border-start border-success border-4 shadow-sm h-100">
                <h5 className="fw-bold">
                  <i className="fas fa-database text-success me-2"></i>
                  Cloud & Microservices
                </h5>
                <p className="small text-muted">
                  Migrating monolithic systems to AWS/Azure cloud architectures using Docker and Kubernetes.
                </p>
              </div>
            </div> */}
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-black mb-4">Our SDLC Approach</h2>

              <div className="step-item d-flex mb-4">
                <div className="step-num">01</div>
                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Architecture Design</h6>
                  <p className="small text-muted mb-0">
                    Defining data flow, database schemas, and security protocols before a single line of code is written.
                  </p>
                </div>
              </div>

              <div className="step-item d-flex mb-4">
                <div className="step-num">02</div>
                <div className="ms-3">
                  <h6 className="fw-bold mb-1">Agile Sprint Cycles</h6>
                  <p className="small text-muted mb-0">
                    Bi-weekly iterations with full stakeholder transparency and continuous testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="zoom-in-left">
              <div className="stack-grid bg-light p-4 rounded-4 border">
                <h6 className="fw-bold text-center mb-4">Preferred Tech Stack</h6>

                <div className="row g-3 text-center">
                  <div className="col-4"><i className="fab fa-react fa-2x text-info"></i><p className="x-small mt-1">React</p></div>
                  <div className="col-4"><i className="fab fa-python fa-2x text-primary"></i><p className="x-small mt-1">Python</p></div>
                  <div className="col-4"><i className="fab fa-aws fa-2x text-warning"></i><p className="x-small mt-1">AWS</p></div>
                  <div className="col-4"><i className="fab fa-docker fa-2x text-info"></i><p className="x-small mt-1">Docker</p></div>
                  <div className="col-4"><i className="fab fa-js fa-2x text-warning"></i><p className="x-small mt-1">Node.js</p></div>
                  <div className="col-4"><i className="fas fa-database fa-2x text-secondary"></i><p className="x-small mt-1">PostgreSQL</p></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          DEVELOPMENT PROCESS
      ========================= */}
      <section className="service-process1">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">
            Our Development Process
          </h2>

          <div className="row text-center">
            {["Plan", "Design", "Build", "Test", "Deploy", "Support"].map((step, index) => (
              <div
                key={step}
                className="col-md-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    


      {/* ===============================
          CTA
      =============================== */}
      <section className="service-cta text-center">
        <div className="container" data-aos="fade-up">
          <h2>Ready to Build Your Application?</h2>
          <p>Let’s transform your ideas into powerful digital solutions.</p>
          <a href="/contact" className="btn btn-primary">
            Talk to Our Experts
          </a>
        </div>
      </section>
    </>
  );
};

export default SoftwareApplicationt;
