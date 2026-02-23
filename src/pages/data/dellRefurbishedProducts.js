// ===== Image Imports =====
import dellLaptop from "../../assets/image/refurbished/dell-laptop.png";
import dellDesktop from "../../assets/image/refurbished/dell-desktop.png";
import d1 from "../../assets/image/refurbished/d1.png";
import d2 from "../../assets/image/refurbished/d2.png";
import d3 from "../../assets/image/refurbished/d3.png";
import d4 from "../../assets/image/refurbished/d4.png";
import d5 from "../../assets/image/refurbished/d5.png";
import dd from "../../assets/image/refurbished/dd.png";
import dd1 from "../../assets/image/refurbished/dd1.png";
import dd2 from "../../assets/image/refurbished/dd2.png";
import dd3 from "../../assets/image/refurbished/dd3.png";
import dd4 from "../../assets/image/refurbished/dd4.png";
import dd5 from "../../assets/image/refurbished/dd5.png";


const dellProducts = [

  /* ================= DELL LAPTOPS ================= */

  {
    name: "Dell Latitude 5490",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i5 8th Gen | 8GB RAM | 256GB SSD",
    price: 23999,
    oldPrice: 32999,
    badge: "27% OFF",
    image: dellLaptop,
  },
  {
    name: "Dell Latitude 5400",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i5 9th Gen | 16GB RAM | 512GB SSD",
    price: 28999,
    oldPrice: 38999,
    badge: "25% OFF",
    image: d1,
  },
  {
    name: "Dell Latitude 5410",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i7 10th Gen | 16GB RAM | 512GB SSD",
    price: 34999,
    oldPrice: 46999,
    badge: "26% OFF",
    image: d2,
  },
  {
    name: "Dell Latitude 5480",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i5 7th Gen | 8GB RAM | 256GB SSD",
    price: 21999,
    oldPrice: 29999,
    badge: "27% OFF",
    image: d5,
  },
  {
    name: "Dell Latitude 5590",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i7 8th Gen | 16GB RAM | 512GB SSD",
    price: 32999,
    oldPrice: 44999,
    badge: "26% OFF",
    image: d4,
  },
  {
    name: "Dell Latitude 5300",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i5 8th Gen | 8GB RAM | 256GB SSD",
    price: 24999,
    oldPrice: 33999,
    badge: "26% OFF",
    image: d5,
  },
  {
    name: "Dell Latitude 7320",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i7 11th Gen | 16GB RAM | 512GB SSD",
    price: 44999,
    oldPrice: 59999,
    badge: "25% OFF",
    image: d3,
  },
  {
    name: "Dell Latitude 7420",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i7 11th Gen | 16GB RAM | 1TB SSD",
    price: 48999,
    oldPrice: 64999,
    badge: "25% OFF",
    image: d1,
  },
  {
    name: "Dell Inspiron 3593",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i3 10th Gen | 8GB RAM | 256GB SSD",
    price: 19999,
    oldPrice: 27999,
    badge: "29% OFF",
    image: dellLaptop,
  },
  {
    name: "Dell Vostro 3510",
    brand: "Dell",
    category: "Laptop",
    spec: "Intel i5 11th Gen | 8GB RAM | 512GB SSD",
    price: 31999,
    oldPrice: 42999,
    badge: "26% OFF",
    image: d1,
  },

  /* ================= DELL DESKTOPS ================= */

  {
    name: "Dell OptiPlex 3060",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i5 8th Gen | 8GB RAM | 256GB SSD",
    price: 17999,
    oldPrice: 24999,
    badge: "28% OFF",
    image: dellDesktop,
  },
  {
    name: "Dell OptiPlex 3070",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i5 9th Gen | 16GB RAM | 512GB SSD",
    price: 22999,
    oldPrice: 31999,
    badge: "28% OFF",
    image: dd1,
  },
  {
    name: "Dell OptiPlex 3080",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i7 10th Gen | 16GB RAM | 512GB SSD",
    price: 29999,
    oldPrice: 41999,
    badge: "29% OFF",
    image: dd2,
  },
  {
    name: "Dell OptiPlex 5050",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i5 7th Gen | 8GB RAM | 256GB SSD",
    price: 16999,
    oldPrice: 23999,
    badge: "29% OFF",
    image: dd3,
  },
  {
    name: "Dell OptiPlex 7060",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i7 8th Gen | 16GB RAM | 1TB SSD",
    price: 33999,
    oldPrice: 47999,
    badge: "29% OFF",
    image: dd2,
  },
  {
    name: "Dell Precision T3630",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel Xeon | 32GB RAM | 1TB SSD",
    price: 54999,
    oldPrice: 74999,
    badge: "27% OFF",
    image: dd,
  },
  {
    name: "Dell OptiPlex 7040",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i5 6th Gen | 8GB RAM | 256GB SSD",
    price: 14999,
    oldPrice: 21999,
    badge: "32% OFF",
    image: dd4,
  },
  {
    name: "Dell OptiPlex 9020",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i7 4th Gen | 16GB RAM | 512GB SSD",
    price: 19999,
    oldPrice: 29999,
    badge: "33% OFF",
    image: dd5,
  },
  {
    name: "Dell OptiPlex 5000",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel i5 12th Gen | 16GB RAM | 512GB SSD",
    price: 41999,
    oldPrice: 58999,
    badge: "28% OFF",
    image: dd1,
  },
  {
    name: "Dell Precision 5820",
    brand: "Dell",
    category: "Desktop",
    spec: "Intel Xeon | 64GB RAM | 2TB SSD",
    price: 79999,
    oldPrice: 109999,
    badge: "27% OFF",
    image: dellDesktop,
  },
];

export default dellProducts;
