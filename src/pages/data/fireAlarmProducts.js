import smokeDetectorImg from "../../assets/image/fire-alarm/smoke-detector.png";
import heatDetectorImg from "../../assets/image/fire-alarm/heat-detector.png";
import mcpImg from "../../assets/image/fire-alarm/manual-call-point.png";
import hooterImg from "../../assets/image/fire-alarm/hooter.png";
import strobeImg from "../../assets/image/fire-alarm/strobe.png";
import panelImg from "../../assets/image/fire-alarm/control-panel.png";
import repeaterImg from "../../assets/image/fire-alarm/repeater-panel.png";
import batteryImg from "../../assets/image/fire-alarm/battery.png";
import cableImg from "../../assets/image/fire-alarm/fire-cable.png";

const fireAlarmProducts = [
  {
    name: "Smoke Detector",
    brand: "Honeywell",
    spec: "Photoelectric | Addressable",
    price: 1499,
    oldPrice: 1999,
    image: smokeDetectorImg,
    badge: "SAVE 25%",
  },
  {
    name: "Heat Detector",
    brand: "Siemens",
    spec: "Fixed Temp | Addressable",
    price: 1699,
    oldPrice: 2299,
    image: heatDetectorImg,
    badge: "SAVE 26%",
  },
  {
    name: "Manual Call Point (MCP)",
    brand: "Honeywell",
    spec: "Break Glass | Resettable",
    price: 999,
    oldPrice: 1299,
    image: mcpImg,
    badge: "SAVE 23%",
  },
  {
    name: "Hooter / Sounder",
    brand: "Bosch",
    spec: "90dB | Red",
    price: 1199,
    oldPrice: 1599,
    image: hooterImg,
    badge: "SAVE 25%",
  },
  {
    name: "Hooter cum Strobe",
    brand: "System Sensor",
    spec: "Audio + Visual Alert",
    price: 2499,
    oldPrice: 3199,
    image: strobeImg,
    badge: "BEST SELLER",
  },
  {
    name: "Fire Alarm Control Panel",
    brand: "Honeywell",
    spec: "4 Loop | Addressable",
    price: 38999,
    oldPrice: 47999,
    image: panelImg,
    badge: "CORE UNIT",
  },
  {
    name: "Repeater Panel",
    brand: "Honeywell",
    spec: "Remote Monitoring",
    price: 21999,
    oldPrice: 26999,
    image: repeaterImg,
    badge: "OPTIONAL",
  },
  {
    name: "Battery Backup",
    brand: "Exide",
    spec: "12V 7Ah",
    price: 1899,
    oldPrice: 2399,
    image: batteryImg,
    badge: "ESSENTIAL",
  },
  {
    name: "Fire Alarm Cable",
    brand: "Polycab",
    spec: "FRLS | 2 Core",
    price: 3499,
    oldPrice: 4499,
    image: cableImg,
    badge: "SAVE 22%",
  },
];

export default fireAlarmProducts;
