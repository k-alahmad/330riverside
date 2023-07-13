import React, { useState } from "react";
import kalifaIcon from "../../../assets/icons/kalifa.svg";
import { useTranslation } from "react-i18next";
import BusinessBayIcon from "../../../assets/icons/BusinessBayIcon.svg";
import dubaiFrameIcon from "../../../assets/icons/dubaiFrame.svg";
import dubaiMallIcon from "../../../assets/icons/dubaiMall.svg";
import dubaiOperaIcon from "../../../assets/icons/dubaiOpera.svg";
import airportIcon from "../../../assets/icons/airplane.svg";
import MedydanIcon from "../../../assets/icons/horses.svg";
import PalmJumeirahIcon from "../../../assets/icons/palm.svg";
import RasAlkhorIcon from "../../../assets/icons/RasAlkhorIcon.svg";
import SOBHAHARTLANDIcon from "../../../assets/icons/SOBHAHARTLAND.svg";
import BurjKhalifa from "../../../assets/images/map/BurjKhalifa.webp";
import BusinessBay from "../../../assets/images/map/BusinessBay.webp";
import DubaiFrame from "../../../assets/images/map/DubaiFrame.webp";
import DubaiMall from "../../../assets/images/map/DubaiMall.webp";
import DubaiOpera from "../../../assets/images/map/DubaiOpera.webp";
import DXBAIRPORT from "../../../assets/images/map/DXBAIRPORT.webp";
import Meydan from "../../../assets/images/map/Meydan.webp";
import PalmJumeirah from "../../../assets/images/map/PalmJumeirah.webp";
import SobhaHartland from "../../../assets/images/map/SobhaHartland.webp";
import { motion } from "framer-motion";
import Slider from "react-slick";

import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";

const Nearby = () => {
  const { i18n, t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          className: "w-full",
          slidesToShow: 3,
          rows: 3,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
          speed: 1000,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 4));
          },
        },
      },
      {
        breakpoint: 1537,
        settings: {
          className: "w-full",
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          speed: 1000,
          infinite: false,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(Math.round(next / 2));
          },
        },
      },
      {
        breakpoint: 1280,
        settings: {
          className: "w-full",
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          infinite: false,
          dots: true,
          speed: 1000,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 2));
          },
        },
      },
      {
        breakpoint: 1025,
        settings: {
          className: "w-full",
          slidesToShow: 4,
          slidesToScroll: 4,
          // rows: 1,
          infinite: false,
          dots: true,
          speed: 1000,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 3));
          },
        },
      },
      {
        breakpoint: 730,
        settings: {
          className: "w-full",
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1,
          infinite: false,
          dots: true,
          speed: 1000,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 3));
          },
        },
      },
      {
        breakpoint: 532,
        settings: {
          className: "w-full",
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          infinite: false,
          speed: 1000,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 2));
          },
        },
      },
    ],
    dots: true,
    touchMove: true,

    customPaging: (index) => {
      return index == currentSlide ? (
        <div key={index} className="text-[white] text-med">
          <FiberManualRecordIcon />
        </div>
      ) : (
        <div key={index} className="text-[white] text-med">
          <OutFiberManualRecordIcon />
        </div>
      );
    },
    appendDots: (dots) => {
      return (
        <ul>
          {dots.map((item, index) => {
            return item;
          })}
        </ul>
      );
    },
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  let data = [
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
  const GridElement = ({ icon, name, duration, onClick, index }) => {
    return (
      <div
        onClick={onClick}
        dir={i18n.language == "en" ? "ltr" : "rtl"}
        className={`bg-white mb-6 text-black p-6 h-32 w-40 rounded flex flex-col justify-center items-start space-y-1 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-white/40 hover:bg-white/90 ${
          index == selectedIndex ? "bg-white/70 shadow-lg shadow-white/40" : ""
        }`}
      >
        <img src={icon} alt="Grid Image" className="h-12 w-10 " />
        <p className="text-smaller font-bold"> {name}</p>
        <p className="font-extralight text-tiny"> {duration} </p>
      </div>
    );
  };
  return (
    <div className="bg-[#222222] relative h-[730px] sm:h-[800px] md:h-[850px] lg:h-[690px] 2xl:h-[750px] grid grid-cols-12  overflow-hidden">
      <div className="border-r-[1px] border-l-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div
        className="absolute h-full w-full text-white lg:grid lg:grid-cols-12"
        dir={i18n.language == "en" ? "ltr" : "rtl"}
      >
        <div
          className="lg:px-10 xl:px-16 col-span-5 py-7 max-lg:px-8"
          dir={i18n.language == "en" ? "ltr" : "rtl"}
        >
          <p className="font-bold text-huge">{t("nearbyTitle")}</p>
          <p className="text-white/60 font-light text-small">
            {t("nearbySubTitle")}
          </p>
          <div className="py-5 lg:py-16 max-w-full flex justify-center items-center">
            <Slider
              {...settings}
              arrows={false}
              autoplay
              autoplaySpeed={4000}
              speed={2000}
            >
              {data.map((e, i) => {
                return (
                  <GridElement
                    key={i}
                    icon={e.icon}
                    name={e.name}
                    duration={e.duration}
                    onClick={() => {
                      setSelectedIndex(i);
                    }}
                    index={i}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          className="col-start-6 col-span-7"
        >
          <img
            src={data[selectedIndex].img}
            alt="Nearby Image"
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Nearby;
