import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
import Dropdown from "./Language";
import { MdDehaze } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/modal.slice";
import { handleScroll } from "../../../helpers/scroll";
import { NavElement } from "../../../data/navData";
import RegisterT1 from "../../UI/RegisterT1";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");
  const dispatch = useDispatch();

  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 100) {
      return setHeader(false);
    } else if (document.documentElement.scrollTop > 110) {
      return setHeader(true);
    }
  };
  useEffect(() => {
    setHeader(false);
    document.addEventListener("scroll", listenScrollEvent);
    return () => {
      document.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div
          dir={i18n.language == "en" ? "" : "rtl"}
          className={`${
            header
              ? "shadow-2xl w-[95%] lg:w-[80%] translate-y-2"
              : "w-[95%] translate-y-0"
          }   border-white border-2 bg-white transition-all duration-500 z-40 fixed rounded-2xl max-lg:px-3`}
        >
          <div
            className={`flex justify-evenly lg:justify-between items-center h-16`}
          >
            <div className="flex flex-1">
              <div
                className="flex justify-center items-center px-[3%] cursor-pointer"
                onClick={() =>
                  dispatch(showModal({ data: <RegisterT1 modal={true} /> }))
                }
              >
                <FaPlus color="#222222" className="animate-pulse" />
                <p className="text-lightBlack font-normal uppercase p-4 ">
                  {t("register")}
                </p>
              </div>
            </div>
            <Dropdown />
            <p className="-mr-6 text-lightBlack max-lg:hidden">{t("menu")}</p>
            <div
              onClick={() => setMobileOpen(true)}
              className=" lg:px-8 block cursor-pointer"
            >
              <MdDehaze size={24} color="#222222" />
            </div>
          </div>
        </div>
        <div className={`h-24`} />
      </div>
      <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
        {NavElement.map((e) => (
          <LinkElement
            key={e.link}
            name={t(e.name)}
            link={e.link}
            selectedLink={selectedLink}
            onClick={() => {
              setMobileOpen(false);
              handleScroll(e.link);
              setSelectedLink(e.link);
            }}
          />
        ))}
      </Drawer>
    </>
  );
};

export default NavBar;
