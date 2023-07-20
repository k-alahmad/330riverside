import React from "react";

const NearbyContainer = ({ children }) => {
  return (
    <div className="bg-[#222222] relative h-[750px] sm:h-[830px] md:h-[880px] lg:h-[730px] xl:h-[780px] grid grid-cols-12  overflow-hidden z-20">
      <div className="border-r-[1px] border-l-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="border-r-[1px] border-white/10" />
      <div className="absolute h-full w-full">{children}</div>
    </div>
  );
};

export default NearbyContainer;
