import landingValveImg from "../../assets/image/fire/landing-valve.png";
import hosePipeImg from "../../assets/image/fire/fire-hose.png";
import hoseReelImg from "../../assets/image/fire/hose-reel.png";
import nozzleImg from "../../assets/image/fire/nozzle.png";
import hydrantPumpImg from "../../assets/image/fire/hydrant-pump.png";
import dieselPumpImg from "../../assets/image/fire/diesel-pump.png";
import jockeyPumpImg from "../../assets/image/fire/jockey-pump.png";
import controlPanelImg from "../../assets/image/fire/control-panel.png";
import yardHydrantImg from "../../assets/image/fire/yard-hydrant.png";
import hoseBoxImg from "../../assets/image/fire/hose-box.png";

const fireHydrantProducts = [
  {
    name: "Landing Valve (Double Outlet)",
    brand: "ISI Approved",
    spec: "63mm | Gunmetal",
    price: 3499,
    oldPrice: 4499,
    image: landingValveImg,
    badge: "SAVE 22%",
  },
  {
    name: "Fire Hose Pipe",
    brand: "ISI Mark",
    spec: "63mm × 15m",
    price: 2999,
    oldPrice: 3899,
    image: hosePipeImg,
    badge: "SAVE 23%",
  },
  {
    name: "Fire Hose Reel Drum",
    brand: "SafePro",
    spec: "30m Hose | Wall Mount",
    price: 6899,
    oldPrice: 8999,
    image: hoseReelImg,
    badge: "SAVE 24%",
  },
  {
    name: "Fire Nozzle (Jet / Spray)",
    brand: "Gunmetal",
    spec: "Adjustable Flow",
    price: 1499,
    oldPrice: 1999,
    image: nozzleImg,
    badge: "SAVE 25%",
  },
  {
    name: "Fire Hydrant Pump",
    brand: "Kirloskar",
    spec: "10–20 HP | Electric",
    price: 45999,
    oldPrice: 58999,
    image: hydrantPumpImg,
    badge: "BEST SELLER",
  },
  {
    name: "Diesel Fire Pump",
    brand: "Kirloskar",
    spec: "20 HP | Auto Start",
    price: 89999,
    oldPrice: 112999,
    image: dieselPumpImg,
    badge: "CRITICAL",
  },
  {
    name: "Jockey Pump",
    brand: "Crompton",
    spec: "3 HP",
    price: 18999,
    oldPrice: 23999,
    image: jockeyPumpImg,
    badge: "ESSENTIAL",
  },
  {
    name: "Fire Pump Control Panel",
    brand: "L&T",
    spec: "Auto / Manual",
    price: 24999,
    oldPrice: 31999,
    image: controlPanelImg,
    badge: "SAVE 22%",
  },
  {
    name: "Yard Hydrant Stand Post",
    brand: "ISI Approved",
    spec: "Single / Double Outlet",
    price: 11999,
    oldPrice: 14999,
    image: yardHydrantImg,
    badge: "OUTDOOR",
  },
  {
    name: "Fire Hose Box",
    brand: "MS Powder Coated",
    spec: "Single / Double Door",
    price: 3299,
    oldPrice: 4199,
    image: hoseBoxImg,
    badge: "SAVE 21%",
  },
];

export default fireHydrantProducts;
