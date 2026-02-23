// ===== Image Imports =====
import lenovoLaptop from "../../assets/image/lenovo-laptop.png";
import lenovoDesktop from "../../assets/image/lenovo-desktop.png";
import l1 from "../../assets/image/l1.png";
import l2 from "../../assets/image/l2.png";
import l3 from "../../assets/image/l3.png";
import l4 from "../../assets/image/l4.png";
import l5 from "../../assets/image/l5.png";
import l6 from "../../assets/image/l6.png";
import ld1 from "../../assets/image/ld1.png";
import ld2 from "../../assets/image/ld2.png";
import ld3 from "../../assets/image/ld3.png";
import ld4 from "../../assets/image/ld4.png";

const lenovoProducts = [

  // ===== LENOVO LAPTOPS =====
  {
    name: "Lenovo ThinkPad T480",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Intel i5 8th Gen | 8GB RAM | 256GB SSD | 14\" FHD",
    price: 25999,
    oldPrice: 38999,
    badge: "Save ₹13,000",
    image: lenovoLaptop,
  },
  {
    name: "Lenovo ThinkPad T490",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Intel i7 8th Gen | 16GB RAM | 512GB SSD",
    price: 34999,
    oldPrice: 49999,
    badge: "Best Seller",
    image: l1,
  },
  {
    name: "Lenovo ThinkPad X270",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Intel i5 7th Gen | 8GB RAM | 256GB SSD",
    price: 21999,
    oldPrice: 32999,
    badge: "Refurbished Deal",
    image: l2,
  },
  {
    name: "Lenovo ThinkPad L14",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Intel i5 10th Gen | 16GB RAM | 512GB SSD",
    price: 39999,
    oldPrice: 58999,
    badge: "Save ₹19,000",
    image: l3,
  },
  {
    name: "Lenovo ThinkPad E14",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Ryzen 5 | 8GB RAM | 512GB SSD",
    price: 36999,
    oldPrice: 52999,
    badge: "Hot Deal",
    image: l4,
  },

    // ===== EXTRA LENOVO LAPTOPS =====
  {
    name: "Lenovo ThinkPad T14",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Intel i5 11th Gen | 16GB RAM | 512GB SSD | 14\" FHD",
    price: 42999,
    oldPrice: 60999,
    badge: "Business Choice",
    image: l5,
  },
  {
    name: "Lenovo ThinkPad X1 Carbon Gen 8",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Intel i7 10th Gen | 16GB RAM | 1TB SSD",
    price: 64999,
    oldPrice: 89999,
    badge: "Premium Model",
    image: l6,
  },
  {
    name: "Lenovo ThinkPad Yoga 370",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Intel i5 7th Gen | 8GB RAM | 256GB SSD | Touch",
    price: 29999,
    oldPrice: 43999,
    badge: "2-in-1 Convertible",
    image: l1,
  },
  {
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    category: "Laptop",
    spec: "Ryzen 7 | 16GB RAM | 512GB SSD",
    price: 45999,
    oldPrice: 64999,
    badge: "Performance Deal",
    image: l2,
  },

  // ===== LENOVO DESKTOPS =====
  {
    name: "Lenovo ThinkCentre M720",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel i5 8th Gen | 8GB RAM | 512GB SSD",
    price: 24999,
    oldPrice: 35999,
    badge: "Office Favourite",
    image: lenovoDesktop,
  },
  {
    name: "Lenovo ThinkCentre M920",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel i7 8th Gen | 16GB RAM | 512GB SSD",
    price: 33999,
    oldPrice: 48999,
    badge: "Save ₹15,000",
    image: ld1,
  },
  {
    name: "Lenovo ThinkCentre M710",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel i3 7th Gen | 8GB RAM | 256GB SSD",
    price: 18999,
    oldPrice: 27999,
    badge: "Budget Choice",
    image: ld2,
  },
  {
    name: "Lenovo ThinkCentre Neo 50s",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel i5 12th Gen | 8GB RAM | 512GB SSD",
    price: 44999,
    oldPrice: 62999,
    badge: "Latest Model",
    image: ld3,
  },
  {
    name: "Lenovo ThinkStation P330",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel Xeon | 16GB RAM | 1TB SSD",
    price: 55999,
    oldPrice: 78999,
    badge: "Workstation",
    image: ld4,
  },
  // ===== EXTRA LENOVO DESKTOPS =====
  {
    name: "Lenovo ThinkCentre M75q",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Ryzen 5 Pro | 16GB RAM | 512GB SSD",
    price: 38999,
    oldPrice: 55999,
    badge: "Compact Power",
    image: ld2,
  },
  {
    name: "Lenovo ThinkCentre M80",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel i5 10th Gen | 8GB RAM | 1TB HDD + 256GB SSD",
    price: 31999,
    oldPrice: 46999,
    badge: "Hybrid Storage",
    image: lenovoDesktop,
  },
  {
    name: "Lenovo IdeaCentre 3",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel i3 11th Gen | 8GB RAM | 512GB SSD",
    price: 26999,
    oldPrice: 38999,
    badge: "Home & Office",
    image: ld1,
  },
  {
    name: "Lenovo ThinkStation P340",
    brand: "Lenovo",
    category: "Desktop",
    spec: "Intel Xeon | 32GB RAM | 1TB SSD | NVIDIA Quadro",
    price: 72999,
    oldPrice: 99999,
    badge: "High-End Workstation",
    image: ld2,
  },
];

export default lenovoProducts;
