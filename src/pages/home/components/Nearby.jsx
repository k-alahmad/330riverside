import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { nearbyData } from "../../../data/nearbyData";
import { motion } from "framer-motion";
import NearbyContainer from "./NearbyContainer";
import NearbyItemsSlider from "./NearbyItemsSlider";

const Nearby = () => {
  const { i18n, t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <NearbyContainer>
      <div
        className="text-white lg:grid lg:grid-cols-12 h-full"
        dir={i18n.language == "en" ? "ltr" : "rtl"}
      >
        <div
          className="lg:px-10 xl:px-16 col-span-5 py-7 max-lg:px-8"
          dir={i18n.language == "en" ? "ltr" : "rtl"}
        >
          <p className="font-bold text-huge">{t("nearbyTitle")}</p>
          <p className="text-white/60 font-light text-small">
            {t("nearbySubTitle")}
          </p>
          <div className="py-5 lg:py-16 flex justify-center items-center">
            <NearbyItemsSlider
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
        </div>
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="col-start-6 col-span-7"
        >
          <img
            src={nearbyData[selectedIndex].img}
            alt="Nearby Image"
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </NearbyContainer>
  );
};

export default Nearby;
