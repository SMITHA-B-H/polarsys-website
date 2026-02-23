// src/data/intercomProductsData.js

// import outdoorVideo from "../../assets/image/outdoor-video.png";
// import audioDoor from "../../assets/image/audio-door.png";
// import indoorMonitor from "../../assets/image/indoor-monitor.png";
import masterConsole from "../../assets/image/master-console.png";
// import poeSwitch from "../../assets/image/poe-switch.png";
// import doorLock from "../../assets/image/door-lock.png";
import ipIntercom from "../../assets/image/ip-intercom.png";
import indoorMonitor1 from "../../assets/image/aip.png"; 
import ip1 from "../../assets/image/ip1.png";
import ip2 from "../../assets/image/ip2.png"; 
import in2 from "../../assets/image/in2.png";
import in3 from "../../assets/image/in3.png";

const intercomProducts = [
  // {
  //   id: 1,
  //   name: "IP Video Door Station",
  //   brand: "Hikvision / Dahua",
  //   image: outdoorVideo,
  //   features: ["HD Camera", "Night Vision", "IP65 Rated"],
  //   price: 15999,
  //   offer: "SAVE 25%",
  // },
  // {
  //   id: 2,
  //   name: "IP Audio Door Station",
  //   brand: "Fanvil",
  //   image: audioDoor,
  //   features: ["Noise Cancellation", "SIP Support"],
  //   price: 7999,
  //   offer: "SAVE 30%",
  // },
  // {
  //   id: 3,
  //   name: "Indoor Touch Monitor",
  //   brand: "Akuvox",
  //   image: indoorMonitor,
  //   features: ["7-inch Touch", "WiFi", "Video Call"],
  //   price: 12999,
  //   offer: "SAVE 20%",
  // },
  {
    id: 4,
    name: "Master Intercom Console",
    brand: "Panasonic",
    image: masterConsole,
    features: ["Multi-Zone Control", "Call Transfer"],
    price: 18999,
    offer: "SAVE 35%",
  },
  // {
  //   id: 5,
  //   name: "PoE Network Switch",
  //   brand: "TP-Link / Cisco",
  //   image: poeSwitch,
  //   features: ["8 Port PoE", "Gigabit"],
  //   price: 6999,
  //   offer: "SAVE 15%",
  // },
  // {
  //   id: 6,
  //   name: "Magnetic Door Lock",
  //   brand: "ZKTeco",
  //   image: doorLock,
  //   features: ["600lbs Holding", "Fail Safe"],
  //   price: 6499,
  //   offer: "SAVE 40%",
  // },
  {
  id: 11,
  name: "Business IP Phone",
  brand: "Grandstream",
  offer: "VoIP Ready",
  price: 5499,
  image: ipIntercom,
  features: [
    "HD voice VoIP communication",
    "2 SIP account support",
    "PoE powered device",
    "Ideal for office & call desk use"
  ],
},

{
  id: 12,
  name: "Enterprise IP Desk Phone",
  brand: "Yealink",
  offer: "Office Favourite",
  price: 8999,
  image: ip1,
  features: [
    "Gigabit Ethernet support",
    "Multiple programmable keys",
    "HD audio speaker & handset",
    "Supports VPN & PBX integration"
  ],
},

{
  id: 13,
  name: "WiFi IP Phone",
  brand: "Fanvil",
  offer: "Wireless Office Solution",
  price: 7999,
  image: ip2,
  features: [
    "Built-in WiFi connectivity",
    "Portable VoIP communication",
    "Rechargeable battery support",
    "Ideal for warehouse & mobility use"
  ],
},

{
  id: 14,
  name: "Video IP Phone",
  brand: "Yealink",
  offer: "Smart Communication",
  price: 18999,
  image: indoorMonitor1,
  features: [
    "7 inch touch video display",
    "Two-way HD video calling",
    "Android based UI interface",
    "Supports SIP & IP intercom integration"
  ],
},

{
  id: 15,
  name: "Android Video IP Desk Phone",
  brand: "Grandstream",
  offer: "Premium Model",
  price: 22999,
  image: in3,
  features: [
    "Android OS with app support",
    "Touchscreen video communication",
    "Bluetooth & WiFi enabled",
    "Supports CCTV & door phone integration"
  ],
},

{
  id: 16,
  name: "Executive Video Collaboration Phone",
  brand: "Cisco",
  offer: "Enterprise Grade",
  price: 38999,
  image: in2,
  features: [
    "Full HD video conferencing support",
    "Wide angle HD camera",
    "Cloud & PBX integration",
    "Corporate boardroom communication solution"
  ],
},

];

export default intercomProducts;
