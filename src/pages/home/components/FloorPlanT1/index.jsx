import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  counterIsFull,
  counterIsNotFull,
  selectCounterState,
  selectRegisterState,
} from "../../../../redux/modal.slice";
import FloorPlanRoomSlider from "./FloorPlanRoomSlider";
import FloorPlanContentSlider from "./FloorPlanContentSlider";
import FloorPlanBuildingLayout from "./FloorPlanBuildingLayout";
import FloorPlanBuildingLayoutSlider from "./FloorPlanBuildingLayoutSlider";
import FloorPlanColorPalette from "./FloorPlanColorPalette";
import { data } from "../../../../data/floorData";
const FloorPlanT1 = () => {
  const dispatch = useDispatch();
  const registerState = useSelector(selectRegisterState);
  const counterState = useSelector(selectCounterState);
  const { i18n, t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [disablebtn, setDisableBtn] = useState(false);
  const [ViewCounter, setViewCounter] = useState(0);
  const slideRef1 = useRef();
  const slideRef2 = useRef();
  useEffect(() => {
    if (registerState !== true) {
      if (ViewCounter >= 3)
        if (counterState !== true) {
          dispatch(counterIsFull());
        }
    } else {
      dispatch(counterIsNotFull());
    }
  }, [ViewCounter, counterState, registerState]);
  return (
    <div
      className="mt-32 pt-12 bg-transparent border-t-2"
      dir={i18n.language == "en" ? "" : "rtl"}
    >
      <div
        className="text-huge font-bold lg:w-[70%] w-[90%] px-[5%]"
        dir={i18n.language == "en" ? "" : "rtl"}
      >
        {t(data.title)}
      </div>
      <div className="lg:grid lg:grid-cols-12 pt-12 ">
        <div className="col-span-4 flex flex-col justify-start items-center">
          <FloorPlanBuildingLayout
            slideRef1={slideRef1}
            slideRef2={slideRef2}
            selected={selected}
            setSelected={setSelected}
            ViewCounter={ViewCounter}
            setViewCounter={setViewCounter}
            disablebtn={disablebtn}
            setDisableBtn={setDisableBtn}
          />
          <FloorPlanColorPalette />
          {/* Mobile View */}
          <FloorPlanBuildingLayoutSlider
            selected={selected}
            setSelected={setSelected}
            setDisableBtn={setDisableBtn}
            slideRef1={slideRef1}
            slideRef2={slideRef2}
          />
        </div>
        <div className="col-span-4 flex justify-center items-center sm:max-lg:pt-28">
          <FloorPlanRoomSlider slideRef1={slideRef1} />
        </div>
        <div className="col-span-4 flex flex-col justify-center items-center sm:max-lg:pt-12">
          <FloorPlanContentSlider slideRef2={slideRef2} />
        </div>
      </div>
    </div>
  );
};

export default FloorPlanT1;
