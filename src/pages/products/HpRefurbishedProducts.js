import React from "react";
import  hpLaptops  from "../../pages/data/hpRefurbishedProducts";
import  hpDesktops from "../../pages/data/hpRefurbisheddesktop";
// import "../../styles/hp.css";

/* ===== Discount Badge Function ===== */
const getDiscountBadge = (price, oldPrice) => {
  if (!oldPrice) return null;

  const discount = oldPrice - price;
  const percent = Math.round((discount / oldPrice) * 100);

  return `Save ₹${discount} (${percent}% OFF)`;
};
const openWhatsApp = (product) => {
  const phone =
    process.env.REACT_APP_WHATSAPP_NUMBER || "9964585585";

  const message = `Hello, I need a quote for ${product.name} (${product.category})`;

  window.open(
    `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const HpRefurbishedProducts = () => {
  const renderProducts = (products) => {
    return products.map((product, index) => (
      <div className="product-card" key={index}>
        
        {product.oldPrice && (
          <span className="discount-badge">
            {getDiscountBadge(product.price, product.oldPrice)}
          </span>
        )}

        <img src={product.image} alt={product.name} />

        <h4>{product.name}</h4>
        <p className="brand">{product.processor}</p>
        <p className="spec">
          {product.ram} | {product.storage}
        </p>

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
    ));
  };

  return (
    <section className="products-section">
      
      <h2 className="products-title">Refurbished <strong>HP Laptop</strong></h2>
      <div className="products-grid">{renderProducts(hpLaptops)}</div>

        <br /><br />
        <h2 className="products-title">Refurbished <strong>HP Desktop</strong></h2>
      
      <div className="products-grid">{renderProducts(hpDesktops)}</div>

    </section>
  );
};

export default HpRefurbishedProducts;