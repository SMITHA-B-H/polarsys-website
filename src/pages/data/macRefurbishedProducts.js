// ===== Image Imports =====
import macLaptop from "../../assets/image/refurbished/macbook-laptop.png";
import macDesktop from "../../assets/image/refurbished/mac-desktop.png";
import m1 from "../../assets/image/refurbished/m1.png";
import m2 from "../../assets/image/refurbished/m2.png";
import m3 from "../../assets/image/refurbished/m3.png";
import m4 from "../../assets/image/refurbished/m4.png";
import m5 from "../../assets/image/refurbished/m5.png";
import md1 from "../../assets/image/refurbished/md1.png";
import md2 from "../../assets/image/refurbished/md2.png";
import md3 from "../../assets/image/refurbished/md3.png";
import md4 from "../../assets/image/refurbished/md4.png";
import md5 from "../../assets/image/refurbished/md5.png";

const macProducts = [

  // ===== MACBOOK LAPTOPS =====
  {
    name: "MacBook Air 2019",
    brand: "Apple",
    category: "Laptop",
    spec: "Intel i5 | 8GB RAM | 256GB SSD | 13\" Retina",
    price: 45999,
    oldPrice: 69999,
    badge: "Refurbished Deal",
    image: macLaptop,
  },
  {
    name: "MacBook Air M1 2020",
    brand: "Apple",
    category: "Laptop",
    spec: "Apple M1 | 8GB RAM | 256GB SSD | 13\" Retina",
    price: 64999,
    oldPrice: 89999,
    badge: "Best Seller",
    image: m1,
  },
  {
    name: "MacBook Air M2 2022",
    brand: "Apple",
    category: "Laptop",
    spec: "Apple M2 | 8GB RAM | 256GB SSD | 13.6\" Liquid Retina",
    price: 82999,
    oldPrice: 109999,
    badge: "Latest Model",
    image: m2,
  },
  {
    name: "MacBook Pro 13\" 2020",
    brand: "Apple",
    category: "Laptop",
    spec: "Apple M1 | 8GB RAM | 512GB SSD",
    price: 75999,
    oldPrice: 104999,
    badge: "Performance Deal",
    image: m3,
  },
  {
    name: "MacBook Pro 14\" M1 Pro",
    brand: "Apple",
    category: "Laptop",
    spec: "M1 Pro | 16GB RAM | 512GB SSD",
    price: 129999,
    oldPrice: 169999,
    badge: "Professional Choice",
    image: m4,
  },
  {
    name: "MacBook Pro 16\" M1 Pro",
    brand: "Apple",
    category: "Laptop",
    spec: "M1 Pro | 16GB RAM | 1TB SSD",
    price: 164999,
    oldPrice: 214999,
    badge: "High Performance",
    image: m5,
  },
  {
    name: "MacBook Pro 16\" M2 Pro",
    brand: "Apple",
    category: "Laptop",
    spec: "M2 Pro | 16GB RAM | 1TB SSD",
    price: 184999,
    oldPrice: 239999,
    badge: "Premium Model",
    image: macLaptop,
  },
  {
    name: "MacBook Pro 15\" 2019",
    brand: "Apple",
    category: "Laptop",
    spec: "Intel i7 | 16GB RAM | 512GB SSD | Retina",
    price: 79999,
    oldPrice: 119999,
    badge: "Workstation Laptop",
    image: m3,
  },

  // ===== MAC DESKTOPS =====
  {
    name: "iMac 21.5\" 2019",
    brand: "Apple",
    category: "Desktop",
    spec: "Intel i5 | 8GB RAM | 1TB HDD",
    price: 58999,
    oldPrice: 84999,
    badge: "All-in-One Desktop",
    image: macDesktop,
  },
  {
    name: "iMac 24\" M1 2021",
    brand: "Apple",
    category: "Desktop",
    spec: "Apple M1 | 8GB RAM | 256GB SSD",
    price: 104999,
    oldPrice: 134999,
    badge: "Modern AIO",
    image: md1,
  },
  {
    name: "iMac 27\" Retina 5K",
    brand: "Apple",
    category: "Desktop",
    spec: "Intel i7 | 16GB RAM | 512GB SSD",
    price: 129999,
    oldPrice: 169999,
    badge: "Creative Studio",
    image: md2,
  },
  {
    name: "Mac Mini M1",
    brand: "Apple",
    category: "Desktop",
    spec: "Apple M1 | 8GB RAM | 256GB SSD",
    price: 54999,
    oldPrice: 74999,
    badge: "Compact Desktop",
    image: md3,
  },
  {
    name: "Mac Mini M2",
    brand: "Apple",
    category: "Desktop",
    spec: "Apple M2 | 8GB RAM | 512GB SSD",
    price: 68999,
    oldPrice: 89999,
    badge: "Latest Compact",
    image: md4,
  },
  {
    name: "Mac Studio M1 Max",
    brand: "Apple",
    category: "Desktop",
    spec: "M1 Max | 32GB RAM | 1TB SSD",
    price: 184999,
    oldPrice: 239999,
    badge: "Creator Workstation",
    image: md5,
  },
  {
    name: "Mac Studio M2 Ultra",
    brand: "Apple",
    category: "Desktop",
    spec: "M2 Ultra | 64GB RAM | 2TB SSD",
    price: 329999,
    oldPrice: 399999,
    badge: "Ultra Performance",
    image: macDesktop,
  },
  {
    name: "Mac Pro 2019 Tower",
    brand: "Apple",
    category: "Desktop",
    spec: "Intel Xeon | 32GB RAM | 1TB SSD",
    price: 349999,
    oldPrice: 449999,
    badge: "Enterprise Workstation",
    image: md4,
  },
];

export default macProducts;
