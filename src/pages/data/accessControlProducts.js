import magLockImg from "../../assets/image/access/mag-lock.png";
import strikeLockImg from "../../assets/image/access/electric-strike.png";
import rfidReaderImg from "../../assets/image/access/rfid-reader.png";
import bioReaderImg from "../../assets/image/access/biometric.png";
import faceReaderImg from "../../assets/image/access/face-reader.png";
import controllerImg from "../../assets/image/access/access-panel.png";
import powerSupplyImg from "../../assets/image/access/power-supply.png";
import exitButtonImg from "../../assets/image/access/exit-button.png";
import doorSensorImg from "../../assets/image/access/door-sensor.png";
import fireInterfaceImg from "../../assets/image/access/fire-interface.png";
import outdoorVideo from "../../assets/image/outdoor-video.png";
import audioDoor from "../../assets/image/audio-door.png";
import indoorMonitor from "../../assets/image/indoor-monitor.png";
import doorLock from "../../assets/image/door-lock.png";

const accessControlProducts = [
  {
    name: "Electromagnetic Lock",
    brand: "YLI",
    spec: "600 lbs | Single Door",
    price: 2499,
    oldPrice: 3299,
    image: magLockImg,
    badge: "SAVE 24%",
  },
  {
    name: "Electric Strike Lock",
    brand: "Hikvision",
    spec: "Fail Safe | Metal Door",
    price: 3799,
    oldPrice: 4799,
    image: strikeLockImg,
    badge: "POPULAR",
  },
  {
    name: "RFID Card Reader",
    brand: "HID",
    spec: "125KHz | Wiegand",
    price: 1999,
    oldPrice: 2599,
    image: rfidReaderImg,
    badge: "SAVE 23%",
  },
  {
  
      name: "IP Video Door Station",
      brand: "Hikvision / Dahua",
      image: outdoorVideo,
      spec:["HD Camera", "Night Vision", "IP65 Rated"],
      price: 15999,
      oldPrice: 21332,
      badge: "SAVE 25%",
    },
    {
     
      name: "IP Audio Door Station",
      brand: "Fanvil",
      image: audioDoor,
      spec: ["Noise Cancellation", "SIP Support"],
      price: 7999,
      oldPrice: 10999,
      badge: "SAVE 30%",
    },
    {
      
        name: "Magnetic Door Lock",
        brand: "ZKTeco",
        image: doorLock,
        spec: ["600lbs Holding", "Fail Safe"],
        price: 6499,
        oldPrice: 10999,
        badge: "SAVE 40%",
      },
    {
    
      name: "Indoor Touch Monitor",
      brand: "Akuvox",
      image: indoorMonitor,
      spec: ["7-inch Touch", "WiFi", "Video Call"],
      price: 12999,
      oldPrice: 16999,
      badge: "SAVE 20%",
    },
  {
    name: "Biometric Fingerprint Reader",
    brand: "ZKTeco",
    spec: "Fingerprint + RFID",
    price: 5999,
    oldPrice: 7499,
    image: bioReaderImg,
    badge: "BEST SELLER",
  },
  {
    name: "Face Recognition Terminal",
    brand: "Hikvision",
    spec: "Face + RFID + PIN",
    price: 15999,
    oldPrice: 19999,
    image: faceReaderImg,
    badge: "ADVANCED",
  },
  {
    name: "Access Control Panel",
    brand: "Honeywell",
    spec: "4 Door Controller",
    price: 18999,
    oldPrice: 23999,
    image: controllerImg,
    badge: "CORE UNIT",
  },
  {
    name: "Power Supply with Battery",
    brand: "Secureye",
    spec: "12V | 5A",
    price: 2499,
    oldPrice: 3199,
    image: powerSupplyImg,
    badge: "ESSENTIAL",
  },
  {
    name: "Exit Button (No Touch)",
    brand: "YLI",
    spec: "Infrared Sensor",
    price: 999,
    oldPrice: 1299,
    image: exitButtonImg,
    badge: "SAVE 23%",
  },
  {
    name: "Door Magnetic Sensor",
    brand: "Honeywell",
    spec: "NC Contact",
    price: 699,
    oldPrice: 999,
    image: doorSensorImg,
    badge: "SAFETY",
  },
  {
    name: "Fire Alarm Interface Module",
    brand: "Notifier",
    spec: "Door Auto Release",
    price: 3499,
    oldPrice: 4499,
    image: fireInterfaceImg,
    badge: "COMPLIANCE",
  },
];

export default accessControlProducts;
