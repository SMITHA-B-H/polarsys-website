import React from "react";
import "../../styles/polarface.css";

const PolarFace = () => {
  return (
    <div className="polarface-page">

      {/* HERO */}
      <section className="pf-hero text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="fw-bold">PolarFace</h1>
          <h4 className="mb-3">Smart Attendance & Payroll System</h4>

          <span className="coming-badge">Coming Soon</span>

          <p className="lead mt-3">
            A powerful platform designed for Indian businesses to automate
            staff attendance, payroll, and workforce management.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Overview</h2>
          <p className="text-center mx-auto" style={{ maxWidth: "750px" }}>
            PolarFace is a dedicated platform and mobile app for managing staff
            attendance and payroll. It helps small and medium-sized businesses
            replace manual registers with a smart, automated system that improves
            accuracy, efficiency, and transparency.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Key Features</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="pf-card">
                <i className="bi bi-person-check-fill"></i>
                <h6>Smart Attendance</h6>
                <p>Biometric, selfie check-in, GPS tracking & real-time monitoring.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pf-card">
                <i className="bi bi-cash-coin"></i>
                <h6>Payroll Automation</h6>
                <p>Salary, overtime, deductions with 1-click payroll processing.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pf-card">
                <i className="bi bi-book"></i>
                <h6>Cash Book & Ledger</h6>
                <p>Track expenses and manage business accounting easily.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pf-card">
                <i className="bi bi-phone"></i>
                <h6>Multi-Platform Access</h6>
                <p>Mobile, desktop, and browser with cloud backup.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pf-card">
                <i className="bi bi-geo-alt-fill"></i>
                <h6>Geo Tracking</h6>
                <p>Location-based attendance for field staff.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pf-card">
                <i className="bi bi-whatsapp"></i>
                <h6>Notifications</h6>
                <p>SMS & WhatsApp alerts with auto data backup.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* USE CASE */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Use Cases</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-md-3 col-6">
              <div className="pf-use">
                <i className="bi bi-shop"></i>
                <p>Shops</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="pf-use">
                <i className="bi bi-building"></i>
                <p>Offices</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="pf-use">
                <i className="bi bi-gear"></i>
                <p>Factories</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="pf-use">
                <i className="bi bi-truck"></i>
                <p>Field Teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta text-white text-center">
        <div className="container">
          <h2>Launching Soon 🚀</h2>
          <p>Stay tuned for a smarter way to manage your workforce.</p>
          <button className="btn btn-light px-4 py-2">
            Notify Me
          </button>
        </div>
      </section>

    </div>
  );
};

export default PolarFace;