import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

import {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  gsapIcon,
  shopifyIcon,
  webflowIcon,
  framerIcon,
  figmaIcon,
  memojiHand,
  memojiHello,
  memojiOk,
} from '../assets' ;

const media = {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  gsapIcon,
  shopifyIcon,
  webflowIcon,
  framerIcon,
  figmaIcon,
  memojiHand,
  memojiHello,
  memojiOk,
}

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
};

const memoji = {
  image: [memojiHello, memojiHand, memojiOk],
};

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;
const globeData = [...Array(N).keys()].map(() => ({
  lat: 48.0,
  lng: 11.0,
  size: 20,
  color: "red",
}));

export {
  media,
  memoji,
  markerSvg,
  globeData,
  icons,
};
