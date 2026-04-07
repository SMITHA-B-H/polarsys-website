// import React from 'react';

// function Header() {
//   return (
//     <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
//       <h1>Welcome to My App</h1>
//       <nav>
//         <a href="#home" style={{ marginRight: '20px', color: 'white' }}>Home</a>
//         <a href="#about" style={{ marginRight: '20px', color: 'white' }}>About</a>
//         <a href="#contact" style={{ color: 'white' }}>Contact</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/header.css'; // Adjust path if needed
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [productDropdown, setProductDropdown] = useState(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header id="mainHeader" className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left"></div>
        <div className="top-bar-center">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:info@polarsys.in">info@polarsys.in</a>
        </div>
        <div className="top-bar-right">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="nav-container">
        <div className="logo">
          <img src={require('../assets/image/polarsys-Photoroom.png')} alt="Polarsys" />
          <span><strong>Polarsys</strong>  </span>
          {/* <span>Polarsys <strong>Global IT Solutions</strong> </span> */}
        </div>

        <nav className="nav-links">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            
            
            {/* Services Dropdown */}
            <li className="nav-item dropdown mega-dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
              <div className="dropdown-menu mega-menu-content shadow-lg border-0">
                <div className="container-fluid">
                  <div className="row g-0">
                    {/* COLUMN 1: IT & DIGITAL */}
                    <div className="col-lg-6 mega-col line-right">
                      <h6 className="mega-title">Digital & IT Solutions</h6>
                      <ul className="list-unstyled">
                        <li><Link className="mega-item" to="/services/application-development"><i className="bi bi-code-slash"></i> Software Application</Link></li>
                        <li><Link className="mega-item" to="/services/it-consulting"><i className="bi bi-person-check"></i> IT Consulting</Link></li>
                        <li><Link className="mega-item" to="/services/networking"><i className="bi bi-router"></i> Networking (LAN/WAN)</Link></li>
                        <li><Link className="mega-item" to="/services/digital-marketing"><i className="bi bi-graph-up-arrow"></i> Digital Marketing</Link></li>
                        <li><Link className="mega-item" to="/services/smart"><i className="bi bi-easel"></i> Smart Class Setup</Link></li>
                        <li><Link className="mega-item" to="/services/intercom"><i className="bi bi-telephone-outbound"></i> Intercom System</Link></li>
                      </ul>
                    </div>

                    {/* COLUMN 2: SECURITY & SYSTEMS */}
                    <div className="col-lg-6 mega-col">
                      <h6 className="mega-title">Safety & Automation</h6>
                      <ul className="list-unstyled">
                        <li><Link className="mega-item" to="/services/cctv"><i className="bi bi-camera-video"></i> CCTV & Surveillance</Link></li>
                        <li><Link className="mega-item" to="/services/automation"><i className="bi bi-house-gear"></i> Home/Building Automation</Link></li>
                        <li><Link className="mega-item" to="/services/fire-system"><i className="bi bi-bell"></i> Fire Alarm System</Link></li>
                        <li><Link className="mega-item" to="/services/fire-hydrant"><i className="bi bi-water"></i> Fire Hydrant System</Link></li>
                        <li><Link className="mega-item" to="/services/pa-system"><i className="bi bi-mic"></i> Public Address System</Link></li>
                        <li><Link className="mega-item" to="/services/access-control"><i className="bi bi-shield-lock"></i> Access Control</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* products */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => e.preventDefault()}
                data-bs-toggle="dropdown"
              >
                Products
              </a>

              <ul className="dropdown-menu shadow border-0">

                 {/* Software */}
                <li>
                  <a
                    href="#"
                    className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductDropdown(productDropdown === 'software' ? null : 'software');
                    }}
                  >
                    <span><i className="bi bi-code-slash me-2"></i>Software</span>
                    <i className="bi bi-chevron-right"></i>
                  </a>

                  {productDropdown === 'software' && (
                    <ul className="submenu">
                      <li><Link className="dropdown-item" to="/products/solis"><i className="bi bi-sun me-2"></i>Solis</Link></li>
                      <li><Link className="dropdown-item" to="/products/polarface"><i className="bi bi-person-bounding-box me-2"></i>PolarFace</Link></li>
                    </ul>
                  )}
                </li>



                {/* Hardware */}
                <li>
                  <a
                    href="#"
                    className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setProductDropdown(productDropdown === 'hardware' ? null : 'hardware');
                    }}
                  >
                    <span><i className="bi bi-cpu me-2"></i>Hardware</span>
                    <i className="bi bi-chevron-right"></i>
                  </a>

                  {productDropdown === 'hardware' && (
                    <ul className="submenu">
                      <li><Link className="dropdown-item" to="/products/cctv-p"><i className="bi bi-camera-video me-2"></i>CCTV</Link></li>
                      <li><Link className="dropdown-item" to="/products/biometric"><i className="bi bi-fingerprint me-2"></i>Home/Building</Link></li>
                      <li><Link className="dropdown-item" to="/products/pa"><i className="bi bi-mic me-2"></i>Public Address</Link></li>
                      <li><Link className="dropdown-item" to="/products/fire-hydrantss"><i className="bi bi-water me-2"></i>Fire Hydrant</Link></li>
                      <li><Link className="dropdown-item" to="/products/smoke-detectors"><i className="bi bi-bell me-2"></i>Fire Alarm</Link></li>
                      <li><Link className="dropdown-item" to="/products/access-control"><i className="bi bi-shield-lock me-2"></i>Access Control</Link></li>
                      <li><Link className="dropdown-item" to="/products/network-switch"><i className="bi bi-hdd-network me-2"></i>Network Products</Link></li>
                      <li><Link className="dropdown-item" to="/products/inter-com"><i className="bi bi-telephone me-2"></i>Intercom System</Link></li>
                      <li><Link className="dropdown-item" to="/products/panel"><i className="bi bi-easel me-2"></i>Interactive Panels</Link></li>
                    </ul>
                  )}
                </li>

               

              </ul>
            </li>


            {/* Buy Refurbished Dropdown */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Buy Refurbished Laptop</a>
              <ul className="dropdown-menu shadow border-0">
                <li><Link className="dropdown-item" to="/products/hp">HP</Link></li>
                <li><Link className="dropdown-item" to="/products/lenovo">Lenovo</Link></li>
                <li><Link className="dropdown-item" to="/products/dell">Dell</Link></li>
                <li><Link className="dropdown-item" to="/products/apple">MacBook</Link></li>
              </ul>
            </li> */}

            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact" className="btn-contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Hamburger */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-header d-flex align-items-center justify-content-between p-3">
          <div className="mobile-logo">
            <img src={require('../assets/image/polarsyslog.jpg')} alt="Polarsys Logo" style={{ height: '50px', width: 'auto' }} />
          </div>
          <div className="close-menu" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="mobile-nav-content">
          <Link to="/" onClick={toggleMenu}><i className="fa-solid fa-house me-2"></i> Home</Link>
          <Link to="/about" onClick={toggleMenu}><i className="fa-solid fa-circle-info me-2"></i> About</Link>
          <Link to="/gallery" onClick={toggleMenu}><i className="fa-solid fa-image me-2"></i> Gallery</Link>

          {/* Mobile Services Dropdown */}
          <div className={`mobile-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
            <div className="mobile-toggle" onClick={() => toggleDropdown('services')}>
              <span><i className="fa-solid fa-gears me-2"></i>Services</span>
              <i className={`fa-solid fa-chevron-${activeDropdown === 'services' ? 'up' : 'down'}`}></i>
            </div>
            <div className={`mobile-submenu ${activeDropdown === 'services' ? 'active' : ''}`}>
              <Link to="/services/application-development" onClick={toggleMenu}>Software Application</Link>
              <Link to="/services/networking" onClick={toggleMenu}>Networking System</Link>
              <Link to="/services/digital-marketing" onClick={toggleMenu}>Digital Marketing</Link>
              <Link to="/services/fire-system" onClick={toggleMenu}>Fire Alarm System</Link>
              <Link to="/services/pa-system" onClick={toggleMenu}>Public Address System</Link>
              <Link to="/services/access-control" onClick={toggleMenu}>Access Control</Link>
              <Link to="/services/fire-hydrant" onClick={toggleMenu}>Fire Hydrant System</Link>
              <Link to="/services/automation" onClick={toggleMenu}>Home/Building Automation</Link>
              <Link to="/services/cctv" onClick={toggleMenu}>CCTV & Surveillance</Link>
              <Link to="/services/intercom" onClick={toggleMenu}>Intercom System</Link>
              <Link to="/services/it-consulting" onClick={toggleMenu}>IT Consulting</Link>
              <Link to="/services/smart" onClick={toggleMenu}>Smart Class Setup</Link>
            </div>
          </div>

          {/* Mobile Products Dropdown */}
          <div className={`mobile-dropdown ${activeDropdown === 'products' ? 'active' : ''}`}>
            <div className="mobile-toggle" onClick={() => toggleDropdown('products')}>
              <span><i className="fa-solid fa-cart-shopping me-2"></i>Products</span>
              <i className={`fa-solid fa-chevron-${activeDropdown === 'products' ? 'up' : 'down'}`}></i>
            </div>

            <div className={`mobile-submenu ${activeDropdown === 'products' ? 'active' : ''}`}>

              {/* Software */}
              <div className={`mobile-dropdown ${activeDropdown === 'software' ? 'active' : ''}`}>
                <div className="mobile-toggle" onClick={() => toggleDropdown('software')}>
                  Software
                </div>
                <div className={`mobile-submenu ${activeDropdown === 'software' ? 'active' : ''}`}>
                  <Link to="/products/solis" onClick={toggleMenu}>Solis</Link>
                  <Link to="/products/polarface" onClick={toggleMenu}>PolarFace</Link>
                </div>
              </div>


              {/* Hardware */}
              <div className={`mobile-dropdown ${activeDropdown === 'hardware' ? 'active' : ''}`}>
                <div className="mobile-toggle" onClick={() => toggleDropdown('hardware')}>
                  Hardware
                </div>
                <div className={`mobile-submenu ${activeDropdown === 'hardware' ? 'active' : ''}`}>
                  <Link to="/products/cctv-p" onClick={toggleMenu}>CCTV</Link>
                  <Link to="/products/biometric" onClick={toggleMenu}>Home/Building</Link>
                  <Link to="/products/pa" onClick={toggleMenu}>Public Address</Link>
                  <Link to="/products/fire-hydrantss" onClick={toggleMenu}>Fire Hydrant</Link>
                  <Link to="/products/smoke-detectors" onClick={toggleMenu}>Fire Alarm</Link>
                  <Link to="/products/access-control" onClick={toggleMenu}>Access Control</Link>
                  <Link to="/products/network-switch" onClick={toggleMenu}>Network Products</Link>
                  <Link to="/products/inter-com" onClick={toggleMenu}>Intercom System</Link>
                  <Link to="/products/panel" onClick={toggleMenu}>Interactive Panels</Link>
                </div>
              </div>



            </div>
          </div>

           {/* buy re Products Dropdown */}
          {/* <div className={`mobile-dropdown ${activeDropdown === 'buy-refurbished-laptop' ? 'active' : ''}`}>
            <div className="mobile-toggle" onClick={() => toggleDropdown('buy-refurbished-laptop')}>
              <span><i className="fa-solid fa-laptop me-2"></i>Buy Refurbished</span>
              <i className={`fa-solid fa-chevron-${activeDropdown === 'buy-refurbished-laptop' ? 'up' : 'down'}`}></i>
            </div>
            <div className={`mobile-submenu ${activeDropdown === 'buy-refurbished-laptop' ? 'active' : ''}`}>
              <Link to="/products/hp" onClick={toggleMenu}>HP</Link>
              <Link to="/products/lenovo" onClick={toggleMenu}>Lenovo</Link>
              <Link to="/products/dell" onClick={toggleMenu}>Dell</Link>
              <Link to="/products/apple" onClick={toggleMenu}>MacBook</Link>
            </div>
          </div> */}


          <Link to="/careers" onClick={toggleMenu}><i className="fa-solid fa-briefcase me-2"></i> Careers</Link>
          <Link to="/contact" onClick={toggleMenu}><i className="fa-solid fa-envelope me-2"></i> Contact</Link>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919964585585?text=Hello" className="whatsapp-float" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp"></i>
        <span className="wa-tooltip">Chat with us!</span>
      </a>
    </header>
  );
};

export default Header;