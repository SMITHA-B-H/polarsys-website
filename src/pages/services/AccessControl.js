import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/accesscontrol.css"
import sec from "../../assets/image/accesscontrol.png"
import polarsysImg from "../../assets/image/polarsys.png";

const AccessControl = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="access-soc py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="laser-scanner"></div>

        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge border border-success text-success mb-3 px-3 py-2 fw-bold text-uppercase">
                Secure Access
              </span>

              <h1 className="display-3 fw-bold mb-3">
                AI-Powered <br />
                <span className="text-success">Access Control</span>
              </h1>

              <p className="lead text-white-50 mb-4">
                Eliminating physical keys through decentralized biometric authentication and real-time cloud-based audit trails.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className="security-tag">
                  <i className="fas fa-fingerprint me-2"></i>Biometric MFA
                </div>
                <div className="security-tag">
                  <i className="fas fa-cloud-upload-alt me-2"></i>Cloud Event Logs
                </div>
                <div className="security-tag">
                  <i className="fas fa-door-closed me-2"></i>Fail-Safe EM Locks
                </div>
              </div>

              <div className="d-flex gap-4 mt-4">
                <div className="security-stat" data-aos="zoom-in">
                  <span className="d-block h2 fw-bold text-success mb-0">0.3s</span>
                  <small className="text-white-50">Recognition Speed</small>
                </div>
                <div className="vr bg-success opacity-25"></div>
                <div className="security-stat" data-aos="zoom-in" data-aos-delay="200">
                  <span className="d-block h2 fw-bold text-success mb-0">1200lb</span>
                  <small className="text-white-50">Holding Force</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="secure-hex-grid">
                <div className="hex-item" data-aos="zoom-in"><i className="fas fa-fingerprint"></i></div>
                <div className="hex-item" data-aos="zoom-in" data-aos-delay="150"><i className="fas fa-eye"></i></div>
                <div className="hex-item" data-aos="zoom-in" data-aos-delay="300"><i className="fas fa-user-shield"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* hero 2       */}

<section className="py-5 bg-white">
  <div className="container">
    <div className="row g-5 align-items-center">

      <div className="col-lg-6" data-aos="fade-right">
        <h2 className="fw-bold mb-4">Multi-Modal Authentication</h2>

        <p className="text-muted mb-5">
          Our electromagnetic locking solutions integrate with the world's most
          advanced biometric engines to ensure <strong>Zero-Trust</strong> entry
          at every perimeter.
        </p>

        <div className="accordion custom-bio-accordion" id="securityAccordion">

          <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <i className="fas fa-id-badge me-3 text-success"></i>
                Facial Recognition & Anti-Spoofing
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#securityAccordion"
            >
              <div className="accordion-body bg-light-success">
                3D-depth sensing and liveness detection prevent the use of photos
                or videos to bypass security. Perfect for touchless high-traffic
                entry.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                <i className="fas fa-database me-3 text-success"></i>
                Cloud-Sync Event Logging
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#securityAccordion"
            >
              <div className="accordion-body bg-light-success">
                Every entry attempt is logged to a secure AWS/Azure instance with
                a high-resolution snapshot from the integrated CCTV system.
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-left">
        <div className="integration-matrix p-4 rounded-4 bg-dark text-white">
          <h5 className="text-success fw-bold mb-4">
            <i className="fas fa-project-diagram me-2"></i>
            Orchestration Logic
          </h5>

          <div
            className="matrix-step mb-3 d-flex align-items-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="step-icon">01</div>
            <div>
              <strong>Identity Request:</strong> Biometric/RFID scan verified at
              Edge.
            </div>
          </div>

          <div
            className="matrix-step mb-3 d-flex align-items-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="step-icon">02</div>
            <div>
              <strong>Logic Check:</strong> Verify Time-Zone, Role, and Blacklist.
            </div>
          </div>

          <div
            className="matrix-step d-flex align-items-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="step-icon bg-danger">03</div>
            <div>
              <strong>Fire Over-ride:</strong> If Fire Alarm = Active, THEN Lock =
              Release.
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>



      {/* SECURITY HARDWARE – 4 CARDS IN ONE LINE */}

      <section className="py-5 bg-light">
  <div className="container">
    <div className="row g-4 justify-content-center">
      <div className="text-center mb-5">
            <h2 className="fw-bold">Security Hardware</h2>
            <p className="text-muted">High-holding force and rapid-response technology.</p>
          </div>

      <div className="col-lg-4 col-md-6">
        <div className="spec-card h-100">
          <i className="fas fa-magnet"></i>
          <h6>Fail-Safe EM Locks</h6>
          <p>
            Dual-voltage magnetic locks with built-in Bond Sensor and LED status indicators.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="spec-card h-100">
          <i className="fas fa-microchip"></i>
          <h6>IP Controllers</h6>
          <p>
            PoE-powered door controllers capable of offline operation and 100k event storage.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="spec-card h-100">
          <i className="fas fa-user-lock"></i>
          <h6>MFA Readers</h6>
          <p>
            Supports OSDP protocols for encrypted communication between reader and controller.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* IMAGE SECTION */}
     
    <section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center g-5">
      
      <div className="col-lg-5" data-aos="fade-right">
        <img
          src={polarsysImg}
          alt="Polarsys Magnetic Lock"
          className="img-fluid rounded-4 shadow-lg border"
        />
      </div>

      <div className="col-lg-7" data-aos="fade-left">
        <h2 className="fw-bold mb-4">
          Fail-Safe <span className="text-success">Magnetic Engineering</span>
        </h2>

        <p className="lead text-muted">
          Our EM locks are designed for critical perimeters, providing a holding
          force of up to 1200lbs while ensuring immediate release during fire
          emergencies.
        </p>

        <ul className="list-unstyled mt-4">
          <li className="mb-3">
            <i className="fas fa-check-circle text-success me-2"></i>
            <strong> Bond Sensor:</strong> Real-time feedback if the door is truly
            locked.
          </li>

          <li className="mb-3">
            <i className="fas fa-check-circle text-success me-2"></i>
            <strong> Dual Voltage:</strong> Compatible with 12V or 24V DC
            infrastructures.
          </li>
        </ul>
      </div>

    </div>
  </div>
    </section>

      {/* FINAL IMAGE */}

      <section className="py-5 bg-dark text-white">
        <div className="container">
      <div className="row align-items-center flex-row-reverse">
      
      <div className="col-lg-5" data-aos="zoom-in">
        <img
          src={sec}
          alt="Unified Security Fabric"
          className="img-fluid rounded-4 shadow-lg border"
        />
      </div>

      <div className="col-lg-7" data-aos="fade-right">
        <h2 className="fw-bold mb-4 text-success">Unified Security Fabric</h2>
        <p className="opacity-75">
          Access control shouldn't work in a silo. Polarsys integrates entry
          events directly into your CCTV and Alarm modules.
        </p>

        <div className="row g-3 mt-4">
          <div className="col-md-6">
            <div className="p-3 border border-secondary rounded-3">
              <h6>
                <i className="fas fa-video text-success me-2"></i>
                Visual Verification
              </h6>
              <p className="x-small mb-0">
                Automatic snapshots taken during every successful or failed
                entry attempt.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 border border-secondary rounded-3">
              <h6>
                <i className="fas fa-bell text-success me-2"></i>
                Alarm Override
              </h6>
              <p className="x-small mb-0">
                Global lock/unlock commands triggered by fire or intrusion alarm
                sensors.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
    </section>

    </>
  );
};

export default AccessControl;
