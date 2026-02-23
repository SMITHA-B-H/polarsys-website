import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/careers.css";
import careersTeam from "../assets/image/careers.jpg";

const jobsData = [
  {
    id: 1,
    title: "Java Developer",
    exp: "0–5 Yrs",
    type: "Onsite",
    location: "Bidarahosahalli",
    skills: "Java, Spring Boot, Microservices, REST APIs",
    description: "Design, develop and maintain robust enterprise Java applications with a focus on scalability and clean code architecture."
  },
  {
    id: 2,
    title: "Java Developer",
    exp: "2–5 Yrs",
    type: "Remote",
    location: "Mandya",
    skills: "Java, Spring Boot, Microservices, REST APIs",
    description: "Lead the development of server-side logic and ensure high performance and responsiveness to requests from the front-end."
  },
  {
    id: 3,
    title: "Frontend Developer",
    exp: "0–5 Yrs",
    type: "Remote",
    location: "Mandya",
    skills: "HTML, CSS, JavaScript, React",
    description: "Build and optimize user-facing features for web applications, ensuring a seamless and high-quality user experience."
  },
  {
    id: 4,
    title: "Digital Marketing",
    exp: "2–5 Yrs",
    type: "Remote",
    location: "Mandya",
    skills: "SEO, SEM, Content Strategy, Social Media",
    description: "Develop and implement digital marketing strategies to increase online presence and drive lead generation."
  },
  {
    id: 5,
    title: "Backend Developer",
    exp: "0–5 Yrs",
    type: "Remote",
    location: "Mandya",
    skills: "Node.js, Express.js, MySQL",
    description: "Develop and maintain server-side logic and databases, ensuring high performance and security of the application."
  },
  {
    id: 6,
    title: "Backend Developer",
    exp: "0–5 Yrs",
    type: "Onsite",
    location: "Bidarahosahalli",
    skills: "Node.js, Express.js, MySQL",
    description: "Collaborate with cross-functional teams to define, design, and ship new features for our server-side infrastructure."
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredJobs = activeFilter === "All" 
    ? jobsData 
    : jobsData.filter(job => job.type === activeFilter);

  return (
    <div className="careers-page">
      {/* PREMIUM HERO SECTION */}
      <section className="careers-hero">
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge-top">Careers at Polarsys</span>
              <h1 className="display-4 fw-bold mb-4">
                Let's Build the <span className="text-primary-gradient">Next Big Thing</span> Together
              </h1>
              <p className="lead mb-4">
                We're a team of innovators, creators, and problem solvers. Join us in our 
                mission to provide world-class digital solutions.
              </p>
              <div className="d-flex gap-3">
                <a href="#openings" className="btn btn-primary-premium">Explore Jobs</a>
                <a href="#why-join" className="btn btn-outline-light-premium">Our Culture</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section id="why-join" className="career-why-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="section-heading mb-4">Why Join Our Team?</h2>
              <p className="text-muted mb-4">
                At Polarsys, we foster a culture of innovation, continuous learning, and 
                career growth. We empower our employees to explore emerging technologies 
                and enhance their technical expertise.
              </p>
              
              <div className="benefits-grid">
                {[
                  { icon: "fa-rocket", text: "Fast Growth" },
                  { icon: "fa-laptop-house", text: "Flexible Work" },
                  { icon: "fa-brain", text: "Skill Development" },
                  { icon: "fa-heart", text: "Supportive Culture" }
                ].map((b, i) => (
                  <div key={i} className="benefit-item">
                    <i className={`fas ${b.icon}`}></i>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="image-stack">
                <img src={careersTeam} alt="Polarsys Team" className="img-fluid rounded-4 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC JOB LIST */}
      <section id="openings" className="jobs-section py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-4">
            <div data-aos="fade-up">
              <h2 className="fw-bold">Current Openings</h2>
              <p className="text-muted">Find your place in our growing family</p>
            </div>
            
            <div className="filter-pills" data-aos="fade-up">
              {["All", "Remote", "Onsite"].map(filter => (
                <button 
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {filteredJobs.map((job, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="job-card-premium">
                  <div className="card-labels">
                    <span className={`label ${job.type.toLowerCase()}`}>{job.type}</span>
                    <span className="label exp">{job.exp}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="location"><i className="fas fa-map-marker-alt me-2"></i>{job.location}</p>
                  <p className="skills-tags">{job.skills}</p>
                  <div className="card-footer mt-auto">
                    <button className="btn btn-view" onClick={() => setSelectedJob(job)}>View Details</button>
                    <a href="mailto:info@polarsys.in" className="btn btn-apply">Apply</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="careers-cta-premium py-5">
        <div className="container text-center">
          <div className="cta-content-box" data-aos="zoom-in">
            <h2 className="text-white mb-3">Don't see a fit?</h2>
            <p className="text-white-50 mb-4">We are always looking for great talent. Send us your resume anyway!</p>
            <a href="mailto:polarsyssolutions@gmail.com" className="btn btn-light btn-lg px-5 rounded-pill fw-bold">Send Resume</a>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedJob && (
        <div className="job-modal-overlay">
          <div className="job-modal-content">
            <button className="modal-close" onClick={() => setSelectedJob(null)}>&times;</button>
            <span className="badge-modal">{selectedJob.type}</span>
            <h2 className="mb-3">{selectedJob.title}</h2>
            <div className="mb-4">
              <h6 className="fw-bold text-primary">Key Requirements:</h6>
              <p className="text-muted">{selectedJob.skills}</p>
            </div>
            <div className="mb-4">
              <h6 className="fw-bold text-primary">About the Role:</h6>
              <p className="text-muted">{selectedJob.description}</p>
            </div>
            <a href="mailto:info@polarsys.in" className="btn btn-primary w-100 py-3 rounded-pill fw-bold">Apply for this Position</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;