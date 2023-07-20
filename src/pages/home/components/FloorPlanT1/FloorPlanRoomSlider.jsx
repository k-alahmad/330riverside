import React from "react";
import { data } from "../../../../data/floorData";
import Slider from "react-slick";
import LazyImage from "../../../../components/UI/LazyImage";
const FloorPlanRoomSlider = ({ slideRef1 }) => {
  return (
    <Slider
      ref={slideRef1}
      dots={false}
      infinite={false}
      speed={300}
      slidesToScroll={1}
      slidesToShow={1}
      touchMove={false}
      className=" h-full w-[300px] sm:w-[600px] md:w-[700px] lg:w-[300px] xl:w-[350px] 2xl:w-[500px] px-[3%]"
      arrows={false}
    >
      {data.buttons.map((d, i) => {
        return (
          <LazyImage
            key={i}
            src={d.image}
            divStyle={"h-[500px] xl:h-[600px] w-full"}
            skelatonStyle={"h-[500px] xl:h-[600px] w-full"}
            alt={d.name}
            imgStyle={"h-[500px] xl:h-[600px] w-full object-conatin rounded"}
          />
        );
      })}
    </Slider>
  );
};

export default FloorPlanRoomSlider;
