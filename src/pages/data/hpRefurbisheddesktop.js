import desktopImg from "../../assets/image/hp-desktop.png";
import d1 from "../../assets/image/hp-desktop-1.png";
import d2 from "../../assets/image/hp-2.png";
import d3 from "../../assets/image/hp-3.png";
import d4 from "../../assets/image/hp-4.png"; 
import d5 from "../../assets/image/hp-5.png";
import d6 from "../../assets/image/hp-6.png";

// * ================= HP DESKTOP DATA ================= */

const hpDesktops = [
  {
    name: "HP EliteDesk 800 G4",
    processor: "Intel i5 8th Gen",
    ram: "8GB RAM",
    storage: "256GB SSD",
    price: 21999,
    oldPrice: 29999,
    image: desktopImg,
  },
  {
    name: "HP EliteDesk 800 G5",
    processor: "Intel i7 8th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 27999,
    oldPrice: 36999,
    image: d5,
  },
  {
    name: "HP ProDesk 600 G4",
    processor: "Intel i5 8th Gen",
    ram: "8GB RAM",
    storage: "1TB HDD",
    price: 19999,
    oldPrice: 26999,
    image: d3,
  },
  {
    name: "HP ProDesk 600 G5",
    processor: "Intel i5 9th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 25999,
    oldPrice: 34999,
    image: d6,
  },
  {
    name: "HP EliteDesk 705 G4",
    processor: "AMD Ryzen 5",
    ram: "8GB RAM",
    storage: "256GB SSD",
    price: 22999,
    oldPrice: 30999,
    image: d4,
  },
  {
    name: "HP EliteDesk 705 G5",
    processor: "AMD Ryzen 7",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 28999,
    oldPrice: 37999,
    image: d1,
  },
  {
    name: "HP Z2 Workstation",
    processor: "Intel Xeon",
    ram: "32GB RAM",
    storage: "1TB SSD",
    price: 55999,
    oldPrice: 73999,
    image: d6,
  },
  {
    name: "HP Pavilion Desktop",
    processor: "Intel i5 11th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 34999,
    oldPrice: 45999,
    image: d2,
  },
  {
    name: "HP ProDesk 400 G7",
    processor: "Intel i3 10th Gen",
    ram: "8GB RAM",
    storage: "256GB SSD",
    price: 20999,
    oldPrice: 28999,
    image: d6,
  },
  {
    name: "HP EliteDesk 800 Mini",
    processor: "Intel i5 10th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 30999,
    oldPrice: 39999,
    image: d4,
  },
];

export default hpDesktops;