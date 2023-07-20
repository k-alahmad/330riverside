import React from "react";

const FloorPlanColorPalette = () => {
  const ColorPaletteItem = ({ text, color, customStyle }) => {
    return (
      <div
        className={`flex justify-center items-center gap-x-3 ${customStyle}`}
      >
        <div className="h-8 w-8 rounded" style={{ backgroundColor: color }} />
        <p className="text-smaller font-semibold flex-1"> {text}</p>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-2 mt-20 md:mt-32 lg:mt-40 gap-y-3 lg:mx-2 self-center">
      <ColorPaletteItem color={"#89D2D7"} text={"1 BED UNIT"} />
      <ColorPaletteItem color={"#5FB6C4"} text={"1.5 BED UNIT"} />
      <ColorPaletteItem color={"#47CAEA"} text={"2 BED UNIT"} />
      <ColorPaletteItem color={"#C0E7F6"} text={"CIRCULATION"} />
      <ColorPaletteItem color={"#BBBCBE"} text={"SERVICES"} />
      <ColorPaletteItem color={"#D4D7EA"} text={"LIFTS"} />
      <ColorPaletteItem color={"#5B5F62"} text={"GARBAGE ROOM"} />
    </div>
  );
};

export default FloorPlanColorPalette;
