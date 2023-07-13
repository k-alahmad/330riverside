import React from "react";
import { useTranslation } from "react-i18next";
import Register from "./Register";

const RegisterContainer = () => {
  const { i18n } = useTranslation();

  return (
    <div
      className="relative h-[1440px] md:h-[950px] lg:h-[850px] xl:h-[850px] 2xl:h-[940px] grid grid-cols-12"
      dir={i18n.language == "en" ? "ltr" : "rtl"}
    >
      <div className="border-r-[1px] border-l-[1px] border-gray-200 col-span-4" />
      <div className="border-r-[1px] border-gray-200 col-span-4" />
      <div className="border-r-[1px] border-gray-200 col-span-4" />
      <div className="w-full h-full absolute pt-24">
        <Register absolute={true} />
      </div>
    </div>
  );
};

export default RegisterContainer;
