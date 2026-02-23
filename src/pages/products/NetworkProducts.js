import React from "react";
import networkProducts from "../../pages/data/networkProducts";
import "../../styles/networkProducts.css";

const openWhatsApp = (product) => {
  const phone = "9964585585";
  const msg = `Hello, I need a quote for ${product.name} (${product.brand})`;
  window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`);
};

const NetworkProducts = () => {
  return (
    <section className="network-section">
      <div className="container">
        <h3 className="section-title">
          Network <span>Hardware Products</span>
        </h3>

        <div className="network-grid">
          {networkProducts.map((item, index) => (
            <div className="product-card" key={index}>
              <span className="discount-badge">BEST SELLER</span>

              <img src={item.image} alt={item.name} />

              <h6 className="product-title">{item.name}</h6>
              <p className="brand">{item.brand}</p>
              <p className="spec">{item.spec}</p>

              <div className="price-box">
                <span className="current-price">
                  ₹{item.price.toLocaleString()}
                </span>
                <span className="old-price">
                  ₹{(item.price * 1.2).toLocaleString()}
                </span>
              </div>

              <button className="quote-btn" onClick={() => openWhatsApp(item)}>
                Request Quote
              </button>
            </div>
            
          ))}
        </div>




      </div>
    </section>
  );
};

export default NetworkProducts;
