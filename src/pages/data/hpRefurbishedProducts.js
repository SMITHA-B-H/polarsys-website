import laptopImg from "../../assets/image/hp-laptop.png";
import l1 from "../../assets/image/hp-laptop1.png";
import l2 from "../../assets/image/hp-laptop2.png";
import l4 from "../../assets/image/hp4.png";
import l5 from "../../assets/image/hp5.png";
import l6 from "../../assets/image/hp6.png";
import l7 from "../../assets/image/hp7.png";


/* ================= HP LAPTOP DATA ================= */

const hpLaptops = [
  {
    name: "HP EliteBook 840 G5",
    processor: "Intel i5 8th Gen",
    ram: "8GB RAM",
    storage: "256GB SSD",
    price: 28999,
    oldPrice: 38999,
    image: laptopImg,
  },
  {
    name: "HP EliteBook 840 G6",
    processor: "Intel i5 8th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 32999,
    oldPrice: 42999,
    image: l1,
  },
  {
    name: "HP EliteBook 850 G5",
    processor: "Intel i7 8th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 36999,
    oldPrice: 46999,
    image: l2,
  },
  {
    name: "HP ProBook 440 G7",
    processor: "Intel i5 10th Gen",
    ram: "8GB RAM",
    storage: "512GB SSD",
    price: 35999,
    oldPrice: 45999,
    image: laptopImg,
  },
  {
    name: "HP ProBook 450 G7",
    processor: "Intel i7 10th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 39999,
    oldPrice: 50999,
    image: l5,
  },
  {
    name: "HP EliteBook 745 G6",
    processor: "AMD Ryzen 5",
    ram: "8GB RAM",
    storage: "256GB SSD",
    price: 30999,
    oldPrice: 40999,
    image: laptopImg,
  },
  {
    name: "HP EliteBook 845 G7",
    processor: "AMD Ryzen 7",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 41999,
    oldPrice: 54999,
    image: l4,
  },
  {
    name: "HP ZBook 15 Workstation",
    processor: "Intel i7 9th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 46999,
    oldPrice: 62999,
    image: l1,
  },
  {
    name: "HP Pavilion Business",
    processor: "Intel i5 11th Gen",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 44999,
    oldPrice: 56999,
    image: l6,
  },
  {
    name: "HP Elite Dragonfly",
    processor: "Intel i7 10th Gen",
    ram: "16GB RAM",
    storage: "1TB SSD",
    price: 59999,
    oldPrice: 75999,
    image: l7,
  },
];

export default hpLaptops;