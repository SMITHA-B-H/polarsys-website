// import React from 'react';
// import { FaHome } from 'react-icons/fa';

// const HomeAutomation = () => {
//   return (
//     <div className="service-page">
//       <h1>Home/Building Automation</h1>
//       <div className="service-content">
//         <FaHome size={50} />
//         <p>Smart automation solutions for homes and buildings.</p>
//         <ul>
//           <li>Lighting Control</li>
//           <li>Climate Control</li>
//           <li>Security Integration</li>
//           <li>Mobile App Control</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HomeAutomation;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// IMAGE IMPORTS
import smartLighting from "../../assets/image/smart-lighting.jpg";
import hvacControl from "../../assets/image/hvac-control.jpg";
import securityAutomation from "../../assets/image/security-automation.jpg";
import touchPanel from "../../assets/image/automation-touch-panel.jpg";
import sensorHub from "../../assets/image/iot-sensor-hub.jpg";
import smartBlinds from "../../assets/image/smart-blinds.jpg";

import "../../styles/automation.css";



const HomeAutomation = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      

      {/* HERO */}
      <section className="automation-hero py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="iot-network-bg"></div>
        <div className="container position-relative z-index-2">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="badge bg-primary mb-3 px-3 py-2 fw-bold text-uppercase">
                IoT Ecosystems
              </span>
              <h1 className="display-3 fw-bold mb-3">
                Home <span className="text-primary">Building Intelligence</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                Transforming spaces into living environments. We integrate
                lighting, climate, and security into a single, voice-activated
                command interface.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <div className="glass-pill">
                  <i className="fas fa-microchip me-2 text-primary"></i>Edge AI
                </div>
                <div className="glass-pill">
                  <i className="fas fa-wifi me-2 text-primary"></i>IoT Protocol
                </div>
                <div className="glass-pill">
                  <i className="fas fa-microphone me-2 text-primary"></i>Voice Command
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block" data-aos="zoom-in">
              <div className="smart-panel-ui shadow-lg">
                <div className="panel-header d-flex justify-content-between">
                  <span className="small">LIVING ROOM CONTROL</span>
                  <i className="fas fa-power-off text-danger"></i>
                </div>
                <div className="panel-body mt-4">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Smart Lighting</span>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                    </div>
                  </div>
                  <div className="temp-slider mb-3">
                    <label className="small">CLIMATE: 22°C</label>
                    <input type="range" className="form-range" defaultValue="40" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-5 bg-white">
  <div className="container-fluid px-lg-5 px-3">
    
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="fw-bold">The Pillars of Automation</h2>
      <p className="text-muted">
        Centralized control for maximum comfort and energy efficiency.
      </p>
    </div>

    <div className="row justify-content-center gx-4 gy-4">

      {/* CARD 1 */}
      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
        <div className="auto-card h-100">
          <div className="auto-img-container">
            <img src={smartLighting} alt="Adaptive Lighting" />
          </div>
          <div className="p-4">
            <div className="d-flex align-items-center mb-2">
              <span className="mini-bar"></span>
              <span className="auto-title">ADAPTIVE LIGHTING</span>
            </div>
            <p className="auto-text">
              Automated mood scenes and circadian rhythm syncing for enhanced productivity.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="auto-card h-100">
          <div className="auto-img-container">
            <img src={hvacControl} alt="Climate Control" />
          </div>
          <div className="p-4">
            <div className="d-flex align-items-center mb-2">
              <span className="mini-bar"></span>
              <span className="auto-title">CLIMATE CONTROL</span>
            </div>
            <p className="auto-text">
              Zonal HVAC management with occupancy sensors to reduce energy waste by up to 30%.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="auto-card h-100">
          <div className="auto-img-container">
            <img src={securityAutomation} alt="Total Security" />
          </div>
          <div className="p-4">
            <div className="d-flex align-items-center mb-2">
              <span className="mini-bar"></span>
              <span className="auto-title">TOTAL SECURITY</span>
            </div>
            <p className="auto-text">
              Unified link between CCTV, EM-Locks, and alarms with instant mobile notifications.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-6" data-aos="fade-right">
        <h3 className="fw-bold">Omni-Channel Control</h3>
        <p className="text-muted">
          Command your building through the interface that suits you best.
          Our systems are protocol-agnostic, supporting KNX, Zigbee, and Matter.
        </p>

        <div className="mt-4">

          <div className="d-flex gap-3 mb-3">
            <div className="icon-sq bg-white shadow-sm">
              <i className="fas fa-microphone-alt"></i>
            </div>
            <div>
              <h6>Voice Control</h6>
              <p className="small text-muted">
                Alexa, Google Home, and Siri integration.
              </p>
            </div>
          </div>

          <div className="d-flex gap-3">
            <div className="icon-sq bg-white shadow-sm">
              <i className="fas fa-tablet-alt"></i>
            </div>
            <div>
              <h6>Remote Access</h6>
              <p className="small text-muted">
                Control your facility from anywhere in the world.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-6" data-aos="zoom-in-left">
        {/* Add image / illustration here */}
      </div>

    </div>
  </div>
</section>

<section className="py-5 bg-white">
  <div className="container">
    <div className="row g-5 align-items-center">

      <div className="col-lg-6" data-aos="fade-right">
        <h2 className="fw-black h1">Integrated Ecosystem Logic</h2>
        <p className="text-muted">
          Automation is more than just an app; it is a conversation between hardware.
          Our systems use "If-This-Then-That" (IFTTT) logic to create complex security
          and comfort scenarios.
        </p>

        <div className="logic-tree mt-4">

          <div className="logic-branch d-flex align-items-center p-3 mb-3 bg-light rounded-4">
            <div className="logic-icon bg-primary">
              <i className="fas fa-door-open"></i>
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">"Welcome Home" Scene</h6>
              <p className="small text-muted mb-0">
                Unlocks EM-Lock + Lights On + AC set to 22°C + Music Play.
              </p>
            </div>
          </div>

          <div className="logic-branch d-flex align-items-center p-3 mb-3 bg-light rounded-4">
            <div className="logic-icon bg-danger">
              <i className="fas fa-fire"></i>
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">"Emergency Override"</h6>
              <p className="small text-muted mb-0">
                Fires detected → Gas shutoff + PA Announcement + All Doors Unlock.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-6" data-aos="fade-left">
        <div className="spec-matrix p-4 bg-dark rounded-4 mt-4">
          <h5 className="text-white fw-bold mb-3">
            <i className="fas fa-project-diagram text-primary me-2"></i>
            Protocol Compatibility
          </h5>

          <table className="table table-dark table-borderless small mb-0">
            <tbody>
              <tr>
                <td><strong>Wireless:</strong></td>
                <td className="text-primary">
                  Zigbee 3.0, Z-Wave, WiFi 6, Matter
                </td>
              </tr>
              <tr>
                <td><strong>Wired:</strong></td>
                <td className="text-primary">
                  KNX, BACnet, Modbus, DALI
                </td>
              </tr>
              <tr>
                <td><strong>Voice:</strong></td>
                <td className="text-primary">
                  Alexa, Google, Siri, Josh.ai
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  </div>
</section>



      {/* SMART HARDWARE – 4 IN ONE LINE */}
      <section className="py-5 bg-light">
  <div className="container-fluid px-3">
    <div className="row g-4 text-center justify-content-center">

      <div className="col-lg-4 col-md-6 col-12" data-aos="flip-up">
        <div className="smart-hw-card bg-white rounded-4 shadow-sm overflow-hidden">
          <div className="hw-img-box">
            <img src={touchPanel} className="img-fluid" alt="Touch Panel" />
          </div>
          <div className="p-4">
            <h6 className="fw-bold">Central Glass Panels</h6>
            <p className="small text-muted">
              Luxury wall-mounted touch interfaces for total building control.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12" data-aos="flip-up" data-aos-delay="100">
        <div className="smart-hw-card bg-white rounded-4 shadow-sm overflow-hidden border-top border-primary border-4">
          <div className="hw-img-box">
            <img src={sensorHub} className="img-fluid" alt="IoT Sensors" />
          </div>
          <div className="p-4">
            <h6 className="fw-bold">AI Multi-Sensors</h6>
            <p className="small text-muted">
              Detects occupancy, CO₂ levels, and ambient light.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12" data-aos="flip-up" data-aos-delay="200">
        <div className="smart-hw-card bg-white rounded-4 shadow-sm overflow-hidden">
          <div className="hw-img-box">
            <img src={smartBlinds} className="img-fluid" alt="Smart Blinds" />
          </div>
          <div className="p-4">
            <h6 className="fw-bold">Motorized Shading</h6>
            <p className="small text-muted">
              Automated curtains that adjust based on sun position.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      
    </>
  );
};

export default HomeAutomation;
