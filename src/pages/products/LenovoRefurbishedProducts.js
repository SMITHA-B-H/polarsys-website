import React from "react";
import lenovoProducts from "../data/lenovoRefurbishedProducts";
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

// Reusable Card
const ProductCard = ({ product }) => (
  <div className="product-card">

    {product.badge && (
      <span className="discount-badge">{product.badge}</span>
    )}

    <img src={product.image} alt={product.name} />

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
);

const LenovoRefurbishedProducts = () => {

  const laptops = lenovoProducts.filter(
    (item) => item.category === "Laptop"
  );

  const desktops = lenovoProducts.filter(
    (item) => item.category === "Desktop"
  );

  return (
    <section className="products-section">

      {/* LAPTOPS */}
      <h2 className="products-title">Refurbished <strong>Lenovo Laptop</strong></h2>

      <div className="products-grid">
        {laptops.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {/* DESKTOPS */}
      <h2 className="products-title">Refurbished <strong>Lenovo Desktop </strong></h2>

      <div className="products-grid">
        {desktops.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

    </section>
  );
};

export default LenovoRefurbishedProducts;
