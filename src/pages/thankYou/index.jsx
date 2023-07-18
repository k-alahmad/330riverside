import React, { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const ThankYou = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const navigateAuto = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigateAuto("/");
    }, 4000);
  }, []);
  return (
    <div className="flex flex-col space-y-4 p-4 items-center justify-center w-full h-screen bg-">
      <BsFillCheckCircleFill color="green" size={100} />
      <p className="flex text-center text-huge font-bold">
        Thank You for Registering!
      </p>
      <p>This page will auto redirect to home after 4 seconds ...</p>
      <button
        className="w-[150px] h-auto rounded-lg text-lg font-bold p-4 bg-blue-600"
        onClick={handleClick}
      >
        Go To Home
      </button>
    </div>
  );
};

export default ThankYou;
