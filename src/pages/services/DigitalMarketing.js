import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/DigitalMarketing.css";
import seoImg from "../../assets/image/seo-content.jpg";
import ppcImg from "../../assets/image/ppc-campaigns.jpg";
import ormImg from "../../assets/image/online-reputation.jpg";

const services = [
              {
                img: seoImg,
                tag: "RANKING #1",
                title: "SEO & CONTENT",
                desc:
                  "Organic search domination through technical SEO and high-authority content."
              },
              {
                img: ppcImg,
                tag: "ROI: 400%",
                title: "PPC / PAID MEDIA",
                desc:
                  "High-conversion Google Ads and Meta campaigns with lowest CPA."
              },
              {
                img: ormImg,
                tag: "TRUST RATING",
                title: "BRANDING & ORM",
                desc:
                  "Online Reputation Management and tactical brand positioning."
              },
            ];
const DigitalMarketing = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="marketing-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="data-stream-overlay"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-warning text-dark me-2">
                  ROI-FOCUSED
                </span>
                <span className="text-warning small fw-bold text-uppercase">
                  Performance Marketing Suite
                </span>
              </div>

              <h1 className="display-3 fw-bold mb-3">
                Data-Driven <br />
                <span className="text-warning text-glow-warn">
                  Growth Engines
                </span>
              </h1>

              <p className="lead text-white-50 mb-4">
                We synchronize SEO, high-performance PPC, and tactical branding
                to turn your digital presence into a lead-generating powerhouse.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <div className="glass-pill-marketing">
                  <i className="fas fa-chart-line me-2"></i> ROI Focused
                </div>
                <div className="glass-pill-marketing">
                  <i className="fas fa-bullseye me-2"></i> Omni-Channel
                </div>
                <div className="glass-pill-marketing">
                  <i className="fas fa-shield-alt me-2"></i> Brand Security
                </div>
              </div>
            </div>

            <div
              className="col-lg-5 d-none d-lg-block"
              data-aos="zoom-in"
            >
              <div className="funnel-visualization p-4 rounded-4 shadow-lg">
                <div className="funnel-stage stage-1">AWARENESS (SEO)</div>
                <div className="funnel-stage stage-2">CONSIDERATION (SOCIAL)</div>
                <div className="funnel-stage stage-3">CONVERSION (PPC)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      {/* <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="mkt-card shadow-sm rounded-4 h-100 border overflow-hidden">
                  <div className="mkt-img-container bg-dark">
                    <img
                      src={item.img}
                      className="img-fluid"
                      alt={item.title}
                    />
                    <div className="mkt-overlay-tag">{item.tag}</div>
                  </div>

                  <div className="p-4">
                    <div className="d-flex align-items-center mb-2">
                      <div className="mini-bar bg-warning me-2"></div>
                      <span className="text-warning fw-bold small">
                        {item.title}
                      </span>
                    </div>
                    <p className="small text-muted mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="dm-section">
      <div className="container">
        <div className="dm-grid">
          {services.map((item, i) => (
            <div className="dm-card" data-aos="fade-up" key={i}>
              <div className="dm-img">
                <img src={item.img} alt={item.title} />
                <span className="dm-tag">{item.tag}</span>
              </div>
              <div className="dm-body">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ANALYTICS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">
                Analytics & Transparent Reporting
              </h2>
              <p className="text-muted">
                Real-time dashboards showing traffic sources and revenue impact.Stop guessing. We provide real-time dashboards showing exactly where your traffic comes from and how it converts into revenue
              </p>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                {[
                  { label: "Conversion Rate", value: "24%", width: "75%" },
                  { label: "Search Visibility", value: "40%", width: "85%" },
                  { label: "Customer Engagement", value: "60%", width: "65%" }
                ].map((bar, i) => (
                  <div className="mb-3" key={i}>
                    <div className="d-flex justify-content-between small mb-1">
                      <span>{bar.label}</span>
                      <span>{bar.value}</span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: bar.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
      <div className="container">

        {/* 01 — ORGANIC DOMINANCE (IMAGE RIGHT) */}
        <div className="row g-5 align-items-center mb-5" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="service-label text-warning mb-2">
              01 — ORGANIC DOMINANCE
            </div>
            <h2 className="fw-black mb-3">
              Technical SEO & Content Architecture
            </h2>
            <p className="text-muted">
              Our SEO strategy goes beyond keywords. We optimize Core Web Vitals,
              implement Schema Markup, and build Topic Clusters that establish
              search engine authority.
            </p>
            <ul className="list-unstyled tech-list">
              <li><i className="fas fa-check text-warning me-2"></i> Semantic Keyword Research & Intent Mapping</li>
              <li><i className="fas fa-check text-warning me-2"></i> Technical Site Audits (Crawlability & Indexing)</li>
              <li><i className="fas fa-check text-warning me-2"></i> High-Authority Backlink Acquisition</li>
            </ul>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={seoImg}
              alt="Technical SEO Architecture"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>

        {/* 02 — PRECISION TARGETING (IMAGE RIGHT AS YOU HAD) */}
        <div className="row g-5 align-items-center mb-5 flex-row-reverse" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="service-label text-warning mb-2">
              02 — PRECISION TARGETING
            </div>
            <h2 className="fw-black mb-3">
              PPC & Paid Acquisition
            </h2>
            <p className="text-muted">
              Maximize your budget with AI-driven bidding across Google Ads,
              Meta, and LinkedIn with a focus on CPA reduction.
            </p>
            <div className="p-4 bg-light rounded-4 border-start border-warning border-5">
              <h6 className="fw-bold">
                <i className="fas fa-bullseye me-2"></i> Remarketing Funnels
              </h6>
              <p className="small text-muted mb-0">
                Re-engaging visitors using behavioral and dynamic ads.
              </p>
            </div>
          </div>

          <div className="col-lg-6 text-center">
                <div className="ppc-display shadow-lg rounded-4 p-4 bg-dark text-white">
                    <div className="d-flex justify-content-between mb-3 border-bottom border-secondary pb-2">
                        <span>Campaign: LeadGen_v2</span>
                        <span className="text-success">ACTIVE</span>
                    </div>
                    <div className="row">
                        <div className="col-6"><small className="d-block text-secondary">CTR</small><span className="h5">4.8%</span></div>
                        <div className="col-6"><small className="d-block text-secondary">Conv. Rate</small><span className="h5">12.5%</span></div>
                    </div>
                </div>
          </div>

          {/* <div className="col-lg-6 text-center">
            <img
              src={ppcImg}
              alt="PPC Campaign Dashboard"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div> */}
        </div>

        {/* 03 — BRAND INTEGRITY (IMAGE LEFT) */}
        <div className="row g-5 align-items-center mb-5" data-aos="fade-up">
          

          <div className="col-lg-6">
            <div className="service-label text-warning mb-2">
              03 — BRAND INTEGRITY
            </div>
            <h2 className="fw-black mb-3">
              Online Reputation Management (ORM)
            </h2>
            <p className="text-muted">
              We actively monitor and shape public perception, mitigating
              negative sentiment while amplifying positive customer stories.
            </p>

            <div className="row g-3 mt-2">
              <div className="col-md-6">
                <div className="p-3 border rounded-3 h-100">
                  <i className="fas fa-shield-alt text-warning mb-2"></i>
                  <h6 className="fw-bold">Crisis Mitigation</h6>
                  <p className="x-small text-muted mb-0">
                    Rapid response strategies for brand attacks.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-3 border rounded-3 h-100">
                  <i className="fas fa-star text-warning mb-2"></i>
                  <h6 className="fw-bold">Review Velocity</h6>
                  <p className="x-small text-muted mb-0">
                    Systematic gathering of 5-star testimonials.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={ormImg}
              alt="Online Reputation Management"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>

      {/* COMMAND CENTER */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center mb-5">
          <h2 className="fw-black">The Analytics Command Center</h2>
          <p className="opacity-75">
            100% transparency through real-time BI dashboards
          </p>
        </div>

        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8" data-aos="fade-right"></div>

            <div className="col-lg-4" data-aos="fade-left">
              <div className="report-box p-4 rounded-4 border border-warning shadow-lg h-100">
                <h5 className="fw-bold mb-4">What we track:</h5>
                <ul className="list-unstyled tech-list">
                  <li>LTV — Lifetime value</li>
                  <li>CPA — Cost per acquisition</li>
                  <li>SERP — Keyword positions</li>
                  <li>Heatmaps — User behavior</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
