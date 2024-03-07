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

const introduction = {
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et finibus felis. Aliquam erat volutpat. Aliquam at ornare augue. Mauris dolor risus, luctus nec nisi quis, fringilla ultrices lorem. Nam mattis eu libero a commodo. Maecenas faucibus ante at vulputate rhoncus. Vestibulum tincidunt quis mauris nec sollicitudin. Vivamus varius luctus tincidunt. Ut in lacus vulputate, bibendum ante sed, imperdiet metus. Cras consequat tellus a dolor malesuada congue. Sed eu porttitor tortor. Duis consectetur nibh a neque hendrerit venenatis. Mauris porttitor elementum augue vitae elementum. Praesent quam leo, dignissim sed tincidunt bibendum, eleifend eu magna.",

    "Sed efficitur vestibulum diam eu volutpat. Morbi malesuada lorem et nunc ornare, at ullamcorper enim pretium. Mauris at vehicula nibh. Curabitur eget nisi volutpat, ornare ante et, gravida quam. Curabitur ut lectus ultrices, tristique dolor in, sodales purus. Nam venenatis rhoncus erat, quis euismod nisi. Pellentesque ullamcorper orci nec tellus volutpat, sed maximus ipsum blandit. Phasellus velit est, gravida sed eleifend eu, pellentesque a lacus. Aenean lorem leo, iaculis vitae justo quis, scelerisque condimentum lacus. Aenean a velit quis turpis condimentum commodo. Proin sed massa orci. Vestibulum nec semper quam, et commodo ex. Suspendisse blandit dolor id justo finibus dignissim. Orci varius natoque penatibus et magnis."
  ],
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
  introduction,
  memoji,
  markerSvg,
  globeData,
  icons,
};
