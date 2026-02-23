// import React from 'react';

// function Footer() {
//   return (
//     <footer style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center', marginTop: '50px' }}>
//       <p>&copy; 2026 My App. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Footer.css";

// import footerLogo from "../assets/image/polarlogbg.png";
//  import footerLogo from "../assets/image/polarsys_log.png";
 import footerLogo from "../assets/image/polarsys.jpeg";


const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-in-out",
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" data-aos="fade-up">
      <div className="container footer-container">
        
        {/* ABOUT COMPANY */}
        <div className="footer-column">
          <h4>Polarsys Global IT Solutions</h4>
          <p>
            Delivering reliable, scalable, and innovative IT solutions 
            empowering businesses in a digital-first ecosystem.
          </p>

          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-x-twitter"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-column footer-card">
          <img src={footerLogo} alt="Polarsys Logo" className="footer-logo" />

          <p>
            <a href="mailto:info@polarsys.in" className="footer-contact-link">
              <i className="fas fa-envelope"></i>
              info@polarsys.in
            </a>
          </p>

          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Polarsys+Global+IT+Solutions+Bangalore+India" target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <i className="fas fa-location-dot"></i>
             Bidarahosahalli,Mandya,571422 
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {currentYear} Polarsys Global IT Solutions Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
