import BusinessBayIcon from "../assets/icons/BusinessBayIcon.svg";
import dubaiFrameIcon from "../assets/icons/dubaiFrame.svg";
import dubaiMallIcon from "../assets/icons/dubaiMall.svg";
import dubaiOperaIcon from "../assets/icons/dubaiOpera.svg";
import airportIcon from "../assets/icons/airplane.svg";
import MedydanIcon from "../assets/icons/horses.svg";
import PalmJumeirahIcon from "../assets/icons/palm.svg";
import SOBHAHARTLANDIcon from "../assets/icons/SOBHAHARTLAND.svg";
import BurjKhalifa from "../assets/images/map/BurjKhalifa.webp";
import BusinessBay from "../assets/images/map/BusinessBay.webp";
import DubaiFrame from "../assets/images/map/DubaiFrame.webp";
import DubaiMall from "../assets/images/map/DubaiMall.webp";
import DubaiOpera from "../assets/images/map/DubaiOpera.webp";
import DXBAIRPORT from "../assets/images/map/DXBAIRPORT.webp";
import Meydan from "../assets/images/map/Meydan.webp";
import PalmJumeirah from "../assets/images/map/PalmJumeirah.webp";
import SobhaHartland from "../assets/images/map/SobhaHartland.webp";
import kalifaIcon from "../assets/icons/kalifa.svg";

export const data = {
  template: 1,
  title: "nearbyTitle",
  subTitle: "nearbySubTitle",
  locations: [
    {
      icon: PalmJumeirahIcon,
      name: "palm",
      duration: "25 ",
      img: PalmJumeirah,
    },
    {
      icon: airportIcon,
      name: "airport",
      duration: "12 ",
      img: DXBAIRPORT,
    },
    {
      icon: kalifaIcon,
      name: "khalifa",
      duration: "15 ",
      img: BurjKhalifa,
    },
    {
      icon: dubaiFrameIcon,
      name: "frame",
      duration: "15 ",
      img: DubaiFrame,
    },
    {
      icon: BusinessBayIcon,
      name: "businessBay",
      duration: "25 ",
      img: BusinessBay,
    },
    {
      icon: dubaiOperaIcon,
      name: "opera",
      duration: "25 ",
      img: DubaiOpera,
    },
    {
      icon: MedydanIcon,
      name: "meydan",
      duration: "10 ",
      img: Meydan,
    },
    {
      icon: dubaiMallIcon,
      name: "dubaiMall",
      duration: "15 ",
      img: DubaiMall,
    },
    {
      icon: SOBHAHARTLANDIcon,
      name: "heartland",
      duration: "10 ",
      img: SobhaHartland,
    },
  ],
};
