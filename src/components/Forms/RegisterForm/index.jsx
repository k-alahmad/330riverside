import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { MdMail, MdPerson } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Brochure from "../../../assets/pdf/330.pdf";
import {
  hideModal,
  register,
  counterIsFull,
  selectDownloadState,
  selectRegisterState,
  selectListRegisterState,
} from "../../../redux/modal.slice";
import { useTranslation } from "react-i18next";
const CustomInput = ({
  icon,
  placeholder,
  type,
  name,
  id,
  value,
  onChange,
  error,
}) => {
  return (
    <>
      <div className="border-b-[1px] border-black px-4 py-3 flex">
        {icon}
        <input
          type={type}
          className="bg-transparent px-2 w-full outline-none"
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          value={value}
        />
      </div>
      {error && (
        <p className="text-smaller text-red-700">Please Enter A Valid Email</p>
      )}
    </>
  );
};

const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();
  const downloadState = useSelector(selectDownloadState);
  const registerState = useSelector(selectRegisterState);
  const listRegister = useSelector(selectListRegisterState);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5wdnu6j",
        "template_slqqcpm",
        form.current,
        "sxh5TJan60LQqD6Sw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(form.current);
    try {
      let sameEmail = listRegister.find((element) => {
        return element.email == form.current.email.value;
      });
      let samePhone = listRegister.find((element) => {
        return element.phone == form.current.phone.value;
      });

      if (!sameEmail && !samePhone) {
        const response = await fetch(
          "https://hooks.zapier.com/hooks/catch/12792925/3mulj3d/",
          {
            method: "POST",
            body: formData,
            "Content-Type": "multipart/form-data",
          }
        );
        const result = response.json();
        console.log("Success:", result);
        sendEmail(e);
        if (downloadState && registerState) {
          let alink = document.createElement("a");
          alink.href = Brochure;
          alink.download = "BrochurePdf.pdf";
          alink.click();
        }
        dispatch(register());
        dispatch(counterIsFull());
        dispatch(hideModal());
        navigate("/thankyou");
      } else {
        alert("We Already Have a registration with this data");
      }
    } catch (error) {
      console.error("Error here:", error);
    }
  };
  function handleChangeEmail(e) {
    setEmailError("");
    setEmail(e.target.value);
    let EmailRegExp;
    EmailRegExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(e.target.value);

    if (!EmailRegExp) {
      setEmailError("Email Is Not Valid");
    }
  }
  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex flex-col justify-between items-stretch h-full space-y-8"
    >
      <CustomInput
        icon={<MdPerson className="text-black text-big" />}
        placeholder={t("formFullName")}
        type="text"
        name="fullName"
        id="fullName"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />

      <CustomInput
        icon={<MdMail className="text-black text-big" />}
        placeholder={t("formEmail")}
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleChangeEmail}
        error={Boolean(emailError)}
      />
      <PhoneInput
        country={"ae"}
        placeholder={t("formPhoneNumber")}
        enableSearch={true}
        inputProps={{
          name: "phone",
          id: "phone",
          required: true,
        }}
        onChange={setPhone}
        containerClass="!border-b-[1px] border-black px-1 flex "
        inputClass={`!bg-transparent !w-full !text-lg !h-full !border-none  ${
          i18n.language == "en" ? "px-0" : "mx-10"
        } !outline-none`}
        buttonClass={`!border-none !text-lg `}
        buttonStyle={{ direction: "ltr" }}
        inputStyle={{
          direction: "ltr",
        }}
      />
      <button
        className="bg-[#222222] text-white text-small w-full py-4 disabled:bg-slate-400 "
        disabled={
          email.replace(/ /g, "") == "" ||
          Boolean(emailError) ||
          fullName.replace(/ /g, "") == "" ||
          phone.length < 12
        }
      >
        {t("register")}
      </button>
    </form>
  );
};

export default RegisterForm;
