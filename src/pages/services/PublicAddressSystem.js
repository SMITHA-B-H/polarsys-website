// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // CSS

// import "../../styles/pa-system.css";

// const PublicAddressSystem = () => {
//   useEffect(() => {
//     AOS.init({ once: true, duration: 900 });
//   }, []);

//   return (
//     <>
//       {/* HERO */}
//       <section className="pa-hero py-5 bg-dark text-white position-relative overflow-hidden">
//         <div className="soundwave-container">
//           <div className="wave"></div>
//           <div className="wave"></div>
//           <div className="wave"></div>
//         </div>

//         <div className="audio-visualizer d-none d-lg-flex">
//           <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
//           <div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
//         </div>

//         <div className="container position-relative z-index-2">
//           <div className="row align-items-center">
//             <div className="col-lg-7" data-aos="fade-right">
//               <span className="badge bg-info text-dark mb-3 px-3 py-2 fw-bold">
//                 Acoustic Systems
//               </span>

//               <h1 className="display-3 fw-bold mb-3">
//                 Public Address <br />&{" "}
//                 <span className="text-info">Voice Evacuation</span>
//               </h1>

//               <p className="lead text-white-50">
//                 High-fidelity audio distribution for seamless background music,
//                 paging, and mission-critical emergency broadcasts.
//               </p>

//               <div className="d-flex gap-4 mt-4">
//                 <div className="feature-tag" data-aos="zoom-in" data-aos-delay="100">
//                   <i className="fas fa-volume-up text-info"></i>
//                   <span>Zero-Lag IP Audio</span>
//                 </div>

//                 <div className="feature-tag" data-aos="zoom-in" data-aos-delay="200">
//                   <i className="fas fa-microchip text-info"></i>
//                   <span>Fire-Link Integration</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-5 bg-white">
//         <div className="container">
//           <div className="row g-4 mb-5">
//             <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
//               <div className="pa-card p-4 rounded-4 shadow-sm border-0 h-100">
//                 <div className="pa-icon bg-info-soft text-info">
//                   <i className="fas fa-music"></i>
//                 </div>
//                 <h5 className="fw-bold">Background Music</h5>
//                 <p className="small text-muted">
//                   Multi-zone audio streaming for hospitality, retail, and
//                   corporate lobbies with independent volume control.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
//               <div className="pa-card p-4 rounded-4 shadow-sm border-0 h-100 border-top border-info border-4">
//                 <div className="pa-icon bg-info-soft text-info">
//                   <i className="fas fa-bullhorn"></i>
//                 </div>
//                 <h5 className="fw-bold">Centralized Paging</h5>
//                 <p className="small text-muted">
//                   Desktop call stations and wireless microphones for clear,
//                   district-wide announcements and event management.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
//               <div className="pa-card p-4 rounded-4 shadow-sm border-0 h-100">
//                 <div className="pa-icon bg-info-soft text-info">
//                   <i className="fas fa-link"></i>
//                 </div>
//                 <h5 className="fw-bold">Integration & Events</h5>
//                 <p className="small text-muted">
//                   Seamless sync with mixers for events and automated
//                   “Emergency Override” for life safety protocols.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* OVERRIDE PROTOCOL */}
//           <div
//             className="row align-items-center mt-5 p-4 bg-light rounded-4"
//             data-aos="fade-in"
//           >
//             <div className="col-lg-6">
//               <h3 className="fw-bold mb-3">The “Override” Protocol</h3>
//               <p className="text-muted">
//                 In the event of a fire, the PA system automatically mutes
//                 background music and triggers pre-recorded, high-decibel
//                 evacuation instructions.
//               </p>

//               <ul className="list-unstyled">
//                 <li className="mb-2">
//                   <i className="fas fa-check-circle text-info me-2"></i>
//                   Priority Level Switching
//                 </li>
//                 <li className="mb-2">
//                   <i className="fas fa-check-circle text-info me-2"></i>
//                   Battery-backed UPS Amplifiers
//                 </li>
//                 <li>
//                   <i className="fas fa-check-circle text-info me-2"></i>
//                   Zone-specific Messaging
//                 </li>
//               </ul>
//             </div>

//             <div className="col-lg-6 text-center">
//               <div className="decibel-meter p-4 bg-dark rounded-3 shadow border border-info">
//                 <div className="meter-bar mb-2"></div>
//                 <span className="text-info fw-bold small">
//                   ACOUSTIC PRESSURE: 95dB (EMERGENCY MODE)
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MULTI-ZONE */}
//       <section className="py-5 bg-white">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6" data-aos="fade-up">
//               <h2 className="fw-bold mb-4">Multi-Zone Audio Management</h2>
//               <p className="text-muted">
//                 Broadcast different content to different areas simultaneously.
//               </p>

//               <div className="zone-list mt-4">
//                 <div className="zone-item d-flex align-items-center p-3 mb-2 rounded-3 border-start border-info border-4 shadow-sm">
//                   <i className="fas fa-building me-3 fs-4 text-info"></i>
//                   <div>
//                     <h6 className="mb-0 fw-bold">Zone A: Corporate Offices</h6>
//                     <small className="text-muted">
//                       Background Music + Scheduling
//                     </small>
//                   </div>
//                 </div>

//                 <div className="zone-item d-flex align-items-center p-3 mb-2 rounded-3 border-start border-warning border-4 shadow-sm">
//                   <i className="fas fa-industry me-3 fs-4 text-warning"></i>
//                   <div>
//                     <h6 className="mb-0 fw-bold">Zone B: Production Floor</h6>
//                     <small className="text-muted">
//                       Operational Paging + Shift Bells
//                     </small>
//                   </div>
//                 </div>

//                 <div className="zone-item d-flex align-items-center p-3 mb-2 rounded-3 border-start border-danger border-4 shadow-sm">
//                   <i className="fas fa-exclamation-triangle me-3 fs-4 text-danger"></i>
//                   <div>
//                     <h6 className="mb-0 fw-bold">
//                       All Zones: Emergency Override
//                     </h6>
//                     <small className="text-muted">
//                       Voice Evacuation (Priority 1)
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6" data-aos="zoom-in">
//               <div className="mt-4 p-4 rounded-4 bg-dark text-white">
//                 <h5 className="text-info fw-bold mb-3">
//                   <i className="fas fa-project-diagram me-2"></i>
//                   System Integration Flow
//                 </h5>

//                 <div className="flow-step small mb-2 d-flex align-items-center">
//                   <span className="badge bg-info me-2">1</span>
//                   Fire Panel Triggers Dry Contact
//                 </div>

//                 <div className="flow-step small mb-2 d-flex align-items-center">
//                   <span className="badge bg-info me-2">2</span>
//                   PA System Auto-Mutes BGM
//                 </div>

//                 <div className="flow-step small d-flex align-items-center">
//                   <span className="badge bg-danger me-2">3</span>
//                   “Phased Evacuation” Messages Broadcast
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* HARDWARE */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="text-center mb-5" data-aos="fade-up">
//             <h2 className="fw-bold">Hardware Excellence</h2>
//             <p className="text-muted">
//               Only UL-listed and high-fidelity components used.
//             </p>
//           </div>

//           <div className="row g-4">
//             <div className="col-md-4" data-aos="flip-up">
//               <div className="hw-card p-4 bg-white rounded-4 text-center h-100">
//                 <img
//                   src="/assets/image/pa-speaker.jpg"
//                   alt="Ceiling Speaker"
//                   className="img-fluid mb-3 rounded-circle"
//                   style={{ width: "100px" }}
//                 />
//                 <h6>Flush-Mount Ceiling Speakers</h6>
//                 <p className="small text-muted">
//                   Acoustically tuned for speech clarity and wide dispersion.
//                 </p>
//               </div>
//             </div>

//             <div className="col-md-4" data-aos="flip-up" data-aos-delay="100">
//               <div className="hw-card p-4 bg-white rounded-4 text-center h-100">
//                 <i className="fas fa-microphone-alt fs-1 text-info mb-3"></i>
//                 <h6>IP Call Stations</h6>
//                 <p className="small text-muted">
//                   LCD display with touch-key zone selection.
//                 </p>
//               </div>
//             </div>

//             <div className="col-md-4" data-aos="flip-up" data-aos-delay="200">
//               <div className="hw-card p-4 bg-white rounded-4 text-center h-100">
//                 <i className="fas fa-server fs-1 text-info mb-3"></i>
//                 <h6>Class-D IP Amplifiers</h6>
//                 <p className="small text-muted">
//                   High-efficiency power units with network monitoring.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PublicAddressSystem;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import "../../styles/pa-system.css";
import paSpeaker from "../../assets/image/pa-speaker.jpg"

const PublicAddressSystem = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="pa-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="soundwave-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        <div className="audio-visualizer d-none d-lg-flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="bar" key={i}></div>
          ))}
        </div>

        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge bg-info text-dark mb-3 px-3 py-2 fw-bold">
                Acoustic Systems
              </span>

              <h1 className="display-3 fw-bold mb-3">
                Public Address <br />&{" "}
                <span className="text-info">Voice Evacuation</span>
              </h1>

              <p className="lead text-white-50">
                High-fidelity audio distribution for seamless background music,
                paging, and mission-critical emergency broadcasts.
              </p>

              <div className="d-flex gap-4 mt-4">
                <div className="feature-tag" data-aos="zoom-in" data-aos-delay="100">
                  <i className="fas fa-volume-up text-info"></i>
                  <span>Zero-Lag IP Audio</span>
                </div>
                <div className="feature-tag" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-microchip text-info"></i>
                  <span>Fire-Link Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES – 4 CARDS IN ONE LINE */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="pa-card p-4 rounded-4 shadow-sm border-0 h-100">
                <div className="pa-icon bg-info-soft text-info">
                  <i className="fas fa-music"></i>
                </div>
                <h5 className="fw-bold">Background Music</h5>
                <p className="small text-muted">
                  Multi-zone audio streaming for hospitality, retail, and
                  corporate lobbies.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pa-card p-4 rounded-4 shadow-sm border-0 h-100 border-top border-info border-4">
                <div className="pa-icon bg-info-soft text-info">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h5 className="fw-bold">Centralized Paging</h5>
                <p className="small text-muted">
                  Desktop call stations and wireless microphones.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="pa-card p-4 rounded-4 shadow-sm border-0 h-100">
                <div className="pa-icon bg-info-soft text-info">
                  <i className="fas fa-link"></i>
                </div>
                <h5 className="fw-bold">Integration & Events</h5>
                <p className="small text-muted">
                  Seamless sync with mixers and emergency override.
                </p>
              </div>
            </div>

            {/* 4th CARD — NOW VISIBLE IN SAME ROW */}
            {/* <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="pa-card p-4 rounded-4 shadow-sm border-0 h-100">
                <div className="pa-icon bg-info-soft text-info">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h5 className="fw-bold">Life Safety Audio</h5>
                <p className="small text-muted">
                  Priority evacuation messaging with full audibility.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>


      <section className="py-5 bg-white">
       <div className="container">
       {/* OVERRIDE PROTOCOL */}
          <div
             className="row align-items-center mt-5 p-4 bg-light rounded-4"
             data-aos="fade-in"
           >
             <div className="col-lg-6">
               <h3 className="fw-bold mb-3">The “Override” Protocol</h3>
               <p className="text-muted">
                   In the event of a fire, the PA system automatically mutes
                 background music and triggers pre-recorded, high-decibel
                 evacuation instructions.
               </p>

               <ul className="list-unstyled">
                 <li className="mb-2">
                   <i className="fas fa-check-circle text-info me-2"></i>
                   Priority Level Switching
                 </li>
                 <li className="mb-2">
                   <i className="fas fa-check-circle text-info me-2"></i>
                   Battery-backed UPS Amplifiers
                 </li>
                 <li>
                   <i className="fas fa-check-circle text-info me-2"></i>
                   Zone-specific Messaging
                 </li>
               </ul>
             </div>

             <div className="col-lg-6 text-center">
               <div className="decibel-meter p-4 bg-dark rounded-3 shadow border border-info">
                 <div className="meter-bar mb-2"></div>
                 <span className="text-info fw-bold small">
                   ACOUSTIC PRESSURE: 95dB (EMERGENCY MODE)
                 </span>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* MULTI-ZONE */}
       <section className="py-5 bg-white">
         <div className="container">
           <div className="row align-items-center g-5">
             <div className="col-lg-6" data-aos="fade-up">
               <h2 className="fw-bold mb-4">Multi-Zone Audio Management</h2>
               <p className="text-muted">
                 Broadcast different content to different areas simultaneously.
               </p>

               <div className="zone-list mt-4">
                 <div className="zone-item d-flex align-items-center p-3 mb-2 rounded-3 border-start border-info border-4 shadow-sm">
                   <i className="fas fa-building me-3 fs-4 text-info"></i>
                   <div>
                     <h6 className="mb-0 fw-bold">Zone A: Corporate Offices</h6>
                    <small className="text-muted">
                       Background Music + Scheduling
                    </small>
                   </div>
                 </div>

                 <div className="zone-item d-flex align-items-center p-3 mb-2 rounded-3 border-start border-warning border-4 shadow-sm">
                   <i className="fas fa-industry me-3 fs-4 text-warning"></i>
                   <div>
                     <h6 className="mb-0 fw-bold">Zone B: Production Floor</h6>
                     <small className="text-muted">
                       Operational Paging + Shift Bells
                     </small>
                   </div>
                 </div>

                 <div className="zone-item d-flex align-items-center p-3 mb-2 rounded-3 border-start border-danger border-4 shadow-sm">
                  <i className="fas fa-exclamation-triangle me-3 fs-4 text-danger"></i>
                   <div>
                    <h6 className="mb-0 fw-bold">
                       All Zones: Emergency Override
                     </h6>
                     <small className="text-muted">
                       Voice Evacuation (Priority 1)
                     </small>
                   </div>
                 </div>
              </div>
             </div>

            <div className="col-lg-6" data-aos="zoom-in">
               <div className="mt-4 p-4 rounded-4 bg-dark text-white">
                 <h5 className="text-info fw-bold mb-3">
                  <i className="fas fa-project-diagram me-2"></i>
                   System Integration Flow
                 </h5>

                 <div className="flow-step small mb-2 d-flex align-items-center">
                   <span className="badge bg-info me-2">1</span>
                Fire Panel Triggers Dry Contact
                 </div>

                <div className="flow-step small mb-2 d-flex align-items-center">
                  <span className="badge bg-info me-2">2</span>
                  PA System Auto-Mutes BGM
                </div>

                <div className="flow-step small d-flex align-items-center">
                  <span className="badge bg-danger me-2">3</span>
                   “Phased Evacuation” Messages Broadcast
                 </div>
               </div>
             </div>
           </div>         </div>
      </section>

      {/* HARDWARE */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold">Hardware Excellence</h2>
            <p className="text-muted">
              Only UL-listed and high-fidelity components used.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="flip-up">
              <div className="hw-card p-4 bg-white rounded-4 text-center h-100">
                <img
                  src={paSpeaker}
                  alt="Ceiling Speaker"
                  className="img-fluid mb-3 rounded-circle"
                  style={{ width: "100px" }}
                />
                <h6>Ceiling Speakers</h6>
                <p className="small text-muted">Wide dispersion clarity</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="flip-up" data-aos-delay="100">
              <div className="hw-card p-4 bg-white rounded-4 text-center h-100">
                <i className="fas fa-microphone-alt fs-1 text-info mb-3"></i>
                <h6>IP Call Stations</h6>
                <p className="small text-muted">Touch zone selection</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="flip-up" data-aos-delay="200">
              <div className="hw-card p-4 bg-white rounded-4 text-center h-100">
                <i className="fas fa-server fs-1 text-info mb-3"></i>
                <h6>IP Amplifiers</h6>
                <p className="small text-muted">Network monitored</p>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6" data-aos="flip-up" data-aos-delay="300">
              <div className="hw-card p-4 bg-white rounded-4 text-center h-100">
                <i className="fas fa-battery-full fs-1 text-info mb-3"></i>
                <h6>UPS Backup</h6>
                <p className="small text-muted">Emergency power support</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicAddressSystem;
