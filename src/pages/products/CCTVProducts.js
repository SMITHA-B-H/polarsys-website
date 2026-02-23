import React from "react";
import "../../styles/CCTVProducts.css";

import domeCam from "../../assets/cctv/dome-camera.png";
import bulletCam from "../../assets/cctv/bullet-camera.png";
import nvr from "../../assets/cctv/nvr.png";
import dvr from "../../assets/cctv/dvr.png";
import poeSwitch from "../../assets/cctv/poe-switch.png";
import hdd from "../../assets/cctv/hard-disk.png";
import smps from "../../assets/cctv/smps.png";
import cable from "../../assets/cctv/cables.png";
import solarBulletCam from "../../assets/cctv/solar-bullet.png";
import solarPTZ from "../../assets/cctv/solar-ptz.png";
import solarWifiCam from "../../assets/cctv/solar-wifi.png";
import solarKit from "../../assets/cctv/solar-kit.png";

const products = [
  {
    name: "IP Dome Camera",
    brand: "Hikvision",
    resolution: "4MP / 8MP",
    price: 3499,
    image: domeCam,
  },
  {
    name: "Bullet Camera",
    brand: "CP Plus",
    resolution: "2MP / 5MP",
    price: 2999,
    image: bulletCam,
  },
  {
    name: "Network Video Recorder (NVR)",
    brand: "Dahua",
    resolution: "8 / 16 Channel",
    price: 6999,
    image: nvr,
  },
  {
    name: "Digital Video Recorder (DVR)",
    brand: "Hikvision",
    resolution: "4 / 8 Channel",
    price: 5899,
    image: dvr,
  },
  {
    name: "PoE Network Switch",
    brand: "TP-Link",
    resolution: "8 Port PoE",
    price: 4499,
    image: poeSwitch,
  },
  {
    name: "Surveillance Hard Disk",
    brand: "WD Purple",
    resolution: "1TB / 2TB / 4TB",
    price: 3799,
    image: hdd,
  },
  {
    name: "SMPS Power Supply",
    brand: "Secureye",
    resolution: "8 / 16 Channel",
    price: 1599,
    image: smps,
  },
  {
    name: "CCTV Cables & Connectors",
    brand: "Finolex",
    resolution: "RG59 + Power",
    price: 1299,
    image: cable,
  },
   /* 🔆 Solar CCTV Cameras */
  {
    name: "Solar Powered Bullet Camera",
    brand: "Hikvision",
    resolution: "4MP | Battery + Solar Panel",
    price: 12499,
    image: solarBulletCam,
  },
  {
    name: "Solar Wireless PTZ Camera",
    brand: "CP Plus",
    resolution: "3MP | Pan Tilt Zoom | 4G SIM Support",
    price: 14999,
    image: solarPTZ,
  },
  {
    name: "Solar Wi-Fi Outdoor Camera",
    brand: "Imou",
    resolution: "2MP | Motion Detection | Cloud Storage",
    price: 9999,
    image: solarWifiCam,
  },
  {
    name: "Solar Camera Complete Kit",
    brand: "Dahua",
    resolution: "Camera + Solar Panel + Battery",
    price: 18999,
    image: solarKit,
  },
];

const CCTVProducts = () => {
  const openWhatsApp = (product) => {
    const message = `Hello Polarsys Team,%0A%0AI would like a quote for:%0A• ${product.name}%0A• Brand: ${product.brand}%0A• Specification: ${product.resolution}%0A%0AThank you.`;
    window.open(
      `https://wa.me/919964585585?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="cctv-section">
      <div className="container">
        <h3 className="section-title">
          CCTV & <span>Surveillance Products</span>
        </h3>

        <div className="cctv-grid">
          {products.map((product, index) => (
            <div className="cctv-card" key={index}>
                <span className="discount-badge">SAVE 22%</span>

              <img src={product.image} alt={product.name} />

              <h6>{product.name}</h6>
              <p className="brand">{product.brand}</p>
              <p className="spec">{product.resolution}</p>
              
              {/* <div className="price">₹{product.price.toLocaleString()}</div> */}
              <div className="price-box">
                    <span className="current-price">₹{product.price.toLocaleString()}</span>
                    <span className="old-price">₹{(product.price * 1.2).toLocaleString()}</span>
                </div>

              <button onClick={() => openWhatsApp(product)}>
                Request Quote
              </button>
            </div>
          ))}
        </div>
        
      </div>

      
    </section>
  );
};

export default CCTVProducts;
