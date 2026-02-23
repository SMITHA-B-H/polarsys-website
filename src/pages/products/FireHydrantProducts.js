import React from "react";
import fireHydrantProducts from "../../pages/data/fireHydrantProducts";

import "../../styles/intercomProducts.css";

const openWhatsApp = (product) => {
  const phone = "9964585585";
  const message = `Hello, I need a quote for ${product.name}. Please share details.`;
  window.open(
    `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`
  );
};

const FireHydrantProducts = () => {
  return (
    <section className="cctv-section">
      <div className="container">
        <h3 className="section-title">
          Fire <span>Hydrant System Products</span>
        </h3>

        <div className="cctv-grid">
          {fireHydrantProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <span className="discount-badge">{product.badge}</span>

              <img src={product.image} alt={product.name} />

              <h6 className="product-title">{product.name}</h6>
              <p className="brand">{product.brand}</p>
              <p className="spec">{product.spec}</p>

              <div className="price-box">
                <span className="current-price">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="old-price">
                  ₹{product.oldPrice.toLocaleString()}
                </span>
              </div>

              <button className="quote-btn" onClick={() => openWhatsApp(product)}>
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FireHydrantProducts;
