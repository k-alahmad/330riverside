import React from "react";
import photo2 from "../../../assets/images/map.webp";
import { useTranslation } from "react-i18next";
import Riverside from "../../../assets/images/330Riverside.svg";

const Element = ({ name, color, img }) => {
  return (
    <div className="flex justify-start items-center">
      <div
        style={{ borderColor: color }}
        className={`bg-white p-1 border-[1px] rounded-full w-10 h-10 lg:w-14 lg:h-14`}
      >
        <div
          style={{
            backgroundColor: color,
            opacity: 0.3,
          }}
          className={` rounded-full h-full w-full`}
        />
      </div>
      {img ? (
        <img src={img} className="h-7 sm:h-8 lg:h-6 2xl:h-9 px-4" alt="" />
      ) : (
        <p className="px-4 font-normal text-small"> {name}</p>
      )}
    </div>
  );
};

const Location = () => {
  const { i18n, t } = useTranslation();
  return (
    <div
      className=" max-md:pt-16 pb-32 bg-transparent"
      dir={i18n.language == "en" ? "ltr" : "rtl"}
    >
      <div className="hidden md:block text-9xl bg-transparent text-black py-14 w-full overflow-hidden">
        {i18n.language == "en" ? (
          <p className="animate-textCamera relative whitespace-nowrap">
            Site Loc
            <span className="border-text text-transparent">ation Mast</span>
            erplan
          </p>
        ) : (
          <p className="animate-textCamera relative whitespace-nowrap">
            {t("locationTitle")}
          </p>
        )}
      </div>
      <div className="lg:grid lg:grid-cols-12 max-lg:space-y-8">
        <div className="lg:px-10 xl:px-16 col-span-4 space-y-4 lg:space-y-8 max-lg:px-8">
          <p className="font-bold text-bigger lg:text-huge">
            {t("locationTitle")}
          </p>
          <Element color={"#27AE60"} name={"Apartment Club House"} />
          <Element color={"#D35400"} name={"Lagoon"} />
          <Element color={"#8E44AD"} name={"Low Rise Villa Community"} />
          <Element color={"#2980B9"} img={Riverside} />
        </div>
        <div className="col-span-8 max-md:pt-8">
          <img
            src={photo2}
            alt="Site Location Image"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
