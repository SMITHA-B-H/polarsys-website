// ===== Image Imports =====
import ceilingSpeaker from "../../assets/image/pa/ceiling-speaker.png";
import wallSpeaker from "../../assets/image/pa/wall-speaker.png";
import hornSpeaker from "../../assets/image/pa/horn-speaker.png";
import columnSpeaker from "../../assets/image/pa/column-speaker.png";
import amplifier from "../../assets/image/pa/amplifier.png";
import mixerAmp from "../../assets/image/pa/mixer-amplifier.png";
import pagingMic from "../../assets/image/pa/paging-mic.png";
import wirelessMic from "../../assets/image/pa/wireless-mic.png";
import zoneController from "../../assets/image/pa/zone-controller.png";
import audioMixer from "../../assets/image/pa/audio-mixer.png";
import volumeController from "../../assets/image/pa/volume-controller.png";
import speakerCable from "../../assets/image/pa/speaker-cable.png";
import paRack from "../../assets/image/pa/pa-rack.png";

// ===== Product Data =====
const paProducts = [
  {
    name: "Ceiling Speaker",
    brand: "Bosch",
    spec: "6W / 12W | Flush Mount",
    price: 1299,
    oldPrice: 1699,
    image: ceilingSpeaker,
  },
  {
    name: "Wall Mount Speaker",
    brand: "Ahuja",
    spec: "20W | Indoor PA",
    price: 1899,
    oldPrice: 2299,
    image: wallSpeaker,
  },
  {
    name: "Horn Speaker",
    brand: "Ahuja",
    spec: "30W | Outdoor / Industrial",
    price: 2499,
    oldPrice: 2999,
    image: hornSpeaker,
  },
  {
    name: "Column Array Speaker",
    brand: "Bosch",
    spec: "40W | Long Throw",
    price: 7499,
    oldPrice: 9999,
    image: columnSpeaker,
  },
  {
    name: "PA Power Amplifier",
    brand: "Ahuja",
    spec: "250W | Multi Speaker Support",
    price: 12999,
    oldPrice: 15999,
    image: amplifier,
  },
  {
    name: "Mixer Amplifier",
    brand: "Bosch",
    spec: "120W | 5 Mic Inputs",
    price: 15999,
    oldPrice: 18999,
    image: mixerAmp,
  },
  {
    name: "Paging Microphone",
    brand: "Bosch",
    spec: "Desktop Paging Console",
    price: 6999,
    oldPrice: 8999,
    image: pagingMic,
  },
  {
    name: "Wireless Microphone System",
    brand: "Ahuja",
    spec: "Dual Channel | UHF",
    price: 8999,
    oldPrice: 11999,
    image: wirelessMic,
  },
  {
    name: "PA Zone Controller",
    brand: "Bosch",
    spec: "6 Zone Audio Distribution",
    price: 11999,
    oldPrice: 14999,
    image: zoneController,
  },
  {
    name: "Audio Mixer Console",
    brand: "Yamaha",
    spec: "8 Channel | Digital",
    price: 13999,
    oldPrice: 16999,
    image: audioMixer,
  },
  {
    name: "Speaker Volume Controller",
    brand: "Legrand",
    spec: "Wall Mount | Rotary Control",
    price: 899,
    oldPrice: 1199,
    image: volumeController,
  },
  {
    name: "Speaker Cable Roll",
    brand: "Finolex",
    spec: "2 Core | 90m Roll",
    price: 2999,
    oldPrice: 3999,
    image: speakerCable,
  },
  {
    name: "PA Equipment Rack",
    brand: "NetRack",
    spec: "24U | Lockable",
    price: 18999,
    oldPrice: 22999,
    image: paRack,
  },
];
export default paProducts;