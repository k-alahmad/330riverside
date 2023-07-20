import React, { useState } from "react";
import Slider from "react-slick";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
import useWindowDimensions from "../../../../hooks/screenDimentions";
import { data } from "../../../../data/headerData";
const HeaderSlider = () => {
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

  let imgs = [data.heroLeft, data.heroMiddle, data.heroRight];
  return (
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
        className={`h-full w-full z-20`}
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
  );
};

export default HeaderSlider;
