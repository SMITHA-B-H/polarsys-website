import React from "react";
import macProducts from "../../pages/data/macRefurbishedProducts";
import "../../styles/CCTVProducts.css";

const openWhatsApp = (product) => {
  const phone =
    process.env.REACT_APP_WHATSAPP_NUMBER || "9964585585";

  const message = `Hello, I need a quote for ${product.name} (${product.category})`;

  window.open(
    `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const MacRefurbishedProducts = () => {

  // ===== FILTER PRODUCTS =====
  const laptops = macProducts.filter(
    (product) => product.category === "Laptop"
  );

  const desktops = macProducts.filter(
    (product) => product.category === "Desktop"
  );

  // ===== PRODUCT CARD =====
  const renderProducts = (products) => (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card" key={product.name}>

          {product.badge && (
            <span className="discount-badge">
              {product.badge}
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />

          <h4>{product.name}</h4>
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
  );

  return (
    <section className="products-section">

      {/* ===== MACBOOK LAPTOPS ===== */}
      <h2 className="products-title">
        Buy Refurbished <strong>MacBook Laptops</strong>
      </h2>
      {renderProducts(laptops)}

      {/* ===== MAC DESKTOPS ===== */}
      <h2 className="products-title mt-5">
        Buy Refurbished <strong>Mac Desktops</strong>
      </h2>
      {renderProducts(desktops)}

    </section>
  );
};

export default MacRefurbishedProducts;
