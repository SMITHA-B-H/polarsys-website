import switchImg from "../../assets/image/network/switch.png";
import routerImg from "../../assets/image/network/router.png";
import firewallImg from "../../assets/image/network/firewall.png";
import accessPointImg from "../../assets/image/network/access-point.png";
import cat6Img from "../../assets/image/network/cat6-cable.png";
import cat6OutdoorImg from "../../assets/image/network/cat6-outdoor.png";
import patchCordImg from "../../assets/image/network/patch-cord.png";
import keystoneImg from "../../assets/image/network/keystone-jack.png";
import facePlateImg from "../../assets/image/network/face-plate.png";
import junctionBoxImg from "../../assets/image/network/junction-box.png";
import patchPanelImg from "../../assets/image/network/patch-panel.png";
import rackImg from "../../assets/image/network/network-rack.png";
import pduImg from "../../assets/image/network/pdu.png";
import poeSwitch from "../../assets/image/poe-switch.png";

const networkProducts = [
  {
    name: "24-Port Managed Switch",
    brand: "Cisco",
    spec: "Gigabit | Layer 2",
    price: 18999,
    image: switchImg,
    category: "LAN / WAN",
  },
  {
    name: "Enterprise Router",
    brand: "TP-Link",
    spec: "Dual WAN | VPN Ready",
    price: 12999,
    image: routerImg,
    category: "LAN / WAN",
  },
  {
    name: "Firewall & VPN Gateway",
    brand: "Fortinet",
    spec: "UTM | IPS | VPN",
    price: 45999,
    image: firewallImg,
    category: "Security / VPN",
  },
  {
    name: "Wireless Access Point",
    brand: "Ubiquiti",
    spec: "Dual Band | PoE",
    price: 8999,
    image: accessPointImg,
    category: "Wireless",
  },

  {
    name: "Cat6 Ethernet Cable (305m)",
    brand: "D-Link",
    spec: "23 AWG | Solid Copper",
    price: 6999,
    image: cat6Img,
    category: "Structured Cabling",
  },
  {
    name: "Cat6 Outdoor Ethernet Cable",
    brand: "Finolex",
    spec: "Weatherproof | UV Protected",
    price: 8499,
    image: cat6OutdoorImg,
    category: "Structured Cabling",
  },
  {
    name: "Cat6 Patch Cord (3m)",
    brand: "AMP",
    spec: "RJ45 | High Speed",
    price: 249,
    image: patchCordImg,
    category: "Structured Cabling",
  },
  {
    name: "Cat6 Keystone Jack",
    brand: "D-Link",
    spec: "Tool-less | 1Gbps",
    price: 149,
    image: keystoneImg,
    category: "Structured Cabling",
  },
  {
    name: "Cat6 Face Plate (2 Port)",
    brand: "Legrand",
    spec: "Wall Mount | Modular",
    price: 199,
    image: facePlateImg,
    category: "Structured Cabling",
  },
  {
    name: "Cat6 Junction Box",
    brand: "MX",
    spec: "Shielded | Industrial Grade",
    price: 349,
    image: junctionBoxImg,
    category: "Structured Cabling",
  },
  /* ---------- RACK & DRESSING ---------- */
  {
    name: "24-Port Patch Panel",
    brand: "AMP",
    spec: "Cat6 | Rack Mount",
    price: 2999,
    image: patchPanelImg,
    category: "Structured Cabling",
  },
  {
    name: "42U Network Rack",
    brand: "NetRack",
    spec: "Floor Standing | Lockable",
    price: 28999,
    image: rackImg,
    category: "Rack & Dressing",
  },
   {
      
      name: "PoE Network Switch",
      brand: "TP-Link / Cisco",
      image: poeSwitch,
      spec: ["8 Port PoE", "Gigabit"],
      price: 6999,
      oldPrice: 8299,
      badge: "SAVE 15%",
    },
  {
    name: "Rack PDU",
    brand: "APC",
    spec: "8-Socket | Surge Protected",
    price: 4999,
    image: pduImg,
    category: "Rack & Dressing",
  },
];

export default networkProducts;
