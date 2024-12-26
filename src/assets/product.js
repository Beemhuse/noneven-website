import MlUnfortifiedCoconutoilCosmetic from "../assets/ProductImage/500 ml unfortified Coconut oil (Cosmetic).jpeg"; //500 ml unfortified Coconut oil (Cosmetic)

import MlFortifiedCoconutoil from "../assets/ProductImage/500 ml Fortified Coconut oil (Edible).jpeg"; // 500 ml Fortified Coconut oil (Edible)

import mLPalmOil from "../assets/ProductImage/750 ml Palm oil.jpeg"; //750 ml Palm oil

import LitersPalmOil from "../assets/ProductImage/2.5 Liters Palm oi.jpeg"; //2.5 Liters Palm oi

import ThreeLitersRedPalmOil from "../assets/ProductImage/3 Liters Red Palm oil.jpeg"; // 3 Liters Red Palm oil

import FiveLitersRedPalmOil from "../assets/ProductImage/5 Liters Red Palm oil.jpeg"; // 5 Liters Red Palm oil

import ElevenLitersRedPalmOil from "../assets/ProductImage/11 Liters Red Palm oil.jpeg"; //11 Liters Red Palm oil

// Exchange rates (update these values with real-time rates from an API if needed)
const exchangeRates = {
  USD: 0.0013, // 1 NGN = 0.0013 USD (example rate)
  EUR: 0.0012, // 1 NGN = 0.0012 EUR (example rate)
  GBP: 0.001, // 1 NGN = 0.0010 GBP (example rate)
};

// Helper function to convert NGN to other currencies
const convertCurrency = (priceInNGN, rate) => (priceInNGN * rate).toFixed(2);

// Array of products with dynamic currency conversion
const products = [
  {
    id: 1,
    name: "A UNIT - 500 ml unfortified Coconut oil (Cosmetic)",
    price: 10000,
    priceUSD: 8,
    priceEUR: 7,
    priceGBP: convertCurrency(5000, exchangeRates.GBP),
    image: MlUnfortifiedCoconutoilCosmetic,
    alt: "A UNIT - 500 ml unfortified Coconut oil (Cosmetic)",
  },
  {
    id: 2,
    name: "A CARTON - 500 ml unfortified Coconut oil (Cosmetic)",
    price: 160000,
    priceUSD: 128,
    priceEUR: 112,
    priceGBP: convertCurrency(80000, exchangeRates.GBP),
    image: MlUnfortifiedCoconutoilCosmetic,
    alt: "A CARTON - 500 ml unfortified Coconut oil (Cosmetic)",
  },
  {
    id: 3,
    name: "A UNIT - 500 ml Fortified Coconut oil (Edible)",
    price: 10500,
    priceUSD: 8.5,
    priceEUR: 7.4,
    priceGBP: convertCurrency(5500, exchangeRates.GBP),
    image: MlFortifiedCoconutoil,
    alt: "A UNIT - 500 ml Fortified Coconut oil (Edible)",
  },
  {
    id: 4,
    name: "A CARTON - 500 ml Fortified Coconut oil (Edible)",
    price: 168000,
    priceUSD: 136,
    priceEUR: 118.4,
    priceGBP: convertCurrency(88000, exchangeRates.GBP),
    image: MlFortifiedCoconutoil,
    alt: "A CARTON - 500 ml Fortified Coconut oil (Edible)",
  },
  {
    id: 5,
    name: "A UNIT - 750 ml Palm oil",
    price: "---",
    priceUSD: 13,
    priceEUR: 11,
    priceGBP: convertCurrency(88000, exchangeRates.GBP),
    image: mLPalmOil,
    alt: "A UNIT - 500 ml Fortified Coconut oil (Edible)",
  },
  {
    id: 6,
    name: "A CARTON - 750 ml Palm oil",
    price: "---",
    priceUSD: 156,
    priceEUR: 140,
    image: mLPalmOil,
    alt: "A CARTON - 500 ml Fortified Coconut oil (Edible)",
  },
  {
    id: 7,
    name: "A UNIT - 2.5 Liters Palm oil",
    price: "---",
    priceUSD: 36,
    priceEUR: 33,
    image: LitersPalmOil,
    alt: "A UNIT - 2.5 Liters Palm oil",
  },
  {
    id: 8,
    name: "A CARTON - 2.5 Liters Palm oil",
    price: "---",
    priceUSD: 432,
    priceEUR: 420,
    image: LitersPalmOil,
    alt: "A CARTON - 2.5 Liters Palm oil",
  },
  {
    id: 8,
    name: "A UNIT - 3 Liters Red Palm oil",
    price: "---",
    priceUSD: 37,
    priceEUR: 33.5,
    image: ThreeLitersRedPalmOil,
    alt: "A UNIT - 3 Liters Red Palm oil",
  },
  {
    id: 10,
    name: "A CARTON - 3 Liters Red Palm oil",
    price: "---",
    priceUSD: 444,
    priceEUR: 438,
    image: ThreeLitersRedPalmOil,
    alt: "A CARTON - 3 Liters Red Palm oil",
  },
    {
    id: 11,
    name: "A UNIT - 5 Liters Red Palm oil",
    price: "---",
    priceUSD: 45,
    priceEUR: 43,
    image: FiveLitersRedPalmOil,
    alt: "A UNIT - 5 Liters Red Palm oil",
  },
  {
    id: 12,
    name: "A CARTON - 5 Liters Red Palm oil",
    price: "---",
    priceUSD: 270,
    priceEUR: 260,
    image: FiveLitersRedPalmOil,
    alt: "A CARTON - 5 Liters Red Palm oil",
  },
    {
    id: 13,
    name: "A UNIT - 11 Liters Red Palm oil",
    price: "---",
    priceUSD: 88,
    priceEUR: 80,
    image: ElevenLitersRedPalmOil,
    alt: "A UNIT - 11 Liters Red Palm oil",
  },
  {
    id: 14,
    name: "A CARTON - 11 Liters Red Palm oil",
    price: "---",
    priceUSD: 528,
    priceEUR: 480,
    image: ElevenLitersRedPalmOil,
    alt: "A CARTON - 11 Liters Red Palm oil",
  },
  {
    id: 15,
    name: " 25 Liters Red Palm oil in Single Containers",
    price: "---",
    priceUSD: 220,
    priceEUR: 185,
    image: ElevenLitersRedPalmOil,
    alt: "25 Liters Red Palm oil in Single Containers",
  },
];

// Array of products
// const products = [
//   {
//     id: 1,
//     name: "A UNIT - 500 ml unfortified Coconut oil (Cosmetic)",
//     price: 5000,
//     image: MlUnfortifiedCoconutoilCosmetic,
//     alt: "A UNIT - 500 ml unfortified Coconut oil (Cosmetic)",
//   },
//   {
//     id: 2,
//     name: "A CARTON - 500 ml unfortified Coconut oil (Cosmetic)",
//     price: 80000,
//     image: MlUnfortifiedCoconutoilCosmetic,
//     alt: "A CARTON - 500 ml unfortified Coconut oil (Cosmetic)",
//   },
//   {
//     id: 3,
//     name: "A UNIT - 500 ml Fortified Coconut oil (Edible)",
//     price: 5500,
//     image: MlFortifiedCoconutoil,
//     alt: "A UNIT - 500 ml Fortified Coconut oil (Edible)",
//   },
//   {
//     id: 4,
//     name: "A CARTON - 500 ml Fortified Coconut oil (Edible)",
//     price: 88000,
//     image: MlFortifiedCoconutoil,
//     alt: "A CARTON - 500 ml Fortified Coconut oil (Edible)",
//   },

//   {
//     id: 5,
//     name: "A UNIT - 750 ml Palm oil",
//     price: 2500,
//     image: mLPalmOil,
//     alt: "A UNIT - 500 ml Fortified Coconut oil (Edible)",
//   },
//   {
//     id: 6,
//     name: "A CARTON - 750 ml Palm oil",
//     price: 30000,
//     image: mLPalmOil,
//     alt: "A CARTON - 500 ml Fortified Coconut oil (Edible)",
//   },
//   {
//     id: 7,
//     name: "A UNIT - 2.5 Liters Palm oil",
//     price: 7000,
//     image: LitersPalmOil,
//     alt: "A UNIT - 2.5 Liters Palm oil",
//   },
//   {
//     id: 8,
//     name: "A CARTON - 2.5 Liters Palm oil",
//     price: 84000,
//     image: LitersPalmOil,
//     alt: "A CARTON - 2.5 Liters Palm oil",
//   },
//   {
//     id: 8,
//     name: "A UNIT - 3 Liters Red Palm oil",
//     price: 8000,
//     image: ThreeLitersRedPalmOil,
//     alt: "A UNIT - 3 Liters Red Palm oil",
//   },
//   {
//     id: 10,
//     name: "A CARTON - 3 Liters Red Palm oil",
//     price: 96000,
//     image: ThreeLitersRedPalmOil,
//     alt: "A CARTON - 3 Liters Red Palm oil",
//   },
//   {
//     id: 11,
//     name: "A UNIT - 5 Liters Red Palm oil",
//     price: 24000,
//     image: FiveLitersRedPalmOil,
//     alt: "A UNIT - 5 Liters Red Palm oil",
//   },
//   {
//     id: 12,
//     name: "A CARTON - 5 Liters Red Palm oil",
//     price: 144000,
//     image: FiveLitersRedPalmOil,
//     alt: "A CARTON - 5 Liters Red Palm oil",
//   },
//   {
//     id: 13,
//     name: "A UNIT - 11 Liters Red Palm oil",
//     price: 37000,
//     image: ElevenLitersRedPalmOil,
//     alt: "A UNIT - 11 Liters Red Palm oil",
//   },
//   {
//     id: 14,
//     name: "A CARTON - 11 Liters Red Palm oil",
//     price: 222000,
//     image: ElevenLitersRedPalmOil,
//     alt: "A CARTON - 11 Liters Red Palm oil",
//   },

// ];

export default products;
