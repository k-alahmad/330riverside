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
import { MdOutlineWhatsapp } from "react-icons/md";
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
          <div className="relative grid grid-cols-12 h-[5350px] sm:h-[5350px] md:h-[6100px] lg:h-[5100px] xl:h-[4700px] 2xl:h-[4600px] border-t-[1px] border-gray-200 mt-6">
            <div className="border-r-[1px] border-l-[1px] border-gray-200 col-span-4 max-sm:hidden" />
            <div className="border-r-[1px] border-gray-200 col-span-4 max-sm:hidden" />
            <div className="border-r-[1px] border-gray-200 col-span-4 max-sm:hidden" />
            <div className="absolute w-full h-full">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
      <Brochure />
      <Footer />
      <Modal />
      <div
        className="fixed bottom-3 md:bottom-5 right-3 md:right-5 bg-[#25D366]/80 text-white p-3 rounded-full cursor-pointer z-40"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            `https://wa.me/+971501108606`,
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <MdOutlineWhatsapp className="text-[30px] md:text-[40px]" />
      </div>
    </div>
  );
};

export default PageLayout;
