import React from "react";
import LazyImage from "../../../components/UI/LazyImage";
import heroLeft from "../../../assets/images/heroLeft.webp";
import heroMiddle from "../../../assets/images/heroMiddle.webp";
import heroRight from "../../../assets/images/heroRight.webp";
import Riverside from "../../../assets/images/330Riverside.svg";
import HeroBottom from "../../../assets/images/heroBottom.webp";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="max-md:hidden">
      <div className="grid grid-cols-12">
        <div
          className={`col-span-4 px-[3%] ${
            i18n.language == "en" ? "translate-x-[3%]" : "-translate-x-[3%]"
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
            <div className="flex absolute right-[20%] -translate-y-1/2 w-[150px] h-[150px] rounded-[150px] bg-gradient-to-b from-[#bebebe]/50 backdrop-blur-md" />
          </div>
        </div>
        <div className="col-span-4 px-[5%] relative z-10">
          <div className="z-50">
            <LazyImage
              src={Riverside}
              alt={"Riverside"}
              imgStyle={"flex -mt-10 bg-white p-1"}
            />
          </div>

          <div className="flex h-[750px] mt-52">
            <LazyImage
              src={heroMiddle}
              alt={"Hero Middle"}
              imgStyle={"relative object-cover h-full animate-camera"}
            />
          </div>
        </div>
        <div
          className={`col-span-4 px-[3%] ${
            i18n.language == "en" ? "-translate-x-[3%]" : "translate-x-[3%]"
          } `}
        >
          <div className="flex w-full h-[750px] mt-32">
            <LazyImage
              src={heroRight}
              alt={"Hero Right"}
              imgStyle={"relative object-cover w-[200%] h-full animate-camera"}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          className={`col-span-4 px-[3%] ${
            i18n.language == "en" ? "translate-x-[3%]" : "-translate-x-[3%]"
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
      </div>
    </div>
  );
};

export default Header;
