import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center">
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
