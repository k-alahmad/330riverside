import React from "react";
import photo2 from "../../../../assets/images/map.webp";
import { useTranslation } from "react-i18next";
import { data } from "../../../../data/locationData";
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

const LocationT1 = () => {
  const { i18n, t } = useTranslation();
  return (
    <div
      className=" max-md:pt-16 pb-32 bg-transparent"
      dir={i18n.language == "en" ? "ltr" : "rtl"}
    >
      <div className="hidden md:block text-9xl bg-transparent text-black py-14 w-full overflow-hidden">
        {i18n.language == "en" ? (
          <p className="animate-textCamera relative whitespace-nowrap">
            {data.slidingTextP1}
            <span className="border-text text-transparent">
              {data.slidingTextP2}
            </span>
            {data.slidingTextP3}
          </p>
        ) : (
          <p className="animate-textCamera relative whitespace-nowrap">
            {t(data.title)}
          </p>
        )}
      </div>
      <div className="lg:grid lg:grid-cols-12 max-lg:space-y-8">
        <div className="lg:px-10 xl:px-16 col-span-4 space-y-4 lg:space-y-8 max-lg:px-8">
          <p className="font-bold text-bigger lg:text-huge">{t(data.title)}</p>

          {data.elements.map((item, index) => {
            return item.name ? (
              <Element key={index} color={item.color} name={item.name} />
            ) : (
              <Element key={index} color={item.color} img={item.photo} />
            );
          })}
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

export default LocationT1;
