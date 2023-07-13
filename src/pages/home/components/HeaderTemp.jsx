import React, { useState } from "react";
import LazyImage from "../../../components/UI/LazyImage";
import heroLeft from "../../../assets/images/heroLeft.webp";
import heroMiddle from "../../../assets/images/heroMiddle.webp";
import heroRight from "../../../assets/images/heroRight.webp";
import Riverside from "../../../assets/images/330Riverside.svg";
import HeroBottom from "../../../assets/images/heroBottom.webp";
import mobileHeader from "../../../assets/images/mobileHeader.webp";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
import useWindowDimensions from "../../../hooks/screenDimentions";

const HeaderTemp = () => {
  const { i18n, t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    touchMove: true,

    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    customPaging: (index) => {
      return index == currentSlide ? (
        <div key={index} className="text-lightBlack text-med py-2">
          <FiberManualRecordIcon />
        </div>
      ) : (
        <div key={index} className="text-lightBlack text-med py-2">
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
  let imgs = [heroLeft, heroMiddle, heroRight];
  let headerTitle = t("HeaderMainTitle").split(" ");

  return (
    <>
      <div
        className=" flex justify-center max-w-screen overflow-hidden items-center md:hidden pb-8"
        style={{
          width: width,
        }}
      >
        <Slider
          {...settings}
          autoplay
          autoplaySpeed={4000}
          className={`h-full w-full`}
        >
          {imgs.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt={"Header" + index}
                className="h-[400px] w-full object-conatin rounded"
              />
            );
          })}
        </Slider>
      </div>
      <div className="max-md:hidden border-t-[1px] border-gray-200 mt-12">
        <div className="relative grid grid-cols-12 h-[1850px]">
          <div className="border-r-[1px] border-l-[1px] border-gray-200 col-span-4" />
          <div className="border-r-[1px] border-gray-200 col-span-4 z-20" />
          <div className="border-r-[1px] border-gray-200 col-span-4" />
          <div
            className="absolute w-full h-full"
            dir={i18n.language == "en" ? "ltr" : "rtl"}
          >
            <div className="grid grid-cols-12">
              <div
                className={`col-span-4 px-[3%] ${
                  i18n.language == "en"
                    ? "translate-x-[3%]"
                    : "-translate-x-[3%]"
                } `}
              >
                <div
                  dir={i18n.language == "en" ? "ltr" : "rtl"}
                  className="px-4 py-8 space-y-4 h-[350px]"
                >
                  <p className="text-lightBlack text-huge font-bold capitalize">
                    {t("HeaderTitleOne")}
                  </p>
                  <p className="text-smaller capitalize  text-greyText pb-28">
                    {t("HeaderSubTitleOne")}
                  </p>
                </div>

                <div className="flex w-full h-[750px] mt-12">
                  <LazyImage
                    src={heroLeft}
                    alt={"Hero left"}
                    imgStyle={"object-cover h-full animate-camera"}
                  />
                  <div className="flex absolute right-[20%] -translate-y-1/2 w-[150px] h-[150px] rounded-[150px] bg-gradient-to-b from-[#bebebe]/50 backdrop-blur-md " />
                </div>
              </div>
              <div className="col-span-4 px-[5%] relative z-10">
                <div className="z-50">
                  <LazyImage
                    src={Riverside}
                    alt={"Riverside"}
                    imgStyle={"flex -mt-10 bg-white p-1 "}
                  />
                </div>

                <div className="flex h-[750px] mt-52">
                  <LazyImage
                    src={heroMiddle}
                    alt={"Hero Middle"}
                    imgStyle={"relative object-cover h-full animate-camera "}
                  />
                </div>
              </div>
              <div
                className={`col-span-4 px-[3%] ${
                  i18n.language == "en"
                    ? "-translate-x-[3%]"
                    : "translate-x-[3%]"
                } `}
              >
                <div className="flex w-full h-[750px] mt-32">
                  <LazyImage
                    src={heroRight}
                    alt={"Hero Right"}
                    imgStyle={
                      "relative object-cover w-[200%] h-full animate-camera"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div
                className={`col-span-4 px-[3%] ${
                  i18n.language == "en"
                    ? "translate-x-[3%]"
                    : "-translate-x-[3%]"
                } `}
              >
                <div
                  dir={i18n.language == "en" ? "ltr" : "rtl"}
                  className="mt-24 space-y-4 px-4"
                >
                  <p className="w-full text-lightBlack text-huge font-bold capitalize leading-[110%] ">
                    {t("HeaderTitleTwo")}
                  </p>
                  <p className="text-smaller capitalize text-greyText ">
                    {t("HeaderSubTitleTwo")}
                  </p>
                </div>
              </div>

              <div className="col-span-8 px-[3%]">
                <div className="h-[800px] relative -translate-y-52">
                  <LazyImage
                    src={HeroBottom}
                    alt={"Hero Bottom One"}
                    imgStyle={"relative object-fill h-[800px]"}
                  />
                  <div className="flex absolute bottom-0 w-[50%] h-[15%] bg-gradient-to-b from-white/30 backdrop-blur-sm" />
                  <div
                    className={`bg-white absolute h-[15%] w-[50%] -top-1 ${
                      i18n.language == "en" ? "left-0" : "right-0"
                    }`}
                  />
                  <div
                    className={`bg-white absolute h-[15%] w-[50%] -bottom-1 ${
                      i18n.language == "en" ? "right-0" : "left-0"
                    } `}
                  />
                </div>
              </div>
              <div className="col-span-12 text-9xl bg-transparent text-black overflow-x-hidden -mt-80 pb-20">
                <p className="animate-textCamera relative whitespace-nowrap">
                  {headerTitle[0]}
                  <span className="border-text text-transparent">
                    {` ${headerTitle[1]} `}
                  </span>
                  {headerTitle[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTemp;
