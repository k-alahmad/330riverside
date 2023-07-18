import React, { useEffect, useState } from "react";
import Nearby from "./components/Nearby";
import FloorPlan from "./components/FloorPlan";
import PaymentPlan from "./components/PaymentPlan";
import Location from "./components/Location";
import Header from "./components/Header";
import RegisterModal from "./components/RegisterModal";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/modal.slice";
import HeaderSlider from "./components/HeaderSlider";
import HeaderSlidingText from "./components/HeaderSlidingText";
import Register from "./components/Register";
import useWindowDimensions from "../../hooks/screenDimentions";

const Home = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const [w, setW] = useState(width);
  useEffect(() => {
    if (width !== w) {
      window.location.reload();
    }
    setW(width);
  }, [width]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(showModal());
    }, 10000);
  }, []);
  return (
    <>
      <div id="home" />
      <HeaderSlider />
      <Header />
      <HeaderSlidingText />
      <div id="payment" />
      <PaymentPlan />
      <div id="floorPlan" />
      <FloorPlan />
      <div id="nearby" />
      <Nearby />
      <div id="location" />
      <Location />
      <div id="contactus" />
      <Register />
      <RegisterModal />
    </>
  );
};

export default Home;
