import { t } from "i18next";
import BusinessBayIcon from "../assets/icons/BusinessBayIcon.svg";
import dubaiFrameIcon from "../assets/icons/dubaiFrame.svg";
import dubaiMallIcon from "../assets/icons/dubaiMall.svg";
import dubaiOperaIcon from "../assets/icons/dubaiOpera.svg";
import airportIcon from "../assets/icons/airplane.svg";
import MedydanIcon from "../assets/icons/horses.svg";
import PalmJumeirahIcon from "../assets/icons/palm.svg";
import RasAlkhorIcon from "../assets/icons/RasAlkhorIcon.svg";
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

export const nearbyData = [
  {
    icon: PalmJumeirahIcon,
    name: t("palm"),
    duration: "25 " + t("minutes"),
    img: PalmJumeirah,
  },
  {
    icon: airportIcon,
    name: t("airport"),
    duration: "12 " + t("minutes"),
    img: DXBAIRPORT,
  },
  {
    icon: kalifaIcon,
    name: t("khalifa"),
    duration: "15 " + t("minutes"),
    img: BurjKhalifa,
  },
  {
    icon: dubaiFrameIcon,
    name: t("frame"),
    duration: "15 " + t("minutes"),
    img: DubaiFrame,
  },
  {
    icon: BusinessBayIcon,
    name: t("businessBay"),
    duration: "25 " + t("minutes"),
    img: BusinessBay,
  },
  {
    icon: dubaiOperaIcon,
    name: t("opera"),
    duration: "25 " + t("minutes"),
    img: DubaiOpera,
  },
  {
    icon: MedydanIcon,
    name: t("meydan"),
    duration: "10 " + t("minutes"),
    img: Meydan,
  },
  {
    icon: dubaiMallIcon,
    name: t("dubaiMall"),
    duration: "15 " + t("minutes"),
    img: DubaiMall,
  },
  {
    icon: SOBHAHARTLANDIcon,
    name: t("heartland"),
    duration: "10 " + t("minutes"),
    img: SobhaHartland,
  },
];
