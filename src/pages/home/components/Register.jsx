import React from "react";
import { useTranslation } from "react-i18next";
import photo1 from "../../../assets/images/register.webp";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  selectDownloadState,
  selectRegisterState,
  selectCounterState,
} from "../../../redux/modal.slice";

import RegisterForm from "../../../components/Forms/RegisterForm";
const SocialElement = ({ icon, name }) => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 bg-[#222222] text-big flex justify-center items-center">
        {icon}
      </div>
      <p className="font-bold text-base px-4 ">{name}</p>
    </div>
  );
};

function Register({ modal }) {
  const { i18n, t } = useTranslation();
  const downloadState = useSelector(selectDownloadState);
  const registerState = useSelector(selectRegisterState);
  const counterState = useSelector(selectCounterState);

  return (
    <div
      dir={i18n.language == "en" ? "ltr" : "rtl"}
      className={`md:grid md:grid-cols-12 bg-transparent`}
    >
      <div
        className={`col-span-8 p-4 lg:px-4 xl:grid xl:grid-cols-12 gap-4 ${
          modal && "bg-gray-100"
        } row-span-2`}
      >
        {downloadState && !registerState && modal && (
          <div className="col-span-12 text-big lg:text-bigger font-bold text-red-800 flex justify-center items-center">
            {t("brochurMSG")}
          </div>
        )}
        {counterState && !registerState && !downloadState && modal && (
          <div className="col-span-12 text-big lg:text-bigger font-bold text-red-800 flex justify-center items-center">
            Please Register to view all Rooms
          </div>
        )}
        <div className="col-span-6 space-y-12 flex flex-col justify-center items-stretch">
          <p className="font-bold text-bigger xl:text-huge ">{t("slogan")}</p>
          <p className="font-light text-small">{t("formSubTitle")}</p>
        </div>
        <RegisterForm />
        <div className="space-y-6 pt-8 lg:pt-2 lg:col-span-6">
          <SocialElement
            icon={<MdLocationOn className="text-white" />}
            name={t("address")}
          />
        </div>
      </div>
      <div className={`col-span-4 ${modal && "max-md:hidden"} row-span-2`}>
        <img
          src={photo1}
          alt="Register Image"
          className={`w-full max-md:h-[400px] max-md:pt-12 ${
            !modal ? "md:h-[550px]" : "md:h-full"
          } object-cover object-center`}
        />
      </div>
    </div>
  );
}

export default Register;
