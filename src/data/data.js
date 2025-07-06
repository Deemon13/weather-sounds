import summerImg from "../images/icons/sun.svg";
import rainImg from "../images/icons/cloud-rain.svg";
import snowImg from "../images/icons/cloud-snow.svg";
import summerSound from "../audio/sounds/summer.mp3";
import rainSound from "../audio/sounds/rain.mp3";
import snowSound from "../audio/sounds/winter.mp3";

export const sounds = [
  {
    id: 1,
    type: "sunny",
    alt: "sunny_icon",
    imgSrc: summerImg,
    src: summerSound,
    background: "summer",
  },
  {
    id: 2,
    type: "rainy",
    alt: "rainy_icon",
    imgSrc: rainImg,
    src: rainSound,
    background: "rain",
  },
  {
    id: 3,
    type: "snow",
    alt: "snow_icon",
    imgSrc: snowImg,
    src: snowSound,
    background: "winter",
  },
];
