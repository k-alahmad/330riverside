import React from "react";

const NearbyContainer = ({ children }) => {
  return (
    <div className="bg-[#222222] relative h-[1100px] sm:h-[830px] md:h-[700px] lg:h-[1100px] xl:h-[820px] grid grid-cols-12  overflow-hidden z-20">
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
