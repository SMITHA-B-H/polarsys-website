import React from "react";
import "../../styles/Solis.css";
const Solis = () => {
  return (
    <div className="solis-page">

      {/* HERO SECTION */}
      <section className="hero-section text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold">Solis</h1>
          <h4 className="mb-3">Hospital Room Management System</h4>
          <p className="lead">
            Smart, real-time digital solution for managing hospital rooms,
            patients, and doctor assignments efficiently.
          </p>
          
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Overview</h2>
          <p>
            Solis is a modern Hospital Room Management System designed to
            digitally manage hospital rooms, patient assignments, and doctor
            coordination in real time. It replaces manual processes with an
            automated, centralized platform ensuring accurate and instant
            communication across departments.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Key Features</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-building"></i>
                <h5>Centralized Management</h5>
                <p>Manage all hospital rooms from a single dashboard.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-lightning"></i>
                <h5>Real-Time Updates</h5>
                <p>Instant updates on room displays using live sync.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-people"></i>
                <h5>Patient & Doctor Assignment</h5>
                <p>Quickly assign and update room details.And Queue Announcements </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-tv"></i>
                <h5>Automated Display</h5>
                <p>Information shown on TV screens or tablets.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-shield-lock"></i>
                <h5>Secure Access</h5>
                <p>JWT-based authentication ensures security.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-diagram-3"></i>
                <h5>Scalable Architecture</h5>
                <p>Supports multi-hospital environments.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">How It Works</h2>

          <div className="row text-center g-4">
            {[
              "Admin logs into system",
              "Selects a room",
              "Assigns patient & doctor",
              "Data stored securely",
              "Real-time update triggered",
              "Display updates automatically"
            ].map((step, index) => (
              <div key={index} className="col-md-2 col-6">
                <div className="step-box">
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 security-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">Security</h2>

        <div className="row g-4">

          <div className="col-md-4 col-sm-6">
            <div className="security-card">
              <i className="bi bi-shield-lock-fill"></i>
              <h6>HTTPS Encryption</h6>
              <p>Secure communication using HTTPS protocols.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="security-card">
              <i className="bi bi-key-fill"></i>
              <h6>JWT Authentication</h6>
              <p>Token-based secure login and API access.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="security-card">
              <i className="bi bi-person-check-fill"></i>
              <h6>Role-Based Access</h6>
              <p>Controlled access for admins and staff.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="security-card">
              <i className="bi bi-diagram-3-fill"></i>
              <h6>Internal Network</h6>
              <p>Runs securely within hospital LAN.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="security-card">
              <i className="bi bi-file-earmark-lock-fill"></i>
              <h6>Compliance Ready</h6>
              <p>Designed with HIPAA & GDPR considerations.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

{/* BENEFITS */}
<section className="py-5 bg-light">
  <div className="container">
    <h2 className="section-title text-center mb-5">Benefits</h2>

    <div className="row g-4">

      {/* Operational */}
      <div className="col-md-4">
        <div className="benefit-card">
          <h5><i className="bi bi-gear-fill me-2"></i>Operational</h5>
          <ul>
            <li>Eliminates manual updates</li>
            <li>Improves staff communication</li>
            <li>Reduces workload</li>
            <li>Ensures real-time accuracy</li>
          </ul>
        </div>
      </div>


      {/* Display System */}
      <div className="col-md-4">
        <div className="benefit-card highlight-card">
          <h5><i className="bi bi-tv-fill me-2"></i>Display System</h5>
          <ul>
            <li>Room number with patient & doctor info</li>
            <li>Scrolling information display</li>
            <li>Announcements & alerts</li>
            <li>Advertisement display support</li>
            <li>Queue Announcements</li>
          </ul>
        </div>
      </div>

      {/* Business */}
      <div className="col-md-4">
        <div className="benefit-card">
          <h5><i className="bi bi-briefcase-fill me-2"></i>Business</h5>
          <ul>
            <li>Scalable for large hospitals</li>
            <li>Supports multi-ward operations</li>
            <li>Future-ready for SaaS deployment</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* USE CASE */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Use Case</h2>
          <p className="mb-4">Ideal for:</p>

          <div className="row justify-content-center g-4">

            <div className="col-md-3 col-6">
              <div className="use-card">
                <i className="bi bi-hospital"></i>
                <p>Hospitals</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="use-card">
                <i className="bi bi-heart-pulse"></i>
                <p>Clinics</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="use-card">
                <i className="bi bi-building"></i>
                <p>Multi-specialty Centers</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE SOLIS */}
      <section className="py-5 why-section text-white">
        <div className="container text-center">
          <h2 className="section-title mb-4 text-white">Why Choose Solis?</h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Solis transforms traditional hospital room management into a smart,
            automated, and real-time digital system, improving both operational
            efficiency and patient experience.
          </p>
        </div>
      </section>

      {/* CTA */}
        <section className="py-5 text-center cta-section text-white">
        <div className="container">
            <h2>Transform Your Hospital Digitally</h2>
            <p>Upgrade to Solis for smarter, real-time management.</p>

            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
            
            {/* Call Button */}
            <a href="tel:9964585585" className="btn btn-light px-4 py-2">
                <i className="bi bi-telephone-fill me-2"></i>
                Call: 9964585585
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919964585585"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success px-4 py-2"
            >
                <i className="bi bi-whatsapp me-2"></i>
                WhatsApp
            </a>

            </div>
        </div>
        </section>

    </div>
  );
};

export default Solis;