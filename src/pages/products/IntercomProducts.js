import React from "react";
import intercomProducts from "../../pages/data/intercomProductsData";
import "../../styles/intercomProducts.css";

const IntercomProducts = () => {
  return (
    <section className="intercom-products-section">
      <h2 className="products-title">Intercom <strong>System Products</strong></h2>

      <div className="products-grid">
        {intercomProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <span className="offer-badge">{product.offer}</span>

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">{product.brand}</p>

            <ul className="product-features">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {/* <div className="product-price">
              ₹{product.price.toLocaleString("en-IN")}
            </div> */}

            <div className="price-box">
                    <span className="current-price">₹{product.price.toLocaleString()}</span>
                    <span className="old-price">₹{(product.price * 1.2).toLocaleString()}</span>
                </div>

            <button
                className="quote-btn"
                onClick={() => {
                    const message = `Hello Polarsys Team,%0A%0AI would like to request a quotation for the following product:%0A• ${product.name}%0A• Brand: ${product.brand}%0A%0APlease share pricing and availability.%0A%0AThank you.`;
                    const whatsappUrl = `https://wa.me/9964585585?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                }}
                >       
                Request Quote
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default IntercomProducts;
