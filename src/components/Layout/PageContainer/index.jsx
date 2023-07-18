import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Brochure from "../Brochure/index";

const PageLayout = ({ children }) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  useEffect(() => {
    if (location.pathname == "/ar") {
      changeLanguage("ar");
    } else if (location.pathname == "/fa") {
      changeLanguage("fa");
    } else {
      changeLanguage("en");
    }
  }, [location.pathname]);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className=" flex flex-col justify-center items-center">
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">
        <div className="relative grid grid-cols-12 h-[5950px] sm:h-[6150px] md:h-[7400px] lg:h-[5550px] xl:h-[5400px] 2xl:h-[5750px] border-t-[1px] border-gray-200 mt-6">
          <div className="border-r-[1px] border-l-[1px] border-gray-200 col-span-4" />
          <div className="border-r-[1px] border-gray-200 col-span-4" />
          <div className="border-r-[1px] border-gray-200 col-span-4" />
          <div
            className="absolute w-full h-full"
            dir={i18n.language == "en" ? "ltr" : "rtl"}
          >
            {children}
          </div>
        </div>
      </div>
      <Brochure />
      <Footer />
    </div>
  );
};

export default PageLayout;
