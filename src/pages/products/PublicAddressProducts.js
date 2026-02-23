import React from "react";
import publicAddressProducts from "../data/publicAddressProducts";
import "../../styles/public.css";

const openWhatsApp = (product) => {
  const phone =
    process.env.REACT_APP_WHATSAPP_NUMBER || "9964585585";

  const message = `Hello, I need a quote for ${product.name} (Public Address System).`;

  window.open(
    `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const getDiscountBadge = (price, oldPrice) => {
  if (!oldPrice) return null;

  const discount = oldPrice - price;
  const percent = Math.round((discount / oldPrice) * 100);

  return `Save ₹${discount} (${percent}% OFF)`;
};


const PublicAddressProducts = () => {
  return (
    <section className="pa-section">
      <div className="container">
        <h3 className="section-title">
          Public Address <span>System Products</span>
        </h3>

        <div className="pa-grid">
          {publicAddressProducts.map((product) => (
            <div className="product-card" key={product.name}>

              {/* {product.badge && (
                <span className="discount-badge">
                  {product.badge}
                </span>
              )} */}
              {product.oldPrice && (
                <span className="discount-badge">
                  {getDiscountBadge(product.price, product.oldPrice)}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />

              <h5 className="product-title">{product.name}</h5>
              <p className="brand">{product.brand}</p>
              <p className="spec">{product.spec}</p>

              <div className="price-box">
                <span className="current-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                {product.oldPrice && (
                  <span className="old-price">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              <button
                className="quote-btn"
                onClick={() => openWhatsApp(product)}
              >
                Request Quote
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicAddressProducts;
