import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Brochure from "../Brochure/index";

const PageLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
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
    } else if (location.pathname == "/en") {
      changeLanguage("en");
    } else if (location.pathname == "/") {
      navigate(`/${i18n.language}`);
    }
  }, [location.pathname]);
  const [i18nLng, setI18nLng] = useState(i18n.language);
  useEffect(() => {
    if (i18n.language !== i18nLng) window.location.reload();
    setI18nLng(i18n.language);
  }, [i18n.language]);
  return (
    <div className=" flex flex-col justify-center items-center">
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">
        <div className="relative grid grid-cols-12 h-[5950px] sm:h-[6150px] md:h-[7400px] lg:h-[5550px] xl:h-[5400px] 2xl:h-[5550px] border-t-[1px] border-gray-200 mt-6">
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
