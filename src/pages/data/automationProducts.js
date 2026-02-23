import smartSwitchImg from "../../assets/image/automation/smart-switch.png";
import smartDimmerImg from "../../assets/image/automation/dimmer.png";
import smartBulbImg from "../../assets/image/automation/bulb.png";
import smartRelayImg from "../../assets/image/automation/relay.png";
import thermostatImg from "../../assets/image/automation/thermostat.png";
import hvacImg from "../../assets/image/automation/hvac.png";
import irBlasterImg from "../../assets/image/automation/ir-blaster.png";
import smartLockImg from "../../assets/image/automation/smart-lock.png";
import videoDoorImg from "../../assets/image/automation/video-doorbell.png";
import motionSensorImg from "../../assets/image/automation/motion-sensor.png";
import sirenImg from "../../assets/image/automation/siren.png";
import hubImg from "../../assets/image/automation/smart-hub.png";
import zigbeeImg from "../../assets/image/automation/zigbee.png";
import smartPlugImg from "../../assets/image/automation/smart-plug.png";
import energyMeterImg from "../../assets/image/automation/energy-meter.png";
import voiceSpeakerImg from "../../assets/image/automation/voice-speaker.png";
import touchPanelImg from "../../assets/image/automation/touch-panel.png";
import mobileCtrlImg from "../../assets/image/automation/mobile-controller.png";

const automationProducts = [
  {
    name: "Smart Touch Switch",
    brand: "Schneider",
    spec: "Wi-Fi | Glass Panel",
    price: 2499,
    oldPrice: 3299,
    image: smartSwitchImg,
    badge: "SAVE 24%",
  },
  {
    name: "Smart Dimmer Switch",
    brand: "Legrand",
    spec: "Lighting Intensity Control",
    price: 2799,
    oldPrice: 3599,
    image: smartDimmerImg,
    badge: "POPULAR",
  },
  {
    name: "Smart LED Bulb",
    brand: "Philips Hue",
    spec: "RGB | Voice Control",
    price: 1999,
    oldPrice: 2499,
    image: smartBulbImg,
    badge: "BEST SELLER",
  },
  {
    name: "Smart Relay Module",
    brand: "Sonoff",
    spec: "Hidden Installation",
    price: 1499,
    oldPrice: 1999,
    image: smartRelayImg,
    badge: "ESSENTIAL",
  },
  {
    name: "Smart Thermostat",
    brand: "Honeywell",
    spec: "HVAC Temperature Control",
    price: 8999,
    oldPrice: 10999,
    image: thermostatImg,
    badge: "CLIMATE",
  },
  {
    name: "HVAC Automation Controller",
    brand: "Siemens",
    spec: "Commercial Grade",
    price: 18999,
    oldPrice: 22999,
    image: hvacImg,
    badge: "ENTERPRISE",
  },
  {
    name: "Smart IR Blaster",
    brand: "Broadlink",
    spec: "AC | TV | Projector",
    price: 2499,
    oldPrice: 3199,
    image: irBlasterImg,
    badge: "REMOTE",
  },
  {
    name: "Smart Door Lock",
    brand: "Yale",
    spec: "Fingerprint | PIN | App",
    price: 16999,
    oldPrice: 19999,
    image: smartLockImg,
    badge: "SECURITY",
  },
  {
    name: "Video Doorbell",
    brand: "Hikvision",
    spec: "2MP | Two-Way Audio",
    price: 7999,
    oldPrice: 9999,
    image: videoDoorImg,
    badge: "SMART ENTRY",
  },
  {
    name: "Motion Sensor",
    brand: "Bosch",
    spec: "PIR | Automation Trigger",
    price: 1799,
    oldPrice: 2299,
    image: motionSensorImg,
    badge: "AUTOMATION",
  },
  {
    name: "Smart Siren",
    brand: "Secureye",
    spec: "App Controlled",
    price: 2199,
    oldPrice: 2799,
    image: sirenImg,
    badge: "ALERT",
  },
  {
    name: "Smart Automation Hub",
    brand: "Tuya",
    spec: "Central Controller",
    price: 3499,
    oldPrice: 4499,
    image: hubImg,
    badge: "CORE",
  },
  {
    name: "Zigbee Gateway",
    brand: "Aqara",
    spec: "Low Power IoT",
    price: 2999,
    oldPrice: 3799,
    image: zigbeeImg,
    badge: "IoT",
  },
  {
    name: "Smart Plug",
    brand: "TP-Link",
    spec: "Remote Power Control",
    price: 1299,
    oldPrice: 1699,
    image: smartPlugImg,
    badge: "SAVE",
  },
  {
    name: "Energy Monitoring Module",
    brand: "Schneider",
    spec: "Real-Time Power Usage",
    price: 6999,
    oldPrice: 8499,
    image: energyMeterImg,
    badge: "ENERGY",
  },
  {
    name: "Voice Assistant Speaker",
    brand: "Amazon Echo",
    spec: "Alexa Enabled",
    price: 4999,
    oldPrice: 5999,
    image: voiceSpeakerImg,
    badge: "VOICE",
  },
  {
    name: "Touch Control Panel",
    brand: "ABB",
    spec: "Wall Mounted UI",
    price: 12999,
    oldPrice: 15999,
    image: touchPanelImg,
    badge: "PREMIUM",
  },
  {
    name: "Mobile App Controller",
    brand: "Tuya",
    spec: "iOS & Android",
    price: 999,
    oldPrice: 1499,
    image: mobileCtrlImg,
    badge: "REMOTE",
  },
];

export default automationProducts;
