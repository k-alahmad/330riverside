import React from "react";
import { data } from "../../../../data/floorData";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
const FloorPlanContentSlider = ({ slideRef2 }) => {
  const { t, i18n } = useTranslation();
  return (
    <Slider
      ref={slideRef2}
      dots={false}
      infinite={false}
      speed={300}
      centerMode
      slidesToScroll={1}
      slidesToShow={1}
      vertical={true}
      touchMove={false}
      className="h-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[450px]"
    >
      {data.buttons.map((d, i) => {
        return (
          <div
            key={i}
            dir={i18n.language == "en" ? "" : "rtl"}
            className=" w-full h-[500px] xl:h-[700px] flex flex-col justify-center items-center"
          >
            <p className="text-big font-bold rounded-lg py-1 flex justify-start">
              {t("roomCode")}
              <span
                style={{
                  color: d.color,
                }}
                className="px-3"
              >
                {d.name}
              </span>
            </p>
            <p className="font-bold text-bigger pt-12">
              {d.bedRoomNumber} {t("floorBedroom")}
            </p>
            <p className="text-[#797979] text-med">{d.type}</p>

            <p className="font-bold text-bigger pt-12">
              {t("floorTotalSaleable")}
            </p>
            <p className="text-med text-[#797979]">
              {t("floorSuite")} = {d.suite}
            </p>
            <p className="text-med text-[#797979]">
              {t("floorBalcony")} = {d.balcony}
            </p>
            <p className="text-med text-[#797979]">
              {t("floorTotal")} = {d.total}
            </p>
          </div>
        );
      })}
    </Slider>
  );
};

export default FloorPlanContentSlider;
