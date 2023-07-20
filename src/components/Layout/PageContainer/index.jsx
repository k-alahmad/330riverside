import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Brochure from "../Brochure/index";
import useWindowDimensions from "../../../hooks/screenDimentions";
import { showModal } from "../../../redux/modal.slice";
import { useDispatch } from "react-redux";
import Modal from "../../UI/Modal/Modal";
import Register from "../../UI/RegisterT1";
const PageLayout = ({ children, type }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { width } = useWindowDimensions();
  const [w, setW] = useState(width);
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
  useEffect(() => {
    if (width !== w) {
      window.location.reload();
    }
    setW(width);
  }, [width]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(showModal({ data: <Register modal={true} /> }));
    }, 10000);
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center">
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">
        {type == "lines" ? (
          <div className="relative grid grid-cols-12 h-[5950px] sm:h-[6150px] md:h-[7400px] lg:h-[5550px] xl:h-[5400px] 2xl:h-[5550px] border-t-[1px] border-gray-200 mt-6">
            <div className="border-r-[1px] border-l-[1px] border-gray-200 col-span-4" />
            <div className="border-r-[1px] border-gray-200 col-span-4" />
            <div className="border-r-[1px] border-gray-200 col-span-4" />
            <div className="absolute w-full h-full">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
      <Brochure />
      <Footer />
      <Modal />
    </div>
  );
};

export default PageLayout;
