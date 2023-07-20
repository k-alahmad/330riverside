import React, { useState } from "react";
import { data } from "../../../../data/floorData";
import Slider from "react-slick";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
import { useTranslation } from "react-i18next";
const FloorPlanBuildingLayoutSlider = ({
  slideRef1,
  slideRef2,
  setSelected,
  setDisableBtn,
  selected,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { i18n } = useTranslation();
  const GridElement = ({ name, onClick, index, color }) => {
    return (
      <div
        onClick={onClick}
        dir={i18n.language == "en" ? "ltr" : "rtl"}
        style={{ backgroundColor: color }}
        className={`mb-6 text-black p-3 w-20 rounded cursor-pointer transition-all duration-300 text-center ${
          index == selected ? "bg-opacity-70" : ""
        }`}
      >
        <p className="text-smaller font-bold"> {name}</p>
      </div>
    );
  };
  return (
    <Slider
      ref={slideRef1}
      dots={true}
      infinite={true}
      speed={600}
      slidesToScroll={3}
      slidesToShow={3}
      touchMove={true}
      arrows={false}
      className="text-white mt-16 max-w-[300px] sm:hidden"
      customPaging={(index) => {
        return index == currentSlide ? (
          <div key={index} className="text-lightBlack text-med">
            <FiberManualRecordIcon />
          </div>
        ) : (
          <div key={index} className="text-lightBlack text-med">
            <OutFiberManualRecordIcon />
          </div>
        );
      }}
      appendDots={(dots) => {
        return (
          <ul>
            {dots.map((item, index) => {
              return item;
            })}
          </ul>
        );
      }}
      beforeChange={(prev, next) => {
        setCurrentSlide(next / 3);
      }}
    >
      {data.buttons.map((e, i) => {
        return (
          <GridElement
            key={i}
            name={e.name}
            bedRoomNumber={e.bedRoomNumber}
            onClick={() => {
              slideRef1.current.slickGoTo(i);
              slideRef2.current.slickGoTo(i);
              setSelected(i);
              setDisableBtn(true);
              setTimeout(() => {
                setDisableBtn(false);
              }, 400);
            }}
            color={e.color}
            index={i}
          />
        );
      })}
    </Slider>
  );
};

export default FloorPlanBuildingLayoutSlider;
