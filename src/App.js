

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import Page Components (You will create these)
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Careers from './pages/Careers';
// import GalleryPage from './pages/GalleryPage';

// ... import other services/products pages
import SoftwareApplication from './pages/services/SoftwareApplication';
import Networking from './pages/services/Networking';
import DigitalMarketing from './pages/services/DigitalMarketing';
import FireAlarmSystem from './pages/services/FireAlarmSystem'; 
import PublicAddressSystem from './pages/services/PublicAddressSystem';
import AccessControl  from './pages/services/AccessControl';
import FireHydrantSystem from './pages/services/FireHydrantSystem';
import HomeAutomation from './pages/services/HomeAutomation';
import CCTVSurveillance from './pages/services/CCTVSurveillance';
import ITConsulting from './pages/services/ITConsulting';


import EnterpriseLaptops from './pages/products/EnterpriseLaptops';
import InteractivePanels from './pages/products/InteractivePanels';
import IntercomService from './pages/services/IntercomService';
import Desktop from './pages/products/Desktop';
import IntercomProducts from './pages/products/IntercomProducts';
import CCTVProducts from './pages/products/CCTVProducts';
import NetworkProducts from './pages/products/NetworkProducts';
import FireHydrantProducts from './pages/products/FireHydrantProducts';
import FireAlarmProducts from './pages/products/FireAlarmProducts';
import AccessControlProducts from './pages/products/AccessControlProducts';
import HomeAutomationProducts from './pages/products/HomeAutomationProducts';
import PublicAddressProducts from './pages/products/PublicAddressProducts';
import SmartClassSetup from './pages/services/SmartClassSetup';
import InteractivePanel from './pages/products/InteractivePanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import HpRefurbishedProducts from './pages/products/HpRefurbishedProducts';
import DellRefurbishedProducts from './pages/products/DellRefurbishedProducts';
import LenovoRefurbishedProducts from './pages/products/LenovoRefurbishedProducts';
import MacRefurbishedProducts from './pages/products/MacRefurbishedProducts';
// ... import more pages as needed


function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Replaces th:replace="partials/header" */}
      <Header />

      {/* DYNAMIC CONTENT: Replaces th:replace="${content}" */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<Careers />} />
          {/* <Route path="/gallery" element={<GalleryPage/>}/> */}
         
          
          {/* Example of nested service routes */}
          <Route path="/services/application-development" element={<SoftwareApplication />} />
          <Route path="/services/networking" element={<Networking/>}/>
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/fire-system" element={<FireAlarmSystem/>}/>
          <Route path="/services/pa-system" element={<PublicAddressSystem/>}/>
          <Route path="/services/access-control" element={<AccessControl/>}/>
          <Route path="/services/fire-hydrant" element={<FireHydrantSystem/>}/>
          <Route path="/services/automation" element={<HomeAutomation/>}/>
          <Route path="/services/cctv" element={<CCTVSurveillance/>}/>
          <Route path="/services/intercom" element={<IntercomService/>}/>
          <Route path="/services/smart" element={<SmartClassSetup />} />
          <Route path="/services/it-consulting" element={<ITConsulting/>}/>


          <Route path="/products/laptops" element={<EnterpriseLaptops />} />
          <Route path="/products/panels" element={<InteractivePanels />} />
           <Route path="/products/desktop" element={<Desktop />} />

          <Route path="/products/inter-com" element={<IntercomProducts />} />
          <Route path="/products/cctv-p" element={<CCTVProducts />} />
          <Route path="/products/fire-hydrantss" element={<FireHydrantProducts />} />
          <Route path="/products/network-switch" element={<NetworkProducts />} />
          <Route path="/products/smoke-detectors" element={<FireAlarmProducts />} />
          <Route path="/products/access-point" element={<AccessControlProducts />} />
          <Route path="/products/biometric" element={<HomeAutomationProducts />} />
          <Route path="/products/pa" element={<PublicAddressProducts />} />
          <Route path="/products/panel" element={<InteractivePanel />} />

          <Route path="/products/hp" element={<HpRefurbishedProducts />} />
          <Route path="/products/dell" element={<DellRefurbishedProducts />} />
          <Route path="/products/lenovo" element={<LenovoRefurbishedProducts />} />
          <Route path="/products/apple" element={<MacRefurbishedProducts />} />

          {/* Add more routes as needed */}
        </Routes>
      </main>

      {/* Replaces th:replace="partials/footer" */}
      <Footer />
    </Router>
  );
}

export default App;
