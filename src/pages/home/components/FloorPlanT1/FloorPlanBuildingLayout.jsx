import React from "react";
import { data } from "../../../../data/floorData";
import mainFloor from "../../../../assets/images/floorplan/main.svg";
import { showModal, selectCounterState } from "../../../../redux/modal.slice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import RegisterT1 from "../../../../components/UI/RegisterT1";

const FloorPlanBuildingLayout = ({
  selected,
  setSelected,
  disablebtn,
  setDisableBtn,
  slideRef1,
  slideRef2,
  ViewCounter,
  setViewCounter,
}) => {
  const counterState = useSelector(selectCounterState);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const FloorButton = ({ customStyle, i }) => {
    return (
      <button
        disabled={i == selected || disablebtn}
        onClick={() => {
          if (!counterState) {
            slideRef1.current.slickGoTo(i);
            slideRef2.current.slickGoTo(i);
            setSelected(i);
            setViewCounter(ViewCounter + 1);
            setDisableBtn(true);
            setTimeout(() => {
              setDisableBtn(false);
            }, 400);
          } else {
            dispatch(showModal({ data: <RegisterT1 modal={true} /> }));
          }
        }}
        className={`absolute group cursor-pointer flex justify-center items-center max-sm:hidden ${customStyle} `}
      >
        {data.buttons[i].name}
        <div className="relative">
          <div
            style={{ backgroundColor: data.buttons[i].color }}
            className="rounded shadow-xl z-30 p-3 w-24 absolute top-0 -left-4 scale-0 sm:group-hover:scale-100 transition-all duration-300 origin-top flex flex-col justify-center items-center"
          >
            <p className="text-smaller font-semibold text-[#797979]">
              {data.buttons[i].name}
            </p>
            <p className="font-bold text-med">
              {data.buttons[i].bedRoomNumber} {t("floorBedroom")}
            </p>
          </div>
        </div>
      </button>
    );
  };
  return (
    <div
      className="w-[320px] sm:w-[610px] md:w-[750px] lg:w-[330px] xl:w-[410px] 2xl:w-[500px] h-[140px] sm:h-[260px] md:h-[290px] lg:h-[140px] xl:h-[170px] 2xl:h-[260px] relative bg-no-repeat font-medium text-tiny sm:translate-y-24 sm:max-lg:bg-center"
      style={{
        backgroundImage: `url(${mainFloor})`,
      }}
    >
      <FloorButton
        customStyle={
          "2xl:h-16 2xl:w-10 2xl:top-[70px] 2xl:left-[6px] xl:h-20 xl:w-10 xl:top-[45px] xl:left-[4px] lg:h-14 lg:w-9 lg:top-[40px] lg:left-[0px] md:h-28 md:w-16 md:top-[90px] md:left-[30px] sm:h-24 sm:w-14 sm:top-[80px] sm:left-[5px]"
        }
        i={4}
      />
      <FloorButton
        customStyle={
          "2xl:h-10 2xl:w-10 2xl:top-[55px] 2xl:left-[55px] xl:h-10 xl:w-9 xl:top-[40px] xl:left-[45px] lg:h-8 lg:w-8 lg:top-[30px] lg:left-[38px] md:h-16 md:w-14 md:top-[70px] md:left-[100px] sm:h-14 sm:w-14 sm:top-[65px] sm:left-[65px]"
        }
        i={5}
      />
      <FloorButton
        customStyle={
          "2xl:h-14 2xl:w-14 2xl:top-[35px] 2xl:left-[130px] xl:h-14 xl:w-14 xl:top-[22px] xl:left-[100px] lg:h-10 lg:w-11 lg:top-[20px] lg:left-[80px] md:h-28 md:w-24 md:top-[25px] md:left-[200px] sm:h-20 sm:w-20 sm:top-[40px] sm:left-[155px]"
        }
        i={6}
      />
      <FloorButton
        customStyle={
          "2xl:h-14 2xl:w-12 2xl:top-[15px] 2xl:left-[200px] xl:h-14 xl:w-11 xl:top-[5px] xl:left-[160px] lg:h-11 lg:w-8 lg:top-[3px] lg:left-[130px] md:h-24 md:w-[73px] md:top-[15px] md:left-[300px] sm:h-20 sm:w-16 sm:top-[10px] sm:left-[240px]"
        }
        i={7}
      />
      <FloorButton
        customStyle={
          "2xl:h-14 2xl:w-12 2xl:top-[15px] 2xl:right-[200px] xl:h-14 xl:w-11 xl:top-[5px] xl:right-[160px] lg:h-11 lg:w-8 lg:top-[3px] lg:right-[130px] md:h-24 md:w-[73px] md:top-[15px] md:right-[300px] sm:h-20 sm:w-16 sm:top-[10px] sm:right-[240px]"
        }
        i={8}
      />
      <FloorButton
        customStyle={
          "2xl:h-14 2xl:w-12 2xl:top-[25px] 2xl:right-[150px] xl:h-14 xl:w-11 xl:top-[15px] xl:right-[115px] lg:h-12 lg:w-8 lg:top-[12px] lg:right-[95px] md:h-24 md:w-16 md:top-[25px] md:right-[233px] sm:h-20 sm:w-14 sm:top-[30px] sm:right-[180px]"
        }
        i={9}
      />
      <FloorButton
        customStyle={
          "2xl:h-16 2xl:w-24 2xl:top-[35px] 2xl:right-[52px] xl:h-14 xl:w-[70px] xl:top-[25px] xl:right-[42px] lg:h-10 lg:w-[58px] lg:top-[25px] lg:right-[35px] md:h-24 md:w-32 md:top-[40px] md:right-[100px] sm:h-20 sm:w-28 sm:top-[40px] sm:right-[65px]"
        }
        i={10}
      />
      <FloorButton
        customStyle={
          "2xl:h-20 2xl:w-12 2xl:top-[60px] 2xl:right-[1px] xl:h-20 xl:w-10 xl:top-[45px] xl:right-[1px] lg:h-14 lg:w-8 lg:top-[40px] lg:right-[1px] md:h-32 md:w-16 md:top-[80px] md:right-[28px] sm:h-24 sm:w-14 sm:top-[80px] sm:right-[6px]"
        }
        i={11}
      />
      <FloorButton
        customStyle={
          "2xl:h-14 2xl:w-12 2xl:top-[110px] 2xl:right-[50px] xl:h-12 xl:w-10 xl:top-[90px] xl:right-[42px] lg:h-10 lg:w-7 lg:top-[73px] lg:right-[35px] md:h-20 md:w-14 md:top-[155px] md:right-[100px] sm:h-16 sm:w-14 sm:top-[140px] sm:right-[65px]"
        }
        i={12}
      />

      <FloorButton
        customStyle={
          "2xl:h-20 2xl:w-14 2xl:top-[110px] 2xl:right-[145px] xl:h-16 xl:w-10 xl:top-[100px] xl:right-[120px] lg:h-12 lg:w-7 lg:top-[75px] lg:right-[100px] md:h-24 md:w-16 md:top-[165px] md:right-[235px] sm:h-24 sm:w-14 sm:top-[145px] sm:right-[182px]"
        }
        i={13}
      />
      <FloorButton
        customStyle={
          "2xl:h-20 2xl:w-11 2xl:top-[125px] 2xl:right-[205px] xl:h-16 xl:w-10 xl:top-[110px] xl:right-[162px] lg:h-12 lg:w-7 lg:top-[90px] lg:right-[132px] md:h-28 md:w-16 md:top-[175px] md:right-[305px] sm:h-24 sm:w-16 sm:top-[155px] sm:right-[240px]"
        }
        i={14}
      />
      <FloorButton
        customStyle={
          "2xl:h-20 2xl:w-12 2xl:top-[125px] 2xl:left-[200px] xl:h-16 xl:w-10 xl:top-[110px] xl:left-[165px] lg:h-12 lg:w-8 lg:top-[90px] lg:left-[135px] md:h-28 md:w-12 md:top-[175px] md:left-[305px] sm:h-24 sm:w-16 sm:top-[155px] sm:left-[240px]"
        }
        i={0}
      />
      <FloorButton
        customStyle={
          "2xl:h-20 2xl:w-12 2xl:top-[110px] 2xl:left-[150px] xl:h-16 xl:w-9 xl:top-[90px] xl:left-[125px] lg:h-12 lg:w-8 lg:top-[75px] lg:left-[100px] md:h-28 md:w-16 md:top-[160px] md:left-[235px] sm:h-20 sm:w-14 sm:top-[145px] sm:left-[180px]"
        }
        i={1}
      />
      <FloorButton
        customStyle={
          "2xl:h-16 2xl:w-12 2xl:top-[110px] 2xl:left-[100px] xl:h-16 xl:w-10 xl:top-[90px] xl:left-[80px] lg:h-12 lg:w-7 lg:top-[75px] lg:left-[68px] md:h-24 md:w-16 md:top-[155px] md:left-[164px] sm:h-20 sm:w-14 sm:top-[140px] sm:left-[122px]"
        }
        i={2}
      />
      <FloorButton
        customStyle={
          "2xl:h-12 2xl:w-12 2xl:top-[110px] 2xl:left-[50px] xl:h-12 xl:w-8 xl:top-[90px] xl:left-[45px] lg:h-10 lg:w-7 lg:top-[75px] lg:left-[37px] md:h-20 md:w-16 md:top-[150px] md:left-[96px] sm:h-16 sm:w-14 sm:top-[140px] sm:left-[62px]"
        }
        i={3}
      />
    </div>
  );
};

export default FloorPlanBuildingLayout;
