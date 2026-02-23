import React from 'react';
import { FaLaptop } from 'react-icons/fa';

const EnterpriseLaptops = () => {
  return (
    <div className="product-page">
      <h1>Enterprise Laptops</h1>
      <div className="product-content">
        <FaLaptop size={50} />
        <p>High-performance laptops designed for enterprise needs.</p>
        <ul>
          <li>Powerful Processors</li>
          <li>Long Battery Life</li>
          <li>Security Features</li>
          <li>Professional Support</li>
        </ul>
        <button className="btn-primary">View Specifications</button>
      </div>
    </div>
  );
};

export default EnterpriseLaptops;
